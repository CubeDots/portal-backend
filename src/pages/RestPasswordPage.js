import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import { API_ENDPOINT } from "../common/Constants";

function RestPasswordPage() {
    let publicPath = process.env.PUBLIC_URL;

    const navigate = useNavigate();
    const { token, email } = useParams();
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
      }, []);
     useEffect(() => {
        window.scrollTo({top:0})
    }, [])
    const [loading, setLoading] = React.useState(false);
    const [formData, setFormData] = React.useState({ email: '', password: '', password_confirmation: '' });
    const [formErrors, setFormErrors] = React.useState('');
    const [formValidationErrors, setFormValidationErrors] = React.useState({});


    useEffect(() => {
        window.scrollTo({ top:0,left:0,behavior:'smooth'});
        setFormData(prevState => ({
            ...prevState,
            email: email
        }))
    }, [email]);

    const onSubmit = (e) => {
        e.preventDefault()
        setLoading(true);
        console.log("formData ", email, formData);
        formData['email'] = email;
        formData['token'] = token;
        axios.post(API_ENDPOINT + "auth/resetPassword", formData)
            .then((res) => {
                setLoading(false);
                console.log('resetPassword res', res.status, res.data)
                if (res.status === 200) {
                    setFormErrors(res.data.message);
                    setFormData(fd => ({ ...fd, email: '', password: '', password_confirmation: '' }));

                    setTimeout(() => {
                        setFormErrors('');
                        navigate("/");
                    }, 5000);
                }
            }).catch((error) => {
                setLoading(false);
                console.log("errors ### ", error);
                if(error){
                    if (error.response.status === 422) {
                        console.log("errors data ", error.response.data.errors);
                        //let errorm = error.response.data.errors[0];
                        console.log("error \n", error.response.data.message)
                        setFormValidationErrors(error.response.data.errors);
                        //setFormErrors(error.response.data.message);
                        setTimeout(() => {
                            setFormValidationErrors({});
                            setFormErrors('');
                        }, 5000);
                    }
                }
            })
    }


    return (
        <>
            <div className="mt-70">
                <div className="container">

                    <div className="row justify-content-center my-5">

                        <div className="col-md-5">
                            <h3>Reset Password</h3>
                            
                            <form onSubmit={onSubmit}>
                                <div className="mb-3">

                                    {formErrors ?
                                        <p className={formValidationErrors.length ? 'text-danger' : 'text-success'}>{formErrors}</p>
                                        : ''}
                                    <ul className="list-unstyled">
                                        {formValidationErrors && Object.keys(formValidationErrors).map((error, index) => (
                                            <li className="text-danger" key={index}>{formValidationErrors[error][0]}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" name="email" placeholder="Email" value={email} readOnly={true} />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" name="password" placeholder='New Password' value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" name="password_confirmation" placeholder='Confirm Password' value={formData.password_confirmation} onChange={(e) => setFormData({ ...formData, password_confirmation: e.target.value })} />
                                </div>

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
                </div>
            </div>
        </>
    );
}

export default RestPasswordPage;