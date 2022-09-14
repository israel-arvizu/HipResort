import React, {useState} from "react";
import { Helmet } from "react-helmet";
import './homePage.css'

function SplashPage() {
    const [searchWord, setSearchWord] = useState("")
    const [amountOfGuest, setAmountOfGuest] = useState(1)

    const searchContent = async (e) => {
        e.preventDefault()
        if(searchWord === ""){
            window.location.href = `/results/all/${amountOfGuest}`;
        }else{
            window.location.href = `/results/${searchWord}/${amountOfGuest}`;
        }
    }

    const guestChange = (e) =>{
        setAmountOfGuest(e.target.value)
    }

    return (
        <div>
        <Helmet>
            <title>Home</title>
        </Helmet>
            <div className="body-home-container">
                <div className="top-banner-header">
                    <p className="homeheader-mainHead">Find Yourself in Luxury</p>
                    <p className="homeheader-subheading">Discover and book Resorts all over the world</p>
                    <p className="homeheader-subheading bottom">experience the life of comfort and wilderness in exotic lands</p>
                </div>
                <div className="home-search-body-container">
                    <form onSubmit={(e) => searchContent(e)} className="home-search-body-form-content">
                        <div className="search-input-container">
                            <label name="LocationSearch">Where to?</label>
                            <input
                            type="text"
                            className="input-container locations"
                            placeholder="Try California, Costa Rica, Miami"
                            onChange={(e) => setSearchWord(e.target.value)}
                            />
                        </div>
                        <div className="search-input-container guest">
                            <label>Guests</label>
                            <select
                            className="input-container locations guests-select"
                            onChange={(e) => guestChange(e)}
                            >
                                <option value="1">1 guest</option>
                                <option value="2">2 guest</option>
                                <option value="3">3 guest</option>
                                <option value="4">4 guest</option>
                                <option value="5+">5+ guest</option>
                            </select>
                        </div>
                        <button type="submit" className="search-form-submit-btn"><i class="fa-solid fa-magnifying-glass fa-xl" style={{color: "white"}}></i></button>
                    </form>
                </div>
                <div className="main-picture-home">
                    <img className="main-picture" src="/HomePageImage.jpg"/>
                </div>
                <div className="banner-sec-container">
                    <div className="content-container-1">
                        <a className="content-container-explore-pages" href="/results/California/1">
                            <img className="explore-image-home" src="https://img1.10bestmedia.com/Images/Photos/387266/Resort-Horizontal-Credit-The-Resort-at-Pelican-Hill_54_990x660.jpg" alt='california'/>
                            <div className="content-label-1">
                                <div className="explore-content-text">
                                    <p className="top-explore-text">Summer is almost here</p>
                                    <p className="bottom-explore-bold-text">Explore California and Enjoy the sunny beaches</p>
                                </div>
                                <div className="explore-content-text-btn">
                                    <button className="button-explore-main">Explore Cali</button>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="content-container-1 secondHome">
                        <a className="content-container-explore-pages" href="/results/Miami/1">
                            <img className="explore-image-home" src="https://a.cdn-hotels.com/gdcs/production2/d1821/71438820-8f10-11e8-b6b0-0242ac110007.jpg" alt='miami' />
                            <div className="content-label-1">
                                <div className="explore-content-text">
                                    <p className="top-explore-text firstHomeBtn">Luxury at its finest</p>
                                    <p className="bottom-explore-bold-text firstHomeBtn">The Miami lifestyle experience is worth the trip</p>
                                </div>
                                <div className="explore-content-text-btn">
                                    <button className="button-explore-main secondHomeBtn">Explore All</button>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SplashPage;
