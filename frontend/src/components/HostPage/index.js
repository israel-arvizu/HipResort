import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import * as resortActions from '../../store/resort';

function HostPage() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

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
                    <button>Add Resort</button>
                </div>
                <div className="delete-resort-container">
                    <h2>Property out of service?</h2>
                    <a>Delete Resorts here!</a>
                    <button>Resort List</button>
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
