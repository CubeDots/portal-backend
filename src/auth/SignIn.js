import React from "react"
import { useNavigate,Navigate } from 'react-router-dom'
import axios from 'axios'
import { useSignIn,useIsAuthenticated } from 'react-auth-kit'

const SignIn = () => {
    const isAuthenticated = useIsAuthenticated()
   

    const navigate = useNavigate();
    const signIn = useSignIn()
    const [formData, setFormData] = React.useState({email: 'admin@admin.com', password: '12345678'})

    if (isAuthenticated()) {
        // Redirect to dashboard
        console.log("valid Redirect to dashboard");
        return (
            <Navigate to="/dashboard" replace />
        );

    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/api/login', formData)
            .then((res)=>{
                console.log('login res' ,res.status, res.data)
                if(res.status === 200){
                    if(signIn({token: res.data.token,
                               expiresIn:res.data.expires_at,
                               tokenType: "Bearer",
                               authState: {user:res.data.user},
                            //    refreshToken: res.data.refreshToken,                    // Only if you are using refreshToken feature
                            //    refreshTokenExpireIn: res.data.refreshTokenExpireIn
                            })){ // Only if you are using refreshToken feature
                        // Redirect or do-something
                        navigate("/dashboard");
                    }else {
                        //Throw error
                        //alert("Errors \n"+res.errors[0])
                        
                    }
                }
            }).catch((error) => {
                console.log("errors ### ",error.response);
                let errorm = error.response.data.errors[0];
                console.log("errors ### ",error.response.data.errors[0]);
                alert("error \n"+errorm)
            })
    }

    return (
        <form onSubmit={onSubmit}>
            <input type={"email"} value="admin@admin.com" onChange={(e)=>setFormData({...formData, email: e.target.value})}/>
            <input type={"password"} value="12345678" onChange={(e)=>setFormData({...formData, password: e.target.value})}/>

            <button>Submit</button>
        </form>
    )
}



export default SignIn;