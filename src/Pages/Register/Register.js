import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();

    const handleName = e => {
        setName(e.target.value);
    }
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleRegister = e => {
        e.preventDefault();
        // creating new user
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError("Registration completed!")
        })
        .catch(error => setError(error.message))
        
    }

    return (
        <div className='container'>
            <h2 className='my-4 text-center text-primary'>Register</h2>
            <hr/>
            <form onSubmit={handleRegister} className='w-50 mx-auto'>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" onBlur={handleName} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" onBlur={handleEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" onBlur={handlePassword} className="form-control" id="exampleInputPassword1" required />
                </div>
                <div className='text-danger'>{error}</div>
                <button type="submit" className="btn btn-primary">Register</button>
                <br/>
                <Link to='/login'>Already Registered?</Link>
            </form>
        </div>
    );
};

export default Register;