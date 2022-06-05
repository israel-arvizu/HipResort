import { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as resortActions from '../../store/resort';
import './allResortsPage.css'

function ResortsPage(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resortActions.loadResorts())
    }, [dispatch])

    const allResorts = useSelector(state => state.resort);
    if(!allResorts.resorts) return null;

    return(allResorts.resorts &&
        <div className="resorts-main-container">
            <div>
            <hr></hr>
            <h2> All Resorts </h2>
            <hr></hr>
            <div className='resorts-container-holder'>
                <ul>
                    <div className='resorts-container-body'>
                    {allResorts.resorts.map((resort) => {
                        return(
                            <a className='resort-image-interactive' href={`/resort/${resort.id}`}>
                                <div className='resort-info-container'>
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
                                                </div>
                                            </div>
                                            <hr className='resort-details-break'></hr>
                                        </div>
                                    </li>
                                </div>
                            </a>
                        )
                    })}
                    </div>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default ResortsPage;
