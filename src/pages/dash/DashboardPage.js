import React, { useEffect, useState } from "react";
import { Navigate,NavLink } from 'react-router-dom';

import { useIsAuthenticated, useAuthUser, useAuthHeader } from 'react-auth-kit';
import DashboardStats from "../../components/dashboard/DashboardStats";
import MonthlySalesList from "../../components/dashboard/MonthlySalesList";
import MonthlyOppotunityList from "../../components/dashboard/MonthlyOppotunityList";
import MonthlyMeetingsList from "../../components/dashboard/MonthlyMeetingsList";
import MonthlyAppointmentList from "../../components/dashboard/MonthlyAppointmentList";
import MonthlyPaymentPlanList from "../../components/dashboard/MonthlyPaymentPlanList";

import BecomeOurPartnerModal from "../../components/dashboard/CreateAppointment";


function DashboardPage() {
    const [isCreateAppointmentModalShow, setIsBecomeOurPartnerModalShow] = useState(false);
    
    const auth = useAuthUser();
    const isAuthenticated = useIsAuthenticated();
    // const authHeader = useAuthHeader();

    useEffect(() => {
        window.scrollTo({ top:0,left:0,behavior:'smooth'});
    }, []);

    if (!isAuthenticated()) {

        // Redirect to Login

        console.log("log as in");
        return (
            <Navigate to="/login" replace />
        );

    } else {
        //console.log("authHeader", authHeader)
    }
    console.log("auth ", auth());
    const showBecomeOurPartnerModal = () => {
        console.log("showBecomeOurPartnerModal clicked");
        setIsBecomeOurPartnerModalShow(true);
    }

    const closeBecomeOurPartnerModalModal = () => {
        console.log("closeBecomeOurPartnerModalModal trigger");
        setIsBecomeOurPartnerModalShow(false);
    }    

    
    return (
        <>
            <p className="dashboardLinks"><a href="#" className=" btntheme dashBtn" onClick={showBecomeOurPartnerModal}>Create Appointment</a>
            <NavLink className=" btntheme dashBtn" to="/cuverse">CuVerse</NavLink></p>
            {isCreateAppointmentModalShow}

            <BecomeOurPartnerModal show={isCreateAppointmentModalShow} onHide={closeBecomeOurPartnerModalModal} />
            <div className="">
                <DashboardStats />
                {/* <MonthlySalesList />
                <MonthlyAppointmentList />
                <MonthlyMeetingsList />
                <MonthlyPaymentPlanList /> */}
            </div>
        </>
    );
}

export default DashboardPage;
