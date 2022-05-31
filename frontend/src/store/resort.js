import { csrfFetch } from "./csrf";

//ACTIONS
const setResorts = (resorts) => {
    return {
        type: SET_RESORTS,
        payload: resorts
    }
}

//THUNKERS
export const loadResorts = (resorts) => async (dispatch) => {
    const response = await csrfFetch('')
}

//REDUCERS
const initialState = { user: null};
const resortReducer = (state= initialState, action) => {
    let newState;
    switch(action.type){
        case GET_RESORTS:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        default:
            return state;
    }
};
