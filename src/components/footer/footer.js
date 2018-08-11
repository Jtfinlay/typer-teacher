import React from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';

const footer = () => (
    <footer className='footer'>
        <div className='container'>
            <ul>
                <li><a href="https://github.com/Jtfinlay/typer-teacher">Github</a></li>
                <li><a href="https://twitter.com/JtFinlay">Twitter</a></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <p>
                Designed and built with ❤ by <a href="https://twitter.com/JtFinlay">@JtFinlay</a>.
            </p>
            <p>
                Code licensed <a href="https://github.com/Jtfinlay/typer-teacher/blob/master/LICENSE">MIT</a>.
            </p>
        </div>
    </footer>
);
export default footer;