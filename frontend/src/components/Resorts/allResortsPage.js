import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as resortActions from '../../store/resort';
function ResortsPage(){
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('Entered UseEFfect')
        dispatch(resortActions.loadResorts())
    }, [dispatch])

    const allResorts = useSelector(state => state.resort);
    console.log('RESORT SESSION', allResorts)
    if(!allResorts.resorts) return null;

    return(
        <div className="resorts-main-container">
            <h2> All Resorts </h2>
            <ul>
                {allResorts.resorts.map((resort) => {
                    console.log(resort)
                    return(
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
                    )
            })}
            </ul>
        </div>
    )
}

export default ResortsPage;
