
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "animate.css/animate.min.css";


function OurFounderComponent() {

    let publicPath = process.env.PUBLIC_URL;
    const [ourfounderLoading, setOurFounderLoading] = useState(false);
    const [ourfounder, setOurFounder] = useState([]);

    async function fetchOurFounder() {
        setOurFounderLoading(true);
        try {
            const res = await axios.get(publicPath + "/assets/data/ourFounder.json");
            if (res.data) {
                setOurFounderLoading(false);
                setOurFounder(res.data);
            }
        } catch (error) {
            // console.error("error ", error);
            setOurFounderLoading(false);
        }
    }

    useEffect(() => {
        // window.scrollTo({ top:0,left:0,behavior:'smooth'});
        fetchOurFounder();
    }, []);


    return (
        <>
            <div className="row justify-content-center">
                {ourfounder && ourfounder.map((row, index) => {
                    return (
                        <div className="col-md-6 col-lg-4 mt-lg-0 mt-4" key={index}>
                            
                                <div className="ourFounderContent">
                                    <div className="nameBox">
                                        <div className="nameBoxImage text-center">
                                            <LazyLoadImage alt="" src={publicPath + row.avatar} className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="nameBoxContent">
                                        <div className="nameAndAboutSection">
                                            <h5>{row.name}</h5>
                                            <p>{row.about}</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default OurFounderComponent;