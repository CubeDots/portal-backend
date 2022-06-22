import Carousel from "react-multi-carousel";
import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoPopUp from "../update/VideoPopUp";
import { youtube_parser } from '../../common/Constants'
import { API_ENDPOINT } from "../../common/Constants";

function EventComponent(props) {
    let publicPath = process.env.PUBLIC_URL;
    const [eventsLoading, setEventsLoading] = useState(false);
    const [events, setEvents] = useState([]);
    const [isVideoModalShow, setIsVideoModalShow] = useState(false);
    const [activeVideoData, setActiveVideoData] = useState(null);
    async function fetchEvents() {
        setEventsLoading(true);
        try {
            const res = await axios.get(API_ENDPOINT + "cuevent/latestHome");
            //const res = await axios.get(publicPath + "/assets/data/events.json");
            if (res.data.data) {
                setEventsLoading(false);
                setEvents(res.data.data);
            }
        } catch (error) {
            // console.error("error ", error);
            setEventsLoading(false);
        }
    }
    const showVideoModal = (r) => {
        // console.log("showVideoModal clicked");
        setActiveVideoData(r);
        setIsVideoModalShow(true);
    }

    const closeVideoModal = () => {
        // console.log("closeVideoModal trigger");
        setIsVideoModalShow(false);
        setActiveVideoData(null);
    }
    useEffect(() => {
        // window.scrollTo({ top:0,left:0,behavior:'smooth'});
        fetchEvents();
    }, []);
    if (eventsLoading)
        return ("Please wait...");

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            paritialVisibilityGutter: 60
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            paritialVisibilityGutter: 50
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            paritialVisibilityGutter: 0
        }
    };
    return (
        <>
            {eventsLoading ?
                <>
                    <div className="text-center">Loading...</div>
                </>
                :
                <>
                    <div>


                        <Carousel
                            ssr
                            partialVisbile
                            itemClass="image-item"
                            responsive={responsive}
                            autoPlay={props.deviceType !== "mobile" ? true : false}>
                            {events && events.map((image, index) => {
                                return (
                                    <div key={index} className="eventContent ">
                                        <img onClick={() => showVideoModal(image)} src={'https://img.youtube.com/vi/' + youtube_parser(image.youtube_url) + '/maxresdefault.jpg'} alt="" className='img-fluid' />
                                        {/* <iframe draggable={false} style={{ width: "100%" }} src={image.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                                        <p>{image.title}</p>
                                        <div className="eventContentPlayBtn">
                                           <img  onClick={() => showVideoModal(image)} src={publicPath + "/assets/images/Play_button.svg"} />
                                        </div>
                                    </div>
                                );
                            })}
                        </Carousel>

                        <VideoPopUp show={isVideoModalShow} onHide={closeVideoModal} data={activeVideoData} />
                    </div>
                </>
            }
        </>

    )
}
export default EventComponent;