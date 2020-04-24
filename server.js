const express = require("express");
const compression = require("compression");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const serviceAccount = require("./woodcraft-auth-41aa7-firebase-adminsdk-5z0jl-9e2713d9d9.json");
const path = require("path");
const app = express();
const Iyzipay = require("iyzipay");
const { request } = require("graphql-request");

app.use(bodyParser.json());

app.use(compression());
app.use(express.static(path.join(__dirname, "build")));
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Accept");
  next();
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://woodcraft-auth-41aa7.firebaseio.com/",
  });
}

const setFirebaseAuthJWTClaims = (user) => {
  const customClaims = {
    "https://hasura.io/jwt/claims": {
      "x-hasura-default-role": "user",
      "x-hasura-allowed-roles": ["user", "anonymous"],
      "x-hasura-user-id": user.uid,
    },
  };
  return admin
    .auth()
    .setCustomUserClaims(user.uid, customClaims)
    .then(() => {
      console.log("claims updated");
      // Update real-time database to notify client to force refresh.
      const metadataRef = admin.database().ref("metadata/" + user.uid);
      // Set the refresh time to the current UTC timestamp.
      // This will be captured on the client to force a token refresh.
      return metadataRef.set({ refreshTime: new Date().getTime() });
    })
    .catch((error) => {
      console.log(error);
    });
};

app.post("/claims", function (req, res) {
  setFirebaseAuthJWTClaims(req.body.user);
  res.send(200);
});

const iyzipay = new Iyzipay({
  apiKey: "sandbox-kItYZYkAbb0hmLBWWC9ZxE9HIEfaLPKl",
  secretKey: "sandbox-MhaWiZK4ACp3ovrBSm3MFfUP5bnnIAKi",
  uri: "https://sandbox-api.iyzipay.com",
});

var token = 1234;

app.post("/", function (req, res) {
  iyzipay.checkoutFormInitialize.create(req.body, function (err, result) {
    token = result.token;
    res.send(result);
  });
});

app.post("/payments", function (req, res) {
  console.log("req", req);
  iyzipay.checkoutForm.retrieve(
    {
      locale: Iyzipay.LOCALE.TR,
      token: token,
    },
    function (err, result) {
      console.log(err, result);
      if (err) {
        res.redirect(err);
      }
      if (result.paymentStatus === "SUCCESS") {
        const variables = {
          payment: {
            amount: result.price,
            binNumber: result.binNumber,
            installments: result.installment,
            fraudStatus: result.fraudStatus,
            iyziCommissionFee: result.iyziCommissionFee,
            iyziCommissionRateAmount: result.iyziCommissionRateAmount,
            lastFourDigits: result.lastFourDigits,
            mdStatus: result.mdStatus,
            order_id: result.basketId,
            paidPrice: result.paidPrice,
            paymentId:result.paymentId,
            token: result.token,
            itemTransactions: {data: result.itemTransactions.map((item)=>({
              itemId: item.itemId, paidPrice: item.paidPrice, paymentTransactionId: item.paymentTransactionId, price: item.price
            }))
              
          },
        }}
        const gql = `mutation addPayment(
  $payment: [payments_insert_input!]!
) {
  insert_payments(
    objects: $payment
  ) {
    affected_rows
  }
}`;
        request("https://woodcraft.herokuapp.com/v1/graphql", gql, variables)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        res.redirect(`http://localhost:3000/order/${result.basketId}`);
      }
    }
  );
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
