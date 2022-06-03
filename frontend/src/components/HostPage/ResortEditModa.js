import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createResort } from '../../store/resort';

function ResortEdit({setFormEdit, userId, resort}){
    const dispatch = useDispatch();
    const history = useHistory();
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

    const handleSubmitEdit = (e) =>{
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

        setFormEdit(false)
    }

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="title-addResort-modal">
                    <h2>Edit Your Resort</h2>
                    <h2>{resort.name}</h2>
                </div>
                <div className="body-addResort-modal">
                    <form onSubmit={handleSubmitEdit} className="body-addResort-form">
                        <ul>
                            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                        </ul>
                        <label className="resort-name-label form-resort-add">
                            Resort Name
                            <input
                                type="text"
                                value={resortName}
                                onChange={(e) => setResortName(e.target.value)}
                                required
                            />
                        </label>
                        <label className="resort-price-label form-resort-add">
                            Price Per Night
                            <input
                                type="number"
                                step="0.01"
                                value={resortPrice}
                                onChange={(e) => setResortPrice(e.target.value)}
                                required
                            />
                        </label>
                        <label className="resort-capacity-label form-resort-add">
                            Capacity Per Room
                            <input
                                type="number"
                                value={resortCapacity}
                                onChange={(e) => setResortCapacity(e.target.value)}
                                required
                            />
                        </label>
                        <label className="resort-details-label form-resort-add">
                            Resort Details
                            <input
                                type="textarea"
                                value={resortDetails}
                                onChange={(e) => setResortDetails(e.target.value)}
                                required
                            />
                        </label>
                        <label className="resort-details-label form-resort-add">
                            City of Resort
                            <input
                                type="text"
                                value={resortCity}
                                onChange={(e) => setResortCity(e.target.value)}
                                required
                            />
                        </label>
                        <label className="resort-capacity-label form-resort-add">
                            State of Resort
                            <input
                                type="text"
                                value={resortState}
                                onChange={(e) => setResortState(e.target.value)}
                                required
                            />
                        </label>
                        <p>For Guest Experience we use latitude and longitude of the Resort for map access</p>
                        <label className="resort-capacity-label form-resort-add">
                            Latitude of Resort
                            <input
                                type="number"
                                value={resortLatitude}
                                onChange={(e) => setResortLatitude(e.target.value)}
                                required
                            />
                        </label>
                        <label className="resort-capacity-label form-resort-add">
                            Longitude of Resort
                            <input
                                type="number"
                                value={resortLongitude}
                                onChange={(e) => setResortLongitude(e.target.value)}
                                required
                            />
                        </label>
                        <p>For Guest Experience we require a image, please input a image link</p>
                        <label className="resort-capacity-label form-resort-add">
                            Image of Resort
                            <input
                                type="text"
                                value={resortImage}
                                onChange={(e) => setResortImage(e.target.value)}
                                required
                            />
                        </label>
                        <button type='submit' className='submitResortAdd'>Add</button>
                    </form>
                </div>
                <button onClick={() => setFormEdit(false)}>Cancel</button>
            </div>
        </div>
    )
}

export default ResortEdit;
