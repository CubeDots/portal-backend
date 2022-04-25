import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
//import { Link } from "react-router-dom";
//import AnimationOnScroll from '../components/AnimationOnScroll';
import GoalAndValueComponent from "../components/aboutus/GoalAndValueComponent";
//import AboutCounterComponent from "../components/aboutus/AboutCounterComponent";
//import DeveloperAssociateComponent from "../components/aboutus/DeveloperAssociateComponent";
import OurFounderComponent from "../components/aboutus/OurFounderComponent"
import OurPresenceComponent from "../components/aboutus/OurPresenceComponent";



function AboutUsPage(props) {
    let publicPath = process.env.PUBLIC_URL;

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <Helmet>
                <title>About Us – CubeDots</title>
                <meta name="description" content="Learn more about us and what drives us to keep revolutionizing the real estate sector." />
            </Helmet>
            <div className="mt-70">
                <div className="aboutUsPage">
                    <div className="bannerAndWhatWe section">
                        <img src={publicPath + "/assets/images/bannerimages/aboutusbanner.png"} className="img-fluid" alt="" />
                    </div>
                    <div className="whatWe">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="whatWeDoHeading">
                                        <h2 className="vegonHeading"> <b> What We Do</b></h2>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="whatWeContent">
                                        <p>Cubedots is a proptech company that aims to revolutionise real estate sales, marketing and management. By building a bridge between our partners and the top developers, we have created a safer, faster and more reliable way to increase real estate sales.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="missionvisionimageBox section">
                    <div className="buyerSellerLandlord text-center">
                        <div className="container">
                            <img alt="" src={publicPath + "/assets/images/aboutus/aboutus.jpg"} className="img-fluid w-100" />
                        </div>
                    </div>
                    {/* <div className="missionVisionBox">
                            <div className="container">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-md-5">

                                        <div className="missionVissionImage">
                                            <img alt="" src={publicPath + "/assets/images/bannerimages/missionvision.jpg"} className="img-fluid" />
                                        </div>

                                    </div>
                                    <div className="col-md-4">

                                        <div className="missionVissionContent">
                                            <h2 className="vegonHeading">Mission &amp; Vision </h2>
                                            <p>To become a global one-stop solution for agents, investors and developers in real estate.</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div> */}
                </div>
                <div className="vissionBox">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <div className="">
                                    <img src={publicPath + "/assets/images/aboutus/eye.png"} className="img-fluid" alt="" />
                                    <h2 className="vegonHeading mt-3">Our Vision</h2>
                                    <p>Empowering agents and developers to sell anywhere at any time by bringing them into
                                        the future of international real estate brokerage</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <GoalAndValueComponent />

                {/* <AboutCounterComponent /> */}

                {/* <DeveloperAssociateComponent /> */}
                <div className="aboutFounderContactSection">
                    <div className="ourFounderBox section ">
                        <div className="container ">
                            <div className="row text-center">
                                <div className="col-12">
                                    <div className="ourFounderHeadingSection">
                                        {/* <small>lorem ipsum quia dolor sit amet</small> */}
                                        <h2 className="vegonHeading">Our Founders</h2>
                                    </div>
                                </div>
                            </div>
                            <OurFounderComponent />
                        </div>
                    </div>
                    {/* <div className="JourneyBox section">
                        <div className="container">
                            <div className="row text-center">
                                <div className="col-md-12">
                                    <div className="JourneyHeadingSection">
                                        <small>lorem ipsum quia dolor sit amet</small>
                                        <h2>Journey</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="journeyContent">
                                        <h1 className="text-center">Our Journey</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <OurPresenceComponent />
                </div>
            </div>
        </>
    );
}

export default AboutUsPage;