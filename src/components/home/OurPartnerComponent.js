import React, { useEffect, useState } from 'react';
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import Marquee from "react-fast-marquee";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function OuPartnerComponets(props) {

    let publicPath = process.env.PUBLIC_URL;
    const [ourPartnerComponentLoading, setOurPartnerComponentLoading] = useState(false);
    const [ourPartnerComponent, setOurPartnerComponent] = useState([]);
    const [parnerLogoMarqueePlay, setParnerLogoMarqueePlay] = useState(false);

    async function fetchOurPartnerComponent() {
        setOurPartnerComponentLoading(true);
        try {
            const res = await axios.get(publicPath + "/assets/data/ourPartner.json");
            if (res.data) {
                setOurPartnerComponentLoading(false);
                setOurPartnerComponent(res.data);
            }
        } catch (error) {
            console.error("error ", error);
            setOurPartnerComponentLoading(false);
        }
    }

    useEffect(() => {
        // window.scrollTo({ top:0,left:0,behavior:'smooth'});
        fetchOurPartnerComponent();
        setTimeout( () => {
            setParnerLogoMarqueePlay(true);
        },1000)
    }, [parnerLogoMarqueePlay]);

    // const partnerresponsive = {
    //     superLargeDesktop: {
    //         // the naming can be any, depends on you.
    //         breakpoint: { max: 4000, min: 3000 },
    //         items: 6
    //     },
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 6
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 2
    //     },
    //     mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 1
    //     }
    // };

    return (
        <>
            <div className="partners section">
                <div className="container">
                    <div className="headingSection text-center">
                        <h2 className="vegonHeading">Exclusive Partners</h2>
                    </div>
                    {/* {!ourPartnerComponentLoading ?
                    <Carousel responsive={partnerresponsive} autoPlay={props.deviceType !== "mobile" ? true : false} removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]} infinite={true}>
                            {ourPartnerComponent && ourPartnerComponent.map((row, index) => {
                                return (
                                    <div className="partnersLogos" key={index}>
                                        <LazyLoadImage alt="" src={publicPath + row.partner_logo} className="img-fluid" />
                                    </div>
                                )
                            })}
                        </Carousel>
                        : ''} */}
                    {!ourPartnerComponentLoading ?
                         (<div className='partnerLogo'>
                            <Marquee play={parnerLogoMarqueePlay} pauseOnHover={false} >
                                {ourPartnerComponent && ourPartnerComponent.map((row, index) => {
                                    return (
                                        <div className={"partnersLogos " +  row.title} key={index}>
                                            <LazyLoadImage alt="" src={publicPath + row.partner_logo} className="img-fluid"/>
                                        </div>
                                    )
                                })}
                            </Marquee>
                        </div>)
                        : ''}
                </div>
            </div>
        </>
    )
}
export default OuPartnerComponets;