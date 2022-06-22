import React, { useEffect, useState } from 'react';
import axios from "axios";

function OurPresenceComponent() {
    let publicPath = process.env.PUBLIC_URL;
    const [ourpresenceLoading, setOurPresenceLoading] = useState(false);
    const [ourpresence, setOurPresence] = useState([]);

    async function fetchOurPresence() {
        setOurPresenceLoading(true);
        try {
            const res = await axios.get(publicPath + "/assets/data/contact.json");
            if (res.data) {
                setOurPresenceLoading(false);
                setOurPresence(res.data);
            }
        } catch (error) {
            // console.error("error ", error);
            setOurPresenceLoading(false);
        }
    }
    useEffect(() => {
        // window.scrollTo({ top:0,left:0,behavior:'smooth'});
        fetchOurPresence();
    }, []);
    return (
        <>
            <div className="ourPresenceBox section">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-12">
                            <div className="ourPresenceTESTIMONIAL">
                                {/* <small>lorem ipsum quia dolor sit amet</small> */}
                                <h2 className="vegonHeading mb-lg-5">Our Offices</h2>
                            </div>
                        </div>
                    </div>
                    {/* <img src={publicPath + "/assets/images/worldmap.png"} className='img-fluid'/> */}
                    <div className="ourPresenceContent" ref={(node) => {
                        if (node) {
                            node.style.setProperty("background", `url(${publicPath}/assets/images/.png)`, "important");
                            node.style.setProperty("background-repeat", `no-repeat`, "important");
                            node.style.setProperty("background-size", `100%`, "important");
                            node.style.setProperty("background-position", `left 86%`, "important");
                        }
                    }}>
                        <div className="row justify-content-center">
                            {ourpresence && ourpresence.map((row, index) => {
                                return (
                                    <div className="col-lg-3 col-md-6 mt-lg-0 mt-3" key={index}>
                                        <div className="indiaCountry">
                                            <div className='indiaCountryOverylay'>
                                                <div>
                                                    <div className='text-center mb-2'>
                                                        <img src={publicPath + row.country_flag} className=" text-center" width={30} alt="" />
                                                    </div>
                                                    <h5 className='text-center'>{row.country_name}</h5>
                                                </div>
                                            </div>
                                            <div className='countryContent '>
                                                <h4>{row.country_name}</h4>
                                                <div className="countryContactDetails">
                                                <div className="d-flex justify-content-between mb-3">
                                                        <div className="col-1">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#B8532e" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                            </svg>
                                                        </div>
                                                        <div className="col-10">
                                                        <a target="_blank" href={row.google_map_embed} className="indiaCountryPara aboutPageAdress">{row.country_address}</a>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="col-1">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#B8532e" className="bi bi-telephone" viewBox="0 0 16 16">
                                                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                                            </svg>
                                                        </div>
                                                        <div className="col-10">
                                                            <a href={'tel:' + row.contact_number} className="indiaCountryPara phoneNumber">{row.contact_number}</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OurPresenceComponent;