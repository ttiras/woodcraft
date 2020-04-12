import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { save, load } from "redux-localstorage-simple";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { fetchProducts } from "./redux/actions/productActions";
import rootReducer from "./redux/reducers/rootReducer";

import { ToastProvider } from "react-toast-notifications";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import { useAuthDispatch } from "./auth/auth-context";

import fire from "./auth/firebase";
import Routers from "./Routers";

import ApolloClient from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import GET_PRODUCTS from "./graphql/GetProducts";

import { WebSocketLink } from "apollo-link-ws";
import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";

const App = (props) => {
  const [accessToken, setAccessToken] = useState("");
  const dispatch = useAuthDispatch();

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      console.log("onauthchangecalled", user);
      if (user) {
        dispatch({
          type: "LOGIN",
          payload: user,
        });
        try {
          fire
            .firestore()
            .collection("users")
            .doc(user.uid)
            .get()
            .then((respond) => {
              if (respond) {
                const user = respond.data();
                if(user){
                  dispatch({
                    type: "LOGIN",
                    payload: user,
                  });
                }                
              }
            });
          user.getIdTokenResult(true).then((result) => {
            const token = result.token;
            console.log(token);
            setAccessToken(token);
            dispatch({
              type: "AUTHENTICATE",
              payload: true,
            });
          });
        } catch (err) {
          console.log("app", err);
        }
      } else {
        dispatch({
          type: "LOGIN",
          payload: null,
        });
        dispatch({
          type: "AUTHENTICATE",
          payload: false,
        });
      }
    });
  }, [dispatch]);

  const store = createStore(
    rootReducer,
    load(),
    composeWithDevTools(applyMiddleware(thunk, save()))
  );

  const wsurl = "https://woodcraft.herokuapp.com/v1/graphql";
  const httpurl = "https://woodcraft.herokuapp.com/v1/graphql";

  const authLink = setContext((_, { headers }) => {
    const token = accessToken;
    if (token) {
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      };
    } else {
      return {
        headers: {
          ...headers,
        },
      };
    }
  });

  const wsLink = new WebSocketLink({
    uri: wsurl,
    options: {
      reconnect: true,
      lazy: true,
      connectionParams: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    },
  });

  const httpLink = new HttpLink({
    uri: httpurl,
  });

  const link = split(
    // split based on operation type
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return kind === "OperationDefinition" && operation === "subscription";
    },
    wsLink,
    authLink.concat(httpLink)
  );

  const client = new ApolloClient({
    link,
    credentials: "include",
    cache: new InMemoryCache(),
  });

  client
    .query({
      query: GET_PRODUCTS,
    })
    .then((result) => {
      store.dispatch(fetchProducts(result.data.products));
    });

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ToastProvider placement='top-right'>
          <BreadcrumbsProvider>
            <Routers />
          </BreadcrumbsProvider>
        </ToastProvider>
      </ApolloProvider>
    </Provider>
  );
};

App.propTypes = {
  dispatch: PropTypes.func,
};

export default App;
