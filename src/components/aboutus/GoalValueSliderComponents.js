import React, { useEffect, useRef, useState } from 'react';
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Carousel from "react-multi-carousel";


function GoalValueSliderComponents(props) {
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

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            paritialVisibilityGutter: 60,
            slidesToSlide: 3 
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            paritialVisibilityGutter: 50,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            paritialVisibilityGutter: 0
        }
    };


    return (
        <>
            {/* <div id="goalandvalue" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner"> */}
            <div className='multiCaruselGoalValue'>
                <Carousel
                    ssr
                    customTransition="all ease-in-out 0.2s "
                    transitionDuration={500}
                    itemClass="image-item"
                    infinite={true}
                    autoPlaySpeed={1000}
                    responsive={responsive}>
                    {goalandvalue && goalandvalue.map((row, i) => {
                        return (
                            <div className="row justify-content-center">
                                <div className="col-md-3  goalandvalueslider" key={i}>
                                    <div className="  goalandvaluesliderBox">
                                        <img alt="" src={publicPath + row.feature_image} className="img-fluid" />
                                        <h5>{row.title}</h5>
                                        <p>{row.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )}
                </Carousel>
            </div>

            {/* {goalandvalue && goalandvalue.map((row, i) =>
                        <div className={i === 0 ? 'carousel-item active' : 'carousel-item'} key={i}>
                            <div className="testimonial-block">
                                <div className="row justify-content-center">
                                    <div className="col-md-3  goalandvalueslider" key={i}>
                                        <div className="  goalandvaluesliderBox">
                                            <img alt="" src={publicPath + row.feature_image} className="img-fluid" />
                                            <h5>{row.title}</h5>
                                            <p>{row.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )} */}
            {/* </div> */}
            {/* <div className="carouselNav goalandvaluebacknext">
                    <button className="carousel-control-prev" type="button" data-bs-target="#goalandvalue" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"><img alt="" src={publicPath + "/assets/images/left.svg"} /></span>
                        <span className="visually-hidden">prev</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#goalandvalue" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"><img alt="" src={publicPath + "/assets/images/right.svg"} /></span>
                        <span className="visually-hidden">next</span>
                    </button>
                </div> */}

            {/* </div> */}
        </>
    )
}
export default GoalValueSliderComponents;