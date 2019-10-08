import { combineReducers } from 'redux';
import mesurmentsReducer from './mesurmentsReducer';
import citiesReducer from './citiesReducer';

export default combineReducers({
    mesurments: mesurmentsReducer,
    city: citiesReducer
});