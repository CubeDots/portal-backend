import React, { useState, useEffect } from "react";
import axios from "axios";
import PolicyOnProtection from "../components/terms/PolicyOnProtection"
import Loader from "../components/Loader";
//import PrivacyImage from "../";

function PrivacyPolicyPage() {
    let publicPath = process.env.PUBLIC_URL;
    const [page, setPage] = useState(null);

    async function fetchData() {
        try {
            const res = await axios.get(publicPath + "/assets/data/privacyPolicy.json");
            setPage(res.data);
        } catch (error) {
            console.error("error ", error);
        }
    }
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
      }, []);

    useEffect(() => {
        window.scrollTo({ top:0,left:0,behavior:'smooth'});
        fetchData();
    }, []);

    if (!page) {
        return <Loader />
    }

    return (
        <div className="mt-70 privacySection">
            {/* <div className="container"> */}
            {/* <h2>{page.title ? page.title : 'Privacy Policy'}</h2>
                <div dangerouslySetInnerHTML={{ __html: `${page.content}` }} /> */}
            {/* </div> */}

            <div className="banner_box">
                <img src={publicPath + "/assets/images/bannerimages/privacybanner.jpg"} className="img-fluid" />
            </div>
            <div className="container">
                <div className="privacy_content_box">
                    <PolicyOnProtection />
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicyPage;