import { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as resortActions from '../../store/resort';
function ResortsPage(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resortActions.loadResorts())
    }, [dispatch])

    const allResorts = useSelector(state => state.resort);
    if(!allResorts.resorts) return null;

    return(allResorts.resorts &&
        <div className="resorts-main-container">
            <h2> All Resorts </h2>
            <ul>
                {allResorts.resorts.map((resort) => {
                    return(
                    <a href={`/resort/${resort.id}`}>
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
                    </a>
                    )
            })}
            </ul>
        </div>
    )
}

export default ResortsPage;
