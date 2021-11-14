import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

const Navbar = () => {

    const {user, logOut} = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-light py-4 bg-primary sticky-top">
            <div className="container-fluid">
                <div className="mx-5 w-25"><Link className="fw-bold navbar-brand" to="/home">Tech Guru</Link></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" to="/review">Review</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dashboard
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" to="/">Action</Link></li>
                                <li><Link className="dropdown-item" to="/">Another action</Link></li>
                                <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                            </ul>
                        </li>
                        {user.email && <li className="nav-item">
                        <span className="nav-link active">User: <span className="fw-bold">{user.displayName}</span></span>
                        </li>}                        
                        {!user.email && <li className="nav-item">
                        <Link className="nav-link active" to="/login">Login</Link>
                        </li>}                        
                        {user.email && <li className="nav-item">
                        <button className="nav-link active btn btn-outline-danger" onClick={logOut}>LogOut</button>
                        </li>}                        
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;