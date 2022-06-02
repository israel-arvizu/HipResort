import React from 'react';
import './reservationModal.css'

function ReservationModal({setShowModal}) {
    return(
        <div className='modalBackground'>
            <div className='modalContainer'>
                <button onClick={() => {setShowModal(false)}}> X </button>
                <div className='title'>Hello</div>
                <div className='body'>Resort</div>
                <div className='footer'>
                    Reservation
                    <button>Edit</button>
                    <button onClick={() => {setShowModal(false)}}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default ReservationModal;
