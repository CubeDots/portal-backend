import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';
import { useAuthUser, useIsAuthenticated, } from 'react-auth-kit';
import SocialSharingComponent from "../contact/SocialSharingComponent"
import SimpleReactValidator from 'simple-react-validator';
import DatePicker from 'react-date-picker';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import { API_ENDPOINT } from "../../common/Constants";
import moment from 'moment';

function UnitEnquireNowModal(props) {
    let publicPath = process.env.PUBLIC_URL;
    const simpleValidator = useRef(new SimpleReactValidator());
    const isAuthenticated = useIsAuthenticated();
    const auth = useAuthUser();
    const user = isAuthenticated() ? auth().user : null;

    /*
    const [footersocialLoading, setFooterSocialLoading] = useState(false);
    const [footerSocialLinks, setFooterSocialLinks] = useState(null);
    */
    const [countriesLoading, setCountriesLoading] = useState(false);
    const [countries, setCountries] = useState([]);
    const [toTime, setToTime] = useState('00:00');
    const [toDayDate, setToDayDate] = useState(new Date());
    const [loading, setLoading] = useState(false);
    const formColumns = { project_interest: '', apartment_id: '', first_name: '', last_name: '', email: '', occupation: '', country: '', dial_code: '', mobile: '', security_code: '', appointment_date: '', appointment_time: '', message: '', terms: false }
    const [formData, setFormData] = useState(formColumns);
    const [securityCode, setSecurityCode] = useState('');
    const [apartment_id, setApartmentId] = useState('');
    const [project_interest, setProjectInterest] = useState(props.project.title);

    const [warnemail, setwarnemail] = useState("");
    const [lastname, setLastName] = useState("");
    const [emailerror, setEmailError] = useState("");
    const [mobileerror, setMobileError] = useState("")
    // const [projectinterest, setProjectInterest] = useState("")
    const [countryselect, setCountrySelect] = useState("")
    const [occupationselect, setOccupationSelect] = useState("");

    const [unit, setUnit] = useState(null);
    //const unit = props.length ? props.unit : null;
    useEffect(() => {
        // console.log('unit model loaded')
        //fetchFooterSocial();
        fetchCountries();

        //console.log('unit ',unit)
        if (props.unit) {
            setUnit(props.unit);

            setFormData(formColumns);
            setFormData(formData => ({ ...formData, apartment_id: props.unit.apartment_id }));
        }
        setProjectInterest(props.project.title);
        if (props.project) {
            setFormData(formData => ({ ...formData, project_interest: project_interest }));
        }

        if (user) {
            //console.log("user",user)
            setFormData(fd => ({ ...fd, first_name: user.name.split(" ")[0], last_name: user.name.split(" ")[1], email: user.email }));
        }

    }, [props.unit, props.project, user]);

            /*
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
            */
    async function fetchCountries() {
        genRandomString();
        setCountriesLoading(true);
        try {
            const res = await axios.get(publicPath + "/assets/data/countries.json");
            if (res.data) {
                //console.log("res.data ",res.data.data);
                setCountriesLoading(false);
                setCountries(res.data.data);
            }
        } catch (error) {
            // console.error("error ", error);
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
        // console.log("terms ", status);
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
        setFormData({ project_interest: project_interest, first_name: '', last_name: '', email: '', country: '', occupation: '', dial_code: '', mobile: '', security_code: '', appointment_date: '', appointment_time: '', message: '', terms: false });
        document.getElementById("form1").reset('');
    }
    //setProjectInterest(props.project.title);
    const onSubmit = (e) => {
        e.preventDefault();

        if (formData.first_name.length == "" || formData.occupation.length == "" || formData.last_name.length == "" || formData.email.length == "" || formData.project_interest.value == "Interested As *" || formData.country.length == "" || formData.mobile.length == "" || formData.mobile.length < 4 || formData.mobile.length > 20) {
            setwarnemail("please enter valid first name")
            setLastName("please enter valid last name")
            setEmailError("please enter valid email address")
            setMobileError("please enter valid mobile number")
            setProjectInterest("please select project interest")
            setCountrySelect("please select country")
            setOccupationSelect("please select occupation")
            return false;
        }

        e.preventDefault(); formData.appointment_date = toDayDate;
        e.preventDefault(); formData.appointment_time = toTime;
        // console.log("formData ", formData);
        if (formData.security_code !== securityCode) {
            alert("Please enter correct security code");
            return false;
        }
        if (formData.terms === false) {
            alert("Please accept our Terms & Conditions.");
            return false;
        }
        setLoading(true);

        axios.post(API_ENDPOINT + 'orgzit/unitEnquireRequest', formData)
            .then((res) => {
                // console.log('res ### ', res.status, res.data)
                if (res.status === 200) {
                    setwarnemail("")
                    setLastName("")
                    setEmailError("")
                    setMobileError("")
                    setProjectInterest("")
                    setCountrySelect("")
                    setLoading(false);
                    genRandomString();
                    //resetFrom('');
                    resetFrom(
                        email => "",
                        country => "",
                        mobile => "",
                        appointment_date => "",
                        appointment_time => ""
                    );
                    setFormData(formData => ({ ...formData, apartment_id: props.unit.apartment_id }));
                    setTimeout(() => {
                        alert(res.data.message);
                    }, 1000);
                }
            }).catch((error) => {
                setLoading(false);
                // console.log("errors ### ", error);
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

    const addZero = (i) => {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    const convertTime = (str) => {
        let date = new Date(str);
        let h = addZero(date.getHours());
        let m = addZero(date.getMinutes());
        // let ampm = h >= 12? 'PM':'AM';
        // console.log("@@@ APPOINTMENT TIMEEEE ======", h)
        return h + ':' + m;
    }

    const setFormatedTime = (time) => {
        // let time= '2022-05-06T09:47:26.735Z'
        let value = convertTime(time)
        setToTime(value)
    }
    return (
        <>
            <Modal {...props} className="UnitEnquireNow" backdrop="static" keyboard={false} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <div>Enquire Now for <strong>{unit ? unit.apartment_id : ''}</strong></div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="enrollmentContent">

                                <form id="form1" onSubmit={onSubmit}>
                                    <div className="row">
                                        <div className="col mb-3">
                                            <input className="form-control" type="text" placeholder="First Name" name="first_name" defaultValue={formData.first_name} onChange={(e) => setFormData({ ...formData, first_name: e.target.value.replace(/[^a-z]/gi, '') })} />
                                            <div className='validationError'>
                                                <p className='errorMsg'>{formData.first_name.length == "" ? warnemail : ""}</p>
                                            </div>
                                        </div>
                                        <div className="col mb-3">
                                            <input className="form-control" type="text" placeholder="Last Name" name="last_name" defaultValue={formData.last_name} onChange={(e) => setFormData({ ...formData, last_name: e.target.value.replace(/[^a-z]/gi, '') })} />
                                            <input className="form-control" type="hidden" placeholder="Project Interest" name="project_interest" defaultValue={project_interest} />
                                            <input className="form-control" type="hidden" placeholder="Apartment Id" name="apartment_id" defaultValue={formData.apartment_id} onChange={(e) => setFormData({ ...formData, apartment_id: e.target.value })} />
                                            <div className='validationError'>
                                                <p className='errorMsg'>{formData.last_name.length == "" ? lastname : ""}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <input className="form-control" type="email" placeholder="Email" name="email" onKeyUp={() => simpleValidator.current.showMessageFor('email')} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                            <div className='validationError'>
                                                <p className='errorMsg'>{formData.email.length == "" ? emailerror : ""}</p>
                                            </div>
                                        </div>
                                        <div className='text-danger'>{simpleValidator.current.message('email', formData.email, 'email')}</div>
                                    </div>
                                    <div className="mb-3">
                                        <select className="form-select" placeholder="Occupation" name="occupation" onChange={(e) => setFormData({ ...formData, occupation: e.target.value })} defaultValue={formData.occupation}>
                                            <option value="" disabled selected hidden>Select Occupation</option>
                                            <option value="Agency">Agency</option>
                                            <option value="Developer">Developer</option>
                                            <option value="Others">Others</option>
                                        </select>
                                        <div className='validationError'>
                                            <p className='errorMsg'>{formData.occupation.length == "" ? occupationselect : ""}</p>
                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="col mb-3">
                                            {countries.length > 0 ?
                                                <>
                                                    <select className="form-select scroller" placeholder="Country" name="country" onChange={handleChangeCountry} defaultValue={formData.country_name} >
                                                        <option value="" disabled selected hidden>Select Country</option>
                                                        {countries.length > 0 && countries.map((row, index) => <option value={row.country_name} key={index} >{row.country_name}</option>)}
                                                    </select>
                                                </>
                                                : ''}
                                            <div className='validationError'>
                                                <p className='errorMsg'>{formData.country.length == "" ? countryselect : ""}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <div className="input-group">
                                                <span className="input-group-text" id="basic-addon1">{formData.dial_code ? formData.dial_code : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-plus" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                <path fill-rule="evenodd" d="M12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5z" />
                            </svg>}</span>
                                                <input className="form-control" type="text" placeholder="Mobile No."
                                                    name="mobile" onKeyUp={() => simpleValidator.current.showMessageFor('mobile')} value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, "") })} />
                                            </div>
                                            {
                                                formData.mobile.length < 4 || formData.mobile.length > 20 ?
                                                    <div className='text-danger formErrorMsg'>{simpleValidator.current.message('mobile', formData.mobile, 'phone')}</div>
                                                    : ""
                                            }
                                            {/* <div className='text-danger'>{simpleValidator.current.message('mobile', formData.mobile, 'phone')}</div> */}
                                            <div className='validationError'>
                                                <p className='errorMsg'>{formData.mobile.length == "" || formData.mobile.length < 4 || formData.mobile.length > 20 ? mobileerror : ""}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {/* <div className="col mb-3">
                                            <label className="form-label">Appointment Date</label>
                                            <input type="date" className="form-control" placeholder="Appointment Date" name="appointment_date" defaultValue={formData.appointment_date} onChange={(e) => setFormData({ ...formData, appointment_date: e.target.value })} required />
                                            <DatePicker className="form-control" placeholder="Appointment Date *" name="appointment_date" value={toDayDate} onChange={setToDayDate} format="dd/MM/yyyy" required minDate={moment().toDate()} />

                                        </div> */}
                                        {/* <div className="col mb-3">
                                            <label className="form-label">Appointment Time</label>
                                            <input type="time" className="form-control" placeholder="Appointment Time" name="appointment_time" defaultValue={formData.appointment_time} onChange={(e) => setFormData({ ...formData, appointment_time: e.target.value })} required />
                                            <TimePicker
                                                onChange={setFormatedTime}
                                                placeholder="00:00"
                                                showSecond={false}
                                                className="form-control"
                                                required={true}
                                            />
                                        </div> */}
                                    </div>

                                    <div className="row">
                                        <div className="col mb-3">
                                            <label className="form-label">Message</label>
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
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" defaultValue={formData.terms} onClick={() => handleChangeTerms(!formData.terms)} />
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
                                                <button className="btntheme" type="submit">Submit</button>
                                            }
                                        </div>
                                    </div>
                                </form>

                                <div className='socialIconsDiv'>
                                    <SocialSharingComponent />
                                </div>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default UnitEnquireNowModal;