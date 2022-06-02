import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as reservationActions from '../../store/reservations';
import * as resortActions from '../../store/resort';
import ReservationModal from './reservationModal';

function ReservationsPage () {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user);
    const sessionReservation = useSelector(state => state.reservations.reservations);
    const sessionResort = useSelector(state => state.resort.resorts);

    useEffect(() => {
        dispatch(reservationActions.loadReservations(sessionUser.id))
        dispatch(resortActions.loadResorts())
    }, [dispatch])

    if(sessionReservation === null) return null;
    if(sessionResort === null) return null;

    let normalizedResorts = {};
    sessionResort.forEach((resort) => normalizedResorts[resort.id] = resort);
    console.log(normalizedResorts);

    return (
        <div className="resevations-body">
            <h2> Upcoming Trips</h2>
            <div className="trips-container">
                {sessionReservation.map((reservation) => {
                    let resort = normalizedResorts[reservation.resortId];
                    return(
                        <div className='single-reservation' key={reservation.confirmationNumber}>
                            <div>
                                <img src={resort.imageUrl} />
                                <h3>{resort.name}</h3>
                                <a> Check-In Date: {reservation.startDate}</a>
                                <a> Check-Out Date: {reservation.endDate}</a>
                                <span> Confirmation Number: {reservation.confirmationNumber}</span>
                                <button className="openReservationDetails" onClick={() => {setShowModal(true)}}>Edit</button>
                            </div>
                            <div>
                            {showModal && <ReservationModal setShowModal={setShowModal}/>}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ReservationsPage;
