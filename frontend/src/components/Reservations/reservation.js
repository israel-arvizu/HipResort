import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReservationModal from './reservationModal';


function ReservationComponent({reservation, resort, checkInDate, checkOutDate, userId}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='reservation-component-outside-container'>
            <div className='reservation-comp-image-container'>
                <img id="reservation-comp-image" src={resort.imageUrl} />
            </div>
            <div className='reservation-comp-details'>
                    <p id='resort-name-reserve'>{resort.name}</p>
                    <div className='reservation-comp-details-info'>
                        <div className='reserve-details-info'>
                            <i class="fa-solid fa-calendar-check"></i>
                            <span className='reserve-info-head-style'> Check-In Date: </span>
                            <span className='reserve-info-style'>{checkInDate}</span>
                        </div>
                        <div className='reserve-details-info'>
                            <i class="fa-regular fa-calendar-check"></i>
                            <span className='reserve-info-head-style'> Check-Out Date: </span>
                            <span className='reserve-info-style'> {checkOutDate} </span>
                        </div>
                        <div className='reserve-details-info'>
                            <i class="fa-solid fa-circle-check"></i>
                            <span className='reserve-info-head-style'> Confirmation Number:</span>
                            <span className='reserve-info-style'>{reservation.confirmationNumber}</span>
                        </div>
                    </div>
                    <button className="openReservationDetails" onClick={() => {setShowModal(true)}}>Edit</button>
                    {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                            <ReservationModal setShowModal={setShowModal} resort={resort} reservation={reservation}
                            inDate={checkInDate} outDate={checkOutDate} userId={userId}/>
                        </Modal>
                    )}
            </div>
        </div>
    )
}

export default ReservationComponent;
