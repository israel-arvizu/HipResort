import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReservationModal from './reservationModal';


function ReservationComponent({reservation, resort, checkInDate, checkOutDate, userId}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <img src={resort.imageUrl} />
            <h3>{resort.name}</h3>
            <a> Check-In Date: {checkInDate}</a>
            <a> Check-Out Date: {checkOutDate}</a>
            <span> Confirmation Number: {reservation.confirmationNumber}</span>
            <button className="openReservationDetails" onClick={() => {setShowModal(true)}}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ReservationModal setShowModal={setShowModal} resort={resort} reservation={reservation}
                    inDate={checkInDate} outDate={checkOutDate} userId={userId}/>
                </Modal>
            )}
        </div>
    )
}

export default ReservationComponent;
