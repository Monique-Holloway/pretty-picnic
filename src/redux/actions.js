import { ACTION_SET_OCCASION, ACTION_SET_COLOR, ACTION_SET_GUEST} from './actionTypes'

export const actionSetOccasion= (occasion) => {
    return {
        type: ACTION_SET_OCCASION,
        payload: {occasion}
    }
};

export const setColorScheme= (color) => {
    return {
        type: ACTION_SET_COLOR,
        payload: {color}
    }
};

export const setGuestNumber= (number) => {
    return {
        type: ACTION_SET_GUEST,
        payload: {number}
    }
};