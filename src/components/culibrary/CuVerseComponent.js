import React, { useEffect, useState } from 'react';
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function CuVerseComponent() {
    let publicPath = process.env.PUBLIC_URL;
    const [cuverseLoading, setCuVerseLoading] = useState(false);
    const [cuverse, setCuVerse] = useState([]);

    async function fetchCuVerse() {
        setCuVerseLoading(true);
        try {
            const res = await axios.get(publicPath + "/assets/data/CuVerse.json");
            if (res.data) {
                setCuVerseLoading(false);
                setCuVerse(res.data);
            }
        } catch (error) {
            console.error("error ", error);
            setCuVerseLoading(false);
        }
    }

    useEffect(() => {
        // window.scrollTo({ top:0,left:0,behavior:'smooth'});
        fetchCuVerse();
    }, []);
    return (
        <>
            <div className="searchBoxContent">
                <div className="row">
                    {cuverse && cuverse.map((row, index) => {
                        return (
                            <div className="col-md-3" key={index}>
                                <div className="yamanBox">
                                    <div className="yamanImage">
                                        <LazyLoadImage alt="" src={publicPath + row.featured_image} className="img-fluid" />
                                    </div>
                                    <div className="yamanContent">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h5>{row.title}</h5>
                                            </div>
                                            <div className='yamanDots'>
                                                <a>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <h6>{row.sub_title}</h6>
                                        <p>{row.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default CuVerseComponent;