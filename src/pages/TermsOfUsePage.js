import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Loader from "../components/Loader";
import CookiePolicy from "../components/terms/CookiePolicy"
import Clarification from "../components/terms/Clarification"
import PolicyOnProtection from "../components/terms/PolicyOnProtection"
import DeclarationExplict from "../components/terms/DeclarationExplict"
import DataSubjectForm from "../components/terms/DataSubjectForm"
import Information from "../components/terms/Information" 
import Employee from "../components/terms/Employee";

function TermsOfUsePage() {
    let publicPath = process.env.PUBLIC_URL;
    let navigate = useNavigate();
    const [page, setPage] = useState(null);

    async function fetchData() {
        try {
            const res = await axios.get(publicPath + "/assets/data/termsOfUse.json");
            setPage(res.data);
        } catch (error) {
            console.error("error ", error);
        }
    }

    useEffect(() => {
        window.scrollTo({ top:0,left:0,behavior:'smooth'});
        fetchData();
    }, []);

    if (!page) {
        return <Loader />
    }

    return (
        <div className="mt-70 termsCondition">
            <div className="banner_box">
                <img src={publicPath + "/assets/images/bannerimages/Term-Condition.jpg"} className="img-fluid" alt="" />
            </div>
            <div className='multipleTours policiesSection'>
                <div className='container'>
                    <div className="d-flex align-items-start termsandconditions">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button className="nav-link active" id="v-pills-Clarification-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Clarification" type="button" role="tab" aria-controls="v-pills-Clarification" aria-selected="true">
                                <h5>Clarification Text Relating Personal Data Processing</h5> </button>
                            <button className="nav-link" id="v-pills-Policy-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Policy" type="button" role="tab" aria-controls="v-pills-Policy" aria-selected="false">
                                <h5>Policy on Protection and Process of Personal Data</h5> </button>
                            <button className="nav-link" id="v-pills-Cookie-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Cookie" type="button" role="tab" aria-controls="v-pills-Cookie" aria-selected="false">
                                <h5>Cookie Policy</h5> </button>
                            <button className="nav-link" id="v-pills-Data-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Data" type="button" role="tab" aria-controls="v-pills-Data" aria-selected="false">
                                <h5>Data Subject Application Form</h5> </button>
                            <button className="nav-link" id="v-pills-Declaration-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Declaration" type="button" role="tab" aria-controls="v-pills-Declaration" aria-selected="false">
                                <h5>Declaration of Explicit Consent for Processing of Personal Data via Website or Mobile App</h5> </button>
                                <button className="nav-link" id="v-pills-information-tab" data-bs-toggle="pill" data-bs-target="#v-pills-information" type="button" role="tab" aria-controls="v-pills-information" aria-selected="false">
                                <h5>Information Security Policy Of Cuengine</h5> </button>
                                <button className="nav-link" id="v-pills-Employee-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Employee" type="button" role="tab" aria-controls="v-pills-Employee" aria-selected="false">
                                <h5>Employee Candidate Clarification Text</h5> </button>
                        </div>
                        <div className="termsPolicyData">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-Clarification" role="tabpanel" aria-labelledby="v-pills-Clarification-tab">
                                    <Clarification />
                                </div>
                                <div className="tab-pane fade" id="v-pills-Policy" role="tabpanel" aria-labelledby="v-pills-Policy-tab">
                                    <PolicyOnProtection />
                                </div>
                                <div className="tab-pane fade" id="v-pills-Cookie" role="tabpanel" aria-labelledby="v-pills-Cookie-tab">
                                    <div>
                                        <CookiePolicy />
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-Data" role="tabpanel" aria-labelledby="v-pills-Data-tab">
                                    <div>
                                        <DataSubjectForm />
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-Declaration" role="tabpanel" aria-labelledby="v-pills-Declaration-tab">
                                    <div>
                                        <DeclarationExplict />
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-information" role="tabpanel" aria-labelledby="v-pills-information-tab">
                                    <div>
                                        <Information />
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-Employee" role="tabpanel" aria-labelledby="v-pills-Employee-tab">
                                    <div>
                                        <Employee />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default TermsOfUsePage;