import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import axios from "axios";

function HomeVideoComponent() {
    let publicPath = process.env.PUBLIC_URL;
    const [homevideoLoading, setHomeVideoLoading] = useState(false);
    const [homevideo, setHomeVideo] = useState([]);

    async function fetchHomeVideo() {
        setHomeVideoLoading(true);
        try {
            const res = await axios.get(publicPath + "/assets/data/homeVideo.json");
            if (res.data) {
                setHomeVideoLoading(false);
                setHomeVideo(res.data);
            }
        } catch (error) {
            console.error("error ", error);
            setHomeVideoLoading(false);
        }
    }

    const [isAutoPlay, setIsAutoPlay] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsAutoPlay(true);
        }, 1000)
        fetchHomeVideo();
    }, []);

    return (
        <>
            <div className="col-md-6 bannerSlider">
                <div className="">
                    <div id="carouselExampleControls" interval="10000" data-bs-interval="false" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner ">
                            {homevideo.length > 0 && homevideo.map((items, i) =>
                                <div className={i === 0 ? 'carousel-item active' : 'carousel-item'} key={i}>
                                    {/* <Player
                                        fluid={true} autoPlay={true}
                                        playsInline
                                        src={publicPath + items.Videourl}>
                                        <BigPlayButton position="center" />
                                        <ControlBar disableCompletely={true} />
                                    </Player> */}
                                    <ReactPlayer playsinline={true} url={publicPath + items.Videourl} muted={true} playing={true} loop={true} width='100%' height='100%' />
                                    {/* <ResponsivePlayer url={publicPath + items.Videourl} playing={true} /> */}
                                </div>
                            )
                            }
                        </div>
                        {/* <div className="carouselNav">
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true">
                                    <img alt="" src={publicPath + "/assets/images/left.svg"} />
                                </span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true">
                                    <img alt="" src={publicPath + "/assets/images/right.svg"} />
                                </span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeVideoComponent;