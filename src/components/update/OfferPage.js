
import React, { useEffect, useRef, useState } from 'react';
import axios from "axios";

import { API_ENDPOINT } from "../../common/Constants";
import {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    RedditShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    MailruShareButton,
    ViberShareButton,
    WorkplaceShareButton,
    LineShareButton,
    EmailShareButton,
  } from 'react-share';
  import {
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon,
    GooglePlusIcon,
    LinkedinIcon,
    PinterestIcon,
    VKIcon,
    OKIcon,
    RedditIcon,
    TumblrIcon,
    LivejournalIcon,
    MailruIcon,
    ViberIcon,
    WorkplaceIcon,
    LineIcon,
    EmailIcon,
  } from 'react-share';

function OfferPage() {
    let publicPath = process.env.PUBLIC_URL;

    const [cuSocialsLoading, setCuSocialsLoading] = useState(false);
    const [cuSocials, setCuSocials] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        setCuSocialsLoading(true);
        try {
            const res = await axios.get(API_ENDPOINT + "cusocial/latestByCategory/offer");
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

    return (
        <>
            <div className='offercusocialPage'>
                <h2>Offer</h2>
                <h4 id="scrollspyGeneral"></h4>
                <div className="row">
                    <div className="col-md-8">
                        <div className="h-100 p-1">
                            <img src={publicPath + "/assets/images/missionvision.png"} className="img-fluid h-100" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-12">
                                <div className='p-1'>
                                    <img src={publicPath + "/assets/images/missionvision.png"} className="img-fluid w-100" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className='p-1'>
                                    <img src={publicPath + "/assets/images/missionvision.png"} className="img-fluid w-100" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className='p-1'>
                                    <img src={publicPath + "/assets/images/missionvision.png"} className="img-fluid w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="offerSection py-5 mb-5">
                <div className="container">
                    <div className="row  justify-content-between">
                        <div className="col-md-7">
                            <div className='cuSocialOfferImages'>
                                <div className="row">
                                    <div className="col-md-8">
                                        <img src={publicPath + "/assets/images/missionvision.png"} className="img-fluid w-100" />

                                    </div>
                                    <div className="col-md-4">
                                        <img src={publicPath + "/assets/images/missionvision.png"} className="img-fluid w-100 pb-2" />

                                        <div className="col-md-12">
                                            <div className="fiftyPercent mt-2">
                                                <h3>50% Off</h3>
                                                <h3>Book Now</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='cuSocialOfferContent'>
                                <h2>Offers</h2>
                                <Carousel ref={carouselRef} indicators={false}>
                                    <Carousel.Item interval={1000}>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                                    </Carousel.Item>
                                    <Carousel.Item interval={1000}>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                                    </Carousel.Item>
                                    <Carousel.Item interval={1000}>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                                    </Carousel.Item>
                                </Carousel>
                                <div className="carouselNav text-center">
                                    <button className="carousel-control-prev" type="button" onClick={onPrevClick} data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                            </svg>
                                        </span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" onClick={onNextClick} data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                            </svg>
                                        </span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
export default OfferPage;