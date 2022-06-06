import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { useHistory } from 'react-router-dom';
import * as resortActions from '../../store/resort';
import { Modal } from '../../context/Modal';
import ResortAddModal from './ResortAddModal';
import '../Resorts/allResortsPage.css'

function HostPage() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [showModal, setShowModal] = useState(false)

    useEffect(() =>{
        dispatch(resortActions.loadHostResorts(sessionUser.id));
    }, [dispatch])

    const resortDetails = (resortId) => {
        history.push(`/resort/edit/${resortId}`);
    }


    const allResorts = useSelector(state => state.resort.hostResorts);
    if(!allResorts) return null;

    return (
        <div className='main-host-container'>
            <div className='host-right-container'>
                <div className='create-resort-container'>
                    <hr></hr>
                        <div className='host-resort-page-header'>
                            <h2 className='addResort-heading'>Add Another Resort</h2>
                            <button className='addResort-btn' onClick={() => setShowModal(true)}>Add Resort</button>
                        </div>
                    <hr></hr>
                  {showModal &&  (
                  <Modal onClose={() => {setShowModal(false)}}>
                        <ResortAddModal userId={sessionUser.id} setShowModal={setShowModal}/>
                    </Modal>
                    )}
                </div>
            </div>
            <div className="host-left-container">
                <div className="host-resorts-list">
                    <h2 className='addResort-heading'>Your Resorts</h2>
                    <div className='resorts-container-holder'>
                        <ul>
                            <div className='resorts-container-body-host'>
                                {allResorts.map((resort) => {
                                    return(
                                        <div className='resort-info-host-container'>
                                            <li key={resort.id}>
                                                <div className='resorts-container-sec'>
                                                    <div className='resorts-image-container'>
                                                        <img className='resort-list-image' src={resort.imageUrl} alt="Resort"></img>
                                                    </div>
                                                    <div className='resorts-details-containers'>
                                                        <div>
                                                            <span className='resort-details-name'>{resort.name}</span>
                                                            <span><i class="fa-solid fa-circle-check fa-sm"></i></span>
                                                        </div>
                                                        <div className='resort-details-info-container'>
                                                            <div className='resort-details-info-text'>
                                                                <span>{resort.capacity} people </span>
                                                                <span> - </span>
                                                                <span>{resort.city}</span>
                                                                <span> - </span>
                                                                <span>{resort.state}</span>
                                                            </div>
                                                            <div>
                                                                <span className='resorts-details-price-tag'>${resort.price}</span>
                                                                <span className='resorts-details-price-tag-text'>/night</span>
                                                            </div>
                                                            <button className="editResort-btn" onClick={() => resortDetails(resort.id)}>Resort Detials</button>
                                                        </div>
                                                    </div>
                                                    <hr className='resort-details-break'></hr>
                                                </div>
                                            </li>
                                        </div>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HostPage;
