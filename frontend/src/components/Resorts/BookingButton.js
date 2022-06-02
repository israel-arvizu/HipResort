import {useState } from "react";
import { useDispatch } from "react-redux"
import { Redirect, useHistory } from "react-router-dom";
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
      history.push('/');
    }

    return setErrors(['Check-Out Date must be after Check-In Date']);
  };

  return (
        <ul className="profile-dropdown">
          <form onSubmit={bookResort}>
            <ul>
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <li>Check-In Date</li>
              <input
              type='date'
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              required
              />
            <li>Check out Date</li>
            <input
              type='date'
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              required
              />
            <button type="submit">Book today!</button>
          </form>
        </ul>
      )
  }
export default BookingButton;
