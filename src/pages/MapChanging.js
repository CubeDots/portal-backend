import React, { useState, useEffect } from 'react';
import HomeProjectsMapComponent from "../components/home/HomeProjectsMapComponent"
import SecondMap from '../components/mapchanging/SecondMap';
import Dropdown from 'react-bootstrap/Dropdown'
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import { Tabs, Tab } from 'react-bootstrap'
import { Link } from "react-router-dom";

function MapChanging() {
    const [active, setActive] = useState("FirstCard");

    const [state, setState] = useState({
        ip: "",
        countryName: "",
        countryCode: "",
        city: "",
        timezone: ""
    });
    const [countName, setCountName] = useState([]);

    const getGeoInfo = () => {
        axios
            .get("https://ipapi.co/json/")
            .then((response) => {
                let data = response.data;
                setState({
                    ...state,
                    ip: data.ip,
                    countryName: data.country_name,
                    countryCode: data.country_calling_code,
                    city: data.city,
                    timezone: data.timezone
                });
                setCountName(state.countryName);
                //console.log('SetState :: ', state.countryName);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getGeoInfo();
    }, []);
    return (
        <>
            <div>
                <div>
                    <Dropdown>
                        <Dropdown.Toggle className='btntheme' variant="success" id="dropdown-basic">
                            Select Country
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item ><a class="dropdown-item" href="#"> <h6 onClick={() => setActive("FirstCard")}>Tukeky</h6></a></Dropdown.Item>
                            <Dropdown.Item > <a class="dropdown-item " href="#"> <h6 onClick={() => setActive("SecondCard")}>Dubai</h6></a></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    {/* 
                    <Tabs
                        defaultActiveKey="Turkey"
                        transition={false}
                        id="noanim-tab-example"
                        className="">
                        <Tab eventKey="Turkey" title="Turkey">
                            <HomeProjectsMapComponent />
                        </Tab>
                        <Tab eventKey="Dubai" title="Dubai">
                        {<SecondMap />} 
                        </Tab>
                    </Tabs> */}

                    {active === "FirstCard" && <HomeProjectsMapComponent />}
                    {active === "SecondCard" && <SecondMap />}
                </div>
            </div>
        </>
    )
}
export default MapChanging