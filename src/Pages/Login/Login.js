import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import React, {useState} from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const Login = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const { signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    // GOOGLE SIGN IN
    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(res => {
            history.push(redirect_uri)
        })
        .catch(error => console.log(error.message))
        .finally(() => setIsLoading(false))
    }
    
    
    // handle login
    const handleLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(result => console.log(result.user))
        .catch(error => setError(error.message))
    }


    return (
        <div className='container'>
            <h2 className='my-4 text-center text-primary'>Login</h2>
            <hr/>
            <form onSubmit={handleLogin} className='w-50 mx-auto'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" onBlur={handleEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" onBlur={handlePassword} class="form-control" id="exampleInputPassword1" />
                </div>
                <div className='text-danger'>{error}</div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

            <div className='my-4 w-50 mx-auto'>
                <button className='btn btn-outline-success' onClick={handleGoogleLogin}>Continue with Google</button>
                <br />
                <Link to='/register'>New User?</Link>
            </div>
        </div>
    );
};

export default Login;