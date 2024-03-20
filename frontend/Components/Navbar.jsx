import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => { 
    return (
        <nav style={{ position: 'fixed', top: 0, left: 0, right: 0 }}>
            <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'center' }}> {/* Add justifyContent here */}
                <li style={{ marginRight: '10px' }}>
                    <Link to="/login" style={{ color: '#95877a' }}>Login</Link>
                </li>
                <li style={{ marginRight: '10px' }}>
                    <Link to="/register" style={{ color: '#95877a' }}>Register</Link>
                </li>
                <li style={{ marginRight: '10px' }}>
                    <Link to="/profile" style={{ color: '#95877a' }}>Profile</Link>
                </li>
                <li style={{ marginRight: '10px' }}>
                    <Link to="/browse" style={{ color: '#95877a' }}>Browse</Link>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;
