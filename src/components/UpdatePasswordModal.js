
import React, { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import { useSignIn, useIsAuthenticated, useAuthHeader } from 'react-auth-kit';
import Modal from 'react-bootstrap/Modal';

import { API_ENDPOINT } from "../common/Constants";

function UpdatePasswordModal(props) {
    let publicPath = process.env.PUBLIC_URL;
    const authHeader = useAuthHeader();
    const isAuthenticated = useIsAuthenticated();
    const navigate = useNavigate();
    const signIn = useSignIn();

    const [show, setShow] = React.useState(false);

    const handleClose = () => { setShow(false); }
    const handleShow = () => setShow(true);

    const [loading, setLoading] = React.useState(false);
    const [formData, setFormData] = React.useState({ old_password: '', password: '', password_confirmation: '' });
    const [formErrors, setFormErrors] = React.useState('');
    const [formValidationErrors, setFormValidationErrors] = React.useState({});

    // if (isAuthenticated()) {
    //     // Redirect to dashboard
    //     console.log("valid Redirect to dashboard");
    //     return (
    //         <Navigate to="/dash" replace />
    //     );
    // }
    useEffect(() => {
        if (props.isForgotPasswordModalShow) {
            handleShow();
        }
        if (!show) {
            props.handleChane();
        }
    }, [props, show])

    const onSubmit = (e) => {
        e.preventDefault()
        setLoading(true);
        axios.post(API_ENDPOINT + "auth/updatePassword", formData, { headers: { Authorization: authHeader() } })
            .then((res) => {
                console.log('login res', res.status, res.data)
                if (res.status === 200) {
                    setLoading(false);
                    setFormErrors(res.data.message);
                    setFormData(fd => ({ ...fd, old_password: '', password: '', password_confirmation: '' }));
                    setTimeout(() => {
                        setFormErrors('');
                        handleClose();
                        
                    }, 5000);
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


    return (
        <>
            <Modal show={show} onHide={handleClose} className="forgot-password" backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                <Modal.Title>Update Password</Modal.Title>
                </Modal.Header>
                <div className='modal-body'>
                    <div className='px-3'>
                        <p>Type and confirm a secure new password for the account</p>
                        <form onSubmit={onSubmit}>
                            <div className="mb-3">

                                {formErrors ?
                                    <div>{formErrors}</div>
                                    : ''}
                                <ul className="list-unstyled">
                                    {formValidationErrors && Object.keys(formValidationErrors).map((error, index) => (
                                        <li className="text-danger" key={index}>{formValidationErrors[error][0]}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" name="old_password" placeholder='Old Password' value={formData.old_password} onChange={(e) => setFormData({ ...formData, old_password: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" name="password" placeholder='New Password' value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" name="password_confirmation" placeholder='Confirm Password' value={formData.password_confirmation} onChange={(e) => setFormData({ ...formData, password_confirmation: e.target.value })} />
                            </div>

                            {loading ?
                                <button className="changePassword" type="button" disabled >
                                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />  Submitting...
                                </button>
                                :
                                <button className=" changePassword " type="submit">Submit</button>
                            }

                        </form>
                    </div>
                </div>

            </Modal>
        </>
    );
}

export default UpdatePasswordModal;