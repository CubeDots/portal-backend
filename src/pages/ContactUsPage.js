
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import GoogleMap from "../components/GoogleMap";
import ContactFormComponent from "../components/contact/ContactFormComponent";
import ContactUsInfoComponent from "../components/contact/ContactUsInfoComponent";
//import "animate.css/animate.min.css";
//import AnimationOnScroll from '../components/AnimationOnScroll';


function ContactUsPage() {
    let publicPath = process.env.PUBLIC_URL;
    useEffect(() => {
        window.scrollTo({ top:0,left:0,behavior:'smooth'});
    }, []);

    return (
        <div className="mt-70 contactSection">
            <Helmet>
                <title>CubeDots – Contact To Increase Your Real Estate Sales</title>
                <meta name="description" content="Contact us today to start selling the best real estate projects in İstanbul with our efficient sales system and good commission rates." />
            </Helmet>
            <div className="">
                <img src={publicPath + "/assets/images/bannerimages/contactus.jpg"} alt="" className="img-fluid w-100" />
            </div>
            <div className="contactForm">
                <div className="contactEnquiryPage">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            {/* <div className="col-md-5">
                               
                                    <div className="contactImgs text-center">
                                        <img src={publicPath + "/assets/images/contactus.jpg"} alt="" className="img-fluid" />
                                    </div>
                                
                            </div> */}
                            <div className="col-lg-12">
                                <div className="contactformsection">
                                    <div className="row justify-content-center">
                                        <div className="col-md-4">
                                            <div className="ContactformRightImg text-center">
                                                <img src={publicPath + "/assets/images/Enquirenow.png"} className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-10">
                                            <ContactFormComponent />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ContactUsInfoComponent />
            </div>
            <div className="map">
                <GoogleMap width="100%" height="350" address="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.237116746617!2d-0.14755998422997038!3d51.508865679635335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605296fb85b93%3A0x7497b70efd1b7dcb!2s57%20Berkeley%20Square%2C%20London%20W1J%206ER%2C%20UK!5e0!3m2!1sen!2sin!4v1646046381248!5m2!1sen!2sin" />
            </div>
        </div>
    );
}

export default ContactUsPage;