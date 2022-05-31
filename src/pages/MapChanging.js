import React, { useState, useEffect } from 'react';
import HomeProjectsMapComponent from "../components/home/HomeProjectsMapComponent"
import SecondMap from '../components/mapchanging/SecondMap';
import Dropdown from 'react-bootstrap/Dropdown'
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import { Tabs, Tab, SplitButton } from 'react-bootstrap'
import { Link } from "react-router-dom";

function MapChanging() {
    const [active, setActive] = useState("FirstCard");
    // const [key, setKey] = useState('home');
    const [currentVal, setCurrentVal] = useState("");
    const onClick = (value) => {
        if (value === 1) {
            setCurrentVal("Turkey");
        } else if (value === 2) {
            setCurrentVal("Dubai");
        }
    };
    
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
                <div className='mapDrowpdown'>

                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {currentVal === "" ? "Turkey" : currentVal}
                        </Dropdown.Toggle>
                        {/* <SplitButton
                            menuAlign={{ lg: "left" }}
                            title={currentVal === "" ? "Dropdown" : currentVal}
                        > */}
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => onClick(1)} eventKey={1} > <a class="dropdown-item" href="#"> <h6 className='dropDownMap' onClick={() => setActive("FirstCard")}>Turkey</h6></a></Dropdown.Item>
                            <Dropdown.Item onClick={() => onClick(2)} eventKey={2} > <a class="dropdown-item " href="#"> <h6 className='dropDownMap' onClick={() => setActive("SecondCard")}>Dubai</h6></a></Dropdown.Item>
                        </Dropdown.Menu>
                        {/* </SplitButton> */}
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