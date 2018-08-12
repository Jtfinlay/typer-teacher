const initialState = {
    activeLesson: {
        id: 'basic',
        history: []
    },
    lessons: {
        'basic': { 
            text: 'populous scudded'
        }
    }
};

function lessonReducer(state, action) {
    if (state === undefined) {
        return initialState;
    }

    switch (action.type) {
        case 'KEY_PRESSED': {
            const text = state.lessons[ state.activeLesson.id ].text;
            const result = text[ state.activeLesson.history.length ] === action.key
                ? 'right' : 'wrong';

            return {
                ...state,
                activeLesson: {
                    ...state.activeLesson,
                    history: state.activeLesson.history.concat(result)
                }
            };
        }
        default:
            return state;
    }
}

export default lessonReducer;