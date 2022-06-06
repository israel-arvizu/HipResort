import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { editResort } from '../../store/resort';
import { Helmet } from "react-helmet";
import * as resortActions from '../../store/resort'
import './ResortEdit.css'

function ResortEdit(){
    const dispatch = useDispatch();
    const history = useHistory();
    let { id } = useParams()
    const sessionUser = useSelector(state => state.session.user);
    const allResorts = useSelector(state => state.resort.hostResorts);

    const userId = sessionUser.id;

    let normalizedHostResorts = {};
    allResorts.forEach((resort) => {
        normalizedHostResorts[resort.id] = resort
    })
    let resort = normalizedHostResorts[id];

    const [resortName, setResortName] = useState(resort.name);
    const [resortPrice, setResortPrice] = useState(resort.price);
    const [resortCapacity, setResortCapacity] = useState(resort.capacity);
    const [resortDetails, setResortDetails] = useState(resort.details);
    const [resortCity, setResortCity] = useState(resort.city);
    const [resortState, setResortState] = useState(resort.state);
    const [resortLatitude, setResortLatitude] = useState(resort.latitude)
    const [resortLongitude, setResortLongitude] = useState(resort.longitude)
    const [resortImage, setResortImage] = useState(resort.imageUrl)
    const [errors, setErrors] = useState([]);
    const resortId = resort.id

    const handleSubmitEdit = (e) =>{
        e.preventDefault()
        setErrors([]);
        dispatch(editResort({resortId, resortName, resortPrice, resortCapacity,
            resortDetails, resortCity, resortState, resortLatitude, resortLongitude,
            resortImage, userId})).catch(async (res) => {
                console.log(res.json());
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });

        setResortName("");
        setResortPrice(0.0);
        setResortCapacity(0);
        setResortDetails("");
        setResortCity("");
        setResortState("");
        setResortLatitude(0.00);
        setResortLongitude(0.00);
        setResortImage("");

        history.push('/user/resort');
    }

    if(!allResorts) return null;

    const deleteResort = () => {
        dispatch(resortActions.deleteResort(resortId, userId));
        history.push('/user/resort');
    }

    return (
        <div className='form-container-signin'>
            <div className='form-container-content-holder-host'>
                <form onSubmit={handleSubmitEdit} className="body-addResort-form">
                    <Helmet>
                        <title>Edit Resort</title>
                    </Helmet>
                    <div className='top-head-form-holder'>
                        <div className='form-container-middle-input-content-host'>
                            <div className="title-addResort-modal">
                                <h2 className="title-editResort-page">Edit Your Resort</h2>
                                <h2 className="title-editResort-page">{resort.name}</h2>
                            </div>
                            <ul>
                                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                            </ul>
                            <div className='form-container-content'>
                                <div className='form-container-middle-input-content-host'>
                                    <div className='login-label-cont'>
                                        <label className="resort-name-label form-resort-add"> Resort Name </label>
                                            <input
                                                type="text"
                                                value={resortName}
                                                onChange={(e) => setResortName(e.target.value)}
                                                required
                                            />
                                    </div>
                                    <div className='login-label-cont'>
                                        <label className="resort-price-label form-resort-add"> Price Per Night  </label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                value={resortPrice}
                                                onChange={(e) => setResortPrice(e.target.value)}
                                                required
                                            />
                                    </div>
                                    <div className='login-label-cont'>
                                        <label className="resort-capacity-label form-resort-add"> Capacity Per Room</label>
                                            <input
                                                type="number"
                                                value={resortCapacity}
                                                onChange={(e) => setResortCapacity(e.target.value)}
                                                required
                                            />
                                    </div>
                                    <div className='login-label-cont'>
                                        <label className="resort-details-label form-resort-add"> Resort Details  </label>
                                            <input
                                                type="textarea"
                                                value={resortDetails}
                                                onChange={(e) => setResortDetails(e.target.value)}
                                                required
                                            />
                                    </div>
                                    <div className='login-label-cont'>
                                        <label className="resort-details-label form-resort-add"> City of Resort  </label>
                                            <input
                                                type="text"
                                                value={resortCity}
                                                onChange={(e) => setResortCity(e.target.value)}
                                                required
                                            />
                                    </div>
                                    <div className='login-label-cont'>
                                        <label className="resort-capacity-label form-resort-add"> State of Resort </label>
                                            <input
                                                type="text"
                                                value={resortState}
                                                onChange={(e) => setResortState(e.target.value)}
                                                required
                                            />
                                    </div>
                                    <p>For Guest Experience we use latitude and longitude of the Resort for map access</p>
                                    <div className='login-label-cont'>
                                        <label className="resort-capacity-label form-resort-add"> Latitude of Resort </label>
                                        <input
                                            type="number"
                                            value={resortLatitude}
                                            onChange={(e) => setResortLatitude(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className='login-label-cont'>
                                        <label className="resort-capacity-label form-resort-add">Longitude of Resort </label>
                                        <input
                                            type="number"
                                            value={resortLongitude}
                                            onChange={(e) => setResortLongitude(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <p>For Guest Experience we require a image, please input a image link</p>
                                    <div className='login-label-cont'>
                                        <label className="resort-capacity-label form-resort-add"> Image of Resort </label>
                                        <input
                                            type="text"
                                            value={resortImage}
                                            onChange={(e) => setResortImage(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='form-container-button-section-host'>
                                <div className='form-container-buttons-host'>
                                    <button className="form-log-in-button-host" type='submit'>Edit Resort</button>
                                    <button className="form-log-in-button-host" onClick={deleteResort}>Delete Resort</button>
                                    <button className="form-log-in-button-host" onClick={() => {history.push('/user/resort')}}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ResortEdit;
