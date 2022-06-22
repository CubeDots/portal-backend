import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
//import Moment from 'react-moment';
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { API_ENDPOINT } from "../../common/Constants";
import CharactersLimitComponent from "../CharactersLimitComponent";



function GeneralPage() {
    let publicPath = process.env.PUBLIC_URL;

    const [cuSocialsLoading, setCuSocialsLoading] = useState(false);
    const [cuSocials, setCuSocials] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        setCuSocialsLoading(true);
        try {
            const res = await axios.get(API_ENDPOINT + "cusocial/latestByCategory/general");
            if (res.data.data)
                setCuSocials(res.data.data);

            setCuSocialsLoading(false);

        } catch (error) {
            // console.error("error ", error);
            setCuSocialsLoading(false);
        }
    }

    return (
        <>

            <div className="generalPage">
                {cuSocialsLoading ?
                    <>
                        <div className="text-center">Loading...</div>
                    </>
                    :
                    <>
                        <div>
                            {cuSocials.length > 0 ?
                                <>
                                    <Carousel>
                                        {cuSocials.map((row, index) =>
                                            <Carousel.Item interval={1000} key={row.id} >
                                                <LazyLoadImage alt="" src={row.featured_image ? row.media_s3_base_path + row.featured_image : publicPath + '/assets/images/newsfeed.jpeg'} className="img-fluid" />
                                                <Carousel.Caption>
                                                    <Link to={`/cusocials/${row.slug}`} >
                                                        <h3>
                                                            <CharactersLimitComponent isShowbutton={false} content={row.title} limit={100} />
                                                        </h3>
                                                    </Link>
                                                    <p><CharactersLimitComponent isShowbutton={false} content={row.medium_description} limit={120} /></p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        )}
                                    </Carousel>
                                </>
                                :
                                <><div className="text-center text-light">No data available.</div></>}
                        </div>
                    </>
                }
            </div>
        </>
    )
}
export default GeneralPage;


