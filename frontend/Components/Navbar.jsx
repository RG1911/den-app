import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => { 
    return (
        <nav style={{ position: 'fixed', top: 0, left: 0, right: 0 }}>
            <ul style={{ display: 'flex', listStyle: 'none' }}>
                <li style={{ marginRight: '10px' }}>
                    <Link to="/login" style={{ color: 'black' }}>Login</Link>
                </li>
                <li style={{ marginRight: '10px' }}>
                    <Link to="/profile" style={{ color: 'white' }}>Profile</Link>
                </li>
                <li style={{ marginRight: '10px' }}>
                    <Link to="/browse" style={{ color: 'white' }}>Browse</Link>
                </li>
                <li style={{ marginRight: '10px' }}>
                    <Link to="/register" style={{ color: 'white' }}>Register</Link>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;

