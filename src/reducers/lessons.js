import { KEY_PRESSED } from '../constants/actionTypes';
import { updateObjectInArray } from './index';
import initialState from './initialState';

const wordReducer = (state, word) => {
    const letterIndex = word.letters.findIndex(l => state.letters[ l ].status === undefined);

    return updateObjectInArray(
        state.words,
        state.words.indexOf(word),
        { 
            ...currentWord,
            status: (letterIndex >= currentWord.letters.length - 1) ? 'complete' : undefined
        });
}

const letterReducer = (state, action, letter) => {
    return updateObjectInArray(
        state.letters,
        state.letters.indexOf(letter),
        {
            ...letter,
            status: (action.key === letter.value) ? 'right' : 'wrong'
        }
    );
}

const lessonReducer = (state, action) => {
    if (state === undefined) {
        return initialState;
    }

    switch (action.type) {
        case KEY_PRESSED: {
            const currentWord = state.words.find(w => w.status === undefined);
            const letterIndex = currentWord.letters.findIndex(l => state.letters[ l ].status === undefined);
            const currentLetter = state.letters[ letterIndex ];
        
            return {
                words: wordReducer(state, currentWord),
                letters: letterReducer(state, action, currentLetter)
            };
        }
        default:
            return state;
    }
}

export default lessonReducer;