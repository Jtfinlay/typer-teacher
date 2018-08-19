import { KEY_PRESSED } from '../constants/actionTypes';
import { updateObjectInArray } from './index';
import initialState from './initialState';

const letterById = (state, id) => state.letters.find(l => l.id === id);

const findCurrentLetter = (state, word) => {
    if (!word.letters) {
        return null;
    }

    const letterId = word.letters.find(id => letterById(state, id).status === undefined)
    if (letterId === undefined) {
        return null;
    }
    return letterById(state, letterId);
}

const wordReducer = (state, word) => {
    const letterIndex = word.letters.findIndex(i => i === findCurrentLetter(state, word).id);

    return updateObjectInArray(
        state.words,
        state.words.indexOf(word),
        { 
            ...word,
            status: (letterIndex >= (word.letters.length - 1)) ? 'complete' : undefined
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
            const currentLetter = findCurrentLetter(state, currentWord);;
        
            const result = {
                words: wordReducer(state, currentWord),
                letters: letterReducer(state, action, currentLetter)
            };

            result.complete = !result.words.find(w => w.status === undefined);
            return result;
        }
        default:
            return state;
    }
}

export default lessonReducer;