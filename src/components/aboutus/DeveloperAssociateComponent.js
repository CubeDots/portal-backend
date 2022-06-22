import React, { useEffect, useRef, useState } from 'react';
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import CubedotBrandTechnologylogoComponent from "../../components/whyus/CubedotBrandTechnologylogoComponent";

function DeveloperAssociateComponent(props) {
    let publicPath = process.env.PUBLIC_URL;
    const [developerAssociateLoading, setDeveloperAssociateLoading] = useState(false);
    const [developerAssociate, setDeveloperAssociate] = useState([]);

    async function fetchDeveloperAssociate() {
        setDeveloperAssociateLoading(true);
        try {
            const res = await axios.get(publicPath + "/assets/data/developerAssociate.json");
            if (res.data) {
                setDeveloperAssociateLoading(false);
                setDeveloperAssociate(res.data);
            }
        } catch (error) {
            // console.error("error ", error);
            setDeveloperAssociateLoading(false);
        }
    }

    useEffect(() => {
        // window.scrollTo({ top:0,left:0,behavior:'smooth'});
        fetchDeveloperAssociate();
    }, []);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
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
    return (
        <>
            <div className="developerAssociatedWithUsBox section">
                <div className="developerAssociatedHeadingSection">
                    {/* <small>lorem ipsum quia dolor sit amet</small> */}
                    <h2 className='text-center '>Developers Associated With Us</h2>
                </div>
                <CubedotBrandTechnologylogoComponent />
                {/* {!developerAssociateLoading ?
                        <Carousel responsive={responsive} autoPlay={props.deviceType !== "mobile" ? true : false} removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]} infinite={true}>
                            {developerAssociate && developerAssociate.map((row, index) => {
                                return (
                                    <div className="developerPartnersLogos" key={index}>
                                        <LazyLoadImage alt="" src={publicPath + row.featured_image} className="img-fluid" />
                                    </div>
                                )
                            })}
                        </Carousel>
                        : ''} */}

            </div>
        </>
    )
}
export default DeveloperAssociateComponent;