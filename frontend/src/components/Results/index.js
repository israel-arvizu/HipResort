import React, {useEffect} from 'react';
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import { searchResults } from "../../store/resort";
import '../Resorts/allResortsPage.css'
import './resultsPage.css'

export default function ResultsPage(){
    const dispatch = useDispatch();
    const keyWord = useParams().search;
    const guestNum = useParams().guests;
    const allResorts = useSelector(state => state.resort);

    useEffect(() => {
        (async () => {
            await dispatch(searchResults(keyWord, guestNum))
        })()
    }, [dispatch])

    if(!allResorts.resorts || allResorts.resorts.length <= 0){
        return(
            <div className="resorts-main-container">
                <div>
                <hr></hr>
                <h2> Search Results </h2>
                <hr></hr>
                <p>Nothing Found...</p>
                </div>
            </div>
        )
    }

    return(allResorts.resorts &&
        <div className="resorts-main-container">
            <div className='resorts-main-content-outline'>
                <hr className='line-break-main-header'></hr>
                <div className='top-header-resorts-text'>
                    <h2> Search Results -</h2>

                    <span className='main-header-sub-body'>{allResorts.resorts.length} results matching</span>
                    <span className='main-header-sub-keyword'>{keyWord}</span>
                </div>
                <hr></hr>
                <div className='resorts-container-holder'>
                    <ul className='resorts-conatiner-list-container'>
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
