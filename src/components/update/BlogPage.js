import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//import Moment from 'react-moment';
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { API_ENDPOINT } from "../../common/Constants";
import CharactersLimitComponent from "../CharactersLimitComponent";
import SocialShareButtons from "./SocialShareButtons";

function BlogPage() {
    let publicPath = process.env.PUBLIC_URL;

    const [cuSocialsLoading, setCuSocialsLoading] = useState(false);
    const [cuSocials, setCuSocials] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        setCuSocialsLoading(true);
        try {
            const res = await axios.get(API_ENDPOINT + "cusocial/latestByCategory/blog");
            if (res.data.data)
                setCuSocials(res.data.data);

            setCuSocialsLoading(false);

        } catch (error) {
            console.error("error ", error);
            setCuSocialsLoading(false);
        }
    }

    const onPrevClick = () => {
        carouselRef.current.prev();
    };
    const onNextClick = () => {
        carouselRef.current.next();
    };

    const carouselRef = useRef(null);


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

            <div className="blogSection">
                <div className="container">
                    <h2>Blog</h2>
                    {cuSocialsLoading ?
                        <>
                            <div className="text-center">Loading...</div>
                        </>
                        :
                        <>
                            <div>
                                {cuSocials.length > 0 ?
                                    <>
                                        <Carousel responsive={responsive}>
                                            {cuSocials.map((row, index) =>
                                                <div key={row.id}>
                                                    <div className="blogBox">
                                                        <LazyLoadImage alt="" src={row.featured_image ? row.media_s3_base_path + row.featured_image : publicPath + '/assets/images/newsfeed.jpeg'} className="img-fluid w-100" />
                                                        <div className='blogContent'>
                                                            <h5>
                                                                <CharactersLimitComponent isShowbutton={false} content={row.title} limit={35} />
                                                            </h5>
                                                            <small><CharactersLimitComponent isShowbutton={false} content={row.medium_description} limit={120} /></small>
                                                            <p><Link to={`/cusocials/${row.slug}`} className="blogBtn">Read More</Link></p>

                                                           <SocialShareButtons data={row}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </Carousel>
                                    </>
                                    :
                                    <><div className="text-center text-light">No data available.</div></>}
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}
export default BlogPage;