import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { useHistory } from 'react-router-dom';
import * as resortActions from '../../store/resort';
import { Modal } from '../../context/Modal';
import ResortAddModal from './ResortAddModal';
import ResortEdit from "./ResortEditModa";
import ResortEditList from "./ResortEditList";

function HostPage() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [showModal, setShowModal] = useState(false)
    const [editModal, setEditModal] = useState(false)

    useEffect(() => {
        dispatch(resortActions.loadHostResorts(sessionUser.id));
    }, [dispatch])

    const allResorts = useSelector(state => state.resort.hostResorts);
    if(!allResorts) return null;

    return (
        <div className="main-host-container">
            <div className="host-right-container">
                <div className="create-resort-container">
                    <h2>Add Another Resort</h2>
                    <button className="addResort Btn" onClick={() => setShowModal(true)}>Add Resort</button>
                  {showModal &&  (
                  <Modal onClose={() => {setShowModal(false)}}>
                        <ResortAddModal userId={sessionUser.id} setShowModal={setShowModal}/>
                    </Modal>
                    )}
                </div>
                <div className="delete-resort-container">
                    <h2>Property out of service?</h2>
                    <a>Delete Resorts here!</a>
                    <button className="editResort Btn" onClick={() => setEditModal(true)}>Resort List</button>
                    {editModal &&  (
                    <Modal onClose={() => {setEditModal(false)}}>
                        <ResortEditList setEditModal={setEditModal} allResorts={allResorts} userId={sessionUser.id}/>
                    </Modal>
                    )}
                </div>
            </div>
            <div className="host-left-container">
                <div className="host-resorts-list">
                    <h2>Your Resorts</h2>
                    <ul>
                        {allResorts.map((resort) => {
                            return(
                                //CHANGE THIS Anchor Tag to a MODAL to edit Resort
                                // <a href={`/resort/${resort.id}`}>
                                    <li key={resort.id}>
                                        <div className='resorts-container-sec'>
                                            <img src={resort.imageUrl} alt="Resort Image"></img>
                                            <span>{resort.name}</span>
                                            <ul>
                                                <li>{resort.price} per night</li>
                                                <li>Capacity: {resort.capacity}</li>
                                                <li>{resort.city}, {resort.state}</li>

                                            </ul>
                                        </div>
                                    </li>
                                // </a>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HostPage;
