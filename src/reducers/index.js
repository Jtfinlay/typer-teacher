const initialState = {
    activeLesson: 'basic',
    lessons: {
        'basic': {
            plaintext: 'hi ya sir',
            words: [
                {
                    id: 'word1',
                    letters: [ 'l1', 'l2' ]
                },
                {
                    id: 'space1',
                    letters: [ 'l3' ]
                },
                {
                    id: 'word2',
                    letters: [ 'l4', 'l5' ]
                },
                {
                    id: 'space2',
                    letters: [ 'l6' ]
                },
                {
                    id: 'word3',
                    letters: [ 'l7', 'l8', 'l9' ]
                }
            ],
            letters: [
                {
                    id: 'l1',
                    value: 'h'
                },
                {
                    id: 'l2',
                    value: 'i'
                },
                {
                    id: 'l3',
                    value: ' '
                },
                {
                    id: 'l4',
                    value: 'y'
                },
                {
                    id: 'l5',
                    value: 'a'
                },
                {
                    id: 'l6',
                    value: ' '
                },
                {
                    id: 'l7',
                    value: 's'
                },
                {
                    id: 'l8',
                    value: 'i'
                },
                {
                    id: 'l9',
                    value: 'r'
                }
            ]
            
        }
    }
};

function updateObjectInArray(array, targetIndex, newValue) {
    return array.map( ( item, index ) => {
        if (index !== targetIndex) {
            return item;
        }
        return {
            ...item,
            ...newValue
        }
    });
}

function lessonReducer(state, action) {
    if (state === undefined) {
        return initialState;
    }

    switch (action.type) {
        case 'KEY_PRESSED': {
            const text = state.lessons[ state.activeLesson.id ].text;
            const latestIndex = state.activeLesson.history.findIndex(h => h.status === undefined);
            const result = text[ latestIndex ] === action.key
                ? 'right' : 'wrong';
            const historyValue = { letter: text[ latestIndex ], status: result };

            return {
                ...state,
                activeLesson: {
                    ...state.activeLesson,
                    history: updateObjectInArray(state.activeLesson.history, latestIndex, historyValue)
                }
            }

            const newState = { ...state };
            newState.activeLesson.history[ latestIndex ].status = result;
            return newState;
        }
        default:
            return state;
    }
}

export default lessonReducer;