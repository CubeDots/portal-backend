import React from 'react';
import { Modal } from 'react-bootstrap';

function HomeProjectsMapComponent(props) {
    let publicPath = process.env.PUBLIC_URL;
    return (
        <div>
            <Modal show={props.show} onHide={props.closeModal} fullscreen={true} className="MultipleMaps">
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className="header">
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <div className="container-fluid">
                                <div>
                                    <a className="active" aria-current="page" href="#">
                                        <img src={publicPath + "/assets/images/logo.png"} alt="" className="ms-5 img-fluid " width={100}  />
                                    </a>
                                </div>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse mx-4" id="navbarTogglerDemo01">

                                    <div className="nav_bar_content m-auto d-flex  justify-content-center" id="nav_bar_btn">
                                        <div className="d-flex">
                                            <ul className="nav nav-tabs nav nav-tabs" id="pills-tab" role="tablist">
                                                <li className="nav-item active" role="presentation">
                                                    <button className="nav-link" id="pills-map-tab" data-bs-toggle="pill"
                                                        data-bs-target="#pills-map" type="button" role="tab" idaria-controls="pills-map"
                                                        aria-selected="true">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" className="bi bi-image-fill" viewBox="0 0 16 16">
                                                            <path
                                                                d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                                                        </svg> Map</button>
                                                </li>


                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="pills-StreetView-tab" data-bs-toggle="pill"
                                                        data-bs-target="#pills-StreetView" type="button" role="tab"
                                                        aria-controls="pills-StreetView" aria-selected="false"> <svg
                                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" className="bi bi-image-fill" viewBox="0 0 16 16">
                                                            <path
                                                                d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                                                        </svg> Street View</button>
                                                </li>


                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="pills-Contact-tab" data-bs-toggle="pill"
                                                        data-bs-target="#pills-Contact" type="button" role="tab"
                                                        aria-controls="pills-Contact" aria-selected="false"> <svg
                                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" className="bi bi-image-fill" viewBox="0 0 16 16">
                                                            <path
                                                                d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                                                        </svg> Contact</button>
                                                </li>


                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="pills-Landmark-tab" data-bs-toggle="pill"
                                                        data-bs-target="#pills-Landmark" type="button" role="tab"
                                                        aria-controls="pills-Landmark" aria-selected="false"> <svg
                                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" className="bi bi-image-fill" viewBox="0 0 16 16">
                                                            <path
                                                                d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                                                        </svg> Landmark</button>
                                                </li>


                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="pills-Masterplan-tab" data-bs-toggle="pill"
                                                        data-bs-target="#pills-Masterplan" type="button" role="tab"
                                                        aria-controls="pills-Masterplan" aria-selected="false"> <svg
                                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" className="bi bi-image-fill" viewBox="0 0 16 16">
                                                            <path
                                                                d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                                                        </svg> Masterplan</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>

                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-map" role="tabpanel" aria-labelledby="pills-map-tab">
                            <div className="row mx-0">
                                <div className="col-md-3 sidebar">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-image-fill" viewBox="0 0 16 16">
                                                    <path
                                                        d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                                                </svg>
                                                <span className="ms-3">School</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-image-fill" viewBox="0 0 16 16">
                                                    <path
                                                        d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                                                </svg>
                                                <span className="ms-3">Mall</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-image-fill" viewBox="0 0 16 16">
                                                    <path
                                                        d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                                                </svg>
                                                <span className="ms-3">Hospital</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-image-fill" viewBox="0 0 16 16">
                                                    <path
                                                        d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                                                </svg>
                                                <span className="ms-3">University</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-image-fill" viewBox="0 0 16 16">
                                                    <path
                                                        d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                                                </svg>
                                                <span className="ms-3">Sports</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-image-fill" viewBox="0 0 16 16">
                                                    <path
                                                        d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                                                </svg>
                                                <span className="ms-3">Tourist Attraction</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-image-fill" viewBox="0 0 16 16">
                                                    <path
                                                        d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                                                </svg>
                                                <span className="ms-3">Public Transport</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-image-fill" viewBox="0 0 16 16">
                                                    <path
                                                        d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                                                </svg>
                                                <span className="ms-3">Airport</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-9">
                                    <div id="map-container-google-1" className="z-depth-1-half map-container">
                                        <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                            frameBorder="0" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="pills-StreetView" role="tabpanel" aria-labelledby="pills-StreetView-tab">
                        Street View
                        </div>

                        <div className="tab-pane fade" id="pills-Contact" role="tabpanel" aria-labelledby="pills-Contact-tab">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minima odit quasi error doloribus.
                            Necessitatibus.
                        </div>

                        <div className="tab-pane fade" id="pills-Landmark" role="tabpanel" aria-labelledby="pills-Landmark-tab">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates animi numquam at vel possimus asperiores
                            minus magnam incidunt totam laborum.
                        </div>

                        <div className="tab-pane fade" id="pills-Masterplan" role="tabpanel" aria-labelledby="pills-Masterplan-tab">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non possimus iusto ipsum dolore reprehenderit
                            perferendis consectetur eum, dolores maiores labore.
                        </div>

                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default HomeProjectsMapComponent;