import React, { useEffect, useRef, useState } from 'react';
import axios from "axios";
import "animate.css/animate.min.css";

function ContactUsInfoComponent() {
    let publicPath = process.env.PUBLIC_URL;
    const [contactusLoading, setContactUsLoading] = useState(false);
    const [contactUs, setContactUs] = useState([]);

    async function fetchContactUs() {
        setContactUsLoading(true);
        try {
            const res = await axios.get(publicPath + "/assets/data/contact.json");
            if (res.data) {
                setContactUsLoading(false);
                setContactUs(res.data);
            }
        } catch (error) {
            // console.error("error ", error);
            setContactUsLoading(false);
        }
    }

    useEffect(() => {
        // window.scrollTo({ top:0,left:0,behavior:'smooth'});
        fetchContactUs();
    }, []);
    return (
        <>
            <div className="locationCard">
                <div className="container">
                    <div className="row justify-content-center">
                        {contactUs && contactUs.map((row, index) => {
                            return (
                                <div className="col-md-6 locationCardBox" key={index}>
                                    <div className="locationCardData">
                                        <h4>{row.country_name}</h4>
                                        <div className="locationCardDetails">
                                        <div className="d-flex">
                                                <div className="col-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#B8532e" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                    </svg>
                                                </div>
                                                <div className="col-11">
                                                <p><a target="_blank" href={row.google_map_embed} className="locationCardDataPara locationCardAdress">{row.country_address}</a></p>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="col-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#B8532e" className="bi bi-telephone" viewBox="0 0 16 16">
                                                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                                    </svg>

                                                </div>
                                                <div className="col-11">
                                                    <p><a href={'tel:' + row.contact_number} className="locationCardDataPara locationCardPhone">{row.contact_number}</a></p>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="col-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#B8532e" className="bi bi-envelope" viewBox="0 0 16 16">
                                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                                    </svg>
                                                </div>
                                                <div className="col-11">
                                                    <p><a href={'mailto:' + row.email_id} className="locationCardDataPara locationCardEmail">{row.email_id}</a></p>
                                                    {/* <a className="locationContactIcon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#B8532e" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                        </svg>
                                                    </a> */}
                                                </div>
                                            </div>
                                            {row.po_box ? 
                                            <div className='d-flex'>
                                                <div className='col-1'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#B8532e" className="bi bi-mailbox" viewBox="0 0 16 16">
                                                        <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z" />
                                                        <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z" />
                                                    </svg>
                                                </div>
                                                <div className='col-11'>
                                                    <p className="locationCardDataPara">{row.po_box}</p>
                                                </div>
                                            </div>
                                            :
                                            ''
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactUsInfoComponent;