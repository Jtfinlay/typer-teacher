const initialState = {
    lessons: {
        'basic': { text: 'populous scudded' }
    }
};

function emptyReducer(state, action) {
    if (state === undefined) {
        return initialState;
    }

    return state;
}

export default emptyReducer;