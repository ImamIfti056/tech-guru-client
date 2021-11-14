import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoading} = useAuth();
    if(isLoading){
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    return (
        <Route
            {...rest}
            render = {({location}) => user.email ? children : <Redirect
            to={{
                pathname: '/login',
                state: {from: location}
            }}
            ></Redirect>}
        >
            
        </Route>
    );
};

export default PrivateRoute;