import { csrfFetch } from "./csrf";

const SET_USER = 'session/USER';
const REMOVE_USER = 'session/REMOVE_USER';


//ACTIONS
const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

const removeUser = () => {
    return {
        type: REMOVE_USER,
    }
}

//THUNKERS
export const login = (user) => async (dispatch) => {
    const { credential, password } = user;
    const response = await csrfFetch('/api/session/login', {
        method: 'POST',
        body: JSON.stringify({
            credential,
            password,
        }),
    });
    const data = await response.json();
    console.log(data);
    dispatch(setUser(data));
    return response;
}

export const signup = (user) => async (dispatch) => {
    const {username, email, password} = user;
    const response = await csrfFetch('/api/users/sign-up', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
            username
        }),
    });
    const data = await response.json();
    dispatch(setUser(data));
    return response;
}

export const restoreUser = () => async (dispatch) => {
    const response = await csrfFetch('/api/session');
    const data = await response.json();
    dispatch(setUser(data));
    return response;
}


//REDUCER
const initialState = { user: null};
const sessionReducer = (state= initialState, action) => {
    let newState;
    switch(action.type){
        case SET_USER:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;
