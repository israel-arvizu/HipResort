import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteReservation } from '../../store/reservations';
// import './reservationModal.css'

function ReservationModal({setShowModal, resort, reservation, inDate, outDate, userId}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const confirmationNumber = reservation.confirmationNumber;

    const deleteReservation = () => {
        console.log('Entered Thunker');
        const resortId = resort.id;
        console.log(resortId);
        dispatch(deleteReservation({resortId, userId, confirmationNumber}))
        console.log('Exited dispatch');
        history.push('/');
    }

    return(
        <div className='modalBackground'>
            <div className='modalContainer'>
                <button onClick={() => {setShowModal(false)}}> X </button>
                <div className='title'>
                    Your Reservation at
                    <h2>{resort.name} </h2>
                </div>
                <div className='details-body'>
                    <img src={resort.imageUrl}/>
                    <span>Check-In: {inDate}</span>
                    <span>Check-Out: {outDate}</span>
                    <span>Confimation Number: {reservation.confirmationNumber}</span>
                </div>
                <div className='details-bottom'>
                    Reservation
                    <button >Edit</button>
                    <button onClick={deleteReservation}>Cancel Reservation</button>
                </div>
            </div>
        </div>
    )
}

export default ReservationModal;
