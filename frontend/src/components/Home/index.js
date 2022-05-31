import { Helmet } from "react-helmet";

function splashPage() {
    return (
        <div>
        <Helmet>
            <title>Home</title>
        </Helmet>
            <div className="top-banner-header">
                <h2>Find Yourself in Luxury</h2>
                <h3>Discover and book Resorts all over the world, experience the life of comfort and wilderness</h3>
            </div>
            <div className="searchBar-home">
                <p>SEARCH BAR</p>
            </div>
            <div className="main-picture-home">
                <p>MAIN IMAGE</p>
            </div>
            <div className="banner-sec-container">
                <div className="content-conatiner-1">
                    <p>img</p>
                    <p>content</p>
                </div>
                <div className="content-conatiner-2">
                    <p>img</p>
                    <p>content</p>
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
    )
}

export default splashPage;
