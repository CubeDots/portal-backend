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
            <div className="mt-2 mh-100">
                <h2 className='ps-1'>Profile - {profiles.Title} ({profiles.AgentType})</h2>

                <table className="table table-bordered0">
                    <tbody>
                        <tr>
                            <th className='ps-1'>Full Name</th>
                            <td>{profiles.FullName}</td>
                        
                            <th className='ps-1'>Email</th>
                            <td>{profiles.Email}</td>
                        
                            <th className='ps-1'>Company Name</th>
                            <td>{profiles.CompanyName}</td>
                        </tr>
                        
                        <tr>
                            <th className='ps-1'>Phone Number</th>
                            <td>{profiles.FirstPhone}</td>

                            <th className='ps-1'>Country</th>
                            <td>{profiles.Country}</td>
                        
                            <th className='ps-1'>Created By</th>
                            <td>{profiles.CreatedBy}</td>
                        </tr>

                        <tr>
                            <th className='ps-1'>Created Date</th>
                            <td>{profiles.CreatedDate}</td>

                            <th className='ps-1'>Gender</th>
                            <td>{profiles.Gender}</td>                        
                            
                        </tr>

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