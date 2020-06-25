import firebase from "firebase";
import fire from "./../auth/firebase";
import axios from "axios";

const providerG = new firebase.auth.GoogleAuthProvider();
const providerF = new firebase.auth.FacebookAuthProvider();
const providerT = new firebase.auth.TwitterAuthProvider();

export const anonymousLogin = async () => {
  await fire
    .auth()
    .signInAnonymously()
    .then(function (result) {
      const user = result.user;
      axios
        .post("https://backend.rover.micota.com.tr/claims", { user })
        .then(() => {
          return;
        })
        .catch((err) => {
          return err;
        });
    });
};

export const socialLogin = (value) => {
  let provider;
  if (value === "t") provider = providerT;
  if (value === "g") provider = providerG;
  if (value === "f") provider = providerF;

  fire
    .auth()
    .signInWithPopup(provider)
    .then(async function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // The signed-in user info.
      const user = result.user;
      await axios.post("https://backend.rover.micota.com.tr/claims", { user });
    })
    .catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      return (errorCode, errorMessage, email, credential);
    });
};
