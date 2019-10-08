import openAq from '../api/openAq';
import wiki from '../api/wiki';
import _ from 'lodash';
import {
    GET_MESURMENTS,
    GET_CITY,
    RESET
} from './types';

export const getCitiesAndDescriptions = () => async (dispatch, getState) => {
    // Clear store
    dispatch({
        type: RESET,
        payload: ''
    });
    // Call getMesurments
    await dispatch(getMesurments());
    _.chain(getState().mesurments)
        .map('city') // map city
        .uniq() // only uniqe city's
        .slice(0, 10) // only first ten
        .forEach((city, index) => dispatch(
            getCity({
                city: city,
                id: index
            })
        )) // call fetch for uniq city's
        .value(); // Start chain
};

export const getMesurments = () => async dispatch => {
    const response = await openAq.get('measurements?country=PL&order_by=value&sort=desc&parameter=pm25');
    dispatch({
        type: GET_MESURMENTS,
        payload: response.data.results
    });
};

export const getCity = ({ city, id }) => async dispatch => {
    const response = await wiki.get(`api.php?format=json&origin=*&action=query&prop=description&titles=${city}&redirects=true`);
    const description = response.data.query.pages[Object.keys(response.data.query.pages)[0]].description;
    dispatch({
        type: GET_CITY,
        payload: {
            id: id,
            name: city,
            desc: description
        }
    });
};