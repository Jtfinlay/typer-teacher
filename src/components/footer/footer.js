import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';

const footer = () => (
    <footer class='footer'>
        <div className='container'>
            <ul>
                <li><Link to="https://github.com/Jtfinlay/typer-teacher">Github</Link></li>
                <li><Link to="https://twitter.com/JtFinlay">Twitter</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <p>
                Designed and built with ❤ by <Link to="https://twitter.com/JtFinlay">@JtFinlay</Link>.
            </p>
            <p>
                Code licensed <Link to="https://github.com/Jtfinlay/typer-teacher/blob/master/LICENSE">MIT</Link>.
            </p>
        </div>
    </footer>
);
export default footer;