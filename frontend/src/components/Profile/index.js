import ReservationsPage from "../Reservations/reservationsPage"

function ProfilePage(){
    return(
        <div className="main-container-profile">
            <div className="left-container-profileBody">
                <div className="profile-user-details">
                    <a>RANDOM IMAGE</a>
                    <a>NAME</a>
                    <a>NATIONALITY</a>
                    <a>BIO</a>
                    <button>Edit Profile</button>
                </div>
                <div className="profile-user-second-square">
                    <h4>Reservations Upcoming!</h4>
                    <a>Number of Reservations</a>
                </div>
                <div className="profile-user-random-item">
                    <h4>Thanks for Being a Member</h4>
                    <a>Member since DATE</a>
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
