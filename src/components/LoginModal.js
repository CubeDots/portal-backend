
import { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import { useSignIn, useIsAuthenticated } from 'react-auth-kit';
import Modal from 'react-bootstrap/Modal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import BecomeOurPartnerModal from "./home/BecomeOurPartnerModal";
import SimpleReactValidator from 'simple-react-validator';
import { API_ENDPOINT } from '../common/Constants';

import ForgotPasswordModal from './ForgotPasswordModal';


function LoginModal(props) {
    let publicPath = process.env.PUBLIC_URL;

    const [isBecomeOurPartnerModalShow, setIsBecomeOurPartnerModalShow] = useState(false);
    const simpleValidator = useRef(new SimpleReactValidator());
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange = (evnt) => {
        setPasswordInput(evnt.target.value);
    }
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const isAuthenticated = useIsAuthenticated();
    const navigate = useNavigate();
    const location = useLocation();
    const signIn = useSignIn();

    const [show, setShow] = useState(false);
    const handleClose = () => { setShow(false); }
    const handleShow = () => setShow(true);

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '', rememberMe: false });
    const [formErrors, setFormErrors] = useState('');
    const [formValidationErrors, setFormValidationErrors] = useState({});

    //forgot password

    const [isForgotPasswordModalShow, setisForgotPasswordModalShow] = useState(false);

    const showBecomeOurPartnerModal = () => {
        console.log("showBecomeOurPartnerModal clicked");
        handleClose();
        setTimeout(() => {
            setIsBecomeOurPartnerModalShow(true);
        }, 300);


    }

    const closeBecomeOurPartnerModalModal = () => {
        console.log("closeBecomeOurPartnerModalModal trigger");
        setIsBecomeOurPartnerModalShow(false);
    }

    const openForgotPasswordModal = () => {
        console.log('openForgotPasswordModal click manually');
        handleClose();
        setTimeout(() => {
            setisForgotPasswordModalShow(true);
        }, 300);

    };
    const closeForgotPasswordModal = () => {
        console.log('closeForgotPasswordModal trigger');
        setisForgotPasswordModalShow(false);
        // handleShow();
        setTimeout(() => {
            handleShow();
        }, 300);
    };


    // if (isAuthenticated()) {
    //     // Redirect to dashboard
    //     console.log("valid Redirect to dashboard");
    //     return (
    //         <Navigate to="/dash" replace />
    //     );
    // }

    const getLoginData = () => {
        return sessionStorage.getItem("loginData") || null;
    };

    const setLoginData = (value) => {
        if (value)
            sessionStorage.setItem("loginData", value);
        else
            sessionStorage.removeItem("loginData");
    };

    useEffect(() => {
        if (props.isLoginModalShow) {
            handleShow();
        }
        if (!show) {
            props.handleChane();
        }

        console.log("location #### ", location.pathname);
    }, [props, show])

    const onSubmit = (e) => {
        e.preventDefault()
        setLoading(true);
        if (formData.rememberMe) {
            setLoginData(formData);
        } else {
            setLoginData(null);
        }
        axios.post(API_ENDPOINT + 'auth', formData)
            .then((res) => {
                console.log('login res', res.status, res.data)
                if (res.status === 200) {
                    setLoading(false);
                    if (signIn({
                        token: res.data.data.token,
                        expiresIn: res.data.data.expires_at,
                        tokenType: "Bearer",
                        authState: { user: res.data.data.user },
                        //    refreshToken: res.data.refreshToken, // Only if you are using refreshToken feature
                        //    refreshTokenExpireIn: res.data.refreshTokenExpireIn
                    })) { // Only if you are using refreshToken feature
                        // Redirect or do-something
                        handleClose();
                        console.log("location.pathname ", location.pathname);
                        // if (location.pathname === '/')
                        //     navigate("/dash");
                        // else
                        navigate(location.pathname);

                    } else {
                        //Throw error
                        //alert("Errors \n"+res.errors[0])

                    }
                }
            }).catch((error) => {
                setLoading(false);
                console.log("errors ### ", error.response);
                if (error.response.status === 422) {
                    console.log("errors data ", error.response.data.errors);
                    //let errorm = error.response.data.errors[0];
                    console.log("error \n", error.response.data.message)
                    setFormValidationErrors(error.response.data.errors);
                    setFormErrors(error.response.data.message);
                    setTimeout(() => {
                        setFormValidationErrors({});
                        setFormErrors('');
                    }, 5000);
                }
            })
    }


    const handleCheckbox = (status) => {
        setFormData(formData => ({ ...formData, rememberMe: status }));
    }

    return (
        <>
            <BecomeOurPartnerModal show={isBecomeOurPartnerModalShow} onHide={closeBecomeOurPartnerModalModal} />
            <Modal show={show} onHide={handleClose} className="SignIn" centered>

                {/* <div className="modal fade SignIn" id="SignIn" tabIndex="-1" aria-labelledby="SignInLabel" aria-hidden="true"> */}
                {/* <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content"> */}
                <div className="signInBox">
                    <div className="modal-body">
                        <div className='signinImg'>
                            <LazyLoadImage
                                effect="blur"
                                // src={publicPath + "/assets/images/2.webp"} 
                                src={publicPath + "/assets/images/loginpage/loginbanner.jpg"}

                                className="img-fluid w-100"
                                alt="" />
                            {/* <img src={publicPath + "/assets/images/2.webp"} className='img-fluid' alt='' /> */}
                        </div>
                        <div className='SignInFrom'>
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <h2>Sign In</h2>
                            <p>Welcome back to Cubedots</p>
                            <form onSubmit={onSubmit}>
                                <div className="mb-3">
                                    {/* {loading ? 'loading...' : ''} */}
                                    {/* {formErrors} */}
                                    <ul className="list-unstyled">
                                        {formValidationErrors && Object.keys(formValidationErrors).map((error, index) => (
                                            <li className="text-danger" key={index}>{formValidationErrors[error][0]}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" name="email" placeholder="Email Address" onKeyUp={() => simpleValidator.current.showMessageFor('email')} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                    <div className='text-danger formErrorMsg'>{simpleValidator.current.message('email', formData.email, 'email')}</div>
                                </div>
                                <div className="mb-3 passwordType">
                                    <input type={passwordType} className="form-control" name="password" placeholder='Password' onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                                    <span className="showPasswordType" onClick={togglePassword}>
                                        {passwordType === "password" ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                            <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                            <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                        </svg>}
                                    </span>
                                </div>

                                <div className="mb-3">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="flexCheckDefault"
                                            name="checkbox"
                                            checked={formData.rememberMe}
                                            onChange={() => handleCheckbox(!formData.rememberMe)}
                                        // required
                                        />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Remember me
                                        </label>

                                    </div>
                                </div>

                                {loading ?
                                    <button className="btn btn-primary" type="button" disabled >
                                        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />  Submitting...
                                    </button>
                                    :
                                    <button className="btn btn-primary" type="submit">Login</button>
                                }


                                <div className="my-3 text-center">
                                    <Link to="" className="form-check-label" onClick={openForgotPasswordModal}>Forgot your password?</Link>
                                </div>

                                <div className="my-3 text-center">
                                    Not yet a member of Cubedots - <br /> <Link to="" className="form-check-label" onClick={showBecomeOurPartnerModal}>Become Our Partner</Link>
                                </div>
                            </form>

                        </div>

                    </div>
                    {/* </div>
                </div> */}
                    {/* </div> */}
                </div>

            </Modal>
            {isForgotPasswordModalShow ? (
                <ForgotPasswordModal handleChanel={closeForgotPasswordModal} />
            ) : ''}

        </>
    );
}

export default LoginModal;