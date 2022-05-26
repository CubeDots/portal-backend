import { useEffect, useState, useRef } from 'react';
import axios from "axios";
import { useAuthUser, useAuthHeader } from 'react-auth-kit';
import Spinner from 'react-bootstrap/Spinner';
import { API_ENDPOINT } from "../../common/Constants";
import Modal from 'react-bootstrap/Modal';
import SimpleReactValidator from 'simple-react-validator';
import DatePicker from 'react-date-picker';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';

function CreateAppointment(props) {
    const authHeader = useAuthHeader();
    const auth = useAuthUser();
    let publicPath = process.env.PUBLIC_URL;
    const simpleValidator = useRef(new SimpleReactValidator());
    const [countriesLoading, setCountriesLoading] = useState(false);
    const [countries, setCountries] = useState([]);

    const [locationsLoading, setLocationsLoading] = useState(false);
    const [locations, setLocations] = useState([]);

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ first_name: null, last_name: null, email: null, country: null, mobile: null, appointment_date: null, appointment_time: null, location: null });
    const [securityCode, setSecurityCode] = useState(null);
    const [toDayDate, setToDayDate] = useState(new Date());
    const [toTime, setToTime] = useState('10:00:00');

    useEffect(() => {

        genRandomString();
        setLoading(false);
        fetchCountries();
        fetchLocations();

    }, []);

    async function fetchLocations() {
        setLocationsLoading(true);
        try {
            //const res = await axios.get(publicPath + "/assets/data/countries.json");
            const res = await axios.post(API_ENDPOINT + "orgzit/projects", '', { headers: { Authorization: authHeader() } });
            if (res.data) {
                //console.log("res.data ",res.data.data);
                setLocationsLoading(false);
                setLocations(res.data.data);
            }
        } catch (error) {
            //console.error("error ", error);
            setLocationsLoading(false);
        }
    }

    const handleChangeLocation = (e) => {
        e.persist();
        let selectedLocationName = e.target.value;
        setFormData(formData => ({ ...formData, location: selectedLocationName }));
        let locationsList = locations;
        /*let newDialCode = Object.keys(locationsList).filter((x) => {
            return locationsList[x].location_name === selectedCountryName;
        }).map((x) => {
            return locationsList[x].dial_code;
        });*/
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
            //console.error("error ", error);
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
        //console.log("terms ",status);
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
        setFormData({ first_name: null, last_name: null, email: null, country: null, mobile: null, appointment_date: null, appointment_time: null, location: null });

        document.getElementById("form1").reset();
    }

    const onSubmit = (e) => {
        e.preventDefault(); formData.appointment_date = toDayDate
        e.preventDefault(); formData.appointment_time = toTime
        e.preventDefault();
        //console.log("formData ", formData);        
        if (formData.country === null) {
            alert("Please select country name.");
            return false;
        }
        if (formData.mobile === null) {
            alert("Please enter mobile number.");
            return false;
        }
        if (formData.appointment_date === null) {
            alert("Please select appointment date.");
            return false;
        }
        if (formData.appointment_time === null) {
            alert("Please select appointment time.");
            return false;
        }
        if (formData.location === null) {
            alert("Please select Location name.");
            return false;
        }

        setLoading(true);

        axios.post(API_ENDPOINT + 'orgzit/create_appointment', formData, { headers: { Authorization: authHeader() } })
            .then((res) => {
                //console.log('res ### ', res.status, res.data)                

                if (res.status === 200) {
                    setLoading(false);
                    genRandomString();
                    resetFrom();
                    setTimeout(() => {
                        alert(res.data.message);
                        window.location.reload();
                    }, 1000);
                }
            }).catch((error) => {
                setLoading(false);
                //console.log("errors ### ", error);
                if (error) {
                    //alert(error.response.status);
                    if (error.response.status === 422) {
                        let errors = error.response.data.errors.errors;
                        let msg = error.response.data.message + "\n";
                        Object.keys(errors).map((row, index) => {
                            msg += "\n" + errors[row].error + "\n"
                        });
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
        console.log("@@@ APPOINTMENT TIMEEEE ======", h)
        return h + ':' + m;
    }

    const setFormatedTime = (time) => {
        // let time= '2022-05-06T09:47:26.735Z'
        let value = convertTime(time)
        setToTime(value)
    }
    return (
        <>
            <Modal {...props} className="enrollmentModal" backdrop="static" keyboard={false} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-3 enrollmentModal">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="enrollmentContent">

                                <h4>Create Appointment</h4>

                                <form id="form1" onSubmit={onSubmit}>

                                    <div className="row">
                                        <div className="col mb-3">
                                            <input value={auth().user.name} readOnly={auth().user.name ? true : false} className="form-control" type="text" onKeyUp={() => simpleValidator.current.showMessageFor('first_name')} placeholder="Full Name *" name="first_name" defaultValue={formData.first_name} onChange={(e) => setFormData({ ...formData, first_name: e.target.value })} required />
                                            <div className='text-danger fs-6'>{simpleValidator.current.message('first_name', formData.first_name, 'alpha')}</div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col mb-3">
                                            <input readOnly={auth().user.email ? true : false} value={auth().user.email} onKeyUp={() => simpleValidator.current.showMessageFor('email')} className="form-control" type="text" placeholder="Email *" name="email" defaultValue={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                                        </div>
                                        <div className='text-danger'>{simpleValidator.current.message('email', formData.email, 'email')}</div>
                                    </div>

                                    <div className="row">
                                        <div className="col mb-3">
                                            {countries.length > 0 ?
                                                <>
                                                    <select className="form-select" placeholder="Country" name="country" onChange={handleChangeCountry} defaultValue={formData.country_name} required>
                                                        <option value="">Select Country</option>
                                                        {countries.length > 0 && countries.map((row, index) => <option value={row.country_name} key={index} >{row.country_name}</option>)}
                                                    </select>
                                                </>
                                                : null}

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col mb-3">
                                            <div className="input-group">
                                                <span className="input-group-text" id="basic-addon1">{formData.dial_code ? formData.dial_code : '+91'}</span>
                                                <input className="form-control" type="text" placeholder="Mobile *"
                                                    name="mobile" onKeyUp={() => simpleValidator.current.showMessageFor('mobile')} defaultValue={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} required />
                                            </div>
                                            <div className='text-danger'>{simpleValidator.current.message('mobile', formData.mobile, 'phone')}</div>
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col mb-3">
                                            <label className='mb-1'>Appointment Date</label>
                                            <DatePicker className="form-control" placeholder="Appointment Date *" name="appointment_date" value={toDayDate} onChange={setToDayDate} format="dd/MM/yyyy" required minDate={moment().toDate()} />

                                            {/* <input className="form-control" type="date" placeholder="Appointment Date *" name="appointment_date" defaultValue={formData.appointment_date} onChange={(e) => setFormData({ ...formData, appointment_date: e.target.value })} required/> */}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col mb-3">
                                            <label className='mb-1'>Appointment Time</label>
                                            <TimePicker
                                    onChange={setFormatedTime}
                                    placeholder="00:00"
                                    showSecond={false}
                                    className="form-control"
                                />
                                            {/* <input className="form-control" type="time" placeholder="Appointment Time *" name="appointment_time" defaultValue={formData.appointment_time} onChange={(e) => setFormData({ ...formData, appointment_time: e.target.value })} required /> */}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col mb-3">
                                            {locations.length > 0 ?
                                                <>
                                                    <select className="form-select" placeholder="Location" name="location" onChange={handleChangeLocation} defaultValue={formData.location_name} required>
                                                        <option value="">Select Location *</option>
                                                        {locations.length > 0 && locations.map((row, index) => <option value={row.OrgzitRecordId} key={index} >{row.ProjectName}</option>)}
                                                    </select>
                                                </>
                                                : null}

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
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
                            </div>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default CreateAppointment;