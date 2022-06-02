import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ReservationsPage from "../Reservations/reservationsPage"
import './profilepage.css'

function ProfilePage(){
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();

    const viewResorts = () => {
        history.push('/user/resort');
    }
    return(
        <div className="main-container-profile">
            <div className="left-container-profileBody">
                <div className="profile-user-details">
                    <img src="/Profile-picture.png" className="profile-picture"/>
                    <a>{sessionUser.name}</a>
                    <a>{sessionUser.username}</a>
                    <a>nationality: {sessionUser.nationality}</a>
                    <a>Bio: {sessionUser.bio}</a>
                    <button>Edit Profile</button>
                </div>
                <div className="profile-user-second-square">
                    <h4>Your Resorts</h4>
                    <button onClick={viewResorts}>View</button>
                </div>
                <div className="profile-user-random-item">
                    <h4>Reservations Upcoming!</h4>
                    <a>Number of Reservations</a>
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
