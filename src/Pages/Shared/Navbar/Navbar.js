import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

const Navbar = () => {

    const {user, logOut} = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-light py-4 bg-dark sticky-top">
            <div className="container-fluid">
                <div className="mx-5 w-25"><Link className="fw-bold fs-3 text-white navbar-brand" to="/home">Tech Fest</Link></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link active text-white" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link  text-white" to="/products">Products</Link>
                        </li>
                        { user.email && <li className="nav-item dropdown">
                            <Link className="nav-link active dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dashboard
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" to="/pay">Pay</Link></li>
                                <li><Link className="dropdown-item" to="/myorders">My Orders</Link></li>
                                <li><Link className="dropdown-item" to="/review">Review</Link></li>
                                <li><button onClick={logOut} className="dropdown-item">Logout</button></li>
                            </ul>
                        </li>}
                        {user.email && <li className="nav-item">
                        <span className="nav-link active text-white">User: <span className="fw-bold text-success">{user.displayName}</span></span>
                        </li>}                        
                        {!user.email && <li className="nav-item">
                        <Link className="nav-link active text-white" to="/login">Login</Link>
                        </li>}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;