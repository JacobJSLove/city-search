import {
    GET_CITY,
    RESET
} from '../actions/types';


export default (state = [], action) => {
    switch (action.type) {
        case GET_CITY:
            {
                return [...state, action.payload];
            }
        case RESET:
            {
                return [];
            }
        default:
            return state;
    }
}