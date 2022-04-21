
import React, { useEffect, useState } from 'react';
import "react-multi-carousel/lib/styles.css";
import ReactPlayer from 'react-player/lazy'
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function TutorialPage() {
    let publicPath = process.env.PUBLIC_URL;
    let navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [tutorialData, settutorialData] = useState([]);
    const [activeTutorial, setactiveTutorial] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = (r) => {
        setShow(true);
        setactiveTutorial(r);
    };
    async function fetchUpdates() {

        try {
            const res = await axios.get(publicPath + "/assets/data/tutorials.json");
            if (res.data) {
                settutorialData(res.data);
                console.log("gdfgfgh", res.data);
            }
        } catch (error) {
            console.error("error ", error);
        }
    }
    useEffect(() => {
        window.scrollTo({ top:0,left:0,behavior:'smooth'});
        fetchUpdates();
    }, []);
    /*
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
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
    */

    return (
        <>

            <div className="tutorialSection mt-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-auto">
                            <button className="cusocialBackBtn" onClick={() => navigate(-1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                </svg> Back
                            </button>
                        </div>
                        <div className="col">
                            <h2 className="vegonHeading">Tutorial</h2>
                        </div>
                    </div>
                    <div className="row">

                        {tutorialData.length > 0 && tutorialData.map((items, index) =>
                            <div className="col-md-4" key={index}>
                                <div className='player-wrapper tutorialPlayer' onClick={() => handleShow(items)}>
                                    <ReactPlayer
                                        className='react-player'
                                        controls={true}
                                        url={publicPath + items.link}
                                        type="video/mp4"
                                        width='100%'
                                        height='100%'
                                    />
                                </div>
                                <h4 className='mt-2'>{items.title}</h4>
                            </div>
                        )
                        }

                    </div>
                </div>
                <Modal show={show} onHide={() => handleClose()} backdrop="static" keyboard={false} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header className='p-2' closeButton>
                        <Modal.Title>{activeTutorial.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='p-0'>
                        <div className='player-wrapper'>
                            <ReactPlayer
                                className='react-player'
                                controls={true}
                                url={publicPath + activeTutorial.link}
                                type="video/mp4"
                                width='100%'
                                height='100%'
                            />
                        </div>

                    </Modal.Body>
                </Modal>

            </div>

            {/* <div className="videoPlaylistSection">
                        <div className='container'>
                            <Carousel responsive={responsive}>
                                <div>
                                    <img src={publicPath + "/assets/images/Tutorial.png"} className="img-fluid w-100 p-3" />
                                    <div className="playlistContent">
                                        <h6>lorem ipsum dolor sit</h6>
                                        <Link to={""} className="">View Playlist</Link>
                                    </div>
                                </div>

                                <div>
                                    <img src={publicPath + "/assets/images/Tutorial.png"} className="img-fluid w-100 p-3" />
                                    <div className="playlistContent">
                                        <h6>lorem ipsum dolor sit</h6>
                                        <Link to={""} className="">View Playlist</Link>
                                    </div>
                                </div>
                                <div>
                                    <img src={publicPath + "/assets/images/Tutorial.png"} className="img-fluid w-100 p-3" />
                                    <div className="playlistContent">
                                        <h6>lorem ipsum dolor sit</h6>
                                        <Link to={""} className="">View Playlist</Link>
                                    </div>
                                </div>
                                <div>
                                    <img src={publicPath + "/assets/images/Tutorial.png"} className="img-fluid w-100 p-3" />
                                    <div className="playlistContent">
                                        <h6>lorem ipsum dolor sit</h6>
                                        <Link to={""} className="">View Playlist</Link>
                                    </div>
                                </div>
                                <div>
                                    <img src={publicPath + "/assets/images/Tutorial.png"} className="img-fluid w-100 p-3" />
                                    <div className="playlistContent">
                                        <h6>lorem ipsum dolor sit</h6>
                                        <Link to={""} className="">View Playlist</Link>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div> */}
        </>
    );
}

export default TutorialPage;