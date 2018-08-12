const initialState = {
    activeLesson: {
        id: 'basic',
        history: [/*{letter: 'p', status: 'right'}, {letter: 'o'}, ... */]
    },
    lessons: {
        'basic': { 
            text: 'populous scudded'
        }
    }
};

initialState.activeLesson.history = [ ...initialState.lessons[ 'basic' ].text ].map(l => { return { letter: l } });

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