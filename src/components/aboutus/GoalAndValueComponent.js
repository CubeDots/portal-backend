import React, { useEffect, useRef, useState } from 'react';
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function GoalAndValueComponent() {
    let publicPath = process.env.PUBLIC_URL;
    const [goalandvaluesLoading, setGoalAndValueLoading] = useState(false);
    const [goalandvalue, setGoalAndValue] = useState([]);

    async function fetchGoalAndValue() {
        setGoalAndValueLoading(true);
        try {
            const res = await axios.get(publicPath + "/assets/data/goalandvalue.json");
            if (res.data) {
                setGoalAndValueLoading(false);
                setGoalAndValue(res.data);
            }
        } catch (error) {
            // console.error("error ", error);
            setGoalAndValueLoading(false);
        }
    }

    useEffect(() => {
        // window.scrollTo({ top:0,left:0,behavior:'smooth'});
        fetchGoalAndValue();
    }, []);

    return (
        <>
            <div className="goalValuesBox section">
                <div className="container">
                    <div className="goalValuesHeading">
                        {/* <p>Lorem ipsum dolor sit amet</p> */}
                        <h2 className="vegonHeading">Our Values</h2>
                    </div>
                    <div className="goalValueContentDiv">
                        <div className="row justify-content-center">
                        {goalandvaluesLoading ? 'please wait...' : ''}
                            {goalandvalue && goalandvalue.map((row, index) => {
                                return(
                            <div className="col-md-6 col-lg-3 goalValuecontentbox" key={index}>
                                <div className="goalValuecontent goalAndValueBox">
                                    <LazyLoadImage alt="" src={publicPath + row.feature_image} className="img-fluid" />
                                    <h5>{row.title}</h5>
                                    <p>{row.description}</p>
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
export default GoalAndValueComponent;