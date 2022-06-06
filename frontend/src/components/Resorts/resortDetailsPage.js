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
            <div className='left-side-head'>
                <button onClick={routeRedirect}>
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
                    <div className='content-container-main'>
                        <div>
                            <h2 id="content-main-title"> {resort.name} </h2>
                            <span> {resort.city}, {resort.state} </span>
                            <hr></hr>
                        </div>
                        <div id="content-main-details-container">
                            <p id='content-main-resort-host'> HOST: {host.username} </p>
                            <p id='content-main-resort-details'> {resort.details}</p>
                        </div>
                    </div>
                    <div className='bottom-amenities-section'>
                        <ul>
                            {amenities.map((amenitie) => {
                                return (
                                    <li key={amenitie.id}>
                                        {amenitie.name}
                                        <img src={amenitie.pictureUrl} alt="Amenitie picture"/>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className='content-container-right'>
                    <h3> ${resort.price} </h3>
                    <span>Capacity: {resort.capacity} </span>
                    <div className='booking-container'>
                        {sessionLinks}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResortDetails;
