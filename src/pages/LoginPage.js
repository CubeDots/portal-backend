import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import { useSignIn, useIsAuthenticated } from 'react-auth-kit';
function LoginPage() {

  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  const signIn = useSignIn();
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({ email: '', password: '' });
  const [formErrors, setFormErrors] = React.useState('');
  const [formValidationErrors, setFormValidationErrors] = React.useState({});
  if (isAuthenticated()) {
    // Redirect to dashboard
    console.log("valid Redirect to dashboard");
    return (
      <Navigate to="/dash" replace />
    );

  }

  const onSubmit = (e) => {
    e.preventDefault()
    setLoading(true);
    axios.post('http://staging.cuengine.com/api/v7/auth', formData)
      .then((res) => {
        console.log('login res', res.status, res.data)
        if (res.status === 200) {
          if (signIn({
            token: res.data.data.token,
            expiresIn: res.data.data.expires_at,
            tokenType: "Bearer",
            authState: { user: res.data.data.user },
            //    refreshToken: res.data.refreshToken, // Only if you are using refreshToken feature
            //    refreshTokenExpireIn: res.data.refreshTokenExpireIn
          })) { // Only if you are using refreshToken feature
            // Redirect or do-something
            navigate("/dash");
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


  return (
    <>
      {/* <div>LoginPage</div>
      <br />
      <form onSubmit={onSubmit}>
        {formErrors}
        <br />
        <input type={"email"} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input type={"password"} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />

        <button>Submit</button>
      </form> */}
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3">Login form</h1>
            <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-light" onSubmit={onSubmit}>
              {loading ? 'loading...' : ''}
              {formErrors}

              <ul>
                {formValidationErrors && Object.keys(formValidationErrors).map((error, index) => (
                  <li className="text-danger" key={index}>{formValidationErrors[error][0]}</li>
                ))}
              </ul>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="checkbox mb-3">
                {/* <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label> */}
              </div>

              {loading ?
                <button className="w-100 btn btn-lg btn-primary" type="button" disabled >
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />  Submitting...
                </button>
                :
                <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
              }




            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;