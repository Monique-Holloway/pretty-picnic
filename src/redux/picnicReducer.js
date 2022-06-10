import { ACTION_SET_OCCASION, ACTION_SET_COLOR, ACTION_SET_GUEST} from './actionTypes'


const initialState = {
    occasion:'',
    color:'',
    guests: 0,
}

const picnicReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_SET_OCCASION: {
            const { occasion } = action.payload
            return {
                ...state,
                occasion: occasion
            }
        }
        case ACTION_SET_COLOR: {
            const { color } = action.payload
            return {
                ...state,
                color: color
            }
        }
        case ACTION_SET_GUEST: {
            const { guests } = action.payload
            return {
                ...state,
                guests: guests
            }
        }
        default:
            return state
    }
}


export default picnicReducer