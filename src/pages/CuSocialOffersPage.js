import React, { useEffect, useRef, useState } from 'react';
import "react-multi-carousel/lib/styles.css";
import { useParams, useNavigate, Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Player, ControlBar, BigPlayButton } from 'video-react';

import Moment from 'react-moment';
import axios from "axios";
import "video-react/dist/video-react.css";
import { useIsAuthenticated } from 'react-auth-kit';

import UnauthenticatedPage from "../errors/Unauthorized";
import { API_ENDPOINT } from "../common/Constants";
import CharactersLimitComponent from "../components/CharactersLimitComponent";
import VideoPopUp from "../components/update/VideoPopUp";
// import SocialShareButtons from "../components/update/SocialShareButtons";


function CuSocialOffersPage(props) {
    let publicPath = process.env.PUBLIC_URL;
    let category = 'offers'; //useParams();
    const navigate = useNavigate();
    const isAuthenticated = useIsAuthenticated();


    const [isVideoModalShow, setIsVideoModalShow] = useState(false);
    const [activeVideoData, setActiveVideoData] = useState(null);


    const [cuSocialsLoading, setCuSocialsLoading] = useState(false);
    const [cuSocials, setCuSocials] = useState([]);

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

    async function fetchUpdates(category) {
        setCuSocialsLoading(true);
        console.log('category ', category);
        try {
            const res = await axios.get(API_ENDPOINT + "cusocial/latestByCategory/" + category);
            if (res.data.data) {
                setCuSocialsLoading(false);
                setCuSocials(res.data.data);
            }
        } catch (error) {
            console.error("error ", error);
            setCuSocialsLoading(false);
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        fetchUpdates(category);
    }, [category]);



    const openLogin = () => {
        console.log("openLogin clicked");
        document.querySelector('#loginButton').click();
    }

    if (!isAuthenticated()) {
        return (
            <>
                <div className="mt-70 toOfferpageErrorPage">
                    <div className="container">
                        <div className="row my-5 py-5">
                            <div className="col my-5 text-center">
                                <h4>To view Offers please <button className="btntheme" onClick={() => openLogin()}>Login here</button></h4>
                                <div><br /></div>

                                &nbsp;
                                <button className="btntheme" onClick={() => navigate(-1)}>Go back</button>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }


    return (
        <div className='mt-70'>
            <div className='CategoryUpdatesSection'>

                <div className='container'>
                    <button className="cusocialBackBtn" onClick={() => navigate(-1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg> Back
                    </button>
                    <div className="bannerAboutUs">
                        <h1>CuSocial</h1>
                    </div>

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className=''>
                                <div className="categoryHeading">
                                    <h3 className="">Offers</h3>
                                    <div>
                                        {cuSocialsLoading ?
                                            <>
                                                <div className="text-center">Loading...</div>
                                            </>
                                            :
                                            <>
                                                <div>
                                                    {cuSocials.length > 0 ?
                                                        <>
                                                            <div className="row">
                                                                {cuSocials.map((row, index) =>
                                                                    <div className="col-md-4 col-sm-6" key={row.id}>
                                                                        <div className={'text-light categoryBox ' + category}>
                                                                            <div className="categoryBoxImage">
                                                                                <Link to={`/cusocials/${category}/${row.slug}`}>
                                                                                    {category === 'video' ?
                                                                                        <div onClick={() => showVideoModal(row)}>
                                                                                            <Player fluid={true} poster={publicPath + "/assets/images/home/01.jpg"}
                                                                                                playsInline
                                                                                                src={row.youtube_url}>
                                                                                                <BigPlayButton position="center" />
                                                                                                <ControlBar disableCompletely={true} />
                                                                                            </Player>
                                                                                        </div>
                                                                                        :
                                                                                        <LazyLoadImage alt="" src={row.media_s3_base_path + row.featured_image} className="img-fluid w-100" />
                                                                                    }
                                                                                </Link>
                                                                            </div>
                                                                            <div className="categoryComponentsDetails">
                                                                                <h5>
                                                                                    <Link to={`/cusocials/${category}/${row.slug}`}><CharactersLimitComponent isShowbutton={false} content={row.title} limit={40} /></Link>
                                                                                </h5>
                                                                                <p><CharactersLimitComponent isShowbutton={false} content={row.medium_description} limit={100} /></p>

                                                                                <Link to={`/cusocials/${category}/${row.slug}`} className="blogBtn">Read More</Link>

                                                                                {/* <SocialShareButtons data={row} /> */}

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </>
                                                        :
                                                        <><div className="text-center">No offer found.</div></>
                                                    }

                                                </div>
                                            </>
                                        }


                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
export default CuSocialOffersPage;

