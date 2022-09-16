import {useState } from "react";
import { useDispatch } from "react-redux"
import {useHistory } from "react-router-dom";
import {addReservation} from '../../store/reservations';

function BookingButton({resort, id}) {
  const dispatch = useDispatch();
  const resortId = resort.id;
  const userId = id;
  let history = useHistory()
  const [errors, setErrors] = useState([]);
  const [checkInDate, setCheckInDate] = useState("")
  const [checkOutDate, setCheckOutDate] = useState("")

  const bookResort = (e) => {
    e.preventDefault();
    if(checkInDate < checkOutDate){
      const confirmationNumber = checkInDate.split("-").join("") + userId;
      setErrors([])
      dispatch(addReservation({resortId, userId, checkInDate, checkOutDate, confirmationNumber}))
        .catch(async (res) => {
          const data = await res.json();
          if (data) setErrors(data.errors);
      });
      history.push('/user');
    }

    return setErrors(['Check-Out Date must be after Check-In Date']);
  };

  return (
        <ul className="resort-booking-date-container">
          <form onSubmit={bookResort}>
            <ul className="booking-container-form">
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <div className="resort-booking-date-widget">
              <div>
                <li className="calendar-input-widget-title">Check-In Date</li>
                  <input
                  className="calendar-input-widget"
                  type='date'
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  required
                  />
              </div>
              <hr className="booking-date-widget-break"></hr>
              <div>
                <li className="calendar-input-widget-title">Check out Date</li>
                <input
                  className="calendar-input-widget"
                  type='date'
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  required
                  />
              </div>
            </div>
            <div className="booking-date-button-container">
              <button className="calendar-submit-button" type="submit">Book now</button>
            </div>
          </form>
        </ul>
      )
  }
export default BookingButton;
