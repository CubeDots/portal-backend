import { useState } from 'react';
import { Link } from 'react-router-dom';
import TutorialModal from '../cuverseinsight/TutorialModal';


function Knowlegdepage() {
    let publicPath = process.env.PUBLIC_URL;

    const [isVideoModalShow, setIsVideoModalShow] = useState(false);
    const [activeVideoData, setActiveVideoData] = useState(null);


    const showVideoModal = (r) => {
        console.log("showVideoModal clicked");
        setActiveVideoData(r);
        setIsVideoModalShow(true);
    }

    const closeVideoModal = () => {
        console.log("closeVideoModal trigger");
        setIsVideoModalShow(false);
        setActiveVideoData(null);
    }


    return (
        <>
            <div className="position-relative knowledgeSection">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-6 order-md-0 order-2 ">
                            <div className="cuverseNewContent">
                                <h2 className="vegonHeading ">Insights</h2>
                                <div className="row mb-2">
                                    <div className="col-1">
                                        <img src={publicPath + "/assets/images/cuverseknowledge/citizenship.svg"} className="img-fluid " />
                                    </div>
                                    <div className="col-11">
                                        <h5><Link to={"/cuverse/citizenship"}> Citizenship related </Link></h5>
                                        <small>Get a clear insight on the Citizenship By Investment Program and the Turkish Citizenship acquirement conditions.</small>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-1">
                                        <img src={publicPath + "/assets/images/cuverseknowledge/tutorial.svg"} className="img-fluid " />
                                    </div>
                                    <div className="col-11">
                                        {/* <h5><Link to="" onClick={() => showVideoModal({ title: 'Tutorial', url: publicPath + '/assets/videos/cuverse/tutorial/English Tutorial.mp4' })}></Link></h5> */}
                                       <h5> <Link to="/cuverse/tutorials">Tutorial </Link></h5>
                                        <small>Click here, download, and share the videos provided to simplify the user-experience of Cubedots App.</small>
                                    </div>
                                </div>
                                <div className="row">
                                    {/* <div className="col-1">
                                            <img src={publicPath + "/assets/images/cuverseknowledge/leagl.svg"} className="img-fluid " />
                                        </div>
                                        <div className="col-11">
                                            <h5><Link to={"/"}> Legal Assistance </Link></h5>
                                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</small>
                                        </div> */}
                                    <div className="col-1">
                                        <img src={publicPath + "/assets/images/cuverseknowledge/leagl.svg"} className="img-fluid " />
                                    </div>
                                    <div className="col-11">
                                        <h5><Link to={"/cuverse/about-turkey"}> About Turkey </Link></h5>
                                        <small>Learn more about Turkey, the Turkish real estate market, and what it has to offer.</small>
                                    </div>
                                </div>
                                    {/* <div className="col-1">
                                            <img src={publicPath + "/assets/images/cuverseknowledge/about.svg"} className="img-fluid " />
                                        </div>
                                        <div className="col-11">
                                            <h5><Link to={"/"}> FAQ's </Link></h5>
                                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</small>
                                        </div> */}
                                </div>
                            </div>
                        <div className="col-md-6 ">
                            <div className="culibrarySecondProject">
                                <img src={publicPath + "/assets/images/insights-Banner.jpg"} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
                <TutorialModal show={isVideoModalShow} onHide={closeVideoModal} data={activeVideoData} />
            </div>
        </>
    )
}
export default Knowlegdepage;