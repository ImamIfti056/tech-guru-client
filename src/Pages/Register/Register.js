import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h3>Register</h3>
            <form>
                <input type="email" name="" id="" />
                <br />
                <input type="password" name="" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <Link to='/login'>Already Registered?</Link>
        </div>
    );
};

export default Register;