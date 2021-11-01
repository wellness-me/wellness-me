import React from "react"
import { Redirect, Route } from "react-router-dom";
import Cookies from "universal-cookie";

function ProtectedRoute({ component: Component, ...restOfProps }) {
    // search for auth token in cookies, and if it's set then we continue
    // to the page they want, else we redirect to the login screen
    const cookies = new Cookies();
    
    const token = cookies.get("token")
    console.log(token);
  
    return (
      <Route
        {...restOfProps}
        render={(props) =>
            token ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    );
  }
  
  export default ProtectedRoute;
