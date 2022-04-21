
import { useEffect, useState } from 'react';

import axios from "axios";

function WhyUsWhyUsTestimonialComponent() {
    let publicPath = process.env.PUBLIC_URL;
    const [whyUsTestimonialLoading, setWhyUsTestimonialLoading] = useState(false);
    const [whyUsTestimonial, setWhyUsTestimonial] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        setWhyUsTestimonialLoading(true);
        try {
            const res = await axios.get(publicPath + "/assets/data/whyUsTestimonial.json");
            setWhyUsTestimonial(res.data);
            setWhyUsTestimonialLoading(false);

        } catch (error) {
            console.error("error ", error);
            setWhyUsTestimonialLoading(false);
        }
    }

    if (whyUsTestimonialLoading)
        return ("Please wait...");

    return (
        <>
            <div className="whyTestimonail">
            <h2 className='m-auto vegonHeading'>What they say about Cubedots</h2>
                <div id="testimonialcarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">

                        {whyUsTestimonial && whyUsTestimonial.map((row, i) =>
                            <div className={i === 0 ? 'carousel-item active' : 'carousel-item'} key={i}>
                                {/* <div className="testimonial-block">
                                    <div className="row justify-content-center">
                                        <div className="col-md-9 text-center">
                                            <h4>{row.client_name}</h4>
                                            <p>{row.message}</p>
                                        </div>
                                        
                                    </div>
                                </div> */}
                                <div className="container">
                                    <div className="row align-item">
                                        <div className="col-md-10 mx-auto ">
                                            <figure className="text-center">
                                                <blockquote className="blockquote">
                                                    <h3> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16">
                                                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                                    </svg>{row.message}</h3>
                                                </blockquote>
                                                <figcaption className="blockquote-footer">
                                                   {row.client_name}
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                    <div className="carouselNav text-center">
                        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialcarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"><img alt="" src={publicPath + "/assets/images/left.svg"} /></span>
                            <span className="visually-hidden">prev</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#testimonialcarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"><img alt="" src={publicPath + "/assets/images/right.svg"} /></span>
                            <span className="visually-hidden">next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WhyUsWhyUsTestimonialComponent;