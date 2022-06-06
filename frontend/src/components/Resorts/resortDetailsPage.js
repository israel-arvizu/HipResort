import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory} from 'react-router-dom';
import * as resortActions from '../../store/resort';
import BookingButton from './BookingButton';
import './resortDetailsPage.css'


function ResortDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    let history = useHistory()

    const routeRedirect = () => {
        history.push('/signup')
    }

    useEffect(() =>{
        dispatch(resortActions.getResort(id))
    }, [dispatch])

    const resortObj = useSelector(state => state.resort.singleResort);
    if(!resortObj) return null;
    const resort = resortObj.resort;
    const host = resortObj.host;
    const amenities = resortObj.amenities;

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
        <div className='loggedin-navLinks'>
            <BookingButton resort={resort} id={sessionUser.id}/>
        </div>
        );
    } else {
        sessionLinks = (
        <>
            <div className="booking-date-button-container guest">
                <button className='calendar-submit-button guest' onClick={routeRedirect}>
                    Book
                </button>
            </div>
        </>
        );
    }

    return(
        <div className='details-main-container'>
            <div className='body-container-main'>
                <div className='left-section-outer'>
                    <div className='main-body-image-container'>
                        <img className='main-body-image' src={resort.imageUrl} alt='Resort Image'></img>
                    </div>
                    <div className='details-main-container-outer'>
                        <div>
                            <div className='content-container-main'>
                                <div>
                                    <h2 id="content-main-title"> {resort.name} </h2>
                                    <span className='content-main-location'> {resort.city}, {resort.state} </span>
                                    <hr id='line-break-details'></hr>
                                </div>
                                <div id="content-main-details-container">
                                    <div id='content-main-resort-host'>
                                        <img className="host-details-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png" />
                                        <p id='content-main-resort-name-head'> Hosted by: </p>
                                        <p id='content-main-resort-name'> {host.username} </p>
                                    </div>
                                    <div>
                                        <span id='content-main-resort-details-head'>About the property: </span>
                                        <p id='content-main-resort-details'> {resort.details}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='bottom-amenities-section-container'>
                                <p>Amenities: </p>
                                    <div className='bottom-amenities-section-body'>
                                        <ul className='bottom-amenities-section-ul'>
                                            {amenities.map((amenitie) => {
                                                return (
                                                    <div className='amenities-details-container'>
                                                        <li key={amenitie.id} className="amenities-details-list-item">
                                                            <img id='amenities-image' src={amenitie.pictureUrl} alt="Amenitie picture"/>
                                                            <p>{amenitie.name}</p>
                                                        </li>
                                                    </div>
                                                )
                                            })}
                                        </ul>
                                    </div>
                            </div>
                        </div>
                        <div className='content-container-right'>
                            <div className='content-container-price-section'>
                                <h3 id='booking-container-price'> ${resort.price} </h3>
                                <p id='booking-container-cap' >per night ({resort.capacity} guest) </p>
                            </div>
                            <div  className='booking-container-capacity'>
                                <p id='booking-container-capacity-header'>Guests</p>
                                <p id='booking-container-capacity-bottom'>Capacity: {resort.capacity} </p>
                            </div>
                            <div className='booking-container'>
                                {sessionLinks}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResortDetails;
