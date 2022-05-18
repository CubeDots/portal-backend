import React, { useEffect, useRef, useState } from 'react';
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import axios from "axios";
import "video-react/dist/video-react.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useIsAuthenticated } from 'react-auth-kit';

/*
import EventPage from "../components/update/EventPage"
import BlogPage from "../components/update/BlogPage"
import OfferPage from "../components/update/OfferPage"
import YoutubeVideoPage from "../components/update/YoutubeVideoPage"
import GeneralPage from "../components/update/GeneralPage"
import AnnouncementPage from "../components/update/AnnouncementPage"
*/
function CuSocialPage(props) {
    let publicPath = process.env.PUBLIC_URL;
    const isAuthenticated = useIsAuthenticated();

    const [updatesLoading, setUpdatesLoading] = useState(false);
    const [updates, setUpdates] = useState([]);

    async function fetchUpdates() {
        setUpdatesLoading(true);
        try {
            const res = await axios.get(publicPath + "/assets/data/updates.json");
            if (res.data) {
                setUpdatesLoading(false);
                setUpdates(res.data);
            }
        } catch (error) {
            console.error("error ", error);
            setUpdatesLoading(false);
        }
    }
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
      }, []);
    useEffect(() => {
        window.scrollTo({ top:0,left:0,behavior:'smooth'});
        fetchUpdates();
    }, []);

    const onPrevClick = () => {
        carouselRef.current.prev();
    };
    const onNextClick = () => {
        carouselRef.current.next();
    };

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const carouselRef = useRef(null);

    return (
        <div className='mt-70'>
            <div className='UpdatesSection'>
                <div className="bannerAboutUs">
                    <img src={publicPath + "/assets/images/bannerimages/cusocialbanner.jpg"} className="img-fluid w-100" />

                </div>
                <div className='container'>
                    <div className='bannerAboutUs'>
                        <h1>CuSocial</h1>
                    </div>

                    <div className="row justify-content-evenly">
                        <div className="col-md-6">
                            <div className="newsfeedcard">
                                <div>
                                    <Link to={"/cusocials/offers"} ><LazyLoadImage alt="" src={publicPath + '/assets/images/cusocial/offers-thumbnail.jpg'} className="img-fluid" />
                                    </Link>
                                </div>
                                <div>
                                    <div className="newsfeedDetail">
                                        <Link to={"/cusocials/offers"} ><h2>
                                            Offers
                                        </h2></Link>
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
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CuSocialPage;

