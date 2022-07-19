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

    //console.log(user);    
    //return false;
    
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
                            <th scope="col" colSpan="6">Orgzit ID - {user.orgzit_id}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Full Name</th>
                            <td>{user.name != undefined ? `${user.name}` : `${profiles.FullName}`}</td>
                            
                            <th scope="row">Company</th>
                            <td>{profiles.CompanyName != undefined ? `${profiles.CompanyName}` : `${user.company_name}`}</td>
                        </tr>
                        <tr>
                            <th scope="row">Phone</th>
                            <td>{user.phone != undefined ? `${user.phone}` : `${profiles.FirstPhone}`}</td>
                            
                            
                            <th scope="row">Email</th>
                            <td>{profiles.Email != undefined ? `${profiles.Email}` : `${user.email}`}</td>
                        </tr>
                        <tr>
                            <th scope="row">Country</th>
                            <td>{profiles.Country != undefined ? `${profiles.Country}` : `${user.user_type}`}</td>
                            
                            <th scope="row">Created By</th>
                            <td>{profiles.CreatedBy != undefined ? `${profiles.CreatedBy}` : `${user.user_type}`}</td>
                        </tr>

                        {/* 
                        <tr>
                            <th scope="row">Created Date</th>
                            <td>{user.created_at != '' ? `${user.created_at}` : `${profiles.CreatedDate}`}</td>
                            
                            
                            <th scope="row">Gender</th>
                            <td>{user.phone != '' ? `${user.phone}` : `${profiles.Gender}`}</td>
                        </tr>
                        */}

                        <tr className="changePasswordModel">
                                <th className='ps-1' colSpan={2}><Link to="" onClick={openForgotPasswordModal}>Change Password </Link></th>
                        </tr>

                        
                        
                    </tbody>

                </table>
            </div>
            
            <UpdatePasswordModal isForgotPasswordModalShow={isForgotPasswordModalShow} handleChane={closeForgotPasswordModal} />
            

        </>
    );
}

export default ProfileDashPage;