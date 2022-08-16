import React, { useEffect, useState, useRef } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios';
import { API_ENDPOINT } from "../common/Constants";
import Spinner from 'react-bootstrap/Spinner';



function HelpSupport() {
    const simpleValidator = useRef(new SimpleReactValidator());
    let publicPath = process.env.PUBLIC_URL;
    const [countries, setCountries] = useState([]);
    const [countriesLoading, setCountriesLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', mobile: '', country: '', dial_code: '', message: '' });

    const [nameselect, setNameSelect] = useState("");
    const [emailselect, setEmailSelect] = useState("");
    const [countryselect, setCountrySelect] = useState("");
    const [mobileselect, setMobileSelect] = useState("");
    const [messageselect, setMessageSelect] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (formData.name.length == "" || formData.email.length == "" || formData.country.length == "" || formData.mobile.length == "" || formData.message.length == "" || formData.mobile.length < 4 || formData.mobile.length > 20) {
            setNameSelect("please enter valid email name")
            setEmailSelect("please enter valid email address")
            setCountrySelect("please select country")
            setMobileSelect("please enter valid mobile number")
            setMessageSelect("please enter message")
            return false;
        }
        setLoading(true);
        axios.post(API_ENDPOINT + 'orgzit/help_support_email', formData)
            .then((res) => {
                console.log('res ### ', res.status, res.data)
                if (res.status === 200) {
                    setLoading(false);
                    resetFrom();
                    setNameSelect("")
                    setEmailSelect("")
                    setCountrySelect("")
                    setMobileSelect("")
                    setMessageSelect("")
                    setLoading(false);
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
        //client();
    }
    async function fetchCountries() {
        setCountriesLoading(true);
        try {
            const res = await axios.get(publicPath + "/assets/data/countries.json");
            if (res.data) {
                console.log("res.data ", res.data.data);
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
    const resetFrom = () => {
        setFormData({ name: '', email: '', country: '', dial_code: '', mobile: '', message: '' });
        document.getElementById("form2").reset();
    }
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    }, []);
    useEffect(() => {
        setLoading(false);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        fetchCountries();

    }, [])

    return (
        <div className='mt-70'>
            <div className="helpAndSupportOffCanvas">
                <div className="offcanvas-header">
                    <div className='generateTicket'>
                        <h2 className="vegonHeading ">Generate Ticket</h2>
                    </div>
                </div>
                <div className="offcanvas-body">
                    <div className='helpAndSupportBody'>
                        <div className='container'>
                            <div className='row bgcol m-auto'>
                                <div className='col-md-3'></div>
                                <div className='col-md-6'>
                                    <form id="form2" onSubmit={onSubmit}>
                                        <div className='helpAndSupportInput'>
                                            <div className='helpAndSupporttitleDiv'>
                                                <input type="text" onChange={(e) => setFormData({ ...formData, name: e.target.value.replace(/[^a-z]/gi, '') })} onKeyUp={() => simpleValidator.current.showMessageFor('name')} value={formData.name} className='form-control inputOffCanvas' placeholder='Enter Name *' name="name" />
                                                <div className='text-danger formErrorMsg'>{simpleValidator.current.message('name', formData.name, 'alpha_space')}</div>
                                                <div className='validationError'>
                                                    <p className='errorMsg'>{formData.name.length == "" ? nameselect : ""}</p>
                                                </div>
                                            </div>
                                            <div className='helpAndSupporttitleDiv'>
                                                <input type="text" className='form-control' name="email" placeholder='Enter Email *' onChange={(e) => setFormData({ ...formData, email: e.target.value })} onKeyUp={() => simpleValidator.current.showMessageFor('email')} value={formData.email} />
                                                <div className='text-danger formErrorMsg'>{simpleValidator.current.message('email', formData.email, 'email')}</div>
                                                <div className='validationError'>
                                                    <p className='errorMsg'>{formData.email.length == "" ? emailselect : ""}</p>
                                                </div>
                                            </div>
                                            <div className='helpAndSupporttitleDiv'>
                                                {countries.length > 0 ?
                                                    <>
                                                        <select className="form-select" placeholder="Country" name="country" onChange={handleChangeCountry} defaultValue={formData.country_name} >
                                                            <option value="" selected disabled hidden>Select Country *</option>
                                                            {countries.length > 0 && countries.map((row, index) => <option value={row.country_name} key={index} >{row.country_name}</option>)}
                                                        </select>
                                                    </>
                                                    : null}
                                                <div className='validationError'>
                                                    <p className='errorMsg'>{formData.country.length == "" ? countryselect : ""}</p>
                                                </div>
                                            </div>
                                            <div className='helpAndSupporttitleDiv'>
                                                <div className="input-group">
                                                    <span className="input-group-text" id="basic-addon1">{formData.dial_code ? formData.dial_code : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-plus" viewBox="0 0 16 16">
                                                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                                        <path fill-rule="evenodd" d="M12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5z" />
                                                    </svg>}</span>
                                                    <input className="form-control" type="text" placeholder="Mobile No. *"
                                                        name="mobile" value={formData.mobile} onKeyUp={() => simpleValidator.current.showMessageFor('mobile')} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
                                                </div>
                                                <div className='validationError'>
                                                    <p className='errorMsg'>{formData.mobile.length == "" ? mobileselect : ""}</p>
                                                </div>
                                                {/* {
                                                    formData.mobile.length < 4 || formData.mobile.length > 20 ?
                                                        <div className='text-danger formErrorMsg'>{simpleValidator.current.message('mobile', formData.mobile, 'phone')}</div>
                                                        : ""
                                                } */}
                                                {/* <div className='text-danger formErrorMsg'>{simpleValidator.current.message('mobile', formData.mobile, 'phone')}</div> */}
                                            </div>
                                            <div className='helpAndSupporttitleDiv'>
                                                <textarea className="form-control" id="exampleFormControlTextarea1" onChange={(e) => setFormData({ ...formData, message: e.target.value })} defaultValue={formData.message} name="message" rows="5" placeholder='Message *' />
                                                <div className='validationError'>
                                                    <p className='errorMsg'>{formData.message.length == "" ? messageselect : ""}</p>
                                                </div>
                                            </div>
                                            {loading ?
                                                <button className="sendBtn" type="button" disabled >
                                                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />  Submitting...
                                                </button>
                                                :
                                                <button className='sendBtn'>Submit</button>
                                            }
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HelpSupport;