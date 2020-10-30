import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../../App';

const PrivateRoute = ({children, ...rest}) => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    var token = sessionStorage.getItem('token');
    return (
        <Route
        {...rest}
        render={({ location }) =>
          loggedInUser.email || token ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;