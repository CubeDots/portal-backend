import { Link } from "react-router-dom";
import React, { useState,useEffect } from 'react';
import { useAuthUser, useIsAuthenticated, useAuthHeader } from 'react-auth-kit';
import { API_ENDPOINT } from "../../common/Constants";
import UpdatePasswordModal from '../../components/UpdatePasswordModal';
import axios from 'axios';


function ProfileDashPage() {
    const isAuthenticated = useIsAuthenticated();
    const authHeader = useAuthHeader();
    const auth = useAuthUser();

    const [profileLoader, setProfileLoader] = useState(false);
  
    const [profiles, setProfiles] = useState([]);

    //console.log("authHeader == ",authHeader());
    const user = auth().user;


    const [isLoginModalShow, setisLoginModalShow] = React.useState(false);
    const [isForgotPasswordModalShow, setisForgotPasswordModalShow] = React.useState(false);

    useEffect(() => {
        fetchProfileData();
      }, []);

    async function fetchProfileData() {
        setProfileLoader(true);
        let postData = {
            test: null,
            email: user.email         
        };
        try {
            setProfileLoader(true);
            const res = await axios.post(API_ENDPOINT + "orgzit/profile_details", postData, { headers: { Authorization: authHeader() } });
            setProfileLoader(false);
            //console.log(res.data.data);
            //return false;
            if(res.data.data)
            setProfiles(res.data.data);
            //    console.log("res meeting", res.data);
        } catch (error) {
            console.error("error ", error);
            setProfileLoader(false);
        }
    }      
  
    /* FORGOT PASSWORD CODE GOES HERE */
    const openForgotPasswordModal = () => {
        console.log('Forgot Password Modal click manually');
        setisForgotPasswordModalShow(true);
    }

    const closeForgotPasswordModal = () => {
        console.log('close Forgot Password Modal trigger');
        setisForgotPasswordModalShow(false);
    }


    return (
        <>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" colSpan="6">Profile - {profiles.Title} ({profiles.AgentType})</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Full Name</th>
                            <td>{profiles.FullName}</td>
                            
                            <th scope="row">Company</th>
                            <td>{profiles.CompanyName}</td>
                        </tr>
                        <tr>
                            <th scope="row">Phone</th>
                            <td>{profiles.FirstPhone}</td>
                            
                            
                            <th scope="row">Email</th>
                            <td>{profiles.Email}</td>
                        </tr>
                        <tr>
                            <th scope="row">Country</th>
                            <td>{profiles.Country}</td>
                            
                            <th scope="row">Created By</th>
                            <td>{profiles.CreatedBy}</td>
                        </tr>
                        <tr>
                            <th scope="row">Created Date</th>
                            <td>{profiles.CreatedDate}</td>
                            
                            
                            <th scope="row">Gender</th>
                            <td>{profiles.Gender}</td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
            

            <UpdatePasswordModal isForgotPasswordModalShow={isForgotPasswordModalShow} handleChane={closeForgotPasswordModal} />

        </>
    );
}

export default ProfileDashPage;