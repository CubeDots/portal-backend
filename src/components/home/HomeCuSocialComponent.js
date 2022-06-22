import React, { useState , useEffect } from "react";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useIsAuthenticated } from 'react-auth-kit';
import BecomeOurPartnerModal from "./BecomeOurPartnerModal";


function HomeCuSocialComponent() {
    let publicPath = process.env.PUBLIC_URL;
    const isAuthenticated = useIsAuthenticated();

    const [isBecomeOurPartnerModalShow, setIsBecomeOurPartnerModalShow] = useState(false);
    const showBecomeOurPartnerModal = () => {
        // console.log("showBecomeOurPartnerModal clicked");
        setIsBecomeOurPartnerModalShow(true);
    }

    const closeBecomeOurPartnerModalModal = () => {
        // console.log("closeBecomeOurPartnerModalModal trigger");
        setIsBecomeOurPartnerModalShow(false);
    }

    /*
       const [newsFeedsLoading, setNewsFeedsLoading] = useState(false);
       const [newsFeeds, setNewsFeeds] = useState([]);
    
        useEffect(() => {
            fetchData();
        }, []);
    
        async function fetchData() {
            setNewsFeedsLoading(true);
            try {
                const res = await axios.get(API_ENDPOINT + "cusocial/latestHome");
                if (res.data.data)
                    setNewsFeeds(res.data.data);
    
                setNewsFeedsLoading(false);
    
            } catch (error) {
                console.error("error ", error);
                setNewsFeedsLoading(false);
            }
        }
    */

        useEffect(() => {
            //genRandomString();
            window.scrollTo({top:0 , behavior:'smooth'});
        }, []);
    return (
        <>
            <div className="cusocialSectionBox">
                <BecomeOurPartnerModal show={isBecomeOurPartnerModalShow} onHide={closeBecomeOurPartnerModalModal} />
                <div className="row justify-content-evenly">
                    <div className="col-md-6">
                        <div className="newsfeedcard">
                            <div>
                                {isAuthenticated() ?
                                    <Link to={"/cusocials/offers"} ><LazyLoadImage alt="" src={publicPath + '/assets/images/cusocial/offers-thumbnail.jpg'} className="img-fluid" />
                                    </Link>
                                    :
                                    <Link to="" onClick={showBecomeOurPartnerModal}><LazyLoadImage alt="" src={publicPath + '/assets/images/cusocial/offers-thumbnail.jpg'} className="img-fluid" />
                                    </Link>
                                }
                            </div>
                            <div>
                                <div className="newsfeedDetail">
                                    {isAuthenticated() ?
                                        <Link to={"/cusocials/offers"} ><h2> Offers </h2></Link>
                                        :
                                        <Link to="" onClick={showBecomeOurPartnerModal} ><h2> Offers </h2></Link>
                                    }
                                    <p>
                                    Check Out the Latest Offers and Exclusive Deals
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="newsfeedcard">
                            <div>
                                <Link to={"/cusocials/blog"}>
                                    <LazyLoadImage alt="" src={publicPath + '/assets/images/cusocial/Blog-thumbnail.jpg'} className="img-fluid" />
                                </Link>
                            </div>
                            <div className="newsfeedDetail">
                                <Link to={"/cusocials/blog"} ><h2>
                                    Blog
                                </h2></Link>
                                <p>
                                Read More About Real Estate
                                </p>
                            </div>
                        </div>
                    </div>






                    {/* <div className="newsfeedcard">
                        <div className="row">
                            <div className="col-md-5">
                                <LazyLoadImage alt="" src={publicPath + '/assets/images/newsfeed.jpeg'} className="img-fluid" />
                            </div>
                            <div className="col-md-7">
                                <div className="newsfeedDetail">
                                    <Link to={"/cusocials/category/announcement"} ><h5>
                                        <CharactersLimitComponent isShowbutton={false} content={row.title} limit={100} />
                                        Announcement
                                    </h5></Link>
                                    <p>
                                        Catch up with Cubedots’s latest news
                                    </p>
                                    <p><Moment fromNow>{row.created_at}</Moment></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="newsfeedcard">
                            <div className="row">
                                <div className="col-md-5">
                                    <LazyLoadImage alt="" src={publicPath + '/assets/images/newsfeed.jpeg'} className="img-fluid" />
                                </div>
                                <div className="col-md-7">
                                    <div className="newsfeedDetail">
                                        <Link to={"/cusocials/category/blog"} ><h5>
                                            <CharactersLimitComponent isShowbutton={false} content={row.title} limit={100} />
                                            Blog
                                        </h5></Link>
                                        <p>
                                            Real estate and market-related topics
                                        </p>
                                        <p><Moment fromNow>{row.created_at}</Moment></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="newsfeedcard">
                            <div className="row">
                                <div className="col-md-5">
                                    <LazyLoadImage alt="" src={publicPath + '/assets/images/newsfeed.jpeg'} className="img-fluid" />
                                </div>
                                <div className="col-md-7">
                                    <div className="newsfeedDetail">
                                        <Link to={"/cusocials/category/offer"} ><h5>
                                            <CharactersLimitComponent isShowbutton={false} content={row.title} limit={100} />
                                            Offer
                                        </h5></Link>
                                        <p>
                                            Check out Cubedots’s most recent and exclusive offers
                                        </p>
                                        <p><Moment fromNow>{row.created_at}</Moment></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-md-6">
                    <div className="newsfeedcard">
                        <div className="row">
                            <div className="col-md-5">
                                <LazyLoadImage alt="" src={publicPath + '/assets/images/newsfeed.jpeg'} className="img-fluid" />
                            </div>
                            <div className="col-md-7">
                                <div className="newsfeedDetail">
                                    <Link to={"/cusocials/category/video"} ><h5>
                                        Video
                                    </h5></Link>
                                    <p>
                                        Lorem Ipsum Dolor Sit Amet, Consectetur Lorem Ipsum Dolor Sit Amet, Consectetur Lorem Ipsum Dolor Sit Amet, Consectetur Lorem Ipsum Dolor Sit Amet, ConsecteturLorem
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                </div>
            </div>
        </>
    );
}

export default HomeCuSocialComponent;