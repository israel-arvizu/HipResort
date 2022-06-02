import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as reservationActions from '../../store/reservations';
import * as resortActions from '../../store/resort';
import ReservationComponent from './reservation';

function ReservationsPage () {
    const dispatch = useDispatch();
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

    return (
        <div className="resevations-body">
            <h2> Upcoming Trips</h2>
            <div className="trips-container">
                {sessionReservation.map((reservation) => {
                    let resort = normalizedResorts[reservation.resortId];
                    const checkInDate =  reservation.startDate.substr(5, 2) + '/' + reservation.startDate.substr(8, 2) + '/' + reservation.startDate.substr(0, 4)
                    const checkOutDate = reservation.endDate.substr(5, 2) + '/' + reservation.endDate.substr(8, 2) + '/'+ reservation.endDate.substr(0, 4)
                    return(
                        <div>
                            <ReservationComponent reservation={reservation} resort={resort} checkInDate={checkInDate}
                            checkOutDate={checkOutDate} userId={sessionUser.id}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ReservationsPage;
