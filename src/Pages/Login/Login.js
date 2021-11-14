import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import useAuth from '../../hook/useAuth';

const Login = () => {

    const [isLoading, setIsLoading] = useState(true);

    const { signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(res => {
            history.push(redirect_uri)
        })
        .catch(error => console.log(error.message))
        .finally(() => setIsLoading(false))
    }

    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleGoogleLogin}>Google Login</button>
            <br />
            <Link to='/register'>New User?</Link>
        </div>
    );
};

export default Login;