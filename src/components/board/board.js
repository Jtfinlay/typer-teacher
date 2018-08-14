import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './board.scss';

class Board extends Component {

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyboardEvent.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyboardEvent);
    }

    renderWord(letter) {
        var isWhitespace = letter === ' ';
        var { id, status, value } = letter;
        return (
            <div key={ id } className={ classNames({
                letter: true,
                whitespace: isWhitespace,
                'is-right': status === 'right',
                'is-wrong': status === 'wrong'
            }) }>
                { value }
            </div>
        )
    }
    
    render() {
        return (
            <div className="board">
                {[ ...this.props.lesson.words ].map(word => (
                    <div key={ word.id } className="word">
                        {[ ...word.letters ].map(lid => 
                            this.renderWord(this.props.lesson.letters.find(l => l.id === lid))
                        )}
                    </div>
                ))}
            </div>
        );
    }

    handleKeyboardEvent(event) {
        this.props.keyPressed(event.key);
    }
}

Board.propTypes = {
    lesson: PropTypes.shape({
        words: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            letters: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
        }).isRequired).isRequired,
        letters: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            status: PropTypes.string
        }).isRequired).isRequired
    }).isRequired,
    keyPressed: PropTypes.func.isRequired
};

export default Board;