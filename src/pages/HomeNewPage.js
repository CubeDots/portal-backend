import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import MapHome from "../components/MapHome";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import NewsFeedHome from "../components/newsfeed/NewsFeedHome";
//import HomePageCounters from  "../components/HomePageCounters";

const HomePageCounters = React.lazy(() => import("../components/home/HomePageCounters"));
const HomeProjectsComponent = React.lazy(() => import("../components/home/HomeProjectsComponent"));
const projects = '/assets/images/bg/Projects.png';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 0
    }
};
const partnerresponsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Events = [
    {
        "id": "1",
        "link": "https://www.youtube.com/embed/ruNMfzwghJg",
        "title": "Nişantaşı Koru events"
    },
    {
        "id": "2",
        "link": "https://www.youtube.com/embed/wThGZbaa9ak",
        "title": "Nişantaşı Koru events"
    },
    {
        "id": "3",
        "link": "https://www.youtube.com/embed/bkIwFsP8K2c",
        "title": "AcarBlu event "
    },
    {
        "id": "4",
        "link": "https://www.youtube.com/embed/AeX2ft3UpeQ",
        "title": "Avrupa Konutları Yamanevler event"
    },
    {
        "id": "5",
        "link": "https://www.youtube.com/embed/XeWXagXFcAA",
        "title": "Alya 4 Mevsim events"
    },
    {
        "id": "6",
        "link": "https://www.youtube.com/embed/deQcpoCuHYA",
        "title": "Alya 4 Mevsim events"
    }
];
const aboutBg = '/assets/images/bg/Aboutus.png';
const testimonialBg = '/assets/images/bg/Lorem.png';


function HomePage(props) {
    let publicPath = process.env.PUBLIC_URL;

    const [securityCode, setSecurityCode] = useState(null);
    const genRandomString = () => {
        console.log("genRandomString");
        var text = "";
        var length = 6;
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        setSecurityCode(text);
        return text;
    }

    useEffect(() => {
        genRandomString();
    }, [])
    return (
        <>

            {/* <!------------------banner--------------------> */}
            <div className="banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="bannerContent">
                                <h2>The most innovative approach to make real estate sales easier and more efficient.</h2>
                                <p>Join our global network to work with the top developers in the Turkish real estate market. </p>
                                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Become Our Partner</a>
                                <div className="bannerServices">
                                    <div className="row">
                                        <div className="col">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="73" height="80.032" viewBox="0 0 73 80.032">
                                                <g id="Financial_consultancy_support_" data-name="Financial consultancy support   " transform="translate(-16 -16)">
                                                    <path id="Path_19" data-name="Path 19" d="M144,232.006V217.334A1.334,1.334,0,0,0,142.669,216h-5.336A1.334,1.334,0,0,0,136,217.334v14.673h2.668V218.668h2.668v13.339Z" transform="translate(-101.888 -166.653)" fill="#e65400" />
                                                    <path id="Path_20" data-name="Path 20" d="M272,244.008V225.334A1.334,1.334,0,0,0,270.669,224h-5.335A1.334,1.334,0,0,0,264,225.334v18.674h2.668v-17.34h2.668v17.34Z" transform="translate(-210.568 -173.319)" fill="#e65400" />
                                                    <path id="Path_21" data-name="Path 21" d="M208,217.344v-24.01A1.334,1.334,0,0,0,206.669,192h-5.335A1.334,1.334,0,0,0,200,193.334v21.342h2.668V194.668h2.668v22.676Z" transform="translate(-156.228 -146.655)" fill="#e65400" />
                                                    <path id="Path_22" data-name="Path 22" d="M336,206.673V193.334A1.334,1.334,0,0,0,334.669,192h-5.335A1.334,1.334,0,0,0,328,193.334v14.673h2.668V194.668h2.668v12Z" transform="translate(-264.908 -146.655)" fill="#e65400" />
                                                    <path id="Path_23" data-name="Path 23" d="M400,165.342V145.334A1.334,1.334,0,0,0,398.669,144h-5.335A1.334,1.334,0,0,0,392,145.334v20.008h2.668V146.668h2.668v18.674Z" transform="translate(-320.112 -106.658)" fill="#e65400" />
                                                    <path id="Path_24" data-name="Path 24" d="M116.392,46.288a1.334,1.334,0,0,0,1.887,0l11.011-11.011,11.064,12.294a1.334,1.334,0,0,0,.956.441h.035a1.334,1.334,0,0,0,.943-.391l17.731-17.731V33.34a1.334,1.334,0,0,0,1.334,1.334h5.336a1.334,1.334,0,0,0,1.334-1.334V17.334A1.334,1.334,0,0,0,166.689,16H150.682a1.334,1.334,0,0,0-1.334,1.334v5.336A1.334,1.334,0,0,0,150.682,24h3.449L141.4,36.739,130.332,24.445a1.334,1.334,0,0,0-1.935-.051L112.39,40.4a1.334,1.334,0,0,0,0,1.886Zm12.9-19.014,11.064,12.294a1.334,1.334,0,0,0,1.935.051l16.006-16.006a1.334,1.334,0,0,0-.943-2.277h-5.335V18.668h13.339V32.006h-2.668V26.671a1.334,1.334,0,0,0-2.277-.943L141.4,44.742,130.332,32.448a1.334,1.334,0,0,0-.956-.441h-.035a1.334,1.334,0,0,0-.943.391L117.335,43.459l-2.115-2.115Z" transform="translate(-86.797)" />
                                                    <path id="Path_25" data-name="Path 25" d="M26.981,320.917v-2.668h3.66a1.281,1.281,0,0,0,1.22-1.334V313.42c12.105,12.147,30.816,11.71,42.435-.992l13.335-14.577a5.464,5.464,0,0,0,.379-6.754,4.412,4.412,0,0,0-6.086-1.236,4.685,4.685,0,0,0-3.835-2.374,4.619,4.619,0,0,0-3.972,2.09l-.517.759a5.2,5.2,0,0,0-.846-.579,4.833,4.833,0,0,0-4.1-.273,5.449,5.449,0,0,0-3.019,3.044L62.561,300a5.054,5.054,0,0,0-2.025-.425H45.789L43.706,297.3a9.242,9.242,0,0,0-11.844-1.736v-1.322a1.281,1.281,0,0,0-1.22-1.334h-3.66v-1.334a1.281,1.281,0,0,0-1.22-1.334H16v2.668h8.541v26.677H16v2.668h9.761A1.281,1.281,0,0,0,26.981,320.917Zm52.141-30.4a2.47,2.47,0,0,1,.935,1.174L70.376,302.27a20.961,20.961,0,0,1-4.35,3.638l10.049-14.738A2.184,2.184,0,0,1,79.123,290.513Zm-11.26,3.109A2.91,2.91,0,0,1,69.474,292a2.581,2.581,0,0,1,2.189.146,2.789,2.789,0,0,1,.478.333l-6.868,10.074a6.037,6.037,0,0,0-.673-1ZM41.98,299.184l2.44,2.668a1.17,1.17,0,0,0,.863.391H60.535a3.348,3.348,0,0,1,0,6.669H45.284v2.668H60.535a5.272,5.272,0,0,0,4.02-1.92,23.022,23.022,0,0,0,7.546-5.5l10.649-11.642a2.1,2.1,0,0,1,3.155,0,2.6,2.6,0,0,1,0,3.45L72.571,310.542c-11.027,12.055-28.906,12.055-39.933,0l-.776-.848V298.821A6.964,6.964,0,0,1,41.98,299.184Zm-12.559-3.611v20.008h-2.44V295.573Z" transform="translate(0 -226.218)" />
                                                </g>
                                            </svg>

                                            <p>Financial consultancy support</p>
                                        </div>
                                        <div className="col">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="73" height="79.267" viewBox="0 0 73 79.267">
                                                <g id="Legal_support_" data-name="Legal support " transform="translate(-11.739 0)">
                                                    <path id="Path_12" data-name="Path 12" d="M133.432,46.94a8.316,8.316,0,1,0-8.316,8.316A8.325,8.325,0,0,0,133.432,46.94Zm-14.55,0a6.235,6.235,0,1,1,6.234,6.235A6.242,6.242,0,0,1,118.882,46.94Z" transform="translate(-88.992 -33.265)" fill="#e65400" />
                                                    <path id="Path_13" data-name="Path 13" d="M154.45,73.806l-3.337,3.954L149.846,76l-1.687,1.219,2.828,3.915,5.054-5.99Z" transform="translate(-115.837 -63.566)" fill="#e65400" />
                                                    <path id="Path_14" data-name="Path 14" d="M64.364,181.5H83.076v2.081H64.364Z" transform="translate(-45.324 -153.305)" fill="#e65400" />
                                                    <path id="Path_15" data-name="Path 15" d="M64.364,219.5H83.076v2.081H64.364Z" transform="translate(-45.324 -185.402)" fill="#e65400" />
                                                    <path id="Path_16" data-name="Path 16" d="M64.364,256.438H83.076v2.081H64.364Z" transform="translate(-45.324 -216.602)" fill="#e65400" />
                                                    <path id="Path_17" data-name="Path 17" d="M64.364,293.53H74.752v2.081H64.364Z" transform="translate(-45.324 -247.932)" fill="#e65400" />
                                                    <path id="Path_18" data-name="Path 18" d="M82.175,65.756,76.882,62.53l-1.137,2,5.293,3.226a3.135,3.135,0,0,1,1.051,4.2,2.909,2.909,0,0,1-4.055,1.089L63,63.885l3-5.29,7.813,4.763,1.137-2-7.836-4.777a4.057,4.057,0,0,0,.2-2.587,3.919,3.919,0,0,0-1.76-2.418,3.681,3.681,0,0,0-2.9-.42,3.763,3.763,0,0,0-1.6.9V44.376a4.6,4.6,0,0,0,0-4.381V0H23.605L11.739,12.314V41.966h2.242V13.956h11.21V2.323h33.63v35.6l-9.175-5.593a4.23,4.23,0,0,0-5.9,1.583,4.573,4.573,0,0,0-.457,3.383,4.455,4.455,0,0,0,1.36,2.263L36.573,53.788A4.13,4.13,0,0,0,34,53.656a4.3,4.3,0,0,0-2.632,2.057,4.605,4.605,0,0,0,.012,4.546h-17.4V44.366H11.739V62.581h22.4l5.812,3.543h-12.5v5.343H23.7v7.8H58.074v-7.8H54.338V66.124H48.711a4.571,4.571,0,0,0,.393-3.263c-.024-.095-.051-.188-.081-.28h6.058a4.024,4.024,0,0,0,1.783,4.312,3.681,3.681,0,0,0,2.9.42,3.786,3.786,0,0,0,2.084-1.439L76.9,75.05a5.035,5.035,0,0,0,2.63.744,5.173,5.173,0,0,0,4.494-2.656,5.507,5.507,0,0,0-1.846-7.381ZM22.949,11.634H15.563l7.386-7.665ZM45.682,35.094a2.062,2.062,0,0,1,1.262-.986,1.991,1.991,0,0,1,1.566.227l9.85,6a2.186,2.186,0,0,1,.733,2.93,2.029,2.029,0,0,1-2.828.759l-9.852-6.006a2.12,2.12,0,0,1-.95-1.306,2.192,2.192,0,0,1,.219-1.622ZM58.822,46.36v6.856L53.7,50.1l2.121-3.735a4.147,4.147,0,0,0,1.481.276,4.2,4.2,0,0,0,1.516-.286ZM46.55,40.8l7.306,4.454-8.01,14.1L38.54,54.9ZM34.036,59.82a2.186,2.186,0,0,1-.733-2.93,2.061,2.061,0,0,1,1.262-.986,1.989,1.989,0,0,1,1.565.227l9.851,6.005a2.12,2.12,0,0,1,.952,1.308,2.192,2.192,0,0,1-.219,1.622h0a2.062,2.062,0,0,1-1.262.986,1.99,1.99,0,0,1-1.566-.227ZM52.1,68.447v3.02H45.014v2.323H55.832v3.155H25.938V73.789H42.754V71.466H29.694v-3.02Zm-4.159-8.189,1.928-3.394,5.568,3.394ZM51,54.861l1.564-2.755,6.143,3.734L57.14,58.6Zm9.159,9.449a1.574,1.574,0,0,1-.964.753A1.52,1.52,0,0,1,58,64.89a1.669,1.669,0,0,1-.56-2.237l4.825-8.5a1.574,1.574,0,0,1,.964-.753,1.519,1.519,0,0,1,1.2.173,1.619,1.619,0,0,1,.727,1,1.675,1.675,0,0,1-.167,1.237Z" />
                                                </g>
                                            </svg>
                                            <p>Legal support</p>
                                        </div>
                                        <div className="col">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="73" height="67.016" viewBox="0 0 73 67.016">
                                                <g id="Multilingual_support_" data-name="Multilingual support " transform="translate(0 0)">
                                                    <g id="XMLID_969_" transform="translate(0 0)">
                                                        <path id="XMLID_1003_" d="M258.238,55.956a1.238,1.238,0,1,0,0,2.476h4.069a13.576,13.576,0,0,0,2.594,7.946,11.112,11.112,0,0,1-6.384,3.08,1.238,1.238,0,0,0,.153,2.466,1.252,1.252,0,0,0,.156-.01,13.579,13.579,0,0,0,7.706-3.668,13.579,13.579,0,0,0,7.706,3.668,1.252,1.252,0,0,0,.156.01,1.238,1.238,0,0,0,.152-2.466,11.111,11.111,0,0,1-6.384-3.08,13.577,13.577,0,0,0,2.594-7.946h4.069a1.238,1.238,0,0,0,0-2.476h-7.055V52.738a1.238,1.238,0,1,0-2.476,0v3.218Zm8.293,8.417a11.1,11.1,0,0,1-1.748-5.942h3.5A11.1,11.1,0,0,1,266.531,64.373Z" transform="translate(-218.279 -45.126)" fill="#e65400" />
                                                        <path id="XMLID_1023_" d="M65.438,0h-11.4a1.371,1.371,0,0,0-1.426,1.309,1.371,1.371,0,0,0,1.426,1.309h11.4a4.535,4.535,0,0,1,4.71,4.325V28.137a4.535,4.535,0,0,1-4.711,4.324,1.371,1.371,0,0,0-1.426,1.309v5.538l-8.336-6.534a1.5,1.5,0,0,0-.926-.313H29.8a4.535,4.535,0,0,1-4.71-4.325V6.942A4.535,4.535,0,0,1,29.8,2.618h11.4a1.371,1.371,0,0,0,1.426-1.309A1.371,1.371,0,0,0,41.205,0H29.8c-4.17,0-7.562,3.114-7.562,6.942V23.56H7.562C3.392,23.56,0,26.675,0,30.5V51.7a7.141,7.141,0,0,0,6.136,6.819v7.192A1.307,1.307,0,0,0,6.965,66.9a1.533,1.533,0,0,0,.6.12,1.5,1.5,0,0,0,.926-.313l10.288-8.064H43.2c4.17,0,7.562-3.114,7.562-6.942V35.079h3.466l10.288,8.064a1.5,1.5,0,0,0,.926.313,1.533,1.533,0,0,0,.6-.12,1.307,1.307,0,0,0,.829-1.189V34.955A7.141,7.141,0,0,0,73,28.137V6.942C73,3.114,69.608,0,65.438,0ZM25.4,36.585l2.825,6.871H22.552ZM47.906,51.7a4.535,4.535,0,0,1-4.71,4.325H18.25a1.5,1.5,0,0,0-.926.313L8.988,62.869V57.33a1.371,1.371,0,0,0-1.426-1.309A4.535,4.535,0,0,1,2.852,51.7V30.5a4.535,4.535,0,0,1,4.71-4.325h14.68v1.958A6.6,6.6,0,0,0,24.115,32.7a1.646,1.646,0,0,0-.369.52l-.013.03-6.1,14.711a1.279,1.279,0,0,0,.825,1.689,1.467,1.467,0,0,0,1.84-.757l1.17-2.821H29.3l1.158,2.817a1.428,1.428,0,0,0,1.334.847,1.536,1.536,0,0,0,.5-.085,1.28,1.28,0,0,0,.83-1.687L27.719,34.808a8.167,8.167,0,0,0,2.084.27h18.1Z" transform="translate(0 0)" />
                                                        <path id="XMLID_1025_" d="M325.238,2.476a1.238,1.238,0,0,0,1.238-1.238,1.238,1.238,0,1,0-2.113.875A1.247,1.247,0,0,0,325.238,2.476Z" transform="translate(-277.557 0)" />
                                                    </g>
                                                </g>
                                            </svg>
                                            <p>Multilingual support</p>
                                        </div>
                                        <div className="col">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="73.878" height="59.016" viewBox="0 0 73.878 59.016">
                                                <g id="Marketing_materials_" data-name="Marketing materials " transform="translate(0 -51.5)">
                                                    <g id="Group_1" data-name="Group 1" transform="translate(0 51.5)">
                                                        <path id="Path_8" data-name="Path 8" d="M67.313,75.164H46.318V54.025A2.528,2.528,0,0,0,43.793,51.5H15.077a1.082,1.082,0,0,0,0,2.164H43.793a.361.361,0,0,1,.361.361V96.736a.361.361,0,0,1-.361.361H2.525a.361.361,0,0,1-.361-.361V54.025a.361.361,0,0,1,.361-.361h7.7a1.082,1.082,0,0,0,0-2.164h-7.7A2.528,2.528,0,0,0,0,54.025V96.736a2.528,2.528,0,0,0,2.525,2.525H30.157v4.69a6.573,6.573,0,0,0,6.565,6.565h30.59a6.573,6.573,0,0,0,6.565-6.565V81.73A6.573,6.573,0,0,0,67.313,75.164Zm4.4,28.787a4.406,4.406,0,0,1-4.4,4.4H36.723a4.406,4.406,0,0,1-4.4-4.4v-4.69h2.164v4.4a2.528,2.528,0,0,0,2.525,2.525H67.025a2.528,2.528,0,0,0,2.525-2.525v-3.008a1.082,1.082,0,0,0-2.164,0v3.008a.361.361,0,0,1-.361.361H37.011a.361.361,0,0,1-.361-.361v-4.4h7.143a2.528,2.528,0,0,0,2.525-2.525V81.657H67.025a.361.361,0,0,1,.361.361V95.682a1.082,1.082,0,0,0,2.164,0V82.018a2.528,2.528,0,0,0-2.525-2.525H46.318V77.329H67.313a4.406,4.406,0,0,1,4.4,4.4Z" transform="translate(0 -51.5)" />
                                                        <path id="Path_9" data-name="Path 9" d="M342.531,305.646l-5.836-3.413a1.747,1.747,0,0,0-1.769-.007,1.786,1.786,0,0,0-.893,1.546V310.6a1.781,1.781,0,0,0,2.663,1.539h0l5.836-3.413a1.793,1.793,0,0,0,0-3.078Zm-6.334,4.275v-5.472l4.678,2.736Z" transform="translate(-285.833 -265.845)" fill="#e65400" />
                                                        <path id="Path_10" data-name="Path 10" d="M30,83.448v35.208a1.95,1.95,0,0,0,1.948,1.948H65.713a1.95,1.95,0,0,0,1.948-1.948V83.448A1.95,1.95,0,0,0,65.713,81.5H31.948A1.95,1.95,0,0,0,30,83.448Zm2.164,34.991V108.8l8.069-6.29c.083-.083,16.617,15.934,16.679,15.935Zm27.876,0-3.365-3.225,8.821-6.342v9.568ZM65.5,83.664v22.541l-10.41,7.485-13.3-12.745A2.221,2.221,0,0,0,38.9,100.8l-6.738,5.253V83.664Z" transform="translate(-25.671 -77.171)" />
                                                        <path id="Path_11" data-name="Path 11" d="M153.911,149.531a5.411,5.411,0,1,0-5.411-5.411A5.417,5.417,0,0,0,153.911,149.531Zm0-8.658a3.247,3.247,0,1,1-3.247,3.247A3.25,3.25,0,0,1,153.911,140.874Z" transform="translate(-127.072 -126.156)" fill="#e65400" />
                                                    </g>
                                                </g>
                                            </svg>
                                            <p>Marketing materials</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 bannerSlider">
                            <div className="">
                                <div id="carouselExampleControls" interval="10000" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img alt="" src={publicPath + "/assets/images/home/01.jpg"} className="img-fluid" />
                                        </div>
                                        <div className="carousel-item">
                                            <img alt="" src={publicPath + "/assets/images/home/02.jpg"} className="img-fluid" />
                                        </div>
                                        <div className="carousel-item">
                                            <img alt="" src={publicPath + "/assets/images/home/03.jpg"} className="img-fluid" />
                                        </div>
                                        <div className="carousel-item">
                                            <img alt="" src={publicPath + "/assets/images/home/04.jpg"} className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="carouselNav">
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true">
                                                <img alt="" src={publicPath + "/assets/images/left.svg"} />
                                            </span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true">
                                                <img alt="" src={publicPath + "/assets/images/right.svg"} />
                                            </span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-------------------projects------------------------> */}
            <div className="projects">
                <div className="container">
                    <div className="counter">
                        <div className="container">
                            <HomePageCounters />
                        </div>
                    </div>
                </div>
                <MapHome />
                <div className="projectsCardSection">
                    <div className="container">
                        <div className="headingSection">
                            {/* <small>Lorem ipsum dolor sit amet</small>
                        <h2>Projects</h2> */}
                            <Link to="/projects" className="viewAll">view all
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </Link>
                        </div>
                        <div className="row ">
                            <div className="col-md-2">
                                <div className="projectSideImg">
                                    <img src={publicPath + projects} alt="" />
                                </div>
                            </div>
                            <div className="col-md-10">
                               <HomeProjectsComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*-------------------------partners----------------------*/}
            <div className="partners">
                <div className="container">
                    <Carousel responsive={partnerresponsive} autoPlay={props.deviceType !== "mobile" ? true : false} removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]} infinite={true}>
                        <div className="partnersLogo dap">
                            <img alt="" src={publicPath + "/assets/images/dap.png"} className="img-fluid" />
                        </div>
                        <div className="partnersLogo artas">
                            <img alt="" src={publicPath + "/assets/images/artas.png"} className="img-fluid" />
                        </div>
                        <div className="partnersLogo acarlar">
                            <img alt="" src={publicPath + "/assets/images/acarlar.png"} className="img-fluid" />
                        </div>
                        <div className="partnersLogo emlak_konut">
                            <img alt="" src={publicPath + "/assets/images/emlak_konut.png"} className="img-fluid" />
                        </div>
                    </Carousel>

                </div>
            </div>
            {/* <!--------------------newfeed------------------------> */}
            <div className="newsFeed">
                <div className="container">
                    <div className="row mainnewscontent">
                        <div className="col-md-1">
                            <img src={publicPath + "/assets/images/bg/Updates.png"} className="bgImage" alt="" />
                        </div>
                        <div className="col-md-11">
                            <div className="headingSection">
                                <small>Lorem ipsum dolor sit amet</small>
                                <h2>Updates</h2>
                                <Link to="/updates" className="viewAll">view all
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </Link>
                            </div>
                            <NewsFeedHome />

                        </div>
                    </div>
                </div>
            </div>
            {/*----------------------testimonial----------------------*/}
            <div className="testimonial" ref={(node) => {
                if (node) {
                    node.style.setProperty("background", `url(${publicPath + testimonialBg})`, "important");
                    node.style.setProperty("background-repeat", `no-repeat`, "important");
                    node.style.setProperty("background-size", `50%`, "important");
                    node.style.setProperty("background-position", `left 86%`, "important");
                }
            }}>
                <div className="container">
                    <div className="headingSection">
                        <small>Client Feedback &#38; Reviews</small>
                        <h2>TESTIMONIAL</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div id="testimonialcarousel" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="testimonial-block">
                                            <div className="row justify-content-center">
                                                <div className="col-md-6">
                                                    <div className="testimonial-block_user_info">
                                                        <h3 className="testimonial-block_user_info_name">Baraa Badenjki</h3>
                                                        <h5>CEO of Imtilak Real Estate</h5>
                                                        <div className="testimonial-block_content">
                                                            <p>We have a successful previous experience with Cubedots, we’ve worked together on a great project in the Asian side, and we are looking forward to working with them
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16">
                                                                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                                                </svg>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="testimonial-block_user">
                                                        <div className="testimonial-block_user_image">
                                                            <iframe width="560" height="315" src="https://www.youtube.com/embed/usDmd8nBcv0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="testimonial-block">
                                            <div className="row justify-content-center">
                                                <div className="col-md-6">
                                                    <div className="testimonial-block_user_info">
                                                        <h3 className="testimonial-block_user_info_name">Ikram Abdellah</h3>
                                                        <h5>Fortune Group</h5>
                                                        <div className="testimonial-block_content">
                                                            <p>With Cubedots, you can take a look at the project from your own home. Thank you Cubedots for your help and for making our lives easier
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16">
                                                                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                                                </svg>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="testimonial-block_user">
                                                        <div className="testimonial-block_user_image">
                                                            <iframe src="https://www.youtube.com/embed/2qdK0pgnFZ8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="testimonial-block">
                                            <div className="row justify-content-center">
                                                <div className="col-md-6">
                                                    <div className="testimonial-block_user_info">
                                                        <h3 className="testimonial-block_user_info_name">Pouria Jadidi</h3>
                                                        <h5>Manager of Trend Turnkey</h5>
                                                        <div className="testimonial-block_content">
                                                            <p>If you think that selling a property online is a challenge, now is the time for you to meet Cubedots! My first online sale experience was accomplished with Cubedots’s one-click solution system
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16">
                                                                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                                                </svg>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="testimonial-block_user">
                                                        <div className="testimonial-block_user_image">
                                                            <iframe src="https://www.youtube.com/embed/mTYKdpxgzJs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="testimonial-block">
                                            <div className="row justify-content-center">
                                                <div className="col-md-6">
                                                    <div className="testimonial-block_user_info">
                                                        <h3 className="testimonial-block_user_info_name">Murat Binici</h3>
                                                        <h5>General Manager of Investmentime</h5>
                                                        <div className="testimonial-block_content">
                                                            <p>Cubedots improved our business quality with its online-selling feature. They help us reach our clients from China, Iran, and GCC countries.
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16">
                                                                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                                                </svg>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="testimonial-block_user">
                                                        <div className="testimonial-block_user_image">
                                                            <iframe src="https://www.youtube.com/embed/2qJqQTmZpsE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carouselNav">
                                    <button className="carousel-control-prev" type="button" data-bs-target="#testimonialcarousel" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"><img alt="" src={publicPath + "/assets/images/left.svg"} /></span>
                                        <span className="visually-hidden">prev</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#testimonialcarousel" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"><img alt="" src={publicPath + "/assets/images/right.svg"} /></span>
                                        <span className="visually-hidden">next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--------------------events------------------------> */}
            <div className="events">
                <div className="container-fluid">
                    <div className="row mainnewscontent">
                        <div className="col-md-2 text-center">
                            <img src={publicPath + "/assets/images/bg/events.png"} className="bgImage" alt="" />
                        </div>
                        <div className="col-md-10">
                            <div className="headingSection">
                                <small>Lorem ipsum dolor sit amet</small>
                                <h2>Events</h2>
                            </div>
                            <Carousel
                                ssr
                                partialVisbile
                                itemClass="image-item"
                                responsive={responsive}
                                autoPlay={props.deviceType !== "mobile" ? true : false}
                            >
                                {Events.slice(0, 5).map((image, index) => {
                                    return (
                                        <div key={index} className="eventContent">
                                            <iframe draggable={false} style={{ width: "100%" }} src={image.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                            <p>{image.title}</p>
                                        </div>
                                    );
                                })}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-------------------culibrary------------------------> */}
            <div className="culibrary">
                <div className="container-fluid">
                    <div className="row align-items-end">
                        <div className="col-md-4">
                            <div className="culibraryRight">
                                <img src={publicPath + "/assets/images/Cu-library.png"} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="culibraryContent">
                                <div className="headingSection">
                                    <small>Lorem ipsum dolor sit amet</small>
                                    <h2>CuLibrary</h2>
                                </div>
                                <p>With CuLibrary you can get access to insights by experts in the field and in-depth tutorials regarding a smooth experience of Cubedots app.</p>
                                <Link to="/culibrary" className="btn">Culibrary</Link>
                                <button className="btn">Button</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-------------------aboutus------------------------> */}
            <div className="aboutus" ref={(node) => {
                if (node) {
                    node.style.setProperty("background", `url(${publicPath + aboutBg})`, "important");
                    node.style.setProperty("background-repeat", `no-repeat`, "important");
                    node.style.setProperty("background-size", `50%`, "important");
                    node.style.setProperty("background-position", `left 86%`, "important");
                }
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="aboutVideoImg">
                                <div className="aboutImg">
                                    <img src={publicPath + "/assets/images/newsfeed.jpeg"} className="img-fluid" alt="" />
                                </div>
                                <div className="aboutVideo">
                                    <div id="aboutcarouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src={publicPath + "/assets/images/home/01.jpg"} className="img-fluid" alt="" />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={publicPath + "/assets/images/home/02.jpg"} className="img-fluid" alt="" />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={publicPath + "/assets/images/home/03.jpg"} className="img-fluid" alt="" />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={publicPath + "/assets/images/home/04.jpg"} className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div className="carouselNav">
                                            <button className="carousel-control-prev" type="button" data-bs-target="#aboutcarouselExampleControls" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true">
                                                    <img src={publicPath + "/assets/images/left.svg"} alt="" />
                                                </span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#aboutcarouselExampleControls" data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true">
                                                    <img src={publicPath + "/assets/images/right.svg"} alt="" />
                                                </span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="aboutContent">
                                <small>who we are</small>
                                <h2>About us</h2>
                                <p>Cubedots is a proptech company based in Turkey, the UK and India.
                                    We are here to revolutionize real estate sales, marketing and management.</p><p>
                                    With state-of-the-art technologies and innovative interactive 3D tools, we are writing a new chapter in realty sales. We are creating Turkey’s first community of real estate agents and empowering them as our partners in this evolutionary shift. We hope to be the efficient bridge between the best-in-class projects worldwide and our partners.</p>
                                <p>Let us create this history together. Let us move shoulder to shoulder in this exciting journey.</p>
                                <Link to="/about">Read More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Request Modal --> */}
            <div className="modal fade enrollmentModal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div className="row align-items-center">
                                <div className="col-md-4">
                                    <div className="enrollmentModalleftImg">
                                        <img src={publicPath + "/assets/images/support.png"} className="img-fluid" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="enrollmentContent">
                                        <h4>Request Enrollment</h4>
                                        <form>
                                            <div className="row">
                                                <div className="col">
                                                    <input className="form-control" type="text" placeholder="First Name" />
                                                </div>
                                                <div className="col">
                                                    <input className="form-control" type="text" placeholder="Last Name" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <input className="form-control" type="text" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <input className="form-control" type="text" placeholder="City" />
                                                </div>
                                                <div className="col">
                                                    <input className="form-control" type="text" placeholder="Country" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <input className="form-control" type="text" placeholder="+91" />
                                                </div>
                                                <div className="col">
                                                    <input className="form-control" type="text" placeholder="Mobile No." />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="captchInput">
                                                    <input type="text" name="" placeholder="Security Code" autoComplete="off" />
                                                    <span className="captha_code mr-sm-2" id="notcp">{securityCode}</span>
                                                    <button type="button" onClick={() => genRandomString()} className="btn btn-default">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-repeat" viewBox="0 0 16 16">
                                                            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                                                            <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <input type="submit" className="btntheme" value="Submit" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;