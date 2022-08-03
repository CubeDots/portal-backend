import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import CookieConsent from "react-cookie-consent";
import BecomeOurPartnerModal from "../components/home/BecomeOurPartnerModal";
import { API_ENDPOINT } from "../common/Constants";
//import ChatBots from "../pages/ChatBots";
import SocialSharingComponent from "../components/contact/SocialSharingComponent"

function Footer() {
    let publicPath = process.env.PUBLIC_URL;
    const [projects, setProjects] = useState([]);
    const [projectsLoading, setProjectsLoading] = useState(false);
    const [footersocialLoading, setFooterSocialLoading] = useState(false);
    const [footerSocialLinks, setFooterSocialLinks] = useState(null);
    const [footerContactNo, setFooterContactNo] = useState([]);
    const [footerContactEmails, setFooterContactEmails] = useState([]);
    async function fetchFooterSocial() {
        setFooterSocialLoading(true);
        try {
            const res = await axios.get(publicPath + "/assets/data/social.json");
            if (res.data) {
                setFooterSocialLoading(false);
                setFooterSocialLinks(res.data.social_links);
                setFooterContactNo(res.data.contact_no);
                setFooterContactEmails(res.data.emails_id);
            }
        } catch (error) {
            // console.error("error ", error);
            setFooterSocialLoading(false);
        }
    }
    async function fetchProject() {
        setProjectsLoading(true);
        try {
            const res = await axios.get(API_ENDPOINT + "projects/featuredHome");
            if (res.data.data) {
                // console.log("response project", res.data.data);
                setProjectsLoading(false);
                //let featuredProjects = res.data.filter(obj => ["skylandistanbul", "alya4mevsim", "nisantasi", "acar-blu"].includes(obj.slug))
                setProjects(res.data.data);
            }
        } catch (error) {
            // console.error("error ", error);
            setProjectsLoading(false);
        }
    }
    function refreshPage() {
        setTimeout(() => {
            window.location.reload();
        }, 300);
    }

    useEffect(() => {
        fetchFooterSocial();
        fetchProject();
    }, []);


    function scrollToTop() {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        //$('html, body').animate({scrollTop:0}, '300');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const [isBecomeOurPartnerModalShow, setIsBecomeOurPartnerModalShow] = useState(false);
    const showBecomeOurPartnerModal = () => {
        // console.log("showBecomeOurPartnerModal clicked");
        setIsBecomeOurPartnerModalShow(true);
    }

    const closeBecomeOurPartnerModalModal = () => {
        // console.log("closeBecomeOurPartnerModalModal trigger");
        setIsBecomeOurPartnerModalShow(false);
    }

    window.addEventListener('scroll', (event) => {
        let mtte = document.getElementById("moveToTop");
        if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
            if (mtte)
                mtte.style.display = "block";
        } else {
            if (mtte)
                mtte.style.display = "none";
        }
    });

    if (projectsLoading)
        return ("Please wait...");
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row px-0">
                        <div className="col-xl-3 col-md-4">
                            <Link className="navbar-brand" to="/">
                                <img src={publicPath + "/assets/images/Cubedots-logo.svg"} alt="" className="footerLogo" />
                            </Link>
                            {/* <div className="mt-4">
                                <input type="text" placeholder="Email address" className="email_input w-75" />
                            </div> */}
                            <div className="mt-3 pe-md-3">
                                <button type="button" className="enroll_btn" onClick={showBecomeOurPartnerModal}>Enroll Now</button>
                                {/* <p className="enroll_info">Get the latest market news and updates by joining our newsletter!</p> */}

                            </div>

                            <BecomeOurPartnerModal show={isBecomeOurPartnerModalShow} onHide={closeBecomeOurPartnerModalModal} />

                        </div>
                        <div className=" col-xl-3 col-md-4 footer-contact">
                            {/* <div className="d-flex align-items-center mb-4 flex-wrap">
                                <a href={footerSocialLinks ? footerSocialLinks.facebook : ''} target="_blank" rel="noreferrer" className="social_btn facebook">
                                    <svg width="14.195px" height="27.001px" viewBox="0 0 14.195 27.001" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Page-1" stroke="none" strokeWidth="1" fill="currentColor" fillRule="evenodd">
                                            <path d="M13.66,0.006 L10.255,0 C6.43,0 3.958,2.608 3.958,6.645 L3.958,9.709 L0.535,9.709 C0.239,9.709 0,9.956 0,10.26 L0,14.699 C0,15.003 0.239,15.249 0.535,15.249 L3.958,15.249 L3.958,26.451 C3.958,26.755 4.198,27.001 4.493,27.001 L8.96,27.001 C9.256,27.001 9.495,26.754 9.495,26.451 L9.495,15.249 L13.498,15.249 C13.794,15.249 14.033,15.003 14.033,14.699 L14.035,10.26 C14.035,10.114 13.978,9.974 13.878,9.871 C13.777,9.767 13.641,9.709 13.499,9.709 L9.495,9.709 L9.495,7.112 C9.495,5.863 9.785,5.23 11.366,5.23 L13.659,5.229 C13.955,5.229 14.195,4.982 14.195,4.679 L14.195,0.557 C14.195,0.253 13.955,0.006 13.66,0.006" id="fb" fill="currentColor" />
                                        </g>
                                    </svg>
                                </a>
                             
                                <a href={footerSocialLinks ? footerSocialLinks.instagram : ''} target="_blank" rel="noreferrer" className="social_btn instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                    </svg>
                                </a>
                                <a href={footerSocialLinks ? footerSocialLinks.linkedin : ''} target="_blank" rel="noreferrer" className="social_btn linkedin">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                    </svg>
                                </a>
                                <a target="_blank" rel="noreferrer" className="social_btn whatsApp" href="https://web.whatsapp.com/send?phone=90-544-382-51-21&text=Hii">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                    </svg>
                                </a>
                            </div> */}
                            <div className="mb-3">
                                <SocialSharingComponent />
                            </div>
                            <div className="d-flex">
                                <div className="me-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                    </svg>
                                </div>
                                {footerContactNo && footerContactNo.map((phone, i) =>
                                    <a key={i} href={'tel:' + phone}>{phone}</a>
                                )}
                            </div>
                            <div className="d-flex align-items-baseline mt-2">
                                <div className="me-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                    </svg>
                                </div>
                                {footerContactEmails && footerContactEmails.map((email, i) =>
                                    <a key={i} href={'mailto:' + email}>{email}</a>
                                )}
                            </div>
                            <div className="d-flex align-items-baseline my-2">
                                <div className="me-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-headset" viewBox="0 0 16 16">
                                        <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
                                    </svg>
                                </div>
                                <Link to="/helpSupport">
                                    Help &amp; Support
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4">
                            <div className="">
                                <h4 className="loremHeading">Projects</h4>
                                <div className="d-flex flex-column">
                                    {projects && projects.map((row, i) => {
                                        return (
                                            <div key={i}>
                                            <>
                                            
                                                { row.slug != 'acarblu' ?
                                                    <Link to={`/projects/${row.slug}`} onClick={refreshPage}  className="footer_link">{row.title}</Link>
                                                    : ''}
                                                
                                            
                                            </>
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-6 col-6 d-flex justify-content-xl-center justify-content-md-end">
                            <div className="cuverseFooterSection">
                                <h4 className="loremHeading">CuVerse</h4>
                                <div className="d-flex flex-column">
                                    <Link to="/cuverse/#projectContent" className="footer_link">Project Content</Link>
                                    {/* <Link to="/faqs" className="footer_link">FAQ</Link> */}
                                    {/* <a href="#" className="footer_link">Sitemap</a> */}
                                    {/* <a href="#" className="footer_link">Help &amp; Support</a> */}
                                    <Link to="/cuverse/#insights" className="footer_link">Insights</Link>
                                    {/* <a type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" className="footer_link">
                                        Help &amp; Support
                                    </a> */}
                                </div>
                            </div>

                        </div>
                        <div className="col-xl-2 col-md-6 col-6 d-flex justify-content-md-center">
                            <div className="cuverseFooterSection">
                                <h4 className="loremHeading">CuSocial</h4>
                                <div className="d-flex flex-column">
                                    <Link to={'/cusocials/offers'} className="footer_link">Offers</Link>
                                    {/* <Link to="/faqs" className="footer_link">FAQs</Link> */}
                                    {/* <Link to={'/cusocials/category/announcement'} className="footer_link">Announcements</Link> */}
                                    {/* <Link to={'/cusocials/category/event'} className="footer_link">Events</Link> */}
                                    <Link to={'/cusocials/blog'} className="footer_link">Blog</Link>
                                    {/* <Link to={'/cusocials/category/video'} className="footer_link">Videos</Link> */}
                                </div>
                            </div>
                        </div>
                        <hr className="horizontal" size="1" />

                    </div>
                    <div className="row">
                        <div className="col-md-8 text-md-start text-center">
                            <span className="footer_link">
                                Copyright @2022 Cubedots.com | <Link to="/privacy-policy" className="footer_link">Privacy Policy</Link> | <Link to="/terms" className="footer_link">Terms & Conditions </Link>| <Link to={"site-map"} className="footer_link">Sitemap</Link>
                            </span>
                        </div>
                        <div className="col-md-4 text-md-end text-center">
                            <h5 className="footer_link">
                                Powered by <a className="text-dark" href="http://cubedots.com" target="_blank">Cubedots.com</a>
                            </h5>
                        </div>
                    </div>
                </div>

            </footer>
            {/*<ChatBots/>*/}
            <div id="moveToTop" className="moveToTop" onClick={() => scrollToTop()} style={{ display: 'none' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                </svg>
            </div>
            {/*help&support*/}
            <div className="helpAndSupportOffCanvas offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <div className='generateTicket'>
                        <h5>Generate Ticket</h5>
                    </div>
                    <h5 id="offcanvasRightLabel"></h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className='helpAndSupportBody'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col'>
                                    <div className='helpAndSupportInput'>
                                        <div className='titleDiv'>
                                            <label className='TitleHeading'>Title</label>
                                            <input type="text" className='form-control inputOffCanvas' placeholder='Enter Title'></input>
                                        </div>
                                        <div className='categoryDiv'>
                                            <label className='TitleHeading'>Category</label>
                                            <input type="text" className='form-control' placeholder='Choose Category'></input>
                                        </div>
                                        <div className='priorityDiv'>
                                            <label className='TitleHeading'>Priority</label>
                                            <input type="text" className='form-control' placeholder='Enter Priority'></input>
                                        </div>
                                        <div className='messageDiv'>
                                            <label className="form-label">Message</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder='Message'>
                                            </textarea>
                                        </div>
                                        <button className=' sendBtn'>SEND</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CookieConsent
                location="bottom"
                buttonText="Accept"
                buttonClasses="acceptBtn"
                declineButtonClasses="cancelBtn"
                declineButtonText="Cancel"
                cookieName="myAwesomeCookieName2"
                style={{ background: "#FFFF", color: "#444", fontSize: "13px", position: "sticky", }}
                buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                expires={150}
                enableDeclineButton>
                <div className="dislaimerSection">
                    <p> <b>Disclaimer:</b> Cubedots Eco-System uses cookies to provide necessary website functionality, improve your experience and analyze our traffic. By using our website, you agree to our
                        <Link to={"/privacy-policy"} target="_blank"> Privacy Policy</Link> and our <Link to={"/cookie-policy"} target="_blank">Cookies Policy</Link>.</p>

                </div>
            </CookieConsent>
        </>
    );
}

export default Footer;