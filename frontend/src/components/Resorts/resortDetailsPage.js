import {useEffect} from 'react';
import { getResort } from '../../store/resort';
import { useDispatch, useSelector } from 'react-redux';
import { useParams} from 'react-router-dom';
import * as resortActions from '../../store/resort';
import BookingButton from './BookingButton';

function ResortDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
        <div className='loggedin-navLinks'>
            <a>Logged IN</a>
            <BookingButton />
        </div>
        );
    } else {
        sessionLinks = (
        <>
            <div className='left-side-head'>
                <a>NOT LOGGED IN</a>
            </div>
        </>
        );
    }

    useEffect(() =>{
        dispatch(resortActions.getResort(id))
    }, [dispatch])

    const resortObj = useSelector(state => state.resort.singleResort);
    if(!resortObj) return null;
    const resort = resortObj.resort;
    const host = resortObj.host;
    const amenities = resortObj.amenities;

    return(
        <div className='details-main-container'>
            <div className='image-container-main'>
                <div className='Right-section-outer'>
                    <div className='content-container-left'>
                        <img src={resort.imageUrl} alt='Resort Image'></img>
                        <h2> {resort.name} </h2>
                        <span> {resort.city}, {resort.state} </span>
                        <span> HOST: {host.username} </span>
                        <p> {resort.details}</p>
                    </div>
                    <div className='bottom-amenities-section'>
                        <ul>
                            {amenities.map((amenitie) => {
                                return (
                                    <li key={amenitie.id}>
                                        {amenitie.name}
                                        //CHANGE THIS BACK TO pictureURl
                                        {/* <img src={amenitie.name} alt="Amenitie picture"/> */}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className='content-container=right'>
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
