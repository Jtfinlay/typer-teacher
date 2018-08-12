import React, { Component } from 'react';

import './board.scss';

class Board extends Component {

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyboardEvent);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyboardEvent);
    }
    
    render() {
        return (
            <div className="board">
                <div className="word">
                    <div className="letter is-right">p</div>
                    <div className="letter is-right">o</div>
                    <div className="letter is-right">p</div>
                    <div className="letter is-wrong">u</div>
                    <div className="letter is-right">l</div>
                    <div className="letter is-fixed">o</div>
                    <div className="letter is-right">u</div>
                    <div className="letter is-active">s</div>
                    <div className="letter">&nbsp;</div>
                    <div className="letter">s</div>
                    <div className="letter">c</div>
                    <div className="letter">u</div>
                    <div className="letter">d</div>
                    <div className="letter">d</div>
                    <div className="letter">e</div>
                    <div className="letter">d</div>
                </div>
            </div>
        );
    }

    handleKeyboardEvent(event) {
        console.log(event);
    }
}

export default Board;