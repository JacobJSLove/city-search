import {
    GET_MESURMENTS
} from '../actions/types';


export default (state = [], action) => {
    switch (action.type) {
        case GET_MESURMENTS:
            {
                return action.payload;
            }
        default:
            return state;
    }
}