import React, { useEffect, useState, useRef } from "react";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
import SimpleReactValidator from "simple-react-validator";
import { API_ENDPOINT } from "../common/Constants";
import Multiselect from "multiselect-react-dropdown";
import _ from "lodash";

function EnrollmentFromAds(props) {
  let multiselectRef = React.createRef();
  let navigate = useNavigate();
  const simpleValidator = useRef(new SimpleReactValidator());
  let publicPath = process.env.PUBLIC_URL;
  let mt = props.show;
  const isAuthenticated = useIsAuthenticated();
  const auth = useAuthUser();
  const user = isAuthenticated() ? auth().user : null;
  const [projectList, setProjectList] = useState();
  const [projects, setProjects] = useState([]);
  const [selectedValue, setSelectedValue] = useState([]);
  const [footersocialLoading, setFooterSocialLoading] = useState(false);
  const [footerSocialLinks, setFooterSocialLinks] = useState(null);
  const [showInput, setShowInput] = useState('');

  const [countriesLoading, setCountriesLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [warnemail, setwarnemail] = useState("");
  const [lastname, setLastName] = useState("");
  const [emailerror, setEmailError] = useState("");
  const [mobileerror, setMobileError] = useState("")
  const [projectinterest, setProjectInterest] = useState("")
  const [countryselect, setCountrySelect] = useState("")
  const [occupationslected, setOccupationSelected] = useState("")
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    project_interest: "",
    first_name: "",
    last_name: "",
    email: "",
    country: "",
    dial_code: "",
    mobile: "",
    occupation: "",
    message: "",
    security_code: "",
    terms: false,
  });
  const [securityCode, setSecurityCode] = useState(null);

  useEffect(() => {
    genRandomString();
    fetchFooterSocial();
    fetchProjects();
    setLoading(false);
    fetchCountries();
    if (user) {
      //console.log("user",user)
      setFormData((fd) => ({
        ...fd,
        first_name: user.name.split(" ")[0],
        last_name: user.name.split(" ")[1],
        email: user.email,
      }));
    }
    // console.log("props", props.show);
  }, [user]);

  const HandleInputHide = (event) => {
    const setUserInput = event.target.value;
    setShowInput(setUserInput)
    console.log(event.target.value)
  }

  async function fetchFooterSocial() {
    setFooterSocialLoading(true);
    try {
      const res = await axios.get(publicPath + "/assets/data/social.json");
      if (res.data) {
        setFooterSocialLoading(false);
        setFooterSocialLinks(res.data.social_links);
      }
    } catch (error) {
      // console.error("error ", error);
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
        let filtered_array = _.filter(projects, function (o) {
          return o.title !== "AcarBlu";
        });
        // console.log("filtered_array", filtered_array);
        let projectTitle = filtered_array.map((x) => {
          return x.title;
        });

        setProjectList(projectTitle);
        // console.log("project list", projectTitle, projectList)
      }
    } catch (error) {
      // console.error("error ", error);
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
    setFormData((formData) => ({ ...formData, country: selectedCountryName }));
    let countriesList = countries;
    let newDialCode = Object.keys(countriesList)
      .filter((x) => {
        return countriesList[x].country_name === selectedCountryName;
      })
      .map((x) => {
        return countriesList[x].dial_code;
      });
    let dial_code = newDialCode.length ? newDialCode[0] : "";
    setFormData((formData) => ({ ...formData, dial_code: dial_code }));
  };

  const handleChangeProjectInterest = (e) => {
    //console.log("isClearable", e);
    let selectedProject = e;
    //alert(e.target.value);
    setFormData((formData) => ({
      ...formData,
      project_interest: e.target.value,
    }));
  };
  const handleChangeTerms = (status) => {
    // console.log("terms ", status);
    setFormData((formData) => ({ ...formData, terms: status }));
  };

  const genRandomString = () => {
    var text = "";
    var length = 6;
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    setSecurityCode(text);
    return text;
  };

  const resetFrom = () => {
    setFormData({
      project_interest: "",
      first_name: "",
      last_name: "",
      email: "",
      country: "",
      dial_code: "",
      mobile: "",
      occupation: "",
      message: "",
      security_code: "",
      terms: false,
    });
    document.getElementById("form1").reset();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (formData.first_name.length == "" || formData.last_name.length == "" || formData.email.length == "" || formData.occupation.length == "" || formData.country.length == "" || formData.mobile.length == "" || formData.mobile.length < 4 || formData.mobile.length > 20) {
      setwarnemail("please enter valid first name")
      setLastName("please enter valid last name")
      setEmailError("please enter valid email address")
      setMobileError("please enter valid mobile number")
      setProjectInterest("please select occupation")
      setCountrySelect("please select country")
      return false;
    }
    if (formData.occupation == "Agency" && formData.project_interest.length == "") {
      setOccupationSelected("please select project")
      return false;
    }
    console.log("formData ", formData);
    if (formData.security_code !== securityCode) {
      alert("Please enter correct security code");
      return false;
    }
    if (formData.terms === false) {
      alert("Please accept our Terms & Conditions.");
      return false;
    }
    setLoading(true);
    axios
      .post(API_ENDPOINT + "orgzit/requestEnrollment", formData)
      .then((res) => {
        //console.log("res ### ", res.status, res.data);

        if (res.status === 200) {
          setLoading(false);
          genRandomString();
          setSelectedValue([""]);
          setSelectedValue([]);
          resetFrom();
          setTimeout(() => {
            alert(res.data.message);
          }, 1000);
          setTimeout(() => {
            navigate('/home')
          }, 2500)
        }
      })
      .catch((error) => {
        setLoading(false);
        //console.log("errors ### ", error);
        if (error) {
          if (error.response.status === 422) {
            let errors = error.response.data.errors;
            let msg = error.response.data.message + "\n";
            Object.keys(errors).map(
              (error, index) => (msg += errors[error][0] + "\n")
            );
            alert(msg);
          }
        }
      });
  };

  const openLogin = () => {
    console.log("openLogin clicked");
    // props.show=false;
    mt = false;
    setTimeout(() => {
      document.querySelector("#loginButton").click();
    }, 300);
  };
  return (
    <>
      <div className="EnrollmentFormSection mt-70">
        <div className="container ">
          <div className="EnrollMentDiv">
            <div className="row">
              <div className="col-12">
                <h2 class="vegonHeading text-center">Enrollment Form</h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-7 EnrollmentFormDiv">
                <form id="form1" onSubmit={onSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="First Name *"
                        name="first_name"
                        onKeyUp={() =>
                          simpleValidator.current.showMessageFor("first_name")
                        }
                        value={formData.first_name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            first_name: e.target.value,
                          })
                        }
                         />
                      <div className='validationError'>
                        <p className='errorMsg'>{formData.first_name.length == "" ? warnemail : ""}</p>
                      </div>
                      <div className="text-danger formErrorMsg">
                        {simpleValidator.current.message(
                          "first_name",
                          formData.first_name,
                          "alpha_space"
                        )}
                      </div>

                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Last Name *"
                        name="last_name"
                        onKeyUp={() =>
                          simpleValidator.current.showMessageFor("last_name")
                        }
                        value={formData.last_name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            last_name: e.target.value,
                          })
                        }
                         />
                      <div className='validationError'>
                        <p className='errorMsg'>{formData.last_name.length == "" ? lastname : ""}</p>
                      </div>
                      <div className="text-danger formErrorMsg">
                        {simpleValidator.current.message(
                          "last_name",
                          formData.last_name,
                          "alpha_space"
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email *"
                        name="email"
                        onKeyUp={() =>
                          simpleValidator.current.showMessageFor("email")
                        }
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                         />
                         <div className='validationError'>
                        <p className='errorMsg'>{formData.email.length == "" ? emailerror : ""}</p>
                      </div>
                    </div>
                    <div className="text-danger formErrorMsg">
                      {simpleValidator.current.message(
                        "email",
                        formData.email,
                        "email"
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col mb-3" onChange={(e) => { HandleInputHide(e) }}>
                      <select
                        className="form-select"
                        placeholder="Occupation"
                        name="occupation"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            occupation: e.target.value,
                          })
                        }
                        defaultValue={formData.occupation}>
                        <option value="" disabled selected hidden>
                          Interested As
                        </option>
                        <option value="Agency">Real Estate Agency</option>
                        <option value="Developer">Developer</option>
                        <option value="Others">Others</option>
                      </select>
                      <div className='validationError'>
                        <p className='errorMsg'>{formData.occupation === "" ? projectinterest : ""}</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col mb-3">
                      {countries.length > 0 ? (
                        <>
                          <select
                            className="form-select"
                            placeholder="Country"
                            name="country"
                            onChange={handleChangeCountry}
                            defaultValue={formData.country_name}
                            >
                            <option value="" disabled selected hidden>
                              Select Country *
                            </option>
                            {countries.length > 0 &&
                              countries.map((row, index) => (
                                <option value={row.country_name} key={index}>
                                  {row.country_name}
                                </option>
                              ))}
                          </select>
                        </>
                      ) : null}
                      <div className='validationError'>
                        <p className='errorMsg'>{formData.country.length == "" ? countryselect : ""}</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                          {formData.dial_code ? formData.dial_code : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-plus" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                <path fill-rule="evenodd" d="M12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5z" />
                            </svg>}
                        </span>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Mobile No. *"
                          name="mobile"
                          value={formData.mobile}
                          onKeyUp={() =>
                            simpleValidator.current.showMessageFor("mobile")
                          }
                          onChange={(e) =>
                            setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, "") })
                          }
                           />
                      </div>
                      <div className='validationError'>
                        <p className='errorMsg'>{formData.mobile.length == "" || formData.mobile.length < 4 || formData.mobile.length > 20 ? mobileerror : ""}</p>
                      </div>
                      <div className="text-danger formErrorMsg">
                        {
                          formData.mobile.length < 4 || formData.mobile.length > 20 ?
                            <div className='text-danger formErrorMsg'>{simpleValidator.current.message('mobile', formData.mobile, 'phone')}</div>
                            : ""
                        }
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col mb-3">
                      <textarea
                        className="form-control"
                        placeholder="Write Your Message"
                        name="message"
                        defaultValue={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }>
                      </textarea>
                    </div>
                  </div>
                  {/* {projects.length > 0 ? (
                      <>
                        <Multiselect
                          ref={multiselectRef}
                          isObject={false}
                          onKeyPressFn={function noRefCheck() {}}
                          onRemove={function noRefCheck() {}}
                          onSearch={function noRefCheck() {}}
                          onSelect={handleChange}
                          selectedValues={selectedValue}
                          options={projectList}
                          hidePlaceholder={true}
                          placeholder={"Select Projects *"}
                          singleSelect={true}
                        />
                      </>
                    ) : (
                      ""
                    )} */}

                  {
                    showInput == 'Agency' && (
                      <div className="row">
                        <div className="col mb-3">
                          {projects.length > 0 ? (
                            <>
                              <select
                                className="contactComponent form-select"
                                placeholder="Select Projects"
                                name="country"
                                onChange={handleChangeProjectInterest}
                                defaultValue={formData.project_interest}
                                >
                                <option value="" disabled selected hidden>
                                  Select Projects *
                                </option>
                                {projects.length > 0 &&
                                  projects.map((row, index) => (
                                    <option value={row.title === "AcarBlu" ? null : row.title} key={index}>
                                      {row.title === "AcarBlu" ? null : row.title}
                                    </option>
                                  ))}
                              </select>
                            </>
                          ) : null}
                           <div className='validationError'>
                            <p className='errorMsg'>{formData.project_interest.length == "" ? occupationslected : ""}</p>
                          </div>
                        </div>
                      </div>
                    )}

                  <div className="row">
                    <div className="captchInput">
                      <input
                        type="hidden"
                        name="project_interest"
                        value={"-"} />
                      <input
                        type="text"
                        placeholder="Security Code"
                        name="security_code"
                        autoComplete="off"
                        defaultValue={formData.security_code}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            security_code: e.target.value,
                          })
                        } />
                      <span className="captha_code mr-sm-2" id="notcp">
                        {securityCode}
                      </span>
                      <button
                        type="button"
                        onClick={() => genRandomString()}
                        className="btn btn-default">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-arrow-repeat"
                          viewBox="0 0 16 16">
                          <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                          <path
                            fillRule="evenodd"
                            d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-check termAndConditionCheckbox">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexCheckDefault"
                          defaultValue={formData.terms}
                          onClick={() => handleChangeTerms(!formData.terms)} />
                        <label className="form-check-label">
                          <div className="termsAndConditionSection">
                            <small>
                              By clicking the submit button below, I hereby
                              agree to and accept the following terms and
                              conditions policy.
                            </small>
                            <small>
                              <Link target="_blank" to={"/terms"}>
                                Terms & Conditions
                              </Link>
                            </small>
                          </div>
                        </label>
                      </div>
                      {loading ? (
                        <button className="btntheme" type="button" disabled>
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true" />
                          {" "}
                          Submitting...
                        </button>
                      ) : (
                        <button className="btntheme" type="submit">
                          Submit
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default EnrollmentFromAds;
