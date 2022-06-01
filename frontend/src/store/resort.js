import { csrfFetch } from "./csrf";

const SET_RESORTS = 'resorts/ALL';
const SET_SINGLE = 'resort/ONE';

//ACTIONS
const setResorts = (resorts) => {
    return {
        type: SET_RESORTS,
        payload: resorts
    }
};


const setSingle = (resort) => {
    return {
        type: SET_SINGLE,
        payload: resort
    }
}

//THUNKERS
export const loadResorts = () => async (dispatch) => {
    const response = await csrfFetch('/api/resorts/all');
    const data = await response.json();
    dispatch(setResorts(data));
    return response;
};

export const getResort = (id) => async (dispatch) => {
    console.log('got in reducer')
    const response = await csrfFetch(`/api/resorts/${id}`);
    const data = await response.json();
    console.log('THIS IS DATA', data)
    dispatch(setSingle(data));
    return response
};

//REDUCERS
const initialState = { resorts: null};
const resortReducer = (state= initialState, action) => {
    let newState;
    switch(action.type){
        case SET_RESORTS:
            newState = Object.assign({}, state);
            newState.resorts = action.payload;
            return newState;
        case SET_SINGLE:
            newState = Object.assign({}, state);
            newState.singleResort = action.payload;
            return newState;
        default:
            return state;
    }
};

export default resortReducer;
