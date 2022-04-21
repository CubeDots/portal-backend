import React, { useEffect, useRef } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function ProjectOfferPage() {
    let publicPath = process.env.PUBLIC_URL;
    useEffect(() => {
        window.scrollTo({ top:0,left:0,behavior:'smooth'});
    }, []);

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
            items: 5
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
    return (
        <>
            <div className="">
                <div className="projectOfferSection">
                    <div className="projectOfferBanner">
                        <h2>Project Offer</h2>
                    </div>
                    <div className="container">
                        <h2 className="topHeading">Top Offers</h2>
                        <div className="projectOfferPageContent">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="projectOfferImages">
                                        <img src={publicPath + "/assets/images/missionvision.png"} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="projectOfferContent">
                                        <div className="mb-4">
                                            <h6 className="projectOfferHeading">Book Now and Avail 7 Lacs Discount on or before 15th jan 2022</h6>
                                        </div>
                                        <div className="row justify-content-between">
                                            <div className="col-md-2 text-center">
                                                <img src={publicPath + "/assets/images/dap.png"} className="img-fluid  p-2" />
                                            </div>
                                            <div className="col-sm-7">
                                                <div className='projectOfferPara'>
                                                <h5 className="m-auto">Lorem ipsum dolor sit</h5>
                                                <small>Lorem ipsum dolor</small>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="d-flex justify-content-end">
                                                    <div className="twoHeading">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-card-image" viewBox="0 0 16 16">
                                                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                                                        </svg>
                                                        <h5>2D</h5>
                                                    </div>
                                                    <div className="twoHeading">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-card-image" viewBox="0 0 16 16">
                                                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                                                        </svg>
                                                        <h5>3D</h5>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row py-3 detailsBox">
                                        <div className="col-md-2">
                                            <h5>Details:</h5>
                                        </div>
                                        <div className="col-md-10">
                                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</small>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="shareBtns">
                                            <div className="svgDiv">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-arrow-90deg-right" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <button className="shareContactBtn">Contact</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="projectOfferPageContent">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="projectOfferImages">
                                        <img src={publicPath + "/assets/images/missionvision.png"} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="projectOfferContent">
                                        <div className="mb-4">
                                            <h6 className="projectOfferHeading">Book Now and Avail 7 Lacs Discount on or before 15th jan 2022</h6>
                                        </div>
                                        <div className="row justify-content-between">
                                            <div className="col-md-2 text-center">
                                                <img src={publicPath + "/assets/images/dap.png"} className="img-fluid  p-2" />
                                            </div>
                                            <div className="col-sm-7">
                                                <div className='projectOfferPara'>
                                                <h5 className="m-auto">Lorem ipsum dolor sit</h5>
                                                <small>Lorem ipsum dolor</small>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="d-flex justify-content-end">
                                                    <div className="twoHeading">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-card-image" viewBox="0 0 16 16">
                                                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                                                        </svg>
                                                        <h5>2D</h5>
                                                    </div>
                                                    <div className="twoHeading">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-card-image" viewBox="0 0 16 16">
                                                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                                                        </svg>
                                                        <h5>3D</h5>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row py-3 detailsBox">
                                        <div className="col-md-2">
                                            <h5>Details:</h5>
                                        </div>
                                        <div className="col-md-10">
                                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</small>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="shareBtns">
                                            <div className="svgDiv">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-arrow-90deg-right" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <button className="shareContactBtn">Contact</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="projectOfferPageContent">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="projectOfferImages">
                                        <img src={publicPath + "/assets/images/missionvision.png"} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="projectOfferContent">
                                        <div className="mb-4">
                                            <h6 className="projectOfferHeading">Book Now and Avail 7 Lacs Discount on or before 15th jan 2022</h6>
                                        </div>
                                        <div className="row justify-content-between">
                                            <div className="col-md-2 text-center">
                                                <img src={publicPath + "/assets/images/dap.png"} className="img-fluid  p-2" />
                                            </div>
                                            <div className="col-sm-7">
                                                <div className='projectOfferPara'>
                                                <h5 className="m-auto">Lorem ipsum dolor sit</h5>
                                                <small>Lorem ipsum dolor</small>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="d-flex justify-content-end">
                                                    <div className="twoHeading">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-card-image" viewBox="0 0 16 16">
                                                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                                                        </svg>
                                                        <h5>2D</h5>
                                                    </div>
                                                    <div className="twoHeading">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-card-image" viewBox="0 0 16 16">
                                                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                                                        </svg>
                                                        <h5>3D</h5>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row py-3 detailsBox">
                                        <div className="col-md-2">
                                            <h5>Details:</h5>
                                        </div>
                                        <div className="col-md-10">
                                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</small>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="shareBtns">
                                            <div className="svgDiv">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-arrow-90deg-right" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <button className="shareContactBtn">Contact</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="upcomingOfferSection">
                            <h2>Upcoming Offer</h2>
                            <Carousel responsive={responsive}>
                                <div>
                                    <div className="upcomingOfferBox">
                                        <img src={publicPath + "/assets/images/missionvision.png"} className="img-fluid" />
                                        <div className='upcomingOfferContent'>
                                            <div className='row'>
                                                <div className='col-md-9'>
                                                    <div className=''>
                                                        <h6>Lorem ipsum dolor sit amet</h6>
                                                    </div>
                                                    <div>
                                                        <h4>50% OFF</h4>
                                                    </div>
                                                </div>
                                                <div className='col-md-3'>
                                                    <img src={publicPath + "/assets/images/dap.png"} className="img-fluid " />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="upcomingOfferBox">
                                        <img src={publicPath + "/assets/images/missionvision.png"} className="img-fluid" />
                                        <div className='upcomingOfferContent'>
                                            <div className='row'>
                                                <div className='col-md-9'>
                                                    <div className=''>
                                                        <h6>Lorem ipsum dolor sit amet</h6>
                                                    </div>
                                                    <div>
                                                        <h4>50% OFF</h4>
                                                    </div>
                                                </div>
                                                <div className='col-md-3'>
                                                    <img src={publicPath + "/assets/images/dap.png"} className="img-fluid " />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="upcomingOfferBox">
                                        <img src={publicPath + "/assets/images/missionvision.png"} className="img-fluid" />
                                        <div className='upcomingOfferContent'>
                                            <div className='row'>
                                                <div className='col-md-9'>
                                                    <div className=''>
                                                        <h6>Lorem ipsum dolor sit amet</h6>
                                                    </div>
                                                    <div>
                                                        <h4>50% OFF</h4>
                                                    </div>
                                                </div>
                                                <div className='col-md-3'>
                                                    <img src={publicPath + "/assets/images/dap.png"} className="img-fluid " />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="upcomingOfferBox">
                                        <img src={publicPath + "/assets/images/missionvision.png"} className="img-fluid" />
                                        <div className='upcomingOfferContent'>
                                            <div className='row'>
                                                <div className='col-md-9'>
                                                    <div className=''>
                                                        <h6>Lorem ipsum dolor sit amet</h6>
                                                    </div>
                                                    <div>
                                                        <h4>50% OFF</h4>
                                                    </div>
                                                </div>
                                                <div className='col-md-3'>
                                                    <img src={publicPath + "/assets/images/dap.png"} className="img-fluid " />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="upcomingOfferBox">
                                        <img src={publicPath + "/assets/images/missionvision.png"} className="img-fluid" />
                                        <div className='upcomingOfferContent'>
                                            <div className='row'>
                                                <div className='col-md-9'>
                                                    <div className=''>
                                                        <h6>Lorem ipsum dolor sit amet</h6>
                                                    </div>
                                                    <div>
                                                        <h4>50% OFF</h4>
                                                    </div>
                                                </div>
                                                <div className='col-md-3'>
                                                    <img src={publicPath + "/assets/images/dap.png"} className="img-fluid " />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProjectOfferPage;