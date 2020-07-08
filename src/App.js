import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import { loadLanguages } from "redux-multilanguage";

import  { request } from 'graphql-request';

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { save, load } from "redux-localstorage-simple";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { fetchProducts } from "./redux/actions/productActions";
import rootReducer from "./redux/reducers/rootReducer";

import { ToastProvider } from "react-toast-notifications";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import { useAuthState, useAuthDispatch } from "./auth/auth-context";

import fire from "./auth/firebase";
import Routers from "./Routers";

import ApolloClient from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";

import queryProducts from './graphql/requestProductsQuery'

import { WebSocketLink } from "apollo-link-ws";
import { createHttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";

import SINGLE_USER from "./graphql/GetUser";

const App = props => {
  const state = useAuthState()
  const dispatch = useAuthDispatch();
  const [token, setToken] = useState(null)
  

  useEffect(() => {
    store.dispatch(
      loadLanguages({
        languages: {
          en: require("./translations/english.json"),
          fn: require("./translations/french.json"),
          de: require("./translations/germany.json")
        }
      })
    );
  });

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: "LOGIN",
          payload: user,
        });
        setTimeout(() => {
          user.getIdTokenResult(true).then((result) => {
            setToken(result.token)            
          });
        }, 1000); 
      } else {
        dispatch({
          type: "LOGIN",
          payload: null,
        });
      }
    });
  }, [dispatch]);

  const store = createStore(
    rootReducer,
    load(),
    composeWithDevTools(applyMiddleware(thunk, save()))
  );

  const wsurl = process.env.REACT_APP_DB_WSS;
  const httpurl = process.env.REACT_APP_DB_HTTP;
  
  request(httpurl, queryProducts).then(async data => await store.dispatch(fetchProducts(data.products))).catch((err)=>{})

  const authLink = setContext((_, { headers }) => {
    const accessToken = token
    if (token) {
      return {
        headers: {
          ...headers,
          "x-hasura-role": state.role === 'MANAGER' ? 'manager' : '',
          authorization: `Bearer ${accessToken}`,
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
          "x-hasura-role": state.role === 'MANAGER' ? 'manager' : '',
          Authorization: `Bearer ${token}`,
        },
      },
    },
  });

  const httpLink = createHttpLink({
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
  
  if(state.user&& state.user.providerData[0]&& state.user.providerData[0].providerId === "password" ){
    client
    .query({
      query: SINGLE_USER,
      variables: {id: state.user.uid}
    })
    .then((result) => {
      if(!state.role)
      dispatch({
        type: 'ROLE',
        payload:result.data.users[0].role})
    }).catch(err=>{})}
  
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ToastProvider placement='bottom-right'>
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
