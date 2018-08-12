import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './board.scss';

class Board extends Component {

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyboardEvent.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyboardEvent);
    }

    renderWord(word, wordIndex) {
        if (/\s/.test(word)) {
            return (<div key={ wordIndex } className="whitespace letter">{word}</div>);
        } else {
            return (
                <div key={ wordIndex } className="word">
                    {[ ...word ].map((letter, i) => (
                        <div key={ wordIndex+'-'+i } className="letter">{letter}</div> // eslint-disable-line react/no-array-index-key
                    ))}
                </div>
            );
        }
    }
    
    render() {
        return (
            <div className="board">
                {this.props.words.map((word, index) => {
                    return this.renderWord(word, index);
                })}
            </div>
        );
    }

    handleKeyboardEvent(event) {
        this.props.keyPressed(event.key);
    }
}

Board.propTypes = {
    words: PropTypes.arrayOf(PropTypes.string).isRequired,
    history: PropTypes.arrayOf(PropTypes.string).isRequired,
    keyPressed: PropTypes.func.isRequired
};

export default Board;