import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const header = () => (
    <header className="navbar">
        <ul>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/train">Get Started</Link></li>
        </ul>
    </header>
)
export default header;