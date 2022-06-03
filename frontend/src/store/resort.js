import { csrfFetch } from "./csrf";

const SET_RESORTS = 'resorts/ALL';
const SET_SINGLE = 'resort/ONE';
const SET_HOST_RESORTS = 'resort/host/ALL'

//ACTIONS
const setResorts = (resorts) => {
    return {
        type: SET_RESORTS,
        payload: resorts
    }
};

const setHostResorts = (resorts) => {
    return {
        type: SET_HOST_RESORTS,
        payload: resorts
    }
}

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

export const loadHostResorts = (id) => async (dispatch) => {
    console.log('GOT INTO HOST RESORT');
    const response = await csrfFetch(`/api/resorts/host/${id}`);
    const data = await response.json();
    dispatch(setHostResorts(data));
    return response;
}

export const getResort = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/resorts/${id}`);
    const data = await response.json();
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
        case SET_HOST_RESORTS:
            newState = Object.assign({}, state);
            newState.hostResorts = action.payload;
            return newState;
        default:
            return state;
    }
};

export default resortReducer;
