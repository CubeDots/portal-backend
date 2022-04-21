import React, { useState, useEffect } from "react";
import ImageGallery from 'react-image-gallery';
import {  Modal } from 'react-bootstrap';

const FbLikeGridGallery = (props) => {
    /*
    const image = [
        {
            original: publicPath + "/assets/images/home/01.jpg",
            thumbnail: publicPath + "/assets/images/home/01.jpg",
        },
        {
            original: publicPath + "/assets/images/home/02.jpg",
            thumbnail: publicPath + "/assets/images/home/02.jpg",
        },
        {
            original: publicPath + "/assets/images/home/03.jpg",
            thumbnail: publicPath + "/assets/images/home/03.jpg",
        },
        {
            original: publicPath + "/assets/images/home/04.jpg",
            thumbnail: publicPath + "/assets/images/home/04.jpg",
        },
        {
            original: publicPath + "/assets/images/home/01.jpg",
            thumbnail: publicPath + "/assets/images/home/01.jpg",
        },
        {
            original: publicPath + "/assets/images/home/02.jpg",
            thumbnail: publicPath + "/assets/images/home/02.jpg",
        },
        {
            original: publicPath + "/assets/images/home/03.jpg",
            thumbnail: publicPath + "/assets/images/home/03.jpg",
        },
        {
            original: publicPath + "/assets/images/home/04.jpg",
            thumbnail: publicPath + "/assets/images/home/04.jpg",
        }
    ];
    */
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // let publicPath = process.env.PUBLIC_URL;
    const [title, setTitle] = useState('');
    const [images, setImages] = useState([]);
    const [imagesToShow, setImagesToShow] = useState(5);
    useEffect(() => {
        if (props.images.length > 0) {
            let newImages = props.images.length && props.images.map((r) => {
                return { original: r.media_s3_base_path + r.local_path, thumbnail: r.media_s3_base_path + r.local_path }
            })
            //console.log("newImages ",newImages);
            setImages(newImages);
        }
        setImagesToShow(props.countFrom);
        setTitle(props.title);
    }, [props]);

    return (
        <>
            <div className="row">

                {images.length > 0 ?
                    (
                        <>
                            {images.length > 0 && images.map((row, index) => (
                                <React.Fragment key={index.toString()}>
                                    {index < imagesToShow && (
                                        <>
                                            <div key={index} className="col-3 mb-2">
                                                <button className="galleryThumb" onClick={() => handleShow()}>
                                                    <img className="img-fluid" src={row.original} alt="" />
                                                </button>
                                            </div>
                                        </>)
                                    }
                                </React.Fragment>
                            ))}
                            {images.length > 0 && images.length > imagesToShow && (
                                <>
                                    <div className="col-3 mb-2 d-flex justify-content-center align-items-center" onClick={() => handleShow()}>
                                        <button className="galleryThumb"><strong>+{images.length - imagesToShow}</strong></button>
                                    </div>
                                </>
                            )}
                        </>
                    )

                    : (
                        <div className="col-12 mb-2 text-center text-light">No data available. </div>
                    )
                }

            </div>
            <Modal show={show} onHide={handleClose} fullscreen={true} className="unitGallery">
                <Modal.Header closeButton>
                    <h2>
                        {title ? title : 'Gallery'}
                    </h2>
                </Modal.Header>
                <Modal.Body>
                    {/* <Tabs defaultActiveKey="gallery" id="uncontrolled-tab-example" className="nav nav-tabs">
                        <Tab eventKey="gallery" title={<><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                        </svg> {title ? title : 'Gallery'}</>}> */}
                    <ImageGallery thumbnailPosition={'left'} showFullscreenButton={false} showPlayButton={false} items={images} />
                    {/* </Tab> */}
                    {/* <Tab eventKey="view" title={<><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
                            <g>
                                <path d="M10.4,444.4c0-131.6,0-263.2,0-394.9c4.7-6,10.5-6.8,17.5-4.6c12.2,3.8,24.5,7.2,36.7,10.8c1.2,0.3,2.4,0.5,3.8,0.7
                                            c0.5-3.7,0.9-7,1.4-10.3C71,37,73.9,34.4,83.2,34.2c1.1,0,2.2,0,3.4,0c113.2,0,226.5,0,339.7,0c1.6,0,3.2-0.1,4.8,0
                                            c7.2,0.4,9.7,2.7,10.6,9.8c0.3,2.7,0.7,5.4,0.8,8.1c0.1,3.6,1.4,4.7,5.1,3.6c12-3.7,24.1-7.2,36.2-10.7c2.3-0.7,4.7-1.2,7-1.3
                                            c6.6-0.1,10.3,3.8,10.3,10.3c0,128.7,0,257.5,0,386.2c0,5.7-3.4,9.6-9.2,9.8c-2.5,0.1-5.1-0.4-7.5-1c-12.4-3.5-24.8-7.2-37.2-10.8
                                            c-1.2-0.3-2.4-0.4-3.9-0.7c-0.6,4.3-1,8.2-1.7,12.1c-1.1,6.8-3.9,9.3-10.8,9.9c-1.6,0.1-3.2,0.1-4.8,0.1c-113.9,0-227.8,0-341.6,0
                                            c-2.1,0-4.2,0-6.2-0.3c-4.3-0.5-7.1-2.8-7.7-7.2c-0.5-3.6-0.9-7.3-1.3-10.9c-0.3-3.1-1.5-4.1-4.7-3.1c-12,3.7-24.2,6.9-36.2,10.8
                                            C21.1,451.2,15.2,450.6,10.4,444.4z M129.5,92.8c0,103.1,0,205.7,0,308.4c84.5,0,168.8,0,253.3,0c0-102.9,0-205.5,0-308.4
                                            C298.3,92.8,214,92.8,129.5,92.8z M480.4,427.4c0-73.1,0-145.3,0-218c-25.8,2.5-51.3,5-76.7,7.4c-0.1,1.3-0.2,2-0.2,2.6
                                            c0,60.5,0,121-0.1,181.5c0,3.1,1.3,4.1,3.9,4.8c13.2,3.8,26.3,7.8,39.4,11.6C457.8,420.8,469,424,480.4,427.4z M31.3,209.4
                                            c0,73,0,145.2,0,217.9c2.1-0.6,3.8-1,5.4-1.5c22.1-6.6,44.3-13.3,66.5-19.7c3.8-1.1,4.8-2.7,4.8-6.6c-0.1-59.1-0.1-118.2-0.1-177.2
                                            c0-1.7,0-3.4,0-5.4C82.2,214.4,57,211.9,31.3,209.4z M480.6,66.7c-1.2,0.2-1.9,0.3-2.5,0.4c-23.5,7-47,14-70.6,20.8
                                            c-3.3,1-3.4,2.9-3.4,5.6c0.1,32.9,0,65.8,0,98.7c0,1.5,0,3.1,0,4.9c25.9-2.6,51.1-5.1,76.4-7.6C480.6,148.5,480.6,107.8,480.6,66.7
                                            z M31.2,66.5c-0.1,1.8-0.2,2.7-0.2,3.6c0,38.5,0,76.9-0.1,115.4c0,3.8,1.6,4.5,4.8,4.7c16.2,1.5,32.4,3.1,48.6,4.7
                                            c7.8,0.7,15.7,1.4,23.7,2.1c0-36.3,0-72,0-107.9C82.4,81.6,57.1,74.2,31.2,66.5z M90.5,440.4c110.8,0,221.7,0,332.7,0
                                            c-1.8-9.2-2.3-9.8-10.5-12.3c-4.4-1.3-8.9-2.6-13.3-3.9c-14.7-4.4-29.8-2.9-44.7-2.9c-71.5-0.3-143.1-0.3-214.6-0.4
                                            c-15,0-29.5,2.9-43.7,7.5C89.5,430.7,88.1,433.7,90.5,440.4z M86.7,53.2c2.8,4.4,4.2,9.5,7,10.5c12.2,4.6,24.7,8.6,38,8.8
                                            c12.8,0.1,25.6,0.2,38.3,0.2c48.1,0,96.2,0,144.2,0c1.9,0,3.8,0.2,5.7,0.2c23-0.4,46-0.2,68.9-1.6c9.7-0.6,19.2-4.2,28.7-6.9
                                            c3.7-1.1,5.4-4.2,4.6-8.4c-0.9-4.1-4.1-2.8-6.5-2.8c-107.3-0.1-214.7,0-322,0C92,53.2,90.3,53.2,86.7,53.2z"/>
                                <path d="M251.6,301.3c6.1-3.3,8.9,1.9,13.1,3.1c2.4-7.2-2.3-15.8,3.4-22.7c5.7,3.4,3,8.7,4.1,13.3c2.9-0.8,5.7-2,8.6-2.2
                                            c1.5-0.1,3.1,1.3,4.6,2.1c-1,1.2-2.1,2.5-3.1,3.7c-0.1,0.1-0.3,0.1-0.4,0.2c-10.4,4.2-11.9,6.5-9.8,17.7c0.4,1.9,2.4,4.2,4.3,5.1
                                            c10.8,5.4,24.4,0.7,30.5-10.1c6-10.6,2.7-24.2-7.8-30.6c-3.9-2.4-6.4-5.2-8-9.5c-5.5-14.9-20.1-20.3-34.3-13.2
                                            c-0.8,0.4-1.7,0.9-2.7,1.4c-1.1-1.4-2.2-2.7-3.3-4c8.3-8.7,24.4-9.7,34.8-1.3c4.6,3.8,7.7,9.5,11.5,14.3c1.6,2.1,2.9,4.7,4.9,6.2
                                            c13.5,9.7,17.9,24.8,11.2,38.7c-6.5,13.4-21.5,19.6-37,15.2c-1.2-0.3-2.4-0.7-4.2-1.2c0,7.2-0.2,14,0.2,20.7
                                            c0.1,1.2,2.1,2.6,3.5,3.2c7.7,3.1,15.4,6,23.1,9.1c2.5,1,4.8,2.4,7.6,3.9c-1.4,2-2.5,3.5-3.2,4.5c-41.5-20.1-82.2-20.9-124,0.6
                                            c0.1,0.2-0.2-0.5-0.7-1.2c-0.7-1-1.4-2-2.3-3.2c6.5-5.8,14.1-9.1,22.1-11.2c4.9-1.3,6.9-3.8,6.4-8.8c-0.4-3.6-0.4-7.4,0-11
                                            c0.6-5.1-1.3-7.1-6.5-8.3c-16.2-3.6-26.8-13.4-30.6-29.9c-2.1-9-0.3-17.8,1.7-26.5c4-16.9,9.3-33.2,21-46.6c1.8-2,3.7-4,5.8-5.7
                                            c6.4-5.4,14.3-6.1,21.3-1.5c3.3,2.1,6.7,4.7,8.9,7.9c14.6,20.8,22.6,44,21.8,69.6c-0.5,18.2-13.1,31-32,33.6c-4.3,0.6-5.1,2.2-5,6
                                            c0.3,5.7,0.1,11.4,0.1,16.3c18,0,35.4,0,53.3,0c0-6.9,0-13.6,0-20.9c-7.9,2-16,3.8-24.1,0.3c0.3-4.3,2-5.3,6.5-4.8
                                            c4.8,0.5,10.1-0.5,14.8-2.2c4.9-1.8,4.9-6.6,0.6-9.7c-2.2-1.6-4.8-2.7-6.8-4.5C254.1,305.3,253.1,303.3,251.6,301.3z M211.2,296
                                            c6.1-4.9,11.1-9.1,16.3-13c1.1-0.9,3.1-0.6,4.6-0.9c-0.2,1.7-0.1,3.6-0.6,5.2c-0.3,0.9-1.5,1.6-2.3,2.3c-4.9,4.1-9.9,8.1-14.7,12.3
                                            c-1.4,1.2-2.9,2.9-3.1,4.5c-0.4,4.4-0.1,8.8-0.1,13.2c16.5,1.2,30.8-12,30.8-28.2c0.1-23-7-43.9-19.6-63c-1.2-1.8-2.8-3.5-4.5-4.9
                                            c-7.8-6.7-13.9-6.7-20.7,1.1c-16.6,18.8-23.5,41.5-23.8,66c-0.2,15.3,16.1,29.7,30.8,29c1.4-8.6,0.9-16.4-7.6-21.7
                                            c-4-2.5-7.6-5.8-11.1-9.1c-1.5-1.4-2.2-3.6-3.3-5.4c0.5-0.5,1-0.9,1.5-1.4c8.6,1.4,13,9.8,20.5,13.3c1.5-9.5,1.4-18.1-8.4-23.2
                                            c-0.7-0.4-1.4-0.9-1.8-1.5c-1.2-1.9-2.1-3.9-3.2-5.9c0.6-0.6,1.2-1.2,1.9-1.8c3.9,2.3,7.7,4.6,11.4,6.8c2.4-6.2-2.4-13.7,3.9-19.7
                                            c5.8,6.1,1.4,13.6,3.8,19.8c4.2-1.9,6.5-7.4,13-5.2c-0.9,2-1.4,4-2.7,5.3c-2.2,2.3-5.1,3.9-7.3,6.2c-1.6,1.6-3.3,3.8-3.6,5.8
                                            C210.8,286.1,211.2,290.5,211.2,296z"/>
                                <path d="M289.1,200.6c0-7.6,5.7-13.2,13.3-13.3c7.7-0.1,13.8,5.9,13.8,13.4c-0.1,7.3-6.1,13.3-13.5,13.4
                                            C295.1,214.3,289.1,208.3,289.1,200.6z"/>
                                <path d="M298.1,182.2c0-5.3,0-10.3,0-15.5c3,0,5.8,0,8.9,0c0,5.2,0,10.2,0,15.5C304.2,182.2,301.4,182.2,298.1,182.2z" />
                                <path d="M321.2,205.3c0-3.2,0-5.8,0-8.9c5.2,0,10.3,0,15.7,0c0,2.9,0,5.8,0,8.9C331.7,205.3,326.7,205.3,321.2,205.3z" />
                                <path d="M283.7,196.3c0,3,0,5.8,0,8.9c-5.1,0-10.1,0-15.3,0c0-3,0-5.8,0-8.9C273.5,196.3,278.5,196.3,283.7,196.3z" />
                                <path d="M298,234.6c0-5,0-9.9,0-15.1c3,0,5.9,0,9.1,0c0,5,0,9.9,0,15.1C304.1,234.6,301.2,234.6,298,234.6z" />
                                <path d="M330.1,221.8c-2.2,2.4-4,4.4-6,6.5c-3.8-4.1-7.5-8-11.4-12.1c1.8-1.6,4-3.6,6.5-5.9C322.9,214.2,326.3,217.8,330.1,221.8z"
                                />
                                <path d="M286.3,210c2.3,2.6,4.2,4.7,6.3,7c-3.7,3.7-7.3,7.2-11.2,11.1c-1.9-2.4-3.8-4.6-5.8-7.1C279.1,217.4,282.5,213.9,286.3,210
                                            z"/>
                                <path d="M274.9,179.1c2.1-2,3.9-3.7,5.8-5.5c3.6,3.9,7.1,7.8,10.9,11.9c-1.3,1.1-3.5,2.9-5.5,4.6
                                            C282.4,186.6,278.9,183.2,274.9,179.1z"/>
                                <path d="M324.1,173.6c2,2.1,3.8,4,5.6,5.9c-3.8,3.5-7.4,6.8-11.4,10.5c-1.1-1.4-2.9-3.5-4.7-5.8C316.8,181,320.3,177.4,324.1,173.6
                                            z"/>
                            </g>
                        </svg> View</>}>
                            <ImageGallery thumbnailPosition={'left'} showFullscreenButton={false} showPlayButton={false} items={images} />
                        </Tab> */}
                    {/* <Tab eventKey="profile" title={<><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down-left-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4.6,13.9c0-0.5,0-0.9,0-1.4c0.2,0,0.4,0,0.6,0c0,0.4,0,0.9,0,1.4c3.4,0,6.8,0,10.2,0c0-0.3,0-0.6,0-0.9c0.2,0,0.4,0,0.6,0
                                        c0,0.5,0,1,0,1.5c-5.3,0-10.7,0-16,0c0-4.5,0-8.9,0-13.4c5.3,0,10.7,0,16,0c0,3.4,0,6.8,0,10.3c-0.2,0-0.4,0-0.6,0
                                        c0-0.5,0-0.9,0-1.4c-0.6,0-1.2,0-1.7,0c0-0.2,0-0.4,0-0.6c0.6,0,1.1,0,1.7,0c0-2.6,0-5.1,0-7.6c-2.1,0-4.2,0-6.4,0
                                        c0,2.5,0,5.1,0,7.7c1,0,2.1,0,3.1,0c0,0.2,0,0.4,0,0.6c-1.2,0-2.4,0-3.7,0c0-1,0-2,0-3c-0.4,0-0.7,0-1,0c0-0.2,0-0.4,0-0.6
                                        c0.3,0,0.6,0,1,0c0-1.5,0-3,0-4.6c-2.6,0-5.2,0-7.8,0c0,1.5,0,3,0,4.6c1.7,0,3.5,0,5.3,0c0,0.2,0,0.4,0,0.6C5.7,7,5.5,7,5.2,7
                                        c0,0.2,0,0.4,0,0.6c-0.2,0-0.4,0-0.5,0c0-0.2,0-0.4-0.1-0.6c-1.3,0-2.6,0-4,0c0,0.9,0,1.8,0,2.7c1.3,0,2.6,0,4,0c0-0.2,0-0.5,0-0.7
                                        c0.2,0,0.3,0,0.5,0c0,0.7,0,1.5,0,2.3c-0.2,0-0.3,0-0.5,0c0-0.3,0-0.5-0.1-0.8c-1.3,0-2.6,0-4,0c0,1.2,0,2.4,0,3.6
                                        C1.9,13.9,3.2,13.9,4.6,13.9z"/>
                        </svg> Floorplan</>}>
                            <ImageGallery thumbnailPosition={'left'} showFullscreenButton={false} showPlayButton={false} items={images} />
                        </Tab> */}
                    {/* <Tab eventKey="video" title={<><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                        </svg> Amenities</>}>
                            <ImageGallery thumbnailPosition={'left'} showFullscreenButton={false} showPlayButton={false} items={images} />
                        </Tab> */}
                    {/* </Tabs> */}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default FbLikeGridGallery;