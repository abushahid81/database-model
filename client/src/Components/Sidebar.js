import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div style={{ width: '200px', height: '100vh', backgroundColor: '#f0f0f0', padding: '20px' }}>
            <h2>My Dashboard</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/Product">Product</Link></li>
                <li><Link to="/Contact">Contact Us</Link></li>
                <li><Link to="/Form">Form</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
