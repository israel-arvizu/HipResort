import { csrfFetch } from "./csrf";

const SET_RESORTS = 'resorts/ALL'
//ACTIONS
const setResorts = (resorts) => {
    return {
        type: SET_RESORTS,
        payload: resorts
    }
}

//THUNKERS
export const loadResorts = () => async (dispatch) => {
    console.log('HIT LOAD RESORTS REDUCER');
    const response = await csrfFetch('/api/resorts/all');
    const data = await response.json();
    console.log('THIS IS DATA', data);
    dispatch(setResorts(data));
    return response;
}

//REDUCERS
const initialState = { resorts: null};
const resortReducer = (state= initialState, action) => {
    let newState;
    switch(action.type){
        case SET_RESORTS:
            newState = Object.assign({}, state);
            newState.resorts = action.payload;
            return newState;
        default:
            return state;
    }
};

export default resortReducer;
