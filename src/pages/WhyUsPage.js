import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
//import AnimationOnScroll from '../components/AnimationOnScroll';
import CubedotBrandTechnologylogoComponent from "../components/whyus/CubedotBrandTechnologylogoComponent"
import WhyUsTestimonialsComponent from "../components/whyus/WhyUsTestimonialComponent"
//import "animate.css/animate.min.css";
import BecomeOurPartnerModal from "../components/home/BecomeOurPartnerModal";

function WhyUsPage() {
    let publicPath = process.env.PUBLIC_URL;
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    const [isBecomeOurPartnerModalShow, setIsBecomeOurPartnerModalShow] = useState(false);
    const showBecomeOurPartnerModal = () => {
        console.log("showBecomeOurPartnerModal clicked");
        setIsBecomeOurPartnerModalShow(true);
    }

    const closeBecomeOurPartnerModalModal = () => {
        console.log("closeBecomeOurPartnerModalModal trigger");
        setIsBecomeOurPartnerModalShow(false);
    }
    return (
        <div className="whyus mt-70">
            <Helmet>
                <title>Working With CubeDots – Benefits For All Real Estate Agents</title>
                <meta name="description" content="CubeDots allows you to show the apartments and the environment of our real estate projects without coming to Istanbul together with a good commission and an efficient sale process." />
                <meta name="Keywords" content="Real estate, commission, real estate agent, Cubedots, turkey real estate" />
            </Helmet>
            <div className="">
                <img src={publicPath + "/assets/images/bannerimages/whyusbanner.png"} alt="" className="img-fluid w-100" />
            </div>
            <div className="whyusBannerSection">
                <div className="whyBanner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1 className="text-center">Why Join Cubedots?</h1>
                            </div>
                            <div className="col-md-6">
                                <p>To benefit from the most innovative approach to make real estate sales easier, quicker and efficient.</p>
                                <button className="btn btntheme" onClick={showBecomeOurPartnerModal}>Become our partner</button>
                            </div>
                        </div>
                    </div>
                    <BecomeOurPartnerModal show={isBecomeOurPartnerModalShow} onHide={closeBecomeOurPartnerModalModal} />
                </div>
                {/* <div className="rankingSection">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <h1>What makes Cubedots the leading international real estate sales company in Turkey?</h1>
                            </div>
                            <div className="col-lg-6">
                                <div className="">

                                    <p>Since its establishment in 2019, Cubedots has revolutionized the way real estate sales are made. With over (ex:200 million dollars) generated in revenue from the projects that Cubedots has been managing, within such short time frame.</p>

                                    <button className="btn btntheme">Further details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="alternetSection">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 d-flex  justify-content-center justify-content-sm-flex-start">
                                {/* <AnimationOnScroll animateIn="animate__fadeInLeft"> */}
                                <div className="alternetSectionImg ">
                                    <img src={publicPath + "/assets/images/bannerimages/whyusportfoliobanner.png"} className="img-fluid vegonBorderRadious" alt="" />
                                </div>
                                {/* */}
                                {/* <div className="alternetSectionImgContent">
                                <h3>Lorem ipsum dolor sit ametcod</h3>
                                <div className="pe-lg-5">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, laudantium adipisci. Vero reiciendis in nisi, sunt, obcaecati qui aliquam quam ex ducimus distinctio omnis officiis</p>
                                </div>
                                <div className="read_more_cont">
                                    <a href="#">Read More </a>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </div>
                            </div> */}
                            </div>
                            <div className="col-md-6 m-auto">
                                {/* <AnimationOnScroll animateIn="animate__fadeInRight"> */}
                                <div className="alternetSectionImgContent">
                                    <h3>Take your portfolio to the next level with Cubedots</h3>
                                    <div className="pe-lg-5">
                                        <p>Sell the top projects worldwide and get the best commission rates.</p>
                                    </div>
                                    <div className="read_more_cont d-flex">
                                        <button className="btn btntheme" onClick={showBecomeOurPartnerModal}>Join our agent network</button>
                                    </div>
                                </div>
                                {/* */}
                                {/* <div className="alternetSectionImg rightImgAlter">
                                <img src={publicPath + "/assets/images/newsfeed.jpeg"} className="img-fluid" alt="" />
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="services">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 pe-0">
                            <div className="serviceImg">
                                <a href="#serviceContent">
                                    <img alt="" src={publicPath + "/assets/images/whyus/salesservice.jpg"} className="img-fluid" />
                                    <h3>Sales Services</h3>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row mb-2">
                                <div className="col-md-6 pe-1">
                                    <div className="serviceImg">
                                        <a href="#serviceContent">
                                            <img alt="" src={publicPath + "/assets/images/whyus/AfterSalesServices.jpg"} className="img-fluid" />
                                            <h3>After Sales Services</h3>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6 ps-1">
                                    <div className="serviceImg">
                                        <a href="#serviceContent">
                                            <img alt="" src={publicPath + "/assets/images/whyus/PartnershipBenefits.jpg"} className="img-fluid" />
                                            <h3>Partnership Benefits</h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="serviceImg">
                                    <a href="#serviceContent">
                                        <img alt="" src={publicPath + "/assets/images/whyus/AgencyRelationsSupport.jpg"} className="img-fluid" />
                                        <h3>Agency Relations Support</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>*/}
                <div className="serviceContent" id="serviceContent">
                    <div className="container">
                        <div className="serviceTabs">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Sales Services</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">After Sales Services</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Partnership Benefits</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="Agency-tab" data-bs-toggle="tab" data-bs-target="#Agency" type="button" role="tab" aria-controls="Agency" aria-selected="false">Agency Relations Support</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <h3>Sales Services</h3>
                                    <h4>Events :</h4>
                                    <ul>
                                        {/* <li>Promotion of projects with events and exhibitions</li>
                                        <li>International events (Cityscape, MIPIM, etc)</li>
                                        <li>Local events</li>
                                        <li>Presentations</li> */}
                                        <li>Open house events and exhibitions</li>
                                        <li>International real estate events</li>
                                    </ul>
                                    <h4>Marketing:</h4>
                                    <ul>
                                        <li>Marketing on social media platforms such as Instagram, YouTube, Facebook, LinkedIn and Twitter</li>
                                        <li>Several formats of content including videos, infographics and carousels</li>
                                        <li>Marketing support specific to agents</li>
                                    </ul>

                                    <h4>Networking:</h4>
                                    <ul>
                                        <li>Access to Cubedots international agent network</li>
                                        <li>Over 2500 agents from 20+ countries</li>
                                    </ul>
                                    <h4>Back Office Support:</h4>
                                    <ul>
                                        <li>Our agents receive comprehensive training on Cubedots’ remote sales system</li>
                                        <li>Our multilingual team provides branding activities in different languages</li>
                                        <li>Online reservation support for remote sales</li>
                                    </ul>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <h3>After Sales Services</h3>
                                    <ul>
                                        <li>VAT Exemption procedure</li>
                                        <li>International money transfer strategy</li>
                                        <li>Assistance with citizenship procedure</li>
                                        <li>Title deed and payment follow-up</li>
                                    </ul>
                                </div>
                                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                    <h3>Partnership Benefits</h3>
                                    <ul>
                                        <li>Cutting-edge presentation technology</li>
                                        <li>The best commission and price offers</li>
                                        <li>Professional marketing support</li>
                                        <li>Professional language support in Turkish, English, Arabic, Persian, Russian and Chinese</li>
                                        <li>Legal support for title-deed and citizenship</li>
                                        <li>Financial consultation</li>
                                        <li>Office space for meetings and appointments</li>
                                        <li>Special offers and rates</li>
                                        <li>Special promotions</li>
                                    </ul>
                                </div>
                                <div className="tab-pane fade" id="Agency" role="tabpanel" aria-labelledby="Agency-tab">
                                    <h3>Agency Relations Support</h3>
                                    <ul>
                                        <li>Establishing relations with agents</li>
                                        <li>Contracts with agents</li>
                                        <li>Enrollment and training for Cubedots</li>
                                        <li>Creating the marketing materials for the project</li>
                                        <li>Settlement of payments</li>
                                        <li>Assisting international agents through legal procedures and citizenship</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="technology section">
                <div className="headingSection text-center">
                    <h2 className="text-center vegonHeading">Cubedots' interactive technology has been used by</h2>
                </div>
                <CubedotBrandTechnologylogoComponent />
            </div>
            <div className="geographicfootprints">
                <div className="container">
                    <h2 className="vegonHeading">Our Solution Partners</h2>
                    <img alt="" src={publicPath + "/assets/images/whyus/agentmap.jpg"} className="img-fluid" />
                </div>
            </div>
            {/* <div className="whyTestimonail">
                <div className="container">
                    <h2>What they say about Cubedots</h2>
                    <div className="row align-item">
                        <div className="col-md-8 mx-auto ">
                            <figure className="text-center">
                                <blockquote className="blockquote">
                                    <h2> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16">
                                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                    </svg>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, harum.</h2>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    Someone famous in lorem ipsum
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div> */}

            <WhyUsTestimonialsComponent />
            <div className="faq">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 m-auto">
                            <div className="faq_image d-flex align-items-center justify-content-center">
                                <img src={publicPath + "/assets/images/whyus/faq.jpg"} alt="" className="img-fluid w-100" />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h2 className="mb-5 faqsHeading vegonHeading">FAQ</h2>
                            <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="Citizenship-tab" data-bs-toggle="tab" data-bs-target="#Citizenship" type="button" role="tab" aria-controls="Citizenship" aria-selected="true">Citizenship</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="Finances-tab" data-bs-toggle="tab" data-bs-target="#Finances" type="button" role="tab" aria-controls="Finances" aria-selected="false">Finances</button>
                                </li>
                                {/* <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="General-tab" data-bs-toggle="tab" data-bs-target="#General" type="button" role="tab" aria-controls="General" aria-selected="false">General</button>
                                        </li> */}
                                {/* <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="Enrolment-tab" data-bs-toggle="tab" data-bs-target="#Enrolment" type="button" role="tab" aria-controls="Enrolment" aria-selected="false">Enrolment</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="Developers-tab" data-bs-toggle="tab" data-bs-target="#Developers" type="button" role="tab" aria-controls="Developers" aria-selected="false">Developers</button>
                                        </li> */}
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="Projects-tab" data-bs-toggle="tab" data-bs-target="#Projects" type="button" role="tab" aria-controls="Projects" aria-selected="false">Projects</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="Citizenship" role="tabpanel" aria-labelledby="Citizenship-tab">
                                    <div className="accordion mainAccordionWhyus" id="Citizenship">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="Citizenship1">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCitizenship1" aria-expanded="true" aria-controls="collapseCitizenship1">
                                                    <strong>How to get Turkish citizenship?</strong>
                                                </button>
                                            </h2>
                                            <div id="collapseCitizenship1" className="accordion-collapse collapse show" aria-labelledby="Citizenship1" data-bs-parent="#Citizenship">
                                                <div className="accordion-body">Turkish citizenship can be obtained in many ways. However, the quickest and the easiest method is to purchase property worth over $400 thousand in Turkey, along with a pledge not to sell the property for 3 years.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="Citizenship2">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCitizenship2" aria-expanded="false" aria-controls="collapseCitizenship2">
                                                    <strong>How long does it take to get Turkish citizenship in exchange for purchasing a property?</strong>
                                                </button>
                                            </h2>
                                            <div id="collapseCitizenship2" className="accordion-collapse collapse" aria-labelledby="Citizenship2" data-bs-parent="#Citizenship">
                                                <div className="accordion-body">
                                                    The Turkish government has established a specialized office that handles the citizenship procedures of investors. This office helps speed up the process for foreign investors who wish to get Turkish citizenship. After the files are submitted, the process takes up to 45 days.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="Citizenship3">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCitizenship3" aria-expanded="false" aria-controls="collapseCitizenship3">
                                                    <strong> Is it possible to keep dual citizenship?</strong>
                                                </button>
                                            </h2>
                                            <div id="collapseCitizenship3" className="accordion-collapse collapse" aria-labelledby="Citizenship3" data-bs-parent="#Citizenship">
                                                <div className="accordion-body">
                                                    While obtaining Turkish Citizenship, you are NOT required to waiver your original citizenship. It is allowed by Turkish law to have more than one nationality.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="Citizenship4">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCitizenship4" aria-expanded="false" aria-controls="collapseCitizenship4">
                                                    <strong>Is it necessary to live in Turkey to obtain Turkish citizenship?</strong>
                                                </button>
                                            </h2>
                                            <div id="collapseCitizenship4" className="accordion-collapse collapse" aria-labelledby="Citizenship4" data-bs-parent="#Citizenship">
                                                <div className="accordion-body">
                                                    No, you do not have to reside in Turkey to obtain Turkish citizenship. Investors may obtain citizenship in Turkey while residing elsewhere in the world.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="Citizenship5">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCitizenship5" aria-expanded="false" aria-controls="collapseCitizenship5">
                                                    <strong>Do other family members obtain Citizenship as well?</strong>
                                                </button>
                                            </h2>
                                            <div id="collapseCitizenship5" className="accordion-collapse collapse" aria-labelledby="Citizenship5" data-bs-parent="#Citizenship">
                                                <div className="accordion-body">
                                                    One of the essential advantages of the Citizenship by Investment Program is the fact that all dependent family members (spouse & children) will automatically obtain citizenship as well, without any additional fees.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="Citizenship6">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCitizenship6" aria-expanded="false" aria-controls="collapseCitizenship6">
                                                    <strong> Is it possible to sell the property immediately after obtaining Turkish Citizenship?</strong>
                                                </button>
                                            </h2>
                                            <div id="collapseCitizenship6" className="accordion-collapse collapse" aria-labelledby="Citizenship6" data-bs-parent="#Citizenship">
                                                <div className="accordion-body">
                                                    The Citizenship by Investment Programs requires you to keep the property for 3 years
                                                    post-purchase date. You will be asked to submit a pledge stating that you will keep the property for at least 3 years.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="Citizenship7">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCitizenship7" aria-expanded="false" aria-controls="collapseCitizenship7">
                                                    <strong>What nationalities are entitled to apply?</strong>
                                                </button>
                                            </h2>
                                            <div id="collapseCitizenship7" className="accordion-collapse collapse" aria-labelledby="Citizenship7" data-bs-parent="#Citizenship">
                                                <div className="accordion-body">
                                                    All nationalities that have purchased a property worth a minimum of $400,000, are entitled to acquire Turkish citizenship.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="Citizenship8">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCitizenship8" aria-expanded="false" aria-controls="collapseCitizenship8">
                                                    <strong>Do all property partners receive citizenship?</strong>
                                                </button>
                                            </h2>
                                            <div id="collapseCitizenship8" className="accordion-collapse collapse" aria-labelledby="Citizenship8" data-bs-parent="#Citizenship">
                                                <div className="accordion-body">
                                                    Non-related family members (spouse/children) must have a share worth $400,000.
                                                    For example, two partners must own a property with a value of $800,000 therefore each of these partners will have a share worth $400,000 and will then be eligible for the Citizenship by Investment Program.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="Citizenship9">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCitizenship9" aria-expanded="false" aria-controls="collapseCitizenship9">
                                                    <strong> What are the top advantages of Turkish citizenship?</strong>
                                                </button>
                                            </h2>
                                            <div id="collapseCitizenship9" className="accordion-collapse collapse" aria-labelledby="Citizenship9" data-bs-parent="#Citizenship">
                                                <div className="accordion-body">
                                                    <ul>
                                                        <li>A Turkish passport allows visa-free travel (or visa on arrival) to 125 countries worldwide.</li>
                                                        <li>You are not required to reside in Turkey for any period of time, you can get Citizenship without your physical presence being required.</li>
                                                        <li>Permanent right of Citizenship ownership.</li>
                                                        <li>Investors can benefit from rental income and have the right to resell after 3 years.</li>
                                                        <li>You can keep dual Citizenship</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="Citizenship10">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCitizenship10" aria-expanded="false" aria-controls="collapseCitizenship10">
                                                    <strong>Is learning the Turkish language required to obtain Turkish citizenship?</strong>
                                                </button>
                                            </h2>
                                            <div id="collapseCitizenship10" className="accordion-collapse collapse" aria-labelledby="Citizenship10" data-bs-parent="#Citizenship">
                                                <div className="accordion-body">
                                                    No, you do not need any level of proficiency in Turkish to obtain Turkish citizenship.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="Citizenship11">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCitizenship11" aria-expanded="false" aria-controls="collapseCitizenship11">
                                                    <strong>Is it enough to buy one property to obtain Turkish citizenship?</strong>
                                                </button>
                                            </h2>
                                            <div id="collapseCitizenship11" className="accordion-collapse collapse" aria-labelledby="Citizenship11" data-bs-parent="#Citizenship">
                                                <div className="accordion-body">
                                                    Yes, as long as the investment in total is over $400 thousand, you can purchase any number of properties.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="Finances" role="tabpanel" aria-labelledby="Finances-tab">
                                    <div className="accordion mainAccordionWhyus" id="finance">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="finance1">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefinance1" aria-expanded="true" aria-controls="collapsefinance1">
                                                    <strong> How does the payment process work for International buyers?</strong>
                                                </button>
                                            </h2>
                                            <div id="collapsefinance1" className="accordion-collapse collapse show" aria-labelledby="finance1" data-bs-parent="#finance">
                                                <div className="accordion-body">
                                                    Payment can be done by cash or bank transfer. Since there is no escrow account system in
                                                    Turkey, all the payments must be made to developers, Cubedots is the observer of the
                                                    payment processes.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="finance2">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefinance2" aria-expanded="false" aria-controls="collapsefinance2">
                                                    <strong> Is there an option to have a Mortgage with a bank?</strong>
                                                </button>
                                            </h2>
                                            <div id="collapsefinance2" className="accordion-collapse collapse" aria-labelledby="finance2" data-bs-parent="#finance">
                                                <div className="accordion-body">
                                                    They can get a mortgage up to %50 of the amount in their currency (USD, EUR) The
                                                    purpose must be investment other than citizenship purposes, with the mortgage they won’t
                                                    qualify for citizenship application. (Citizens of Iran are not allowed for mortgages.)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="finance3">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefinance3" aria-expanded="false" aria-controls="collapsefinance3">
                                                    <strong> What taxes and hidden costs are there when purchasing real estate in Turkey?</strong>
                                                </button>
                                            </h2>
                                            <div id="collapsefinance3" className="accordion-collapse collapse" aria-labelledby="finance3" data-bs-parent="#finance">
                                                <div className="accordion-body">
                                                    <ul>
                                                        <li>%4 Title Deed Transfer, %2 for the buyer; %2 for the seller</li>
                                                        <li>%1-18 VAT depends on project size &amp; location</li>
                                                        <li>Offices &amp; Shops %18</li>
                                                        <li>Big apartment %18 (+150sq net size)</li>
                                                        <li>Small Apartment %1 (-150sq net size)</li>
                                                    </ul>
                                                    <p>The VAT is always paid by the client except for when the client gets a VAT exemption paper
                                                        from the Turkish Government. (The payment should be transferred in other currency to
                                                        developers’ accounts from abroad)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="finance4">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefinance4" aria-expanded="false" aria-controls="collapsefinance4">
                                                    <strong> What are the conditions for the VAT Exemption Paper?</strong>
                                                </button>
                                            </h2>
                                            <div id="collapsefinance4" className="accordion-collapse collapse" aria-labelledby="finance4" data-bs-parent="#finance">
                                                <div className="accordion-body">
                                                    <ul>
                                                        <li>Transfer foreign currency from abroad</li>
                                                        <li>No Turkish Citizenship &amp; Residency Permit</li>
                                                        <li>They haven&#39;t been living there for more than 6 months within the last year.</li>
                                                        <li>Especially great for Nişantaşı and Skyland Big Apartments and Offices</li>
                                                        <li>It must be the first property investment of the investor</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="tab-pane fade" id="General" role="tabpanel" aria-labelledby="General-tab">
                                            <div className="accordion mainAccordionWhyus" id="general">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="general1">
                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsegeneral1" aria-expanded="true" aria-controls="collapsegeneral1">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry?
                                                        </button>
                                                    </h2>
                                                    <div id="collapsegeneral1" className="accordion-collapse collapse show" aria-labelledby="general1" data-bs-parent="#general">
                                                        <div className="accordion-body">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="general2">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsegeneral2" aria-expanded="false" aria-controls="collapsegeneral2">
                                                            Lorem Ipsum is simply dummy text?
                                                        </button>
                                                    </h2>
                                                    <div id="collapsegeneral2" className="accordion-collapse collapse" aria-labelledby="general2" data-bs-parent="#general">
                                                        <div className="accordion-body">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="general3">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsegeneral3" aria-expanded="false" aria-controls="collapsegeneral3">
                                                            Lorem Ipsum is simply dummy text of?
                                                        </button>
                                                    </h2>
                                                    <div id="collapsegeneral3" className="accordion-collapse collapse" aria-labelledby="general3" data-bs-parent="#general">
                                                        <div className="accordion-body">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="general4">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsegeneral4" aria-expanded="false" aria-controls="collapsegeneral4">
                                                            Lorem Ipsum is simply dummy text of the printing?
                                                        </button>
                                                    </h2>
                                                    <div id="collapsegeneral4" className="accordion-collapse collapse" aria-labelledby="general4" data-bs-parent="#general">
                                                        <div className="accordion-body">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                {/* <div className="tab-pane fade" id="Enrolment" role="tabpanel" aria-labelledby="Enrolment-tab">
                                            <div className="accordion mainAccordionWhyus" id="enrolment">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="enrolment1">
                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseenrolment1" aria-expanded="true" aria-controls="collapseenrolment1">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseenrolment1" className="accordion-collapse collapse show" aria-labelledby="enrolment1" data-bs-parent="#enrolment">
                                                        <div className="accordion-body">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="enrolment2">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseenrolment2" aria-expanded="false" aria-controls="collapseenrolment2">
                                                            Lorem Ipsum is simply dummy text?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseenrolment2" className="accordion-collapse collapse" aria-labelledby="enrolment2" data-bs-parent="#enrolment">
                                                        <div className="accordion-body">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="enrolment3">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseenrolment3" aria-expanded="false" aria-controls="collapseenrolment3">
                                                            Lorem Ipsum is simply dummy text of?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseenrolment3" className="accordion-collapse collapse" aria-labelledby="enrolment3" data-bs-parent="#enrolment">
                                                        <div className="accordion-body">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="enrolment4">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseenrolment4" aria-expanded="false" aria-controls="collapseenrolment4">
                                                            Lorem Ipsum is simply dummy text of the printing?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseenrolment4" className="accordion-collapse collapse" aria-labelledby="enrolment4" data-bs-parent="#enrolment">
                                                        <div className="accordion-body">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="Developers" role="tabpanel" aria-labelledby="Developers-tab">
                                            <div className="accordion mainAccordionWhyus" id="developers">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="developers1">
                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsedevelopers1" aria-expanded="true" aria-controls="collapsedevelopers1">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry?
                                                        </button>
                                                    </h2>
                                                    <div id="collapsedevelopers1" className="accordion-collapse collapse show" aria-labelledby="developers1" data-bs-parent="#developers">
                                                        <div className="accordion-body">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="developers2">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsedevelopers2" aria-expanded="false" aria-controls="collapsedevelopers2">
                                                            Lorem Ipsum is simply dummy text?
                                                        </button>
                                                    </h2>
                                                    <div id="collapsedevelopers2" className="accordion-collapse collapse" aria-labelledby="developers2" data-bs-parent="#developers">
                                                        <div className="accordion-body">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="developers3">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsedevelopers3" aria-expanded="false" aria-controls="collapsedevelopers3">
                                                            Lorem Ipsum is simply dummy text of?
                                                        </button>
                                                    </h2>
                                                    <div id="collapsedevelopers3" className="accordion-collapse collapse" aria-labelledby="developers3" data-bs-parent="#developers">
                                                        <div className="accordion-body">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="developers4">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsedevelopers4" aria-expanded="false" aria-controls="collapsedevelopers4">
                                                            Lorem Ipsum is simply dummy text of the printing?
                                                        </button>
                                                    </h2>
                                                    <div id="collapsedevelopers4" className="accordion-collapse collapse" aria-labelledby="developers4" data-bs-parent="#developers">
                                                        <div className="accordion-body">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                <div className="tab-pane fade" id="Projects" role="tabpanel" aria-labelledby="Projects-tab">
                                    <div className="accordion mainAccordionWhyus" id="Projects">
                                        {/*<div className="accordion-item">
                                            <h2 className="accordion-header" id="Projects1">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProjects1" aria-expanded="true" aria-controls="collapseProjects1">
                                                    <strong>General</strong>
                                                </button>
                                            </h2>
                                            <div id="collapseProjects1" className="accordion-collapse collapse show" aria-labelledby="Projects1" data-bs-parent="#Projects">
                                                <div className="accordion-body ">
                                                    <strong>Are all of the projects on the Cubedots app?</strong>
                                                    <p>   Yes, they are and it is updated regularly.</p>
                                                    <strong>  What are the commission rates for each project?</strong>
                                                    <p>  The commission rate for Nişantaşı Koru and AcarBlu is 5% and for Yamanevler and Alya 4
                                                        Mevsim is 7%.</p>
                                                </div>
                                            </div>
                                        </div>*/}
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="Projects2">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProjects2" aria-expanded="false" aria-controls="collapseProjects2">
                                                    <strong> Avrupa Konutları Yamanevler</strong>
                                                </button>
                                            </h2>
                                            <div id="collapseProjects2" className="accordion-collapse collapse show" aria-labelledby="Projects2" data-bs-parent="#Projects">
                                                <div className="accordion-body ">
                                                    <strong> Where is this project located?</strong>
                                                    <p> It is located in Ümraniye, Yamanevler district, next to Yamanevler metro station.</p>
                                                    <strong> How big is the project area?</strong>
                                                    <p>  The plot itself is 75,000 sqm. and 60% of the project is green area.</p>
                                                    <strong>  How many units are there?</strong>
                                                    <p>  There are 2 phases, 13 blocks in total and almost 1600 units including 1+1, 2+1, 3+1 and
                                                        4+1 types. They start from 71,73 sqm and go to 209,59 sqm. The low-rise buildings on the
                                                        front side have 16 and 17 floors. In the second phase, the first and the second blocks are
                                                        residential blocks; these two residence blocks are 34-floors. Other blocks are 29 floors.</p>
                                                    <strong>  Which shopping malls are near the project?</strong>
                                                    <p> Canpark Mall, IKEA, BuYaka Mall, Meydan Mall and Akyaka Park Avm are near the project.</p>
                                                    <p><strong> Which educational institutions are near the project?</strong>
                                                        <p> Yeditepe University, Doğuş University, Fenerbahçe University, Medeniyet University,
                                                            Istanbul 29 Mayıs University, Bahçeşehir College and Fenerbahçe College are nearby.</p>
                                                        <strong> How many financial centers are there?</strong>
                                                        <p>There are 2 financial centers located near the project. One of these centers which was
                                                            established over an area of 300.000 sqm located in Ataşehir is a state-funded financial
                                                            center and also the largest financial center in İstanbul. The other financial center is situated
                                                            just 400 meters away from the project.</p>
                                                        <strong> What kind of amenities does this project have?</strong>
                                                        <p></p> - Cafe, supermarket, walking tracks, football &amp; basketball courts, swimming pool, fitness
                                                        center, sauna and kids playing area. Besides, there will be a private sports center in the
                                                        commercial area under Block 1 &amp; Block 2.</p>
                                                    <strong>When will the project be delivered?</strong>
                                                    <ul>
                                                        <li>Phase has already been delivered, ready to move.</li>
                                                        <li>Phase delivery is considered in July 2022. But based on the developer’s (Artaş
                                                            Group) former projects, the delivery of Yamanevler’s 2nd phase is expected to be in
                                                            May 2022.</li>
                                                    </ul>
                                                    <strong> Which appliances are included in the units?</strong>
                                                    <p> Interior fittings, wall cabinets, microwave, dishwasher, stove, oven and AC are included in
                                                        one bedroom and living rooms.</p>
                                                    <strong>What will be the expected rental income for the project?</strong>
                                                    <p> The rental price expected will be between 25-35 TL/sqm.</p>
                                                    <strong> What is the expected Facility Management Fee for the project?</strong>
                                                    <p>The expected FM Fee is 4 TL/sqm.</p>
                                                    <strong> What is the payment plan?</strong>
                                                    <p>Payment plans are cash and in installments.
                                                        The installment plan is; %40 down payment + installments until the delivery in May 2022.</p>
                                                    <strong> Is the project suitable for Turkish citizenship?</strong>
                                                    <p>Yes.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="Projects3">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProjects3" aria-expanded="false" aria-controls="collapseProjects3">
                                                    <strong>Nişantaşı Koru</strong>
                                                </button>
                                            </h2>
                                            <div id="collapseProjects3" className="accordion-collapse collapse" aria-labelledby="Projects3" data-bs-parent="#Projects">
                                                <div className="accordion-body ">
                                                    <strong>Where is this project located?</strong>
                                                    <p>It is located in Nişantaşı, Şişli at the heart of the city. Nişantaşı is an elite shopping district
                                                        and an affluent, secular residential area. The project is right behind American Hospital which
                                                        is the most prestigious and well-known hospital in the city.</p>
                                                    <strong> How many units are there?</strong>
                                                    <p> There are 5 residential and 1 commercial block. The total number of units is 160. Blocks are
                                                        9 floors + ground (because of the location of the land plot, there can be up to -2nd Floor).</p>
                                                    <strong>  How many unit types are there?</strong>
                                                    <p> Unit types range from 1+1 to 6+1. Total 45 units have private pools that are 25 sqm. Duplex
                                                        units are loft villas that have 8m ceilings. The ceiling height is 4m in this project, while the
                                                        average ceiling height is 2,3 m in Turkey. All units have different floor plans starting from
                                                        105,89 and going up to 581,53 sqm.</p>
                                                    <strong> What kind of amenities does this project have?</strong>
                                                    <p>There is a swimming pool, gym, pilates studio, entertainment room, sauna, hammam, steam
                                                        bath, lounge, golf cart and kids playing area. All apartments have storage areas up to 60m2
                                                        and parking slots up to 5.</p>
                                                    <strong>  When will it be delivered?</strong>
                                                    <p>It is considered to be at the end of 2023.</p>

                                                    <strong>  What are the attractions near the project?</strong>
                                                    <p>Maçka Parkı, Ihlamur Kasrı, Harbiye Open-Air Theatre, Lütfi Kırdar Congress &amp; Exhibit
                                                        Center and Dolmabahçe Palace are nearby attractions. It’s also 5 min walk away from Abdi
                                                        İpekçi Street which is famous for high-end stores like LV, Gucci, Prada, Hermes etc. and 10
                                                        minutes away from Beşiktaş, Taksim and Levent.</p>
                                                    <strong>What will be the expected rental income for the project?</strong>
                                                    <p>Since there are more than 2 years to deliver this project, as of October 2021 expected rental
                                                        price can be considered between 300-350 TL/sqm.</p>
                                                    <strong>What is the expected Facility Management Fee for the project?</strong>
                                                    <p> The expected FM Fee is 15-18 TL/sqm.</p>
                                                    <strong>  What is the payment plan for this project?</strong>
                                                    <p> Payment plans are cash and in installments. Installment plans are;
                                                        1. 50% down payment and 24 months installment,
                                                        2. 40% down payment, 10% interim payment after a year and 24 months installment.</p>
                                                    <strong>  How is the contract process going?</strong>
                                                    <p> The sales agreement is made directly with Emlak Konut and all payments go directly to
                                                        them. You will be given a month after deposit to transfer the full amount.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="accordion-item">
                                            <h2 className="accordion-header" id="Projects4">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProjects4" aria-expanded="false" aria-controls="collapseProjects4">
                                                    <strong>AcarBlu</strong>
                                                </button>
                                            </h2>
                                            <div id="collapseProjects4" className="accordion-collapse collapse" aria-labelledby="Projects4" data-bs-parent="#Projects">
                                                <div className="accordion-body ">
                                                    <strong>  Where is this project located?</strong>
                                                    <p> It is located in Acarkent, Beykoz. Acarkent is the most famous and most luxurious project in
                                                        Turkey. Most celebrities, singers, ambassadors, athletes and many famous people live in
                                                        this complex.</p>
                                                    <strong>  How many units are there?</strong>
                                                    <p>There are 2 blocks and almost 250 units which include 3+1, 3,5+1 and 4+1 types. The
                                                        project was built on 17.000 sqm of land. The apartment sizes range from 120 to 310 sqm.</p>
                                                    <strong> What kind of amenities does this project have?</strong>
                                                    <p> There are social spaces that span 3 floors and consist of an open area of 4000 sqm of
                                                        landscaping. Social facilities include running track, pet park, indoor swimming pool, spa,
                                                        sauna, gym, table tennis, game room, cinema hall, TV room, party room, children playroom
                                                        and playground. Also in the Acarkent complex, there is Coliseum fitness and gym with
                                                        75.000 sqm indoor and outdoor area which is the largest sports and social life center in
                                                        Turkey which contains gyms, swimming pools, tennis court, basketball court, mini-golf
                                                        courses, shooting area and many banks, kindergarten, colleges, veterinary, drug stores, car
                                                        services like Rolls-Royce service, etc.</p>
                                                    <strong>  Is this project ready to move?</strong>
                                                    <p>  Yes, it is.</p>

                                                    <strong> Which appliances are included in the units?</strong>
                                                    <p> Fridge, microwave, dishwasher, washing machine, dryer, stove, oven, underfloor heating
                                                        system, smart home system and AC are included. All units have 2 car parking lots and 5
                                                        sqm storage area.</p>
                                                    <strong> What are nearby attractions?</strong>
                                                    <p> There is a mall named BluShop which includes stores like 3M Migros, Chakra etc.</p>
                                                    <strong>  What will be the expected rental income for the project?</strong>
                                                    <p>  The rental price expected will be between 100-150 TL/sqm.</p>
                                                    <strong>What is the expected Facility Management Fee for the project?</strong>
                                                    <p>The expected FM Fee is 6,5 TL/sqm.</p>
                                                    <strong>  What is the payment plan?</strong>
                                                    <p>18% VAT + 2% title deeds excluded. All previous buyers were Turkish and bought for half
                                                        price. That’s why we can show 50% price in title deeds and thanks to that you will pay only
                                                        10% VAT and also you can take exemption from the government because you will be paying
                                                        in cash. This payment should be transferred from foreign bank accounts with SWIFT. After
                                                        that, you can benefit from the exemption from the government.</p>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="Projects5">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProjects5" aria-expanded="false" aria-controls="collapseProjects5">
                                                    <strong>Alya 4 Mevsim</strong>
                                                </button>
                                            </h2>
                                            <div id="collapseProjects5" className="accordion-collapse collapse" aria-labelledby="Projects5" data-bs-parent="#Projects">
                                                <div className="accordion-body ">
                                                    <strong>  Where is this project located?</strong>
                                                    <p> Alya 4 Mevsim is located on the European side of Istanbul, Esenyurt which is a developing
                                                        district and has a diverse population. The project is 10 min away from Beykent metrobus
                                                        station.</p>
                                                    <strong> How big is the project area?</strong>
                                                    <p>The project consists of 217 apartments and 6 shops from a total of 4 blocks. A,B,C,D Blocks
                                                        in an area of 39.695 sqm.</p>
                                                    <strong> How many units are there?</strong>
                                                    <p> Alya 4 Mevsim is made up of 4 blocks with 217 apartments. The A and B blocks are 15
                                                        floors in total, 3 of which are basement floors and 1 ground floor. The C and D blocks are a
                                                        total of 13 floors with 1 basement floor and 1 ground floor. The project also includes a car
                                                        park with a capacity of 157 cars.</p>
                                                    <strong>Which shopping malls are near the project?</strong>
                                                    <p> Istanbul Outlet Park, Perlavista Mall, Beylicium Mall, Marmara Park, City Center Outlet Mall
                                                        and Torium Mall are nearby malls to the project.</p>
                                                    <strong> Which educational institutions are near the project?</strong>
                                                    <p> Okyanus College, Mektebim Schools, Bahçeşehir College, Beykent University, Istanbul
                                                        Gelişim University, Istanbul Esenyurt University and Istanbul Aydın University.</p>

                                                    <strong>  What kind of amenities does this project have?</strong>
                                                    <p> Gym, indoor pool, steam bath, traditional Turkish bath. There are 700 m2 of green and social
                                                        areas in Alya 4 Mevsim.</p>
                                                    <strong>When will the project be delivered?</strong>
                                                    <p> It is scheduled for 2023.</p>
                                                    <strong>  Which appliances are included in the units?</strong>
                                                    <p> AC and white appliances are included in the units.</p>
                                                    <strong>What will be the expected rental income for the project?</strong>
                                                    <p> The rental price expected will be between 25-35 TL/sqm.</p>
                                                    <strong>What is the expected Facility Management Fee for the project?</strong>
                                                    <p> The expected FM Fee is 4 TL/sqm.</p>
                                                    <strong> What is the payment plan?</strong>
                                                    <p>Payment plans are cash and in installments.
                                                        The installment plan is; 40% down payment + installments until May 2022.</p>
                                                    <strong> Is the project suitable for Turkish citizenship?</strong>
                                                    <p> Yes.</p>
                                                    <strong>How many unit types are there in the project?</strong>
                                                    <p> There are 1+1, 2+1 and 3+1 types of units. They start from 60 sqm and go up to 180 sqm.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default WhyUsPage;