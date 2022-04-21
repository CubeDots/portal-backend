
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import {useIsAuthenticated } from "react-auth-kit";
import Modal from "react-bootstrap/Modal";
import { API_ENDPOINT } from "../common/Constants";

function ForgotPasswordModal(props) {
    let publicPath = process.env.PUBLIC_URL;

    const isAuthenticated = useIsAuthenticated();
    const navigate = useNavigate();

    const handleClose = () => {
        setShowfp(false);
        // props.handleChanel();
        console.log("handleClose clicked ", showfp);
    }
    const handleShow = () => {
        setShowfp(true);
        console.log("handleShow clicked ", showfp);
    }
    const [showfp, setShowfp] = React.useState(true);

    const [loading, setLoading] = React.useState(false);
    const [formData, setFormData] = React.useState({ email: '' });
    const [formErrors, setFormErrors] = React.useState('');
    const [errorMsg, setErrorMsg] = useState('');
   // const [formValidationErrors, setFormValidationErrors] = React.useState({});

    useEffect(() => {
        handleShow();

        if (!showfp) {
            props.handleChanel();
        }
    }, [props, showfp]);


    const onSubmit = (e) => {
        e.preventDefault()
        setLoading(true);
        // setFormErrors('');
        // setFormValidationErrors({});
        axios.post(API_ENDPOINT + "auth/forgetPassword", formData)
            .then((res) => {
                setLoading(false);
                console.log('forgetPassword res', res.status, res.data)
                if (res.status === 200) {
                    //setFormErrors(res.data.message);
                    alert(res.data.message);
                    setFormData(fd => ({ ...fd, email: '' }));
                    setTimeout(() => {
                        setFormErrors('');
                        navigate("/");
                    }, 5000);
                }
            }).catch((error) => {
                setLoading(false);
                console.log("errors ### ", error.response);
                if (error.response.status === 422) {
                    console.log("errors data ", error.response.data.errors);
                    //let errorm = error.response.data.errors[0];
                    console.log("error \n", error.response.data.message);
                    let  formValidationErrors = error.response.data.errors;
                    //let msg =error.response.data.message+"\n\n";
                    let msg = '';
                    formValidationErrors && Object.keys(formValidationErrors).map((error, index) => {
                        msg += formValidationErrors[error][0];
                    });
                    //alert(msg);
                    setErrorMsg(msg);
                    // setFormValidationErrors(error.response.data.errors);
                    // setFormErrors(error.response.data.message);
                    setTimeout(() => {
                        // setFormValidationErrors({});
                        // setFormErrors('');
                        setErrorMsg('');
                    }, 10000);
                }
            })
    }


    return (
        <>

            <Modal show={true} onHide={handleClose} className="forgot-password" backdrop="static" keyboard={false} centered>
                <Modal.Header className='p-2' closeButton>
                <Modal.Title>Forgot Password</Modal.Title>
                </Modal.Header>
                <div className="modal-body">
                    <div className="forgotpasswordForm">
                       
                        <form onSubmit={onSubmit}>
                            <div className="mb-3">
                               <p>Please enter the email address registered with cubedots</p>
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" name="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                            </div>
                            {errorMsg ? <p className='text-danger'>{errorMsg}</p> : ''}
                            {loading ?
                                <button className="btn btn-primary" type="button" disabled >
                                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />  Submitting...
                                </button>
                                :
                                <button className="btn btn-primary" type="submit">Submit</button>
                            }

                        </form>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default ForgotPasswordModal;