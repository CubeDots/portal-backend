import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuthHeader } from 'react-auth-kit';
import Spinner from 'react-bootstrap/Spinner';
import { API_ENDPOINT } from "../../common/Constants";


function WelcomeAgentSection() {
    const authHeader = useAuthHeader();
    const [dashboardStatsLoader, setDashboardStatsLoader] = useState(false);
    const [dashboardStats, setDashboardStats] = useState([]);

    useEffect(() => {
        fetchAppointmentDatStats();
    }, []);

    /* SALES LIST */
    async function fetchAppointmentDatStats() {
        setDashboardStatsLoader(true);

        try {
            const res = await axios.post(API_ENDPOINT + "orgzit/welcomeinfo", '', { headers: { Authorization: authHeader() } });
            setDashboardStatsLoader(false);            
            setDashboardStats(res.data.data);

        } catch (error) {
            //console.error("error ", error);
            setDashboardStatsLoader(false);
        }
    }

    return (
        <>
            <div className="welcomeSection">
                <div className="row">
                    <div className="col">
                        <div>
                            <h2>Welcome Agent</h2>
                            <p>Last Login : 25 Feb 2022</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 appointmentDiv">
                        <div className="appoinmentsBox">
                            <h6 className="appoinmentHeading">Appointments</h6>
                            <div className="appoinmentsBoxContent">
                                <div className="followUpweeks">
                                    <h6>                                    
                                    {!dashboardStatsLoader ?
                                    <div>{dashboardStats.totalAppointmentOfWeek ? dashboardStats.totalAppointmentOfWeek : 0} </div>
                                    : <div style={{ fontSize: '12px', text: 'center' }}><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...</div>}                                    
                                    </h6>
                                    <p>This Weeks</p>
                                </div>
                                <div className="followMonths">
                                    <h6>
                                    {!dashboardStatsLoader ?
                                    <div>{dashboardStats.totalAppointmentOfMonth ? dashboardStats.totalAppointmentOfMonth : 0} </div>
                                    : <div style={{ fontSize: '12px', text: 'center' }}><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...</div>}                                    
                                    </h6>
                                    <p>This Monthly</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 appointmentDiv">
                        <div className="followUpsBox appoinmentsBox">
                            <h6 className="appoinmentHeading">Follow Up</h6>
                            <div className="followUpsBoxContent">
                                <div className="followUpweeks">
                                    <h6>
                                    {!dashboardStatsLoader ?
                                    <div>{(dashboardStats.TotalMeetingsOfThisMonth) ? (dashboardStats.TotalMeetingsOfThisMonth) : '0'} </div>
                                    : <div style={{ fontSize: '12px', text: 'center' }}><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...</div>}
                                    </h6>
                                    <p>Weeks</p>
                                </div>
                                <div className="followMonths">
                                    <h6>
                                    {!dashboardStatsLoader ?
                                    <div>{ (dashboardStats.TotalMeetingsOfMonth) ? (dashboardStats.TotalMeetingsOfMonth) : '0'} </div>
                                    : <div style={{ fontSize: '12px', text: 'center' }}><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...</div>}
                                    </h6>
                                    <p>Monthly</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default WelcomeAgentSection;