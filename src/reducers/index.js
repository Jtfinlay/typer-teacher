import lessons from './lessons';

export function updateObjectInArray(array, targetIndex, newValue) {
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

const activeLessonReducer = (state, action) => {
    if (state.activeLesson === undefined) {
        return 'basic';
    }

    return state.activeLesson;
}

const mainReducer = (state = {}, action) => {
    const activeLesson = activeLessonReducer(state, action);
    return {
        ...state,
        activeLesson: activeLesson,
        [ activeLesson ]: lessons(state[ activeLesson ], action)
    }
}

export default mainReducer;