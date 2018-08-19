import React, { Component } from 'react';
import logo from '../../logo.svg';
import './main.scss';
import Keyboard from '../keyboard';

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <header className="Main-header">
                    <h1 className="Main-title">Learn Typing, free!</h1>
                    <Keyboard />
                </header>
            </div>
        );
    }
}

export default Main;
