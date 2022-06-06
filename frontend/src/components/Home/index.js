import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";
import './homePage.css'

function splashPage() {

    function RedirectToResorts() {
        <Redirect to="/resorts" />
    }

    return (
        <div>
        <Helmet>
            <title>Home</title>
        </Helmet>
            <div className="body-home-container">
                <div className="top-banner-header">
                    <p className="homeheader-mainHead">Find Yourself in Luxury</p>
                    <p className="homeheader-subheading">Discover and book Resorts all over the world, experience the life of comfort and wilderness</p>
                </div>
                <div className="main-picture-home">
                    <img className="main-picture" src="/HomePageImage.jpg"/>
                </div>
                <div className="banner-sec-container">
                    <div className="content-container-1">
                        <a className="content-container-explore-pages" href="/resort">
                            <img className="explore-image-home" src="https://img1.10bestmedia.com/Images/Photos/387266/Resort-Horizontal-Credit-The-Resort-at-Pelican-Hill_54_990x660.jpg" alt='california'/>
                            <div className="content-label-1">
                                <div className="explore-content-text">
                                    <p className="top-explore-text">Summer is almost here</p>
                                    <p className="bottom-explore-bold-text">Explore California and Enjoy the sunny beaches</p>
                                </div>
                                <div className="explore-content-text-btn">
                                    <button className="button-explore-main">Explore All</button>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="content-container-1 secondHome">
                        <a className="content-container-explore-pages" href="/resort">
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

export default splashPage;
