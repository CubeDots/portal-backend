import React, { useEffect, useState, useRef } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios';
import { API_ENDPOINT } from "../common/Constants";
function HelpSupport() {
    const simpleValidator = useRef(new SimpleReactValidator());
    let publicPath = process.env.PUBLIC_URL;
    const [countries, setCountries] = useState([]);
    const [countriesLoading, setCountriesLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({name:'',email:'', mobile:'', country:'', dial_code: '', message:''});
    const onSubmit = (e) => {
        e.preventDefault();
        axios.post(API_ENDPOINT + 'orgzit/help_support_email', formData)
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
        //client();
    }
    async function fetchCountries() {
        setCountriesLoading(true);
        try {
            const res = await axios.get(publicPath + "/assets/data/countries.json");
            if (res.data) {
                console.log("res.data ",res.data.data);
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
        setFormData({ first_name: '', last_name: '', email: '', country: '', dial_code: '', mobile: '', message: '' });
        document.getElementById("form2").reset();
    }
    useEffect(()=>{
        window.scrollTo({ top:0,left:0,behavior:'smooth'});
        fetchCountries();
        
    },[])
    
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
                                            <input type="text" onChange={(e) => setFormData({ ...formData, name: e.target.value })} onKeyUp={() => simpleValidator.current.showMessageFor('name')} value={formData.name} className='form-control inputOffCanvas' placeholder='Enter Name *' name="name" required />
                                            <div className='text-danger fs-6'>{simpleValidator.current.message('name', formData.name, 'alpha_space')}</div>
                                        </div>
                                        <div className='helpAndSupporttitleDiv'>
                                            <input type="text" className='form-control' name="email" placeholder='Enter Email *' onChange={(e) => setFormData({ ...formData, email: e.target.value })} onKeyUp={() => simpleValidator.current.showMessageFor('email')} value={formData.email} required />
                                            <div className='text-danger'>{simpleValidator.current.message('email', formData.email, 'email')}</div>
                                        </div>
                                        <div className='helpAndSupporttitleDiv'>
                                            {countries.length > 0 ?
                                                <>
                                                    <select className="form-select" placeholder="Country" name="country" onChange={handleChangeCountry} defaultValue={formData.country_name} required>
                                                        <option value="">Select Country *</option>
                                                        {countries.length > 0 && countries.map((row, index) => <option value={row.country_name} key={index} >{row.country_name}</option>)}
                                                    </select>
                                                </>
                                                : null}
                                        </div>
                                        <div className='helpAndSupporttitleDiv'>
                                            <div className="input-group">
                                                <span className="input-group-text" id="basic-addon1">{formData.dial_code ? formData.dial_code : '+91'}</span>
                                                <input className="form-control" type="text" placeholder="Mobile No. *"
                                                    name="mobile" value={formData.mobile} onKeyUp={() => simpleValidator.current.showMessageFor('mobile')} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} required />
                                            </div>
                                            <div className='text-danger'>{simpleValidator.current.message('mobile', formData.mobile, 'phone')}</div>
                                        </div>
                                        <div className='helpAndSupporttitleDiv'>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" onChange={(e) => setFormData({ ...formData, message: e.target.value })} defaultValue={formData.message} name="message" rows="5" placeholder='Message *' required />
                                        </div>
                                        <button className='sendBtn'>Submit</button>
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