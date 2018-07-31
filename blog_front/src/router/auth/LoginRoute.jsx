import React from "react";
import { _getToken } from 'base/js/cookie'
import {
  HashRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

const LoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      _getToken()? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/extra/login",
            state: { from: props.location.pathname }
          }}
        />
      )
    }
  />
);
export default withRouter(LoginRoute);


