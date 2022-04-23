
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';
import { useAuthUser, useIsAuthenticated, } from 'react-auth-kit';
import SimpleReactValidator from 'simple-react-validator';
import { API_ENDPOINT } from "../../common/Constants";
import SocialSharingComponent from "../contact/SocialSharingComponent"



function BecomeOurPartnerModal(props) {
    const simpleValidator = useRef(new SimpleReactValidator());
    let publicPath = process.env.PUBLIC_URL;
    let mt = props.show;
    const isAuthenticated = useIsAuthenticated();
    const auth = useAuthUser();
    const user = isAuthenticated() ? auth().user : null;

    const [footersocialLoading, setFooterSocialLoading] = useState(false);
    const [footerSocialLinks, setFooterSocialLinks] = useState(null);

    const [countriesLoading, setCountriesLoading] = useState(false);
    const [countries, setCountries] = useState([]);

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ first_name: '', last_name: '', email: '', country: '', dial_code: '', mobile: '', occupation: '', message: '', security_code: '', terms: false });
    const [securityCode, setSecurityCode] = useState(null);

    useEffect(() => {

        genRandomString();
        fetchFooterSocial();
        setLoading(false);
        fetchCountries();
        if (user) {
            //console.log("user",user)
            setFormData(fd => ({ ...fd, first_name: user.name.split(" ")[0], last_name: user.name.split(" ")[1], email: user.email }));
        }

    }, [user]);


    async function fetchFooterSocial() {
        setFooterSocialLoading(true);
        try {
            const res = await axios.get(publicPath + "/assets/data/social.json");
            if (res.data) {
                setFooterSocialLoading(false);
                setFooterSocialLinks(res.data.social_links);
            }
        } catch (error) {
            console.error("error ", error);
            setFooterSocialLoading(false);
        }
    }

    async function fetchCountries() {
        setCountriesLoading(true);
        try {
            const res = await axios.get(publicPath + "/assets/data/countries.json");
            if (res.data) {
                //console.log("res.data ",res.data.data);
                setCountriesLoading(false);
                setCountries(res.data.data);
            }
        } catch (error) {
            console.error("error ", error);
            setCountriesLoading(false);
        }
    }

    const handleChangeCountry = (e) => {
        e.persist();
        let selectedCountryName = e.target.value;
        setFormData(formData => ({ ...formData, country: selectedCountryName }));
        let countriesList = countries;
        let newDialCode = Object.keys(countriesList).filter((x) => {
            return countriesList[x].country_name === selectedCountryName;
        }).map((x) => {
            return countriesList[x].dial_code;
        });
        let dial_code = newDialCode.length ? newDialCode[0] : '';
        setFormData(formData => ({ ...formData, dial_code: dial_code }));
    }

    const handleChangeTerms = (status) => {
        console.log("terms ", status);
        setFormData(formData => ({ ...formData, terms: status }));
    }

    const genRandomString = () => {
        var text = "";
        var length = 6;
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        setSecurityCode(text);
        return text;
    }

    const resetFrom = () => {
        setFormData({ first_name: '', last_name: '', email: '', country: '', dial_code: '', mobile: '', occupation: '', message: '', security_code: '', terms: false });
        document.getElementById("form1").reset();
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("formData ", formData);
        if (formData.security_code !== securityCode) {
            alert("Please enter correct security code");
            return false;
        }
        if (formData.terms === false) {
            alert("Please accept our Terms & Condition.");
            return false;
        }
        setLoading(true);

        axios.post(API_ENDPOINT + 'orgzit/requestEnrollment', formData)
            .then((res) => {
                console.log('res ### ', res.status, res.data)
                if (res.status === 200) {
                    setLoading(false);
                    genRandomString();
                    resetFrom();
                    setTimeout(() => {
                        alert(res.data.message);
                    }, 1000);
                }
            }).catch((error) => {
                setLoading(false);
                console.log("errors ### ", error);
                if (error) {
                    if (error.response.status === 422) {
                        let errors = error.response.data.errors;
                        let msg = error.response.data.message + "\n";
                        Object.keys(errors).map((error, index) => (
                            msg += errors[error][0] + "\n"
                        ));
                        alert(msg);
                    }
                }
            })
    }

    const openLogin = () => {
        console.log("openLogin clicked");
        // props.show=false;
        mt = false;
        setTimeout(() => {
            document.querySelector('#loginButton').click();
        }, 300);
    }


    return (
        <>
            <Modal {...props} className="enrollmentModal" backdrop="static" keyboard={false} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-3 enrollmentModal">
                    <div className="row align-items-center">
                        {/* <div className="col-md-4">
                            <div className="enrollmentModalleftImg">
                                <img src={publicPath + "/assets/images/cuengine_logo_dark_two.svg"} className="img-fluid" alt="" />
                            </div>
                        </div> */}
                        <div className="col-md-12">
                            <div className="enrollmentContent">
                                <h4>Enrollment Request</h4>
                                <form id="form1" onSubmit={onSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <input className="form-control" type="text" placeholder="First Name *" name="first_name" onKeyUp={() => simpleValidator.current.showMessageFor('first_name')} value={formData.first_name} onChange={(e) => setFormData({ ...formData, first_name: e.target.value })} required />
                                            <div className='text-danger fs-6'>{simpleValidator.current.message('first_name', formData.first_name, 'alpha_space')}</div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <input className="form-control" type="text" placeholder="Last Name *" name="last_name" onKeyUp={() => simpleValidator.current.showMessageFor('last_name')} value={formData.last_name} onChange={(e) => setFormData({ ...formData, last_name: e.target.value })} required />
                                            <div className='text-danger fs-6'>{simpleValidator.current.message('last_name', formData.last_name, 'alpha_space')}</div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <input className="form-control" type="text" placeholder="Email *" name="email" onKeyUp={() => simpleValidator.current.showMessageFor('email')} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                                        </div>
                                        <div className='text-danger'>{simpleValidator.current.message('email', formData.email, 'email')}</div>
                                    </div>
                                    <div className="row">
                                        <div className="col mb-3">
                                            <select className="form-select" placeholder="Occupation" name="occupation" onChange={(e) => setFormData({ ...formData, occupation: e.target.value })} defaultValue={formData.occupation}>
                                                <option value="">Interested As</option>
                                                <option value="Agency">Real state agent</option>
                                                <option value="Developer">Developer</option>
                                                <option value="Others">Others</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col mb-3">
                                            {countries.length > 0 ?
                                                <>
                                                    <select className="form-select" placeholder="Country" name="country" onChange={handleChangeCountry} defaultValue={formData.country_name} required>
                                                        <option value="">Select Country *</option>
                                                        {countries.length > 0 && countries.map((row, index) => <option value={row.country_name} key={index} >{row.country_name}</option>)}
                                                    </select>
                                                </>
                                                : null}
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <div className="input-group">
                                                <span className="input-group-text" id="basic-addon1">{formData.dial_code ? formData.dial_code : '+91'}</span>
                                                <input className="form-control" type="text" placeholder="Mobile No. *"
                                                    name="mobile" value={formData.mobile} onKeyUp={() => simpleValidator.current.showMessageFor('mobile')} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} required />
                                            </div>
                                            <div className='text-danger'>{simpleValidator.current.message('mobile', formData.mobile, 'phone')}</div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col mb-3">
                                            <textarea className="form-control" placeholder="Write Your Message" name="message" defaultValue={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="captchInput">
                                            <input type="text" placeholder="Security Code" name="security_code" autoComplete="off" defaultValue={formData.security_code} onChange={(e) => setFormData({ ...formData, security_code: e.target.value })} />
                                            <span className="captha_code mr-sm-2" id="notcp">{securityCode}</span>
                                            <button type="button" onClick={() => genRandomString()} className="btn btn-default">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-repeat" viewBox="0 0 16 16">
                                                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                                                    <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-check termAndConditionCheckbox">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" defaultValue={formData.terms} onChange={() => handleChangeTerms(!formData.terms)} />
                                                <label className="form-check-label">
                                                    <div className="termsAndConditionSection">
                                                        <small>By clicking the submit button below, I hereby agree to and accept the following terms and conditions policy.</small>
                                                        <small><Link target="_blank" to={"/terms"}>Terms & Conditions</Link></small>
                                                    </div>
                                                </label>
                                            </div>
                                            {loading ?
                                                <button className="btntheme" type="button" disabled >
                                                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />  Submitting...
                                                </button>
                                                :
                                                <button className="btntheme" type="submit">Submit</button>
                                            }

                                        </div>

                                    </div>
                                </form>
                                {/* {!isAuthenticated() ?
                                <div className="text-center py-3">
                                    Already Enrolled? <Link to="" onClick={() => openLogin()} >Sign In</Link>
                                </div>
                                : '' } */}

                                <SocialSharingComponent />

                            </div>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default BecomeOurPartnerModal;