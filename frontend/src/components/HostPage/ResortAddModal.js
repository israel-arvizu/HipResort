import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createResort } from '../../store/resort';

function ResortAdd({setShowModal, userId}){
    const dispatch = useDispatch();
    const history = useHistory();
    const [resortName, setResortName] = useState("");
    const [resortPrice, setResortPrice] = useState(0.0);
    const [resortCapacity, setResortCapacity] = useState(0);
    const [resortDetails, setResortDetails] = useState("");
    const [resortCity, setResortCity] = useState("");
    const [resortState, setResortState] = useState("");
    const [resortLatitude, setResortLatitude] = useState(0.00)
    const [resortLongitude, setResortLongitude] = useState(0.00)
    const [resortImage, setResortImage] = useState("")
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault()
        setErrors([]);
        dispatch(createResort({resortName, resortPrice, resortCapacity,
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

        setShowModal(false)
    }

    return (
        <div className='form-container-signin'>
            <div className='form-container-content-holder-add'>
                <form onSubmit={handleSubmit} className="body-addResort-form">
                    <ul>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                    <div className='top-head-form-holder'>
                        <h2>Add a Resort!</h2>
                        <p>Add a new Resort and grow your Resort Empire!</p>
                    </div>
                    <div className='form-container-content'>
                        <div className='form-container-middle-input-content'>
                            <div className='login-label-cont add'>
                                <label className="resort-name-label form-resort-add"> Resort Name </label>
                                <input
                                    className='add-table-input Btn'
                                    type="text"
                                    value={resortName}
                                    onChange={(e) => setResortName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='login-label-cont add'>
                                <label className="resort-price-label form-resort-add"> Price Per Night  </label>
                                <input
                                    className='add-table-input Btn'
                                    type="number"
                                    step="0.01"
                                    value={resortPrice}
                                    onChange={(e) => setResortPrice(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='login-label-cont add'>
                                <label className="resort-capacity-label form-resort-add"> Capacity Per Room  </label>
                                <input
                                    className='add-table-input Btn'
                                    type="number"
                                    value={resortCapacity}
                                    onChange={(e) => setResortCapacity(e.target.value)}
                                    required
                                />
                            </div>
                            <label className="resort-details-label form-resort-add"> Resort Details  </label>
                                <input
                                    className='add-table-input Btn seperate'
                                    type="textarea"
                                    value={resortDetails}
                                    onChange={(e) => setResortDetails(e.target.value)}
                                    required
                                />
                            <div className='login-label-cont add'>
                                <label className="resort-details-label form-resort-add"> City of Resort </label>
                                <input
                                    className='add-table-input Btn'
                                    type="text"
                                    value={resortCity}
                                    onChange={(e) => setResortCity(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='login-label-cont add'>
                                <label className="resort-capacity-label form-resort-add"> State of Resort </label>
                                <input
                                    className='add-table-input Btn'
                                    type="text"
                                    value={resortState}
                                    onChange={(e) => setResortState(e.target.value)}
                                    required
                                />
                            </div>
                            <p className='add-resort-label'>For Guest Experience we use latitude and longitude of the Resort for map access</p>
                            <div className='login-label-cont add'>
                                <label className="resort-capacity-label form-resort-add"> Latitude of Resort </label>
                                <input
                                    className='add-table-input Btn'
                                    type="number"
                                    value={resortLatitude}
                                    onChange={(e) => setResortLatitude(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='login-label-cont add'>
                                <label className="resort-capacity-label form-resort-add"> Longitude of Resort </label>
                                <input
                                    className='add-table-input Btn'
                                    type="number"
                                    value={resortLongitude}
                                    onChange={(e) => setResortLongitude(e.target.value)}
                                    required
                                />
                            </div>
                            <p className='add-resort-label'>For Guest Experience we require a image, please input a image link</p>
                            <div className='login-label-cont add'>
                                <label className="resort-capacity-label form-resort-add"> Image of Resort </label>
                                <input
                                    className='add-table-input Btn'
                                    type="text"
                                    value={resortImage}
                                    onChange={(e) => setResortImage(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='form-container-button-section-host'>
                                <div className='form-container-buttons-host'>
                                    <button className="form-log-in-button" type='submit'>Add</button>
                                    <button className="form-log-in-button" onClick={() => setShowModal(false)}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ResortAdd;
