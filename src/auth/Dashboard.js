// //import React from "react"
import { Navigate } from 'react-router-dom'
import { useIsAuthenticated, useAuthUser,useAuthHeader } from 'react-auth-kit'
import SignOut from "./SignOut";

const Dashboard = () => {

    const auth = useAuthUser()
    const isAuthenticated = useIsAuthenticated()
    const authHeader = useAuthHeader()

    if (!isAuthenticated()) {
        // Redirect to Login
        console.log("log as in");
        return (
            <Navigate to="/login" replace />
        );

    }else{
        console.log("authHeader",authHeader)
    }

    console.log("auth ", auth());
    return (
        <>
            Dashboard | #{auth().user.id} | {auth().user.name}
            <br />
            <br />

            
            <br />
            <SignOut />
        </>
    )
}



export default Dashboard;

// import React from 'react'
// import {withAuthUser} from 'react-auth-kit'

// class Dashboard extends React.Component {

//     render(){
//         console.log("this.props.authState ",this.props.authState.name)
//         return (
//             <div>
//                 Hello {this.props.authState.user}
//             </div>
//         )
//     }
// }

// export default withAuthUser(Dashboard)


