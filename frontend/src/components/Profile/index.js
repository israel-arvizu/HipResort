import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ReservationsPage from "../Reservations/reservationsPage"
import * as reservationActions from '../../store/reservations';
import * as resortActions from '../../store/resort';
import './profilepage.css'

function ProfilePage(){
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const sessionReservation = useSelector(state => state.reservations.reservations);
    const history = useHistory();

    const viewResorts = () => {
        history.push('/user/resort');
    }

    useEffect(() => {
        dispatch(reservationActions.loadReservations(sessionUser.id))
        dispatch(resortActions.loadResorts())
    }, [dispatch])

    if(sessionUser === null) return null;
    if(sessionReservation === null) return null;
    return(
        <div className="main-container-profile">
            <div className="left-container-profileBody">
                <div className="profile-user-details">
                    <div className="profile-user-head-details">
                        <img src="/Profile-picture.png" className="profile-picture"/>
                        <p id="name-profile">{sessionUser.name}</p>
                    </div>
                    <div className="profile-user-head-small-details">
                        <div className="profile-user-head-details userDet">
                                <i class="fa-solid fa-user"></i>
                                <p className="userName-profile-sec">{sessionUser.username}</p>
                        </div>
                        <div className="profile-user-head-details userDet">
                            <i class="fa-solid fa-location-dot"></i>
                            <p className="userName-profile-sec">{sessionUser.nationality}</p>
                        </div>
                    </div>
                    <div className="profile-user-bio-details">
                        <p id="short-profile-bio">Bio:</p>
                        <p id="short-profile-bio-text"> {sessionUser.bio} </p>
                    </div>
                    <div>
                        <button id="edit-profile-btn">Edit Profile</button>
                    </div>
                </div>
                <div className="profile-user-second-square">
                    <div className="profile-user-second-square-content">
                        <div className="second-square-header">
                            <p id="second-square-title">Host Services</p>
                            <hr></hr>
                        </div>
                        <div className="second-square-details">
                            <p>Your Resorts</p>
                            <div id="second-square-details-cont">
                                <button  id="second-square-details-btn" onClick={viewResorts}>View</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-user-second-square">
                    <div className="profile-user-second-square-content">
                        <div className="third-square-header">
                            <p id="second-square-title">Reservation Upcoming</p>
                            <hr></hr>
                        </div>
                        <span>Number of Reservation: </span>
                        <span id="third-square-reserve">{sessionReservation.length}</span>
                    </div>
                </div>
            </div>
            <div className="right-container-profileBody">
                <div className="profile-upcoming-trips">
                    <ReservationsPage />
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;
