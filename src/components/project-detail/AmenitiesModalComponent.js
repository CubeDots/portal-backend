
import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'

import Modal from 'react-bootstrap/Modal';

function AmenitiesModalComponent(props) {
    let publicPath = process.env.PUBLIC_URL;

    const [loading, setLoading] = React.useState(false);


    useEffect(() => {

        setLoading(false);

    }, []);

    return (
        <>
            <Modal {...props} className="amenitiesModal " backdrop="static" keyboard={false} size="xl" aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h6>Lorem ipsum</h6>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-3 amenitiesModal justify-content-center">

                    <Carousel variant="dark">
                        <Carousel.Item>
                            <div className='amenitiesbox'>
                                <div className='amenitiesImages'>
                                    <img className="img-fluid" src={publicPath + "/assets/images/swimmingpool.jpg"} alt="" />
                                </div>
                                <div className='amenitiesContent'>
                                </div>
                            </div>
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='amenitiesbox'>
                                <div className='amenitiesImages'>
                                    <img className="img-fluid" src={publicPath + "/assets/images/swimmingpool.jpg"} alt="" />
                                </div>
                                <div className='amenitiesContent'>
                                </div>
                            </div>
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='amenitiesbox'>
                                <div className='amenitiesImages'>
                                    <img className="img-fluid" src={publicPath + "/assets/images/swimmingpool.jpg"} alt="" />
                                </div>
                                <div className='amenitiesContent'>
                                </div>
                            </div>
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='amenitiesbox'>
                                <div className='amenitiesImages'>
                                    <img className="img-fluid" src={publicPath + "/assets/images/swimmingpool.jpg"} alt="" />
                                </div>
                                <div className='amenitiesContent'>
                                </div>
                            </div>
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='amenitiesbox'>
                                <div className='amenitiesImages'>
                                    <img className="img-fluid" src={publicPath + "/assets/images/swimmingpool.jpg"} alt="" />
                                </div>
                                <div className='amenitiesContent'>
                                </div>
                            </div>
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AmenitiesModalComponent;