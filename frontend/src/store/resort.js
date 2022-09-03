import { csrfFetch } from "./csrf";

const SET_RESORTS = 'resorts/ALL';
const SET_SINGLE = 'resort/ONE';
const SET_HOST_RESORTS = 'resort/host/ALL'
const CREATE_RESORT = 'resort/CREATE'

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

const addResort = (resort)=> {
    return{
        type: CREATE_RESORT,
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

export const searchResults = (keyWord, guests) => async (dispatch) => {
    console.log(keyWord, "BACKEND")
    console.log(guests)
    const response = await csrfFetch('api/resorts/results', {
        method: 'PUT',
        body: JSON.stringify({
            keyWord,
            guests
        })
    })

    const data = await response.json();
    dispatch(setResorts(data));
    return response;
}

export const createResort = (resort) => async (dispatch) => {
    const {resortName, resortPrice, resortCapacity,
        resortDetails, resortCity, resortState, resortLatitude, resortLongitude,
        resortImage, userId} = resort;
    const response = await csrfFetch('/api/resorts/create', {
        method: 'POST',
        body: JSON.stringify({
            name: resortName,
            price: resortPrice,
            capacity: resortCapacity,
            details: resortDetails,
            city: resortCity,
            state: resortState,
            latitude: resortLatitude,
            longitude: resortLongitude,
            image: resortImage,
            id: userId
        })
    });

    const data = await response.json();
    dispatch(setHostResorts(data));
    return response;
}

export const editResort = (resort) => async (dispatch) => {
    const {resortId, resortName, resortPrice, resortCapacity,
        resortDetails, resortCity, resortState, resortLatitude, resortLongitude,
        resortImage, userId} = resort;

        const response = await csrfFetch('/api/resorts/edit', {
            method: 'PUT',
            body: JSON.stringify({
                resortId,
                name: resortName,
                price: resortPrice,
                capacity: resortCapacity,
                details: resortDetails,
                city: resortCity,
                state: resortState,
                latitude: resortLatitude,
                longitude: resortLongitude,
                imageUrl: resortImage,
                id: userId
            })
        });

        const data = await response.json();
        dispatch(addResort(data));
        return response;
}

export const deleteResort = (resortId, userId) => async (dispatch) => {
    const response = await csrfFetch('/api/resorts/delete', {
        method: 'DELETE',
        body: JSON.stringify({
            resortId,
            userId
        })
    });

    const data = await response.json();
    dispatch(setHostResorts(data));
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
        case SET_SINGLE:
            newState = Object.assign({}, state);
            newState.singleResort = action.payload;
            return newState;
        case SET_HOST_RESORTS:
            newState = Object.assign({}, state);
            newState.hostResorts = action.payload;
            return newState;
        case CREATE_RESORT:
            newState = Object.assign({}, state);
            newState.hostResorts = action.payload;
            return newState;
        default:
            return state;
    }
};

export default resortReducer;
