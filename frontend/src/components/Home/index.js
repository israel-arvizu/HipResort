import { Helmet } from "react-helmet";
import './homePage.css'
function splashPage() {
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
                <div className="searchBar-home">
                    {/*IMPLEMENT SEARCH BAR
                    <p>SEARCH BAR</p>*/}
                </div>
                <div className="main-picture-home">
                    <img className="main-picture" src="/HomePageImage.jpg"/>
                </div>
                <div className="banner-sec-container">
                    <div className="content-container-1">
                        <img className="explore-image-home" src="https://img1.10bestmedia.com/Images/Photos/387266/Resort-Horizontal-Credit-The-Resort-at-Pelican-Hill_54_990x660.jpg" />
                        <div className="content-label-1">
                            <div className="explore-content-text">
                                <p className="top-explore-text">Summer is almost here</p>
                                <p className="bottom-explore-bold-text">Explore California and Enjoy the sunny beaches</p>
                            </div>
                            <div className="explore-content-text-btn">
                                <button className="button-explore-main">Explore Cali</button>
                            </div>
                        </div>
                    </div>
                    <div className="content-container-1 secondHome">
                        <img className="explore-image-home" src="https://a.cdn-hotels.com/gdcs/production2/d1821/71438820-8f10-11e8-b6b0-0242ac110007.jpg" />
                        <div className="content-label-1">
                            <div className="explore-content-text">
                                <p className="top-explore-text firstHomeBtn">Luxury at its finest</p>
                                <p className="bottom-explore-bold-text firstHomeBtn">The Miami lifestyle experience is worth the trip</p>
                            </div>
                            <div className="explore-content-text-btn">
                                <button className="button-explore-main secondHomeBtn">Explore Miami</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="explore-section-container">
                    <div className="explore-container-1">
                        <a>EXPLORE IMG</a>
                        <a>EXPLORE CONTENT</a>
                    </div>
                    <div className="explore-container-2">
                        <a>EXPLORE IMG</a>
                        <a>EXPLORE CONTENT</a>
                    </div>
                    <div className="explore-container-3">
                        <a>EXPLORE IMG</a>
                        <a>EXPLORE CONTENT</a>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default splashPage;
