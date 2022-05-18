import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "react-multi-carousel/lib/styles.css";
import ReactPlayer from 'react-player'


import Moment from 'react-moment';
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useIsAuthenticated } from 'react-auth-kit';

import { API_ENDPOINT } from "../common/Constants";
import SocialShareButtons from "../components/update/SocialShareButtons";


function CuSocialDetailPage(props) {
    let publicPath = process.env.PUBLIC_URL;
    let navigate = useNavigate();
    let { category, id } = useParams();
    const isAuthenticated = useIsAuthenticated();


    const [cuSocialLoading, setCuSocialLoading] = useState(false);
    const [cuSocial, setCuSocial] = useState(null);

    async function fetchCuSocial() {
        setCuSocialLoading(true);
        console.log("id ", id);
        try {
            const res = await axios.get(API_ENDPOINT + "cusocial/show/" + id);
            setCuSocialLoading(false);
            console.log("res.data.data", res.data.data);
            if (res.data) {
                setCuSocial(res.data.data);
            }
        } catch (error) {
            console.error("error ", error);
            setCuSocialLoading(false);
        }
    }
    window.onload = function () {
        window.scrollTo({ top:0,behavior:'smooth'});
      }
    useEffect(() => {
        window.scrollTo({ top:0,left:0,behavior:'smooth'});
        fetchCuSocial();
    }, []);


    const openLogin = () => {
        console.log("openLogin clicked");
        document.querySelector('#loginButton').click();
    }

    if (!isAuthenticated() && category === 'offers') {
        return (
            <>

                <div className="container">
                    <div className="row my-5 py-5">
                        <div className="col my-5 text-center">
                            <h4>To view Offers <button className="btntheme" onClick={() => openLogin()}>Login here</button></h4>
                            <div><br /></div>
                            
                            &nbsp;
                            <button className="btn btn-primary" onClick={() => navigate(-1)}>Go back</button>
                        </div>
                    </div>
                </div>


            </>
        );
    }
    

    return (
        <>
            <div className="CuSocialDetailPage mt-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-auto">
                            <button className="cusocialBackBtn" onClick={() => navigate(-1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                </svg> Back
                            </button>
                        </div>
                        <div className="col">
                            <h3 className="cuSocialDetailHeading">CuSocial</h3>
                        </div>
                    </div>
                </div>


                <div className="container mt-2">

                    {cuSocialLoading ?
                        <>
                            <div className="row">
                                <div className="col text-center">Loading...</div>
                            </div>
                        </>
                        :
                        <>
                            {cuSocial ?
                                <>
                                    <div className="row">

                                        <div className="col">
                                            <div className="cusocialHeadingSection"><h1>{cuSocial.title}</h1></div>
                                            <div>{cuSocial.category.toUpperCase()} | <Moment fromNow>{cuSocial.created_at}</Moment></div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5">
                                            
                                            {cuSocial.category === 'video' ?
                                                <>
                                                    <div>
                                                        <ReactPlayer url={cuSocial.youtube_url} />
                                                    </div>
                                                </>
                                                :
                                                <>
                                                    <div>
                                                        <LazyLoadImage alt="" src={cuSocial.featured_image ? cuSocial.media_s3_base_path + cuSocial.featured_image : publicPath + '/assets/images/newsfeed.jpeg'} className="img-fluid" />
                                                        {/* <ReactPlayer url={cuSocial.youtube_url} /> */}
                                                    </div>
                                                </>
                                            }
                                        </div>
                                        <div className="col-md-7">
                                            <div className="cusocialDetailPara" dangerouslySetInnerHTML={{ __html: `${cuSocial.long_description}` }} />
                                            <SocialShareButtons data={cuSocial}/>
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <div className="row">
                                        <div className="col text-center">No data found.</div>
                                    </div>
                                </>
                            }

                        </>

                    }
                </div>

            </div>
        </>
    );
}
export default CuSocialDetailPage;

