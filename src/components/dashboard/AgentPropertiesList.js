import { useState, useEffect } from "react";
import axios from "axios";
import { useAuthHeader } from 'react-auth-kit';
import { Link } from 'react-router-dom';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import 'react-calendar/dist/Calendar.css';
import { API_ENDPOINT } from "../../common/Constants";
import moment from 'moment';
import Modal from 'react-bootstrap/Modal';

function AgentPropertiesList() {
    let publicPath = process.env.PUBLIC_URL;
    const authHeader = useAuthHeader();
    const startOfMonth = moment().startOf('month').format('YYYY-MM-DD');
    const endOfMonth = moment().endOf('month').format('YYYY-MM-DD');
    const [dateRange, onChangeDateRange] = useState([new Date(startOfMonth), new Date(endOfMonth)]);
    const [dashboardSalesStatsLoader, setDashboardSalesStatsLoader] = useState(false);
    const [dashboardSalesStats, setDashboardSalesStats] = useState([]);

    useEffect(() => {
        fetchDashboardSalesStatsData();
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
    async function fetchDashboardSalesStatsData() {
        setDashboardSalesStatsLoader(true);
        let postData = {
            test: null,
            start_date: dateRange[0],
            end_date: dateRange[1]
        };
        try {
            const res = await axios.post(API_ENDPOINT + "orgzit/properties", postData, { headers: { Authorization: authHeader() } });
            setDashboardSalesStatsLoader(false);
            setDashboardSalesStats(res.data.data);

        } catch (error) {
            // console.error("error ", error);
            setDashboardSalesStatsLoader(false);
        }
    }
    return (
        <>
            <div className="PropertiesDashboardBox mt-4">
                <div className="row align-items-center">
                    <div className="col-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-card-image" viewBox="0 0 16 16">
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
        </>
    );
}

export default AgentPropertiesList;