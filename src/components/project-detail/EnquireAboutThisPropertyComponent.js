import { Link } from 'react-router-dom';
import TimePicker from 'react-time-picker';
import DatePicker from 'react-date-picker';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import { useAuthUser, useIsAuthenticated, } from 'react-auth-kit';
import SocialSharingComponent from "../contact/SocialSharingComponent"
import moment from 'moment';
import SimpleReactValidator from 'simple-react-validator';


import { API_ENDPOINT } from "../../common/Constants";

function EnquireAboutThisPropertyComponent(props) {
    const simpleValidator = useRef(new SimpleReactValidator());
    let publicPath = process.env.PUBLIC_URL;

    const isAuthenticated = useIsAuthenticated();
    const auth = useAuthUser();
    const user = isAuthenticated() ? auth().user : null;
    // const toDayDate = new Date();
    const startOfMonth = moment().format('YYYY-MM-DD');
    const [toDayDate, setToDayDate] = useState(new Date());
    const [toTime, setToTime] = useState('10:00:00');

    // const [value, onChange] = useState('10:00');

    const [countriesLoading, setCountriesLoading] = useState(false);
    const [countries, setCountries] = useState([]);

    const [loading, setLoading] = useState(false);
    const formColumns = { project_interest: '', first_name: '', last_name: '', email: '', country: '', dial_code: '', mobile: '', message: '', appointment_date: '', appointment_time: '', terms: false };
    const [formData, setFormData] = useState(formColumns);

    useEffect(() => {
        setLoading(false);
        fetchCountries();
        if (props.data.title) {
            setFormData(formColumns);
            setFormData(formData => ({ ...formData, project_interest: props.data.title }));
        }

        if (user) {
            //console.log("user",user)
            setFormData(fd => ({ ...fd, first_name: user.name.split(" ")[0], last_name: user.name.split(" ")[1], email: user.email }));
        }

    }, [props.data, user]);

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

    const resetFrom = () => {
        setFormData({ project_interest: '', first_name: '', last_name: '', email: '', country: '', occupation: '', dial_code: '', mobile: '', message: '', appointment_date: '', appointment_time: '', terms: false });
        document.getElementById("form2").reset();
    }

    const onSubmit = (e) => {
        e.preventDefault(); formData.appointment_date = toDayDate
        e.preventDefault(); formData.appointment_time = toTime

        console.log("formData ", formData);

        if (formData.terms === false) {
            alert("Please accept our Terms & Condition.");
            return false;
        }

        setLoading(true);

        axios.post(API_ENDPOINT + 'orgzit/projectEnquireRequest', formData)
            .then((res) => {
                console.log('res ### ', res.status, res.data)
                if (res.status === 200) {
                    setLoading(false);
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

    return (

        <>
            <div className="enquireForm sticky-top">
                <h3 className="">Enquire about this Property</h3>
                <form id="form2" onSubmit={onSubmit}>

                    <div className="mb-3">
                        <div className='position-relative'>
                            <label className="form-label">First Name</label>
                            <input className="form-control" type="text" placeholder="First Name *" name="first_name" onKeyUp={() => simpleValidator.current.showMessageFor('first_name')} value={formData.first_name} onChange={(e) => setFormData({ ...formData, first_name: e.target.value })} required />
                            <div className='text-danger fs-6'>{simpleValidator.current.message('first_name', formData.first_name, 'alpha_space')}</div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className='position-relative'>
                            <label className="form-label">Last Name</label>
                            <input className="form-control" type="text" placeholder="Last Name *" name="last_name" onKeyUp={() => simpleValidator.current.showMessageFor('last_name')} value={formData.last_name} onChange={(e) => setFormData({ ...formData, last_name: e.target.value })} required />
                            <div className='text-danger fs-6'>{simpleValidator.current.message('last_name', formData.last_name, 'alpha_space')}</div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className='position-relative'>
                            <label className="form-label">Email Address</label>
                            <input type="email" className="form-control" placeholder="Email *" name="email" onKeyUp={() => simpleValidator.current.showMessageFor('email')} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                            <div className='text-danger'>{simpleValidator.current.message('email', formData.email, 'email')}</div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Occupation</label>
                        <select className="form-select" placeholder="Occupation" name="occupation" onChange={(e) => setFormData({ ...formData, occupation: e.target.value })} defaultValue={formData.occupation}>
                            <option value="">Interested As</option>
                            <option value="Agency">Real Estate agent</option>
                            <option value="Developer">Developer</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Country</label>
                        {countries.length > 0 ?
                            <>
                                <select className="form-select" placeholder="Country" name="country" onChange={handleChangeCountry} defaultValue={formData.country_name} required>
                                    <option value="">Select Country *</option>
                                    {countries.length > 0 && countries.map((row, index) => <option value={row.country_name} key={index} >{row.country_name}</option>)}
                                </select>
                            </>
                            : null}
                    </div>
                    <div className="mb-3">
                        <div className='position-relative'>
                            <label className="form-label">Mobile</label>
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon1">{formData.dial_code ? formData.dial_code : '+91'}</span>
                                <input type="text" className="form-control" placeholder="Mobile *" name="mobile" onKeyUp={() => simpleValidator.current.showMessageFor('mobile')} value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} required />
                            </div>
                        </div>
                        <div className='text-danger'>{simpleValidator.current.message('mobile', formData.mobile, 'phone')}</div>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-3">
                            <label className="form-label">Appointment Date</label>

                            <DatePicker className="form-control" placeholder="Appointment Date *" name="appointment_date" value={toDayDate} onChange={setToDayDate} format="dd/MM/yyyy" required />


                            {/* <input type="date" className="form-control" placeholder="Appointment Date" name="appointment_date" defaultValue={formData.appointment_date} onChange={(e) => setFormData({ ...formData, appointment_date: e.target.value })} /> */}
                        </div>
                        <div className="col-12 mb-3">
                            <label className="form-label">Appointment Time</label>
                            {/* <input type="time" className="form-control" placeholder="Appointment Time" name="appointment_time" defaultValue={formData.appointment_time} onChange={(e) => setFormData({ ...formData, appointment_time: e.target.value })} /> */}
                            <TimePicker className="form-control" value={toTime} onChange={setToTime} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-4">
                            <label className="form-label">Message</label>
                            <textarea className="form-control" placeholder="Write Your Message" name="message" defaultValue={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
                        </div>
                    </div>

                    <div className="form-check termAndConditionCheckbox">
                        <input className="form-check-input" type="checkbox" id="flexCheckDefault" defaultValue={formData.terms} onChange={() => handleChangeTerms(!formData.terms)} />
                        <label className="form-check-label" >
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
                        <button className="btntheme" type="submit">Book Appointment</button>
                    }


                </form>

                <SocialSharingComponent />

            </div>
        </>
    );

}

export default EnquireAboutThisPropertyComponent;