import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import { useAuthUser, useIsAuthenticated, useAuthHeader } from 'react-auth-kit';
import UpdatePasswordModal from '../../components/UpdatePasswordModal';

function ProfileDashPage() {
    const isAuthenticated = useIsAuthenticated();
    const authHeader = useAuthHeader();
    const auth = useAuthUser();

    //console.log("authHeader == ",authHeader());
    const user = auth().user;


    const [isLoginModalShow, setisLoginModalShow] = React.useState(false);
    const [isForgotPasswordModalShow, setisForgotPasswordModalShow] = React.useState(false);

  
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
                <h2 className='ps-1'>Profile</h2>

                <table className="table table-bordered0">
                    <tbody>
                        <tr>
                            <th className='ps-1'>Name</th>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <th className='ps-1'>Email</th>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <th className='ps-1'>Company</th>
                            <td>{user.company}</td>
                        </tr>
                        <tr>
                            <th className='ps-1'>Phone</th>
                            <td>{user.phone}</td>
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