
import React, { useEffect } from "react";


function PdfPage() {
    let publicPath = process.env.PUBLIC_URL;
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
      }, []);
      useEffect(() => {
        window.scrollTo({top:0})
    }, [])

    return (
        <>
            <div className="mt-70">
                <div className="pdfsSection">
                    <div className="pdfBanner">
                        <h2>PDF</h2>
                        {/* <img src={publicPath + "/assets/images/pdfs.png"} className="img-fluid w-100" /> */}
                    </div>
                    <div className="container">
                        <div className="pdfImageSection">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="pdfLogo">
                                        <img src={publicPath + "/assets/images/missionvision.png"} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-md-5 m-auto">
                                    <div className="pdfLogoContent">
                                        <h5>Lorem ipsum dolor sit </h5>
                                        <h6>Lorem Ipsum is simply dummy. 2021</h6>
                                        <small>Lorem Ipsum is simply dummy text of Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</small>
                                        <div>
                                            <span>lorem ipsum</span> !
                                            <span>lorem ipsum</span> !
                                            <span>lorem ipsum</span> !
                                        </div>
                                        <div>
                                            <h5>Dec 2021</h5>
                                        </div>
                                        <div>
                                            <button className="pdfViewBtn">View</button>
                                            <button className="pdfDownloadBtn">Download</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pdfLoremIpsumSection">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="pdfLoremIpsumContent">
                                        <img src={publicPath + "/assets/images/missionvision.png"} className="img-fluid" />
                                        <div className="pdfLoremContent">
                                            <h5>Lorem Ipsum is simply dummy text of</h5>
                                            <small>Lorem Ipsum is simply</small>
                                            <div>
                                                <small>Lorem Ipsum is simply dummy text of Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </small>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <small>Lorem Ipsum is simply</small>
                                                    <div>
                                                        <h6>Date</h6>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div>
                                                        <button className="pdfSmallViewBtn">View</button>
                                                        <button className="pdfSmallDownloadBtn">Download</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="pdfLoremIpsumContent">
                                        <img src={publicPath + "/assets/images/missionvision.png"} className="img-fluid" />
                                        <div className="pdfLoremContent">
                                            <h5>Lorem Ipsum is simply dummy text of</h5>
                                            <small>Lorem Ipsum is simply</small>
                                            <div>
                                                <small>Lorem Ipsum is simply dummy text of Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </small>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <small>Lorem Ipsum is</small>
                                                    <div>
                                                        <h6>Date</h6>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div>
                                                        <button className="pdfSmallViewBtn">View</button>
                                                        <button className="pdfSmallDownloadBtn">Download</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="pdfLoremIpsumContent">
                                        <img src={publicPath + "/assets/images/missionvision.png"} className="img-fluid" />
                                        <div className="pdfLoremContent">
                                            <h5>Lorem Ipsum is simply dummy text of</h5>
                                            <small>Lorem Ipsum is simply</small>
                                            <div>
                                                <small>Lorem Ipsum is simply dummy text of Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </small>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <small>Lorem Ipsum is</small>
                                                    <div>
                                                        <h6>Date</h6>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div>
                                                        <button className="pdfSmallViewBtn">View</button>
                                                        <button className="pdfSmallDownloadBtn">Download</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pdfLoremIpsumSection">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="pdfLoremIpsumContent">
                                        <img src={publicPath + "/assets/images/missionvision.png"} className="img-fluid" />
                                        <div className="pdfLoremContent">
                                            <h5>Lorem Ipsum is simply dummy text of</h5>
                                            <small>Lorem Ipsum is simply</small>
                                            <div>
                                                <small>Lorem Ipsum is simply dummy text of Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </small>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <small>Lorem Ipsum is</small>
                                                    <div>
                                                        <h6>Date</h6>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div>
                                                        <button className="pdfSmallViewBtn">View</button>
                                                        <button className="pdfSmallDownloadBtn">Download</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="pdfLoremIpsumContent">
                                        <img src={publicPath + "/assets/images/missionvision.png"} className="img-fluid" />
                                        <div className="pdfLoremContent">
                                            <h5>Lorem Ipsum is simply dummy text of</h5>
                                            <small>Lorem Ipsum is simply</small>
                                            <div>
                                                <small>Lorem Ipsum is simply dummy text of Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </small>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <small>Lorem Ipsum is</small>
                                                    <div>
                                                        <h6>Date</h6>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div>
                                                        <button className="pdfSmallViewBtn">View</button>
                                                        <button className="pdfSmallDownloadBtn">Download</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="pdfLoremIpsumContent">
                                        <img src={publicPath + "/assets/images/missionvision.png"} className="img-fluid" />
                                        <div className="pdfLoremContent">
                                            <h5>Lorem Ipsum is simply dummy text of</h5>
                                            <small>Lorem Ipsum is simply</small>
                                            <div>
                                                <small>Lorem Ipsum is simply dummy text of Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </small>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <small>Lorem Ipsum is</small>
                                                    <div>
                                                        <h6>Date</h6>
                                                    </div>
                                                </div>
                                                <div className="col-md-7">
                                                    <div>
                                                        <button className="pdfSmallViewBtn">View</button>
                                                        <button className="pdfSmallDownloadBtn">Download</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
export default PdfPage;