import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuthHeader } from 'react-auth-kit';
import 'react-calendar/dist/Calendar.css';
import { API_ENDPOINT } from "../../common/Constants";
import moment from 'moment';

function NotificationDataList() {
    const authHeader = useAuthHeader();
    const startOfMonth = moment().startOf('month').format('YYYY-MM-DD');
    const endOfMonth = moment().endOf('month').format('YYYY-MM-DD');
    const [dateRange, onChangeDateRange] = useState([new Date(startOfMonth), new Date(endOfMonth)]);
    const [dashboardSalesStatsLoader, setDashboardSalesStatsLoader] = useState(false);
    const [dashboardSalesStats, setDashboardSalesStats] = useState([]);
    const [dropdownValue, setDropdownValue] = useState('future_today');

    useEffect(() => {
        //console.log("dateRange",dateRange);
        if (dropdownValue) {
            fetchDashboardAppointmentStatsData();
        }
    }, [dropdownValue]);

    const [fitems] = React.useState([                
        { lable: "Today", value: "today" },
        { lable: "Tomorrow", value: "tomorrow" },
        { lable: "Yesterday", value: "yesterday" },
        { lable: "This Week", value: "thisweek" },
        { lable: "Next Week", value: "nextweek" },
        { lable: "Last Week", value: "lastweek" },
        { lable: "This Month", value: "thismonth" },
        { lable: "Next Month", value: "nextmonth" },
        { lable: "Last Month", value: "lastmonth" }              
    ]);

    const handleChange = (event) => {
        //console.log(event.target.value);
        setDropdownValue(event.target.value);
    }

    /* SALES LIST */
    async function fetchDashboardAppointmentStatsData() {
        setDashboardSalesStatsLoader(true);
        //console.log("dateRange ",dateRange, dropdownValue );
        let postData = {
            start_date: dateRange[0],
            end_date: dateRange[1],
            ftype: dropdownValue
        };

        try {
            const res = await axios.post(API_ENDPOINT + "orgzit/notifications", postData, { headers: { Authorization: authHeader() } });
            setDashboardSalesStatsLoader(false);
            setDashboardSalesStats(res.data.data);

        } catch (error) {
            //console.error("error ", error);
            setDashboardSalesStatsLoader(false);
        }
    }

    return (
        <>

            <div className="appoinmentAgentContent">
                <div className="row align-items-baseline">
                    <div className="col-6">
                        <div>
                            <h6>Notifications</h6>
                        </div>
                    </div>
                    <div className="col-6 text-end">
                            <select name="dfilter" id="dfilter" onChange={handleChange}>
                                <option key='0' value='' > Select  </option>
                                {fitems.map(item => (
                                    <option key={item.value} value={item.value} > {item.lable} </option>
                                ))}
                            </select>
                    </div>
                </div>
                {dashboardSalesStatsLoader ? <div className="text-center">Loading...</div> : null}
                {dashboardSalesStats.length > 0 && dashboardSalesStats.map((row, index) =>
                    <div className="notificationBox">
                            <div className="col">
                                <div>
                                <small>{row.source}</small>
                                    <p><small>{row.createdDate} {row.createdTime}</small></p>
                                </div>
                            </div>
                    </div>
                )}
                {/*<div className="text-center">
                    <button className="notificationViewBtn">View All</button>
                </div>*/}
            </div>            
        </>
    );
}

export default NotificationDataList;