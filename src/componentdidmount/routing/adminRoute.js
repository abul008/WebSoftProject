import axios from 'axios';
import React, { Component, useEffect ,useState} from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { isAuth,getUserInfo } from '../helpers/auth';
// import { useSelector ,useDispatch } from 'react-redux';

const AdminRoute =  ({ component: Component, ...rest }) =>{ 

    return(
        <Route
        {...rest}
        render={props =>
        
            "admin" === "admin" ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/',
                        state: { from: props.location }
                    }}
                />
            )
        }
          ></Route>
    )

}

export default AdminRoute;