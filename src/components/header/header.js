import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const header = () => (
    <header className="navbar">
        <div className="logo">
            <h1>Typing</h1>
        </div>
        <ul>
            <li className="active"><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/train">Get Started</Link></li>
        </ul>
    </header>
);
export default header;