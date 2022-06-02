import { csrfFetch } from "./csrf";

const MAKE_RESERVATION = 'reservation/CREATE';

//ACTIONS
const createReservation = (reservation) => {
    return{
        type: MAKE_RESERVATION,
        payload: reservation
    }
}
//THUNKERS
export const addReservation = ({resortId, userId, checkInDate, checkOutDate, confirmationNumber}) => async (dispatch) => {
    const response = await csrfFetch('/api/reservation', {
        method: 'POST',
        body: JSON.stringify({
            userId,
            resortId,
            startDate: checkInDate,
            endDate: checkOutDate,
            confirmationNumber
        })
    });
    const data = await response.json();
    console.log('THIS IS DATA', data.reservation);
    dispatch(createReservation(data.reservation));
    return JSON.stringify("Successfuly Booked!");
}

//REDUCERS
const initialState = {reservations: null}
const reservationReducer = (state= initialState, action) => {
    let newState;
    switch(action.type){
        case MAKE_RESERVATION:
            //DONT NEED TO UPDATE STATE FOR RESERVATIONS -- RETURNS DEFAULT
            return state;
        default:
            return state;
    }
}

export default reservationReducer;
