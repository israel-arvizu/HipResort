import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteReservation } from '../../store/reservations';
import './reservationModal.css'

function ReservationModal({setShowModal, resort, reservation, inDate, outDate, userId}) {
    const dispatch = useDispatch();
    const confirmationNumber = reservation.confirmationNumber;

    const deleteReservationFunc = () => {
        const resortId = resort.id;
        dispatch(deleteReservation({resortId, userId, confirmationNumber}))
        setShowModal(false)
    }

    return(
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className='modal-container-outside-box'>
                    <div className='modal-container-details'>
                        <div className='modal-title-reservation'>
                            <p className='moda-title-head'>Your Reservation at</p>
                            <h2 className='moda-title-head-name'>{resort.name} </h2>
                        </div>
                        <div className='details-body-section'>
                            <div className='details-body-content-container'>
                                <p className='label-details-body'>Check-In:</p>
                                <p className='label-details-content'> {inDate} </p>
                            </div>
                            <div className='details-body-content-container'>
                                <p className='label-details-body'>Check-Out:</p>
                                <p className='label-details-content'> {outDate} </p>
                            </div>
                            <div className='details-body-content-container'>
                                <p className='label-details-body'>Confimation Number:</p>
                                <p className='label-details-content'> {reservation.confirmationNumber} </p>
                            </div>
                        </div>
                        <div className='modal-details-bottom'>
                            <button className='modal-bottom-resev-btn' onClick={() => {setShowModal(false)}}> Go Back </button>
                            <button className='modal-bottom-resev-btn' onClick={deleteReservationFunc}>Cancel Reservation</button>
                        </div>
                    </div>
                    <div className='modal-container-image'>
                    <img className='modal-container-image-content' src={resort.imageUrl}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReservationModal;
