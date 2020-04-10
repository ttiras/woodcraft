import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import { useAuthState } from "../auth/auth-context";



function SecuredRoute(props) {
    const state = useAuthState()
  const {component: Component, path} = props;
  return (
    <Route path={path} render={() => {
        if (!state.isAuthenticated) {
          props.history.push('/login-register')
          return <div></div>;
        }
        return <Component />
    }} />
  );
}

export default withRouter(SecuredRoute);