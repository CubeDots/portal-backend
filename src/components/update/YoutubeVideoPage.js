import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Player, ControlBar, BigPlayButton } from 'video-react';

//import Moment from 'react-moment';
import axios from "axios";
//import { LazyLoadImage } from 'react-lazy-load-image-component';

import { API_ENDPOINT } from "../../common/Constants";
import CharactersLimitComponent from "../CharactersLimitComponent";
import SocialShareButtons from "./SocialShareButtons";

import VideoPopUp from "./VideoPopUp";

function YoutubeVideoPage() {
    let publicPath = process.env.PUBLIC_URL;

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


    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        setCuSocialsLoading(true);
        try {
            const res = await axios.get(API_ENDPOINT + "cusocial/latestByCategory/video");
            if (res.data.data)
                setCuSocials(res.data.data);

            setCuSocialsLoading(false);

        } catch (error) {
            console.error("error ", error);
            setCuSocialsLoading(false);
        }
    }


    const onPrevClick = () => {
        carouselRef.current.prev();
    };
    const onNextClick = () => {
        carouselRef.current.next();
    };

    const carouselRef = useRef(null);


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
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

    return (
        <>

            <div className="videosSection  py-5 mb-5">
                <div className="container">
                    <h2>Videos</h2>

                    {cuSocialsLoading ?
                        <>
                            <div className="text-center">Loading...</div>
                        </>
                        :
                        <>
                            <div>
                                {cuSocials.length > 0 ?
                                    <>
                                        <Carousel responsive={responsive}>
                                            {cuSocials.map((row, index) =>
                                                <div key={row.id}>
                                                    <div className='videoSectionBox'>
                                                        <div className="videoBox" onClick={() => showVideoModal(row)}>
                                                            <Player fluid={true} poster={publicPath + "/assets/images/home/01.jpg"}
                                                                playsInline
                                                                src={row.youtube_url}>
                                                                <BigPlayButton position="center" />
                                                                <ControlBar disableCompletely={true} />
                                                            </Player>
                                                        </div>
                                                        <div className="videoBoxContent">
                                                            <h6><CharactersLimitComponent isShowbutton={false} content={row.title} limit={70} /></h6>

                                                            <small><CharactersLimitComponent isShowbutton={false} content={row.medium_description} limit={120} /></small>
                                                            <div className="viewBtnDiv mt-3">
                                                                <Link to={`/cusocials/${row.slug}`} className="viewVideoBtn">Read More</Link>
                                                            </div>

                                                            <SocialShareButtons data={row}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </Carousel>
                                    </>
                                    :
                                    <><div className="text-center text-light">No data available.</div></>}
                            </div>
                        </>
                    }

                </div>
            </div>
            <VideoPopUp show={isVideoModalShow} onHide={closeVideoModal} data={activeVideoData}  />
        </>
    )
}
export default YoutubeVideoPage;