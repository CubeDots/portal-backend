import { Link } from 'react-router-dom';
// import Select from 'react-select';
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import { useAuthUser, useIsAuthenticated, } from 'react-auth-kit';
import SimpleReactValidator from 'simple-react-validator';
import { API_ENDPOINT } from "../../common/Constants";
import SocialSharingComponent from "../contact/SocialSharingComponent"
import Multiselect from "multiselect-react-dropdown";
import _ from "lodash";

function ContactFormComponent(props) {
    let multiselectRef = React.createRef();
    const simpleValidator = useRef(new SimpleReactValidator())
    let publicPath = process.env.PUBLIC_URL;
    const isAuthenticated = useIsAuthenticated();
    const auth = useAuthUser();
    const user = isAuthenticated() ? auth().user : null;
    const [projectList, setProjectList] = useState([]);
    const [age, setAge] = useState();
    const [selectedValue, setSelectedValue] = useState([]);
    const [footersocialLoading, setFooterSocialLoading] = useState(false);
    const [footerSocialLinks, setFooterSocialLinks] = useState(null);

    const [countriesLoading, setCountriesLoading] = useState(false);
    const [countries, setCountries] = useState([]);

    const [projectsLoading, setProjectsLoading] = useState(false);
    const [projects, setProjects] = useState([]);

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ first_name: '', last_name: '', email: '', country: '', occupation: '', project_interest: [], dial_code: '', mobile: '', message: '', terms: false });

    useEffect(() => {
        fetchFooterSocial();
        fetchProjects();
        fetchCountries();
        setLoading(false);
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

    async function fetchProjects() {
        setCountriesLoading(true);
        try {
            const res = await axios.get(API_ENDPOINT + "projects/list");
            if (res.data.data) {
                setCountriesLoading(false);
                setProjects(res.data.data.projects);
                let projects = res.data.data.projects;
                let filtered_array = _.filter(
                    projects, function (o) {
                        return o.title !== 'AcarBlu';
                    }
                );
                console.log("filtered_array", filtered_array);
                let projectTitle = filtered_array.map((x) => {
                    return x.title
                });

                setProjectList(projectTitle);
                console.log("project list", projectTitle, projectList)
            }
        } catch (error) {
            console.error("error ", error);
            setCountriesLoading(false);
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

    const resetFrom = () => {
        setFormData({ first_name: '', last_name: '', email: '', country: '', occupation: '', dial_code: '', mobile: '', project_interest: [], message: '', terms: false });
        document.getElementById("form2").reset();
        // multiselectRef.current.resetSelectedValues();
    }
    const handleChange = (e) => {
        //console.log("isClearable", e);
        let selectedProject = e;
        console.log("projectList", selectedProject);
        setFormData(formData => ({ ...formData, project_interest: selectedProject }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("formData ", formData);
        if (formData.terms === false) {
            alert("Please accept our Terms & Condition.");
            return false;
        }
        setLoading(true);

        axios.post(API_ENDPOINT + 'orgzit/requestEnrollment', formData)
            .then((res) => {
                console.log('res ### ', res.status, res.data)
                if (res.status === 200) {
                    setSelectedValue(['']);
                    setSelectedValue([]);
                    setLoading(false);
                    resetFrom();
                    setTimeout(() => {
                        alert(res.data.message);
                    }, 1000);
                    //window.location.href = window.location.href;
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
            <form id="form2" onSubmit={onSubmit}>

                <div className="row">
                    <div className="col-md-6 mb-3 ">
                        {/* <label className="form-label required">First Name</label> */}
                        <input className="form-control" type="text" placeholder="First Name *" name="first_name" onKeyUp={() => simpleValidator.current.showMessageFor('first_name')} value={formData.first_name} onChange={(e) => setFormData({ ...formData, first_name: e.target.value })} required />
                        <div className='text-danger formErrorMsg'>{simpleValidator.current.message('first_name', formData.first_name, 'alpha_space')}</div>
                    </div>
                    <div className="col-md-6 mb-3">
                        {/* <label className="form-label required">Last Name</label> */}
                        <input className="form-control" type="text" placeholder="Last Name *" name="last_name" onKeyUp={() => simpleValidator.current.showMessageFor('last_name')} value={formData.last_name} onChange={(e) => setFormData({ ...formData, last_name: e.target.value })} required />
                        <div className='text-danger formErrorMsg'>{simpleValidator.current.message('last_name', formData.last_name, 'alpha_space')}</div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        {/* <label  className="form-label required">Email Address</label> */}
                        <input type="email" onKeyUp={() => simpleValidator.current.showMessageFor('email')} className="form-control required w-100" placeholder="Email *" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                    </div>
                    <div className="col-md-6 mb-3 mobileInputSection">
                        {/* <label className="form-label required">Mobile</label> */}
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon1">{formData.dial_code ? formData.dial_code : '+91'}</span>
                            <input type="text" className="form-control " placeholder="Mobile *" name="mobile" onKeyUp={() => simpleValidator.current.showMessageFor('mobile')} value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, "") })} required />
                        </div>
                        <div className='text-danger formErrorMsg'>{simpleValidator.current.message('mobile', formData.mobile, 'phone')}</div>
                    </div>
                    <div className='text-danger formErrorMsg'>{simpleValidator.current.message('email', formData.email, 'email')}</div>

                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        {/* <label className="form-label">Country</label> */}
                        {countries.length > 0 ?
                            <>
                                <select className="form-select" placeholder="Country" name="country" onChange={handleChangeCountry} defaultValue={formData.country_name} required>
                                    <option value="">Select Country *</option>
                                    {countries.length > 0 && countries.map((row, index) => <option value={row.country_name} key={index} >{row.country_name}</option>)}
                                </select>
                            </>
                            : ''}
                    </div>
                    <div className="col-md-6 mb-3">
                        {/* <label className="form-label">Occupation</label> */}
                        <select className="form-select" placeholder="Occupation" name="occupation" onChange={(e) => setFormData({ ...formData, occupation: e.target.value })} defaultValue={formData.occupation}>
                            <option value="">Interested As</option>
                            <option value="Agency">Real Estate Agency</option>
                            <option value="Developer">Developer</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    {/* <div className="col-md-6 mb-3 mobileInputSection">
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon1">{formData.dial_code ? formData.dial_code : '+91'}</span>
                            <input type="text" className="form-control " placeholder="Mobile *" name="mobile" onKeyUp={() => simpleValidator.current.showMessageFor('mobile')} value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, "") })} required />
                        </div>
                        <div className='text-danger formErrorMsg'>{simpleValidator.current.message('mobile', formData.mobile, 'phone')}</div>
                    </div> */}
                    
                </div>
                <div className="row">
                    {/* <div className="col-md-6 mb-3">
                        <select className="form-select" placeholder="Occupation" name="occupation" onChange={(e) => setFormData({ ...formData, occupation: e.target.value })} defaultValue={formData.occupation}>
                            <option value="">Interested As</option>
                            <option value="Agency">Real Estate Agency</option>
                            <option value="Developer">Developer</option>
                            <option value="Others">Others</option>
                        </select>
                    </div> */}
                    <div className="col-12 mb-3">
                        {/* <label className="form-label">Project Interest</label> */}
                        {projects.length > 0 ?
                            <>

                                {/* <Select options="" onChange={(e) => setFormData({ ...formData, project_interest: e.target.value })} /> */}
                                <Multiselect
                                    ref={multiselectRef}
                                    isObject={false}
                                    onKeyPressFn={function noRefCheck() { }}
                                    onRemove={function noRefCheck() { }}
                                    onSearch={function noRefCheck() { }}
                                    onSelect={handleChange}
                                    selectedValues={selectedValue}
                                    options={projectList}             
                                    hidePlaceholder={true}                      
                                    placeholder={"Select Projects *"}
                                />
                                {/* <select className="form-select" placeholder="Select Project Interest" name="project_interest" onChange={(e) => setFormData({ ...formData, project_interest: e.target.value })} defaultValue={formData.project_interest}>
                                    <option value="">Project Interest</option>
                                    {projects.length > 0 && projects.map((row, index) => <option value={row.title} key={index} >{row.title}</option>)}
                                </select> */}
                                {/* <Select
                                    onChange = {(e) => setFormData({ ...formData, project_interest: e.target.value })}
                                    value={formData.project_interest}
                                    options={projectList}
                                />
                                {projectList} */}
                            </>
                            : ''}
                    </div>
                </div>
                <div className="row">
                    <div className="col mb-3">
                        {/* <label className="form-label">Your Message</label> */}
                        <textarea className="form-control w-100" placeholder="Write Your Message" name="message" defaultValue={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col mb-3">
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
                            <button className="btn btn-primary" type="button" disabled >
                                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />  Submitting...
                            </button>
                            :
                            <button className="btn btn-primary" type="submit">Submit</button>
                        }
                    </div>
                </div>
            </form>
            <SocialSharingComponent />
        </>
    );
}

export default ContactFormComponent;