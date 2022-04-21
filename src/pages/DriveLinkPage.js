import React, { useEffect, useRef} from 'react';
import "react-multi-carousel/lib/styles.css";


function DriveLinkPage() {
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
            <div className="mt-70">
                <div className="driveLinksSection">
                    <div className="driveHeading">
                        <h2>Drive Link</h2>
                    </div>
                    <div className='container'>
                        <div className='driveLinkBox'>
                            <div className="row">
                                <div className="col-md-9">
                                    <div className='driveLinksContent'>
                                        <div className='row'>
                                            <div className='col-md-4'>
                                                <img src={publicPath + "/assets/images/missionvision.png"} className="img-fluid h-100" />
                                            </div>
                                            <div className='col-md-8'>
                                                <div className='row'>
                                                    <div className='col-2'>
                                                        <img src={publicPath + "/assets/images/dap.png"} className="img-fluid " />
                                                    </div>
                                                    <div className='col-10'>
                                                        <div className='driveLinkHeadingSection'>
                                                            <h5>Lorem ipsum dolor sit</h5>
                                                            <small><p>lorem ipsum dolor</p></small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</small>
                                                </div>
                                                <div className='text-end'>
                                                    <button className="downloadLinkBtn">Download Link</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='driveLinksContent'>
                                        <div className='row'>
                                            <div className='col-md-4'>
                                                <img src={publicPath + "/assets/images/missionvision.png"} className="img-fluid h-100" />
                                            </div>
                                            <div className='col-md-8'>
                                                <div className='row'>
                                                    <div className='col-2'>
                                                        <img src={publicPath + "/assets/images/dap.png"} className="img-fluid " />
                                                    </div>
                                                    <div className='col-10'>
                                                        <div className='driveLinkHeadingSection'>
                                                            <h5>Lorem ipsum dolor sit</h5>
                                                            <small><p>lorem ipsum dolor</p></small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</small>
                                                </div>
                                                <div className='text-end'>
                                                    <button className="downloadLinkBtn">Download Link</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='driveLinksContent'>
                                        <div className='row'>
                                            <div className='col-md-4'>
                                                <img src={publicPath + "/assets/images/missionvision.png"} className="img-fluid h-100" />
                                            </div>
                                            <div className='col-md-8'>
                                                <div className='row'>
                                                    <div className='col-2'>
                                                        <img src={publicPath + "/assets/images/dap.png"} className="img-fluid " />
                                                    </div>
                                                    <div className='col-10'>
                                                        <div className='driveLinkHeadingSection'>
                                                            <h5>Lorem ipsum dolor sit</h5>
                                                            <small><p>lorem ipsum dolor</p></small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</small>
                                                </div>
                                                <div className='text-end'>
                                                    <button className="downloadLinkBtn">Download Link</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='driveLinksContent'>
                                        <div className='row'>
                                            <div className='col-md-4'>
                                                <img src={publicPath + "/assets/images/missionvision.png"} className="img-fluid h-100" />
                                            </div>
                                            <div className='col-md-8'>
                                                <div className='row'>
                                                    <div className='col-2'>
                                                        <img src={publicPath + "/assets/images/dap.png"} className="img-fluid " />
                                                    </div>
                                                    <div className='col-10'>
                                                        <div className='driveLinkHeadingSection'>
                                                            <h5>Lorem ipsum dolor sit</h5>
                                                            <small><p>lorem ipsum dolor</p></small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</small>
                                                </div>
                                                <div className='text-end'>
                                                    <button className="downloadLinkBtn">Download Link</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className='offerImage'>
                                        <img src={publicPath + "/assets/images/missionvision.png"} className="img-fluid " />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default DriveLinkPage;