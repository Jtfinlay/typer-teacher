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

    // renderWord(word, wordIndex) {
    //     if (/\s/.test(word)) {
    //         return (<div key={ wordIndex } className="whitespace letter">{word}</div>);
    //     } else {
    //         return (
    //             <div key={ wordIndex } className="word">
    //                 {[ ...word ].map((letter, i) => (
    //                     <div key={ wordIndex+'-'+i } className="letter">{letter}</div> // eslint-disable-line react/no-array-index-key
    //                 ))}
    //             </div>
    //         );
    //     }
    // }
    
    render() {
        return (
            <div className="board">
                {this.props.text.map((item, index) => (
                    <div key={ index } className={ classNames({ // eslint-disable-line react/no-array-index-key
                        word: true,
                        'is-right': item.status === 'right',
                        'is-wrong': item.status === 'wrong'
                    }) }>
                        {item.letter}
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
    text: PropTypes.arrayOf(PropTypes.shape({
        letter: PropTypes.string.isRequired,
        status: PropTypes.string
    }).isRequired).isRequired,
    keyPressed: PropTypes.func.isRequired
};

export default Board;