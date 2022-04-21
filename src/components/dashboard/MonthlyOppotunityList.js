import { useState, useEffect } from "react";
import axios from "axios";
import { useAuthHeader } from 'react-auth-kit';

import { API_ENDPOINT } from "../../common/Constants";

function MonthlyOppotunityList() {
    const authHeader = useAuthHeader();
    const [dashboardSalesStatsLoader, setDashboardSalesStatsLoader] = useState(false);
    const [dashboardSalesStats, setDashboardSalesStats] = useState([]);

    useEffect(() => {
        fetchDashboardSalesStatsData();
    }, []);

    /* SALES LIST */
    async function fetchDashboardSalesStatsData() {
        setDashboardSalesStatsLoader(true);
        let postData = {
            test: null
        };

        try {
            const res = await axios.post(API_ENDPOINT + "orgzit/oppotunity", postData, { headers: { Authorization: authHeader() } });
            setDashboardSalesStatsLoader(false);
            setDashboardSalesStats(res.data.data);

        } catch (error) {
            console.error("error ", error);
            setDashboardSalesStatsLoader(false);
        }
    }
    return (
        <>
            <div className="col-2 p-3 mb-2 bg-light text-black text-left border admDashBoardSalesMonthList" id="admDashBoardSalesMonthList">

                <div className="tableFilterPanel">
                    <h2>Monthly Oppotunity List</h2>
                    <span className="wiseFilter">
                        <select >
                            <option name="">Select Filter</option>
                            <option name="d">Daily</option>
                            <option name="w">Weekly</option>
                            <option name="m">Monthly</option>
                        </select>
                    </span>
                </div>
                <div className="table-responsive">
                    <table className="table table-sm">
                        <thead>
                            <tr><td colSpan="6"></td></tr>
                            <tr>
                                <td>#</td>
                                <td>Created Date</td>
                                <td>Oppurtunity Location</td>
                                <td>Oppurtunity Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            {dashboardSalesStatsLoader ? (<tr><td colSpan="6" align="center">Loading...</td></tr>) : null}
                            {dashboardSalesStats.length > 0 && dashboardSalesStats.map((row, index) =>
                                <tr key={index}>
                                    <td>{row.id}</td>
                                    <td>{row.createdDate}</td>
                                    <td>{row.source}</td>
                                    <td>{row.stage}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default MonthlyOppotunityList;