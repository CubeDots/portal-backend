import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';
import { useAuthHeader } from 'react-auth-kit';
import { API_ENDPOINT } from "../../common/Constants";
import moment from 'moment';
import AppointmentDataList from "../dashboard/AppointmentDataList";
import NotificationDataList from "../dashboard/NotificationDataList";
import WelcomeAgentSection from "../dashboard/WelcomeAgentSection";
import ProgressBar from 'react-bootstrap/ProgressBar';
import MonthlySalesList from "../dashboard/MonthlySalesList";
import MonthlyAppointmentList from "../dashboard/MonthlyAppointmentList";
import MonthlyMeetingsList from "../dashboard/MonthlyMeetingsList";
import MonthlyPaymentPlanList from "../dashboard/MonthlyPaymentPlanList";
import AgentPropertiesList from "../dashboard/AgentPropertiesList";


function DashboardStats() {
    let publicPath = process.env.PUBLIC_URL;
    const authHeader = useAuthHeader();
    const [dashboardStatsLoader, setDashboardStatsLoader] = useState(false);
    const [dashboardStats, setDashboardStats] = useState(null);
    const curr_month = moment().format('MMMM');

    useEffect(() => {
        fetchDashboardStatsData();
    }, []);

    async function fetchDashboardStatsData() {
        setDashboardStatsLoader(true);
        let postData = {
            test: null
        };

        try {
            const res = await axios.post(API_ENDPOINT + "orgzit", postData, { headers: { Authorization: authHeader() } });
            setDashboardStatsLoader(false);
            setDashboardStats(res.data.data);

        } catch (error) {
            console.error("error ", error);
            setDashboardStatsLoader(false);
        }
    }

    return (
        <>
            <div className="agentPageSection">
                <div className="agentDashboardBox">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xl-3 col-md-6">
                                <div className="totalAppointments totalAgentContent">
                                    <div className="">
                                        <h6>
                                            {!dashboardStatsLoader ?
                                                <div className="text-center font-weight-bold">{dashboardStats ? dashboardStats.TotalAppointments : ''} </div>
                                                : <div style={{ fontSize: '12px', text: 'center' }}><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...</div>}
                                        </h6>
                                        <h6>Total Appointments</h6>
                                    </div>
                                    <div className="">
                                        <img alt="" src={publicPath + "/assets/images/dashboard/totalappoinments.svg"} className="img-fluid" width={30} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="totalMeeting totalAgentContent">
                                    <div className="">
                                        <h6>
                                            {!dashboardStatsLoader ?
                                                <div className="text-center font-weight-bold">{dashboardStats ? dashboardStats.TotalMeetings : ''} </div>
                                                : <div style={{ fontSize: '12px', text: 'center' }}><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...</div>}
                                        </h6>
                                        <h6>Total Meetings</h6>
                                    </div>
                                    <div className="">
                                        <img alt="" src={publicPath + "/assets/images/dashboard/totalmeeting.svg"} className="img-fluid" width={30} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="totalCustomers totalAgentContent">
                                    <div className="">
                                        <h6>
                                            {!dashboardStatsLoader ?
                                                <div className="text-center font-weight-bold">{dashboardStats ? dashboardStats.TotalOppotunitie : ''} </div>
                                                : <div style={{ fontSize: '12px', text: 'center' }}><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...</div>}
                                        </h6>
                                        <h6>Total Customers</h6>
                                    </div>
                                    <div className="">
                                        <img alt="" src={publicPath + "/assets/images/dashboard/totalcutomer.svg"} className="img-fluid" width={30} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="totalSales totalAgentContent">
                                    <div className="">
                                        <h6>
                                            {!dashboardStatsLoader ?
                                                <div className="text-center font-weight-bold">{dashboardStats ? dashboardStats.TotalSales : ''} </div>
                                                : <div style={{ fontSize: '12px', text: 'center' }}><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...</div>}
                                        </h6>
                                        <h6>Total Sales</h6>
                                    </div>
                                    <div className="">
                                        <img alt="" src={publicPath + "/assets/images/dashboard/totalsales.svg"} className="img-fluid" width={30} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="welcomeAgentSection">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="row">
                                    <div className="col-xl-6 col-md-6">
                                        <WelcomeAgentSection />
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <AppointmentDataList />
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <NotificationDataList />
                                    </div>
                                </div>
                                {/*<div className="discountOfferSection">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="discountOffer">
                                                <div>
                                                    <h2>30% Off</h2>
                                                    <p>On PROJECT</p>
                                                </div>
                                                <div className="text-center">
                                                    <img alt="" src={publicPath + "/assets/images/dashboard/offer.png"} className="img-fluid" width={100} />
                                                </div>
                                                <div>
                                                    <h6>Lorem ipsum</h6>
                                                    <small>One day ago</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="discountOffer">
                                                <div>
                                                    <h2>30% Off</h2>
                                                    <p>On PROJECT</p>
                                                </div>
                                                <div className="text-center">
                                                    <img alt="" src={publicPath + "/assets/images/dashboard/offer.png"} className="img-fluid" width={100} />
                                                </div>
                                                <div>
                                                    <h6>Lorem ipsum</h6>
                                                    <small>One day ago</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="discountOffer">
                                                <div>
                                                    <h2>30% Off</h2>
                                                    <p>On PROJECT</p>
                                                </div>
                                                <div className="text-center">
                                                    <img alt="" src={publicPath + "/assets/images/dashboard/offer.png"} className="img-fluid" width={100} />
                                                </div>
                                                <div>
                                                    <h6>Lorem ipsum</h6>
                                                    <small>One day ago</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="discountOffer">
                                                <div>
                                                    <h2>30% Off</h2>
                                                    <p>On PROJECT</p>
                                                </div>
                                                <div className="text-center">
                                                    <img alt="" src={publicPath + "/assets/images/dashboard/offer.png"} className="img-fluid" width={100} />
                                                </div>
                                                <div>
                                                    <h6>Lorem ipsum</h6>
                                                    <small>One day ago</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>*/}
                                <MonthlySalesList />
                                <MonthlyAppointmentList />
                                <MonthlyMeetingsList />
                                <MonthlyPaymentPlanList />
                            </div>

                            {/* <div className="col-xl-3 col-md-6">
                                <div>
                                    <div className="appoinmentAgentContent">
                                        <div className="d-flex justify-content-between my-2 align-items-center">
                                            <div>
                                                <h6>Notifications</h6>
                                            </div>
                                            <div>
                                                <select>
                                                    <option>Today</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="teamMeetingContent">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" className="bi bi-card-image" viewBox="0 0 16 16">
                                                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                    <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                                                </svg>
                                            </span>
                                            <span>
                                                <h6>Team Meeting</h6>
                                                <small>10AM - 11AM</small>
                                            </span>
                                        </div>
                                        <div className="teamMeetingContent">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" className="bi bi-card-image" viewBox="0 0 16 16">
                                                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                    <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                                                </svg>
                                            </span>
                                            <span>
                                                <h6>Team Meeting</h6>
                                                <small>10AM - 11AM</small>
                                            </span>
                                        </div>
                                        <div className="teamMeetingContent">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" className="bi bi-card-image" viewBox="0 0 16 16">
                                                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                    <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                                                </svg>
                                            </span>
                                            <span>
                                                <h6>Team Meeting</h6>
                                                <small>10AM - 11AM</small>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            {/*<div className="col-xl-3">
                                <div className="row">
                                    <div className="col">
                                        <div className="CollectionPaymentsBox">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <p><small>Collection Of Payment</small></p>
                                                </div>
                                                <div className="col-md-6">
                                                    <small className="collectionPaymentSelect">
                                                        <select>
                                                            <option>This Months</option>
                                                        </select>
                                                    </small>
                                                </div>
                                                <div className="">
                                                    <h6>Total Amount</h6>
                                                    <p>$8,506.00</p>
                                                </div>
                                                <div>
                                                    <img alt="" src={publicPath + "/assets/images/dashboard/processbar.png"} className="img-fluid" />
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <div className="collectedBox">
                                                        <h6>Collected</h6>
                                                        <p>$5,221.00</p>
                                                    </div>
                                                    <div className="PendingBox">
                                                        <h6>Pending</h6>
                                                        <p>$3,1212.00</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="invoiceDueBox">
                                                        <div className="">
                                                            <h6>Customer With invoice due</h6>
                                                        </div>
                                                        <div className="d-flex justify-content-between">
                                                            <div>
                                                                <button type="button" class="remainderBtn">Send Remainder</button>
                                                            </div>
                                                            <div>
                                                                <button type="button" class="remainderBtn">Create Task</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="totalProcessCanellationBox">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <small>Total in process</small>
                                                            <h5>$39k</h5>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <small>Total cancellation</small>
                                                            <h5>$20k</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="propertySection">
                                    <h2>Your Properties</h2>
                                        <AgentPropertiesList />
                                        {<div className="PropertiesDashboardBox">
                                            <div className="row align-items-center">
                                                <div className="col-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16">
                                                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                        <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                                                    </svg>
                                                </div>
                                                <div className="col-6">
                                                    <div className="yourPropertiesBox">
                                                        <h6>Alya 4 Mevism</h6>
                                                        <small>Date 21-02-2022</small>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <Link to="">View All</Link>
                                                </div>
                                            </div>
                                            <div className="totalSoldProgressBar">
                                                <div className="row align-items-center">
                                                    <div className="col-5">
                                                        <div>
                                                            <img alt="" src={publicPath + "/assets/images/dashboard/propertyprogress.png"} className="img-fluid" width={70} />

                                                        </div>
                                                    </div>
                                                    <div className="col-7">
                                                        <div className="soldListItem">
                                                            <ul>
                                                                <li className="greenColorDot"><small>Total Sold 25</small></li>
                                                                <li className="pinkColorDot"><small>Total In Progress</small></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="PropertiesDashboardBox mt-4">
                                            <div className="row align-items-center">
                                                <div className="col-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16">
                                                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                        <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                                                    </svg>
                                                </div>
                                                <div className="col-6">
                                                    <div className="yourPropertiesBox">
                                                        <h6>Alya 4 Mevism</h6>
                                                        <small>Date 21-02-2022</small>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <Link to="">View All</Link>
                                                </div>
                                            </div>
                                            <div className="totalSoldProgressBar">
                                                <div className="row align-items-center">
                                                    <div className="col-5">
                                                        <div>
                                                            <img alt="" src={publicPath + "/assets/images/dashboard/propertyprogress.png"} className="img-fluid" width={70} />

                                                        </div>
                                                    </div>
                                                    <div className="col-7">
                                                        <div className="soldListItem">
                                                            <ul>
                                                                <li className="greenColorDot"><small>Total Sold 25</small></li>
                                                                <li className="pinkColorDot"><small>Total In Progress</small></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="PropertiesDashboardBox mt-4">
                                            <div className="row align-items-center">
                                                <div className="col-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16">
                                                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                        <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                                                    </svg>
                                                </div>
                                                <div className="col-6">
                                                    <div className="yourPropertiesBox">
                                                        <h6>Alya 4 Mevism</h6>
                                                        <small>Date 21-02-2022</small>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <Link to="">View All</Link>
                                                </div>
                                            </div>
                                            <div className="totalSoldProgressBar">
                                                <div className="row align-items-center">
                                                    <div className="col-5">
                                                        <div>
                                                            <img alt="" src={publicPath + "/assets/images/dashboard/propertyprogress.png"} className="img-fluid" width={70} />

                                                        </div>
                                                    </div>
                                                    <div className="col-7">
                                                        <div className="soldListItem">
                                                            <ul>
                                                                <li className="greenColorDot"><small>Total Sold 25</small></li>
                                                                <li className="pinkColorDot"><small>Total In Progress</small></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="PropertiesDashboardBox mt-4">
                                            <div className="row align-items-center">
                                                <div className="col-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16">
                                                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                        <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                                                    </svg>
                                                </div>
                                                <div className="col-6">
                                                    <div className="yourPropertiesBox">
                                                        <h6>Alya 4 Mevism</h6>
                                                        <small>Date 21-02-2022</small>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <Link to="">View All</Link>
                                                </div>
                                            </div>
                                            <div className="totalSoldProgressBar">
                                                <div className="row align-items-center">
                                                    <div className="col-5">
                                                        <div>
                                                            <img alt="" src={publicPath + "/assets/images/dashboard/propertyprogress.png"} className="img-fluid" width={70} />

                                                        </div>
                                                    </div>
                                                    <div className="col-7">
                                                        <div className="soldListItem">
                                                            <ul>
                                                                <li className="greenColorDot"><small>Total Sold 25</small></li>
                                                                <li className="pinkColorDot"><small>Total In Progress</small></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="PropertiesDashboardBox mt-4">
                                            <div className="row align-items-center">
                                                <div className="col-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16">
                                                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                        <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                                                    </svg>
                                                </div>
                                                <div className="col-6">
                                                    <div className="yourPropertiesBox">
                                                        <h6>Alya 4 Mevism</h6>
                                                        <small>Date 21-02-2022</small>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <Link to="">View All</Link>
                                                </div>
                                            </div>
                                            <div className="totalSoldProgressBar">
                                                <div className="row align-items-center">
                                                    <div className="col-5">
                                                        <div>
                                                            <img alt="" src={publicPath + "/assets/images/dashboard/propertyprogress.png"} className="img-fluid" width={70} />

                                                        </div>
                                                    </div>
                                                    <div className="col-7">
                                                        <div className="soldListItem">
                                                            <ul>
                                                                <li className="greenColorDot"><small>Total Sold 25</small></li>
                                                                <li className="pinkColorDot"><small>Total In Progress</small></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>}
                                    </div>
                                </div>
                            </div>*/}
                        </div>
                    </div>
                </div>

                {/*
                <div className="progressBarSection">
                    <div className="container">
                    </div>
                </div>
                
                <div className="chartSection">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-md-4 my-3">
                                <div className="chartSectionImage">
                                    <ChartPage />
                                    <img alt="" src={publicPath + "/assets/images/chart.svg"} className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-4 my-3">
                                <div className="chartSectionImage">
                                    <img alt="" src={publicPath + "/assets/images/chart.svg"} className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="discountBox">
                                    <h3>30% Off</h3>
                                    <h5>On Project</h5>
                                    <div className="d-flex justify-content-center align-itmes-center">
                                        <h1>%</h1>
                                    </div>
                                    <div className="text-end">
                                        <span className="discountBoxarrowAgent">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#fff" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="progressBarSection">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-md-4 my-3">
                                <img alt="" src={publicPath + "/assets/images/progressbar.png"} className="img-fluid" />
                            </div>
                            <div className="col-md-4 my-3">
                                <img alt="" src={publicPath + "/assets/images/colom.png"} className="img-fluid" />
                            </div>
                            <div className="col-lg-3">
                                <div className="classLogActivity">
                                    <div className='d-flex'>
                                        <div className='col-8'>
                                            <h6>Device Log Activity</h6>
                                        </div>
                                        <div className='col-4 text-end'>
                                            <select>
                                                <option>Sort by</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='deviceLogContent'>
                                        <div className='row justify-content-between'>
                                            <div className='col-lg-3 col-2'>
                                                <img src={publicPath + "/assets/images/thumbnail.png"} className="img-fluid"></img>
                                            </div>
                                            <div className="col-9">
                                                <div className='devicePara'>
                                                    <small>Device Name(Model Detail, Device Os App Version)</small>
                                                    <div>
                                                        <b><small>Date &amp; Time</small></b>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='row my-3 justify-content-between'>
                                            <div className='col-lg-3 col-2'>
                                                <img src={publicPath + "/assets/images/thumbnail.png"} className="img-fluid"></img>
                                            </div>
                                            <div className="col-9">
                                                <div className='devicePara'>
                                                    <small>Device Name(Model Detail, Device Os App Version)</small>
                                                    <div>
                                                        <b><small>Date &amp; Time</small></b>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='row my-3 justify-content-between'>
                                            <div className='col-lg-3 col-2'>
                                                <img src={publicPath + "/assets/images/thumbnail.png"} className="img-fluid"></img>
                                            </div>
                                            <div className="col-9">
                                                <div className='devicePara'>
                                                    <small>Device Name(Model Detail, Device Os App Version)</small>
                                                    <div>
                                                        <b><small>Date &amp; Time</small></b>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='row my-3 justify-content-between'>
                                            <div className='col-lg-3 col-2'>
                                                <img src={publicPath + "/assets/images/thumbnail.png"} className="img-fluid"></img>
                                            </div>
                                            <div className="col-9">
                                                <div className='devicePara'>
                                                    <small>Device Name(Model Detail, Device Os App Version)</small>
                                                    <div>
                                                        <b><small>Date &amp; Time</small></b>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='row my-3 justify-content-between'>
                                            <div className='col-lg-3 col-2'>
                                                <img src={publicPath + "/assets/images/thumbnail.png"} className="img-fluid"></img>
                                            </div>
                                            <div className="col-9">
                                                <div className='devicePara'>
                                                    <small>Device Name(Model Detail, Device Os App Version)</small>
                                                    <div>
                                                        <b><small>Date &amp; Time</small></b>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                */}


            </div>

        </>
    );

}

export default DashboardStats;