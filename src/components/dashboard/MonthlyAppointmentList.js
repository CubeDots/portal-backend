import { useState, useEffect } from "react";
import axios from "axios";
import { useAuthHeader } from 'react-auth-kit';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import 'react-calendar/dist/Calendar.css';
import { API_ENDPOINT } from "../../common/Constants";
import moment from 'moment';
import Modal from 'react-bootstrap/Modal';

function MonthlyAppointmentList() {
    const authHeader = useAuthHeader();
    const startOfMonth = moment().startOf('month').format('YYYY-MM-DD');
    const endOfMonth = moment().endOf('month').format('YYYY-MM-DD');
    const [dateRange, onChangeDateRange] = useState([new Date(startOfMonth), new Date(endOfMonth)]);
    const [dashboardSalesStatsLoader, setDashboardSalesStatsLoader] = useState(false);
    const [dashboardSalesStats, setDashboardSalesStats] = useState([]);

    useEffect(() => {
        fetchDashboardAppointmentStatsData();
        //console.log("dateRange",dateRange);
    }, []);



    /* VIEW DETAILS POPUP CODE */
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const [activeRow, setActiveRow] = useState(null);

    const handleShowModal = (r) => {
        setShowModal(true);
        setActiveRow(r);
    };

    const handleCloseModal = (r) => {
        setShowModal(false);
        setActiveRow(null);
    };
    /* VIEW DETAILS POPUP CODE END */

    /* SALES LIST */
    async function fetchDashboardAppointmentStatsData() {
        setDashboardSalesStatsLoader(true);
        console.log("dateRange ", dateRange);
        let postData = {
            test: null,
            start_date: dateRange[0],
            end_date: dateRange[1]
        };
        try {
            const res = await axios.post(API_ENDPOINT + "orgzit/appointments", postData, { headers: { Authorization: authHeader() } });
            setDashboardSalesStatsLoader(false);
            setDashboardSalesStats(res.data.data);

        } catch (error) {
            console.error("error ", error);
            setDashboardSalesStatsLoader(false);
        }
    }

    return (
        <>
            <div className=" p-3 w-100 mb-2 bg-light text-black text-left border admDashBoardSalesMonthList" id="AppointmentsList">

                <div className="row">
                    <div className="col-md-4">
                        <div>
                            <h2 className="agentDashboardHeading">Appointments</h2>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="dateAndGoBox">
                            <div className="">
                                <div className="wiseFilter">
                                    <DateRangePicker onChange={onChangeDateRange} value={dateRange} format="dd/MM/yyyy" />
                                </div>
                            </div>
                            <div className="ms-2">
                                <div className="wiseFilter">
                                    <button type="button" className=" goBtn" onClick={fetchDashboardAppointmentStatsData}>Go</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="tableFilterPanel">
                    <h2>Monthly Appointments List</h2>
                    <span className="wiseFilter">
                        <DateRangePicker onChange={onChangeDateRange} value={dateRange} />
                    </span>
                    <span className="wiseFilter">
                    <button type="button" className="btn btn-primary" onClick={fetchDashboardAppointmentStatsData}>Go</button>
                    </span>                    
                </div> */}
                <div className="table-responsive">
                    <table className="table table-sm responsive">
                        <thead>
                            <tr><td colSpan="6"></td></tr>
                            <tr>
                                <td>#</td>
                                <td>Appointment Date</td>
                                <td>Appointment Time</td>
                                <td>Appointment Location</td>
                                <td>Appointment Status</td>
                                <td>View</td>
                            </tr>
                        </thead>

                        <tbody>
                            {dashboardSalesStatsLoader ? <tr><td colSpan="6" align="center">Loading...</td></tr> : null}
                            {dashboardSalesStats.length > 0 && dashboardSalesStats.map((row, index) =>
                                <tr key={index}>
                                    <td>{row.id}</td>
                                    <td>{row.createdDate}</td>
                                    <td>{row.createdTime}</td>
                                    <td>{row.source}</td>
                                    <td>{row.stage}</td>
                                    <td>
                                        <button className="btn btn-sm" onClick={() => handleShowModal(row)} >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            )}
                            {!dashboardSalesStatsLoader && dashboardSalesStats.length === 0 ? (<tr><td colSpan="5" align="center"> No data available. </td></tr>) : null}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal show={showModal} onHide={() => handleCloseModal()} backdrop="static" keyboard={false} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header className='p-2' closeButton>
                    <Modal.Title>
                        {activeRow ?
                            <>{'Appointment Detail of '}<strong>{activeRow.id}</strong></>
                            : ''}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {console.log('activeRow', activeRow)}
                    {activeRow ?
                        <div className="table-responsive">
                            <table className="table table-sm">
                                <tbody>
                                    <tr>
                                        <th width="50%">ID</th>
                                        <td  >#{activeRow.id}</td>
                                    </tr>
                                    <tr>
                                        <th>Appointment Date</th>
                                        <td>{activeRow.createdDate}</td>
                                    </tr>
                                    <tr>
                                        <th>Appointment Time</th>
                                        <td>{activeRow.createdTime}</td>
                                    </tr>
                                    <tr>
                                        <th>Location</th>
                                        <td>{activeRow.source}</td>
                                    </tr>
                                    <tr>
                                        <th>Status</th>
                                        <td>{activeRow.stage}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        : 'No data available.'}

                </Modal.Body>
            </Modal>
        </>
    );
}

export default MonthlyAppointmentList;