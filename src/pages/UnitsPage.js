import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'
import _ from 'lodash';
import axios from "axios";
import CurrencyFormat from 'react-currency-format';
import UnitEnquireNowModal from "../components/project-detail/UnitEnquireNowModal";
//import UnitList from '../components/UnitList';
import { useIsAuthenticated } from 'react-auth-kit';

import { API_ENDPOINT } from '../common/Constants';

function UnitsPage() {
    let publicPath = process.env.PUBLIC_URL;
    let navigate = useNavigate();
    let { id } = useParams();
    const isAuthenticated = useIsAuthenticated();

    const [exchangeRatesLoading, setExchangeRatesLoading] = useState(false);
    const [exchangeRates, setExchangeRates] = useState(null);

    const [isEnquireNowModalShow, setIsEnquireNowModalShow] = useState(false);
    const [selectedUnit, setSelectedUnit] = useState({});
    const [searchFormData, setSearchFormData] = useState({ block: '', floor: '', unit_type: '', area: '', price: '' });

    const [currentColumn, setCurrentColumn] = useState('id');
    const [currentSort, setCurrentSort] = useState('default');

    const [unitsLoading, setUnitsLoading] = useState(false);

    const [project, setProject] = useState({});
    const [unitsAll, setUnitsAll] = useState([]);
    const [units, setUnits] = useState([]);

    const [blocks, setBlocks] = useState([]);
    const [floors, setFloors] = useState([]);
    const [unitTypes, setUnitTypes] = useState([]);
    const [areas, setAreas] = useState([]);
    const [prices, setPrices] = useState([]);

    const [areaMin, setAreaMin] = useState(0);
    const [areaMax, setAreaMax] = useState(0);

    const [priceMin, setPriceMin] = useState(0);
    const [priceMax, setPriceMax] = useState(0);
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
      }, []);
    useEffect(() => {
        window.scrollTo({ top:0,left:0,behavior:'smooth'});
        //console.log('unit page loaded')
        fetchUnits();
        fetchExchangeRates();
        // return () => { // ComponentWillUnmount in Class Component
        //     setSearchFormData({ block: '', floor: '', area: '', price: '' });
        // }
        //console.log("searchFormData ", searchFormData);
        // if(searchFormData){
        //     setTimeout(() => {
        //         searchNow();
        //     }, 1000);
        // }
    }, []);



    async function fetchUnits() {
        setUnitsLoading(true);
        try {
            const res = await axios.get(API_ENDPOINT + "projects/units/" + id);
            if (res.data.data) {
                //console.log('res.data.data ', res.data.data.data)
                setUnitsLoading(false);
                let units = res.data.data.data;
                setProject(res.data.project);

                if (units.length) {
                    setUnitsAll(units);
                    setUnits(units);
                    let uniqueBlocks = _.chain(units).map('block').groupBy().keys().reverse().sort(function (a, b) { return a - b }).value();
                    let uniqueFloors = _.chain(units).map('floor').groupBy().keys().reverse().sort(function (a, b) { return a - b }).value();
                    let uniqueUnitTypes = _.chain(units).map('unit_type').groupBy().keys().sort(function (a, b) { return a.charAt(0) - b.charAt(0) }).value();
                    //console.log("uniqueUnitTypes",uniqueUnitTypes);
                    let uniqueAreaMin = _.chain(units).map('built_up_area').minBy().value();
                    let uniqueAreaMax = _.chain(units).map('built_up_area').maxBy().value();
                    let uniquePriceMin = _.chain(units).map('price').minBy().value();
                    let uniquePriceMax = _.chain(units).map('price').maxBy().value();
                    //getArea(uniqueAreaMin,uniqueAreaMax);
                    //console.log('uniq ', uniqueBlocks, uniqueFloors, uniqueAreaMin, uniqueAreaMax, uniquePriceMin, uniquePriceMax);

                    setBlocks(uniqueBlocks);
                    setFloors(uniqueFloors);
                    setUnitTypes(uniqueUnitTypes);
                    setAreas(makeGroupArea(uniqueAreaMin, uniqueAreaMax));
                    setPrices(makeGroupPrice(uniquePriceMin, uniquePriceMax));

                    setAreaMin(uniqueAreaMin);
                    setAreaMax(uniqueAreaMax);

                    setPriceMin(uniquePriceMin);
                    setPriceMax(uniquePriceMax);
                }

            }
        } catch (error) {
            console.error("error ", error);
            setUnitsLoading(false);
        }
    }

    async function fetchExchangeRates() {
        setExchangeRatesLoading(true);
        try {
            const res = await axios.get(API_ENDPOINT + "exchangeRates/latest");
            if (res.data.data) {
                setExchangeRatesLoading(false);
                setExchangeRates(res.data.data);
            }
        } catch (error) {
            console.error("error ", error);
            setExchangeRatesLoading(false);
        }
    }

    function makeGroupArea(min, max) {
        let minarea = min;
        let maxarea = max + 1;
        let tempArea = (maxarea - minarea) / 4 + 1;
        let tempAreaSum = minarea;
        let buildupArea = [];
        for (let i = 1; i <= 4; i++) {
            let mina = tempAreaSum;
            let maxa = i === 4 ? maxarea : tempAreaSum + tempArea;
            buildupArea.push(parseInt(mina) + " - " + parseInt(maxa));
            tempAreaSum = parseInt(tempAreaSum + tempArea);
        }
        //console.log("buildupArea", buildupArea);
        return buildupArea;
    }

    function makeGroupPrice(min, max) {
        let minPrice = min;
        let maxPrice = max + 1;
        let tempPrice = (maxPrice - minPrice) / 4 + 1;
        let tempPriceSum = minPrice;
        let unitPrice = [];
        for (let i = 1; i <= 4; i++) {
            let mina = tempPriceSum;
            let maxa = i === 4 ? maxPrice : tempPriceSum + tempPrice;
            unitPrice.push(parseInt(mina) + " - " + parseInt(maxa));
            tempPriceSum = parseInt(tempPriceSum + tempPrice);
        }
        //console.log("unitPrice", unitPrice);
        return unitPrice;
    }

    // const handleBlocks = (e) => {
    //     console.log('handleBlocks' ,e.target.value);
    //     let filterUnits = unitsAll.filter((item) => {
    //         return item.block === e.target.value
    //     });
    //     console.log("filterUnits" ,unitsAll.length, filterUnits.length);

    //     setUnits(filterUnits);
    // }
    // const handleFloors = (e) => {
    //     console.log('handleFloors' ,e.target.value);

    // }

    const handleChangeBlock = (e) => {
        //e.persist();
        //console.log('handleChangeBlock',e.target.value);
        // setSearchFormData(searchFormData => ({ ...searchFormData, block: e.target.value }));
        // setTimeout(() => {
        //     searchNow();
        // }, 1000);

    }
    const handleChangeFloor = (e) => {
        e.persist();
        //console.log('handleChangeFloor',e.target.value);
        //setSearchFormData(searchFormData => ({ ...searchFormData, floor: e.target.value }));

    }
    const handleChangeUnitType = (e) => {
        e.persist();
        //console.log('handleChangeFloor',e.target.value);
        //setSearchFormData(searchFormData => ({ ...searchFormData, floor: e.target.value }));

    }


    const handleChangeArea = (e) => {
        e.persist();
        //setSearchFormData(searchFormData => ({ ...searchFormData, area: e.target.value }));
    }
    const handleChangePrice = (e) => {
        e.persist();
        //setSearchFormData(searchFormData => ({ ...searchFormData, price: e.target.value }));
    }

    const searchNow = () => {
        //console.log("search ", searchFormData, searchFormData.block);
        const block = document.querySelector('#block').value;
        const floor = document.querySelector('#floor').value;
        const unitType = document.querySelector('#unitType').value;
        const area = document.querySelector('#area').value;
        const price = document.querySelector('#price').value;

        // const block = searchFormData.block ; //document.querySelector('#block').value;
        // const floor = searchFormData.floor; //document.querySelector('#floor').value;
        // const area = searchFormData.area; //document.querySelector('#area').value;
        // const price = searchFormData.price; //document.querySelector('#price').value;
        //console.log('searchNow --', block, floor,unitType, area, prices);

        let areaArray = area ? area.split(' - ') : [areaMin, areaMax];
        let priceArray = price ? price.split(' - ') : [priceMin, priceMax];

        // console.log('searchNow after' ,block,floor,areaArray,priceArray);
        //console.log("unitsAll", unitsAll);
        let filterUnits = unitsAll.filter((item) => {
            return block ? (item.block === block) : true
        })
            .filter((item) => {
                return floor ? (item.floor === floor) : true
            })
            .filter((item) => {
                return unitType ? (item.unit_type === unitType) : true
            })
            .filter((item) => {
                //console.log("item.area ",item.built_up_area);
                return areaArray.length > 0 ? (item.built_up_area >= areaArray[0] && item.built_up_area <= areaArray[1]) : true
            })
            .filter((item) => {
                //console.log("item.price ",item.price);
                return priceArray.length > 0 ? (item.price >= priceArray[0] && item.price <= priceArray[1]) : true
            })
        // console.log("filterUnits" ,unitsAll.length, filterUnits.length);

        setUnits(filterUnits);
    }

    const showEnquireNowModal = (r) => {
        //console.log("showEnquireNowModal clicked");
        setSelectedUnit(r);
        setIsEnquireNowModalShow(true);
    }

    const closeEnquireNowModalModal = () => {
        //console.log("closeEnquireNowModalModal trigger");
        setSelectedUnit(null);
        setIsEnquireNowModalShow(false);
    }

    const onSortChange = (c) => {
        setCurrentColumn(c);
        let nextSort;
        if (currentSort === 'down') nextSort = 'up';
        else if (currentSort === 'up') nextSort = 'down';
        else if (currentSort === 'default') nextSort = 'down';
        // console.log("nextSort",currentSort, "nextSort" ,nextSort);
        setCurrentSort(nextSort);
    };

    function dynamicSort(property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            /* next line works with strings and numbers, 
             * and you may want to customize it to your needs
             */
            // var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            var result = currentSort === 'up' ? a[property] - b[property] : b[property] - a[property];
            return result * sortOrder;
        }
        // return (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0);

    }

    const sortTypes = {
        up: {
            class: 'sort-up',
            fn: (a, b) => a.net_worth - b.net_worth
        },
        down: {
            class: 'sort-down',
            fn: (a, b) => b.net_worth - a.net_worth
        },
        default: {
            class: 'sort',
            fn: (a, b) => a
        }
    };



    const openLogin = () => {
        //console.log("openLogin clicked");
        document.querySelector('#loginButton').click();
    }

    const popover = (currency_symbol, price) => (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Price in {currency_symbol && currency_symbol === 'TL' ? 'TRY to USD' : 'USD to TRY'} </Popover.Header>
            <Popover.Body>
                {currency_symbol && currency_symbol === 'TL' ?
                    <>
                        {/* {exchangeRates.try_to_usd} <br />  */}
                        <strong><CurrencyFormat value={price * exchangeRates.try_to_usd} displayType={'text'} thousandSeparator={true} decimalScale={2} suffix={' USD'} /></strong> Approx.
                    </>
                    :
                    <>
                        {/* {exchangeRates.usd_to_try} <br />  */}
                        <strong><CurrencyFormat value={price * exchangeRates.usd_to_try} displayType={'text'} thousandSeparator={true} decimalScale={2} suffix={' TRY'} /></strong> Approx.
                    </>
                }
            </Popover.Body>
        </Popover>
    );

    if (!isAuthenticated()) {
        return (
            <>

                <div className="container">
                    <div className="row my-5 py-5">
                        <div className="col my-5 text-center">
                            <h4>To view Inventory please <button className="btntheme" onClick={() => openLogin()}>Sign In here</button></h4>
                            <div><br /></div>

                            &nbsp;
                            <button className="btn btn-primary" onClick={() => navigate(-1)}>Go back</button>
                        </div>
                    </div>
                </div>


            </>
        );
    }



    return (
        <div className="projectList mt-70">
            <UnitEnquireNowModal show={isEnquireNowModalShow} onHide={closeEnquireNowModalModal} project={project} unit={selectedUnit} />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-auto">
                        <button className="cusocialBackBtn" onClick={() => navigate(-1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                            </svg>Back
                        </button>
                    </div>
                    <div className="col"><h3 className="unitInventoryHeading">Inventory</h3></div>
                </div>
            </div>
            <div className="search">
                <div className="container">
                    <div className="row mt-3 mb-3">
                        <div className="col">
                            <div className="searchUnitHeading"><h2> {project ? project.title : ''}</h2></div>
                            <div><p>{project ? project.small_description : ''}</p></div>
                        </div>
                    </div>

                    <div className="searchFilterBar">
                        <ul>
                            {/* <li>
                                <div className="input-group select-group">
                                    <span className="input-group-addon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                                        </svg>
                                    </span>
                                    <select className="form-control">
                                        <option default>Apartment Type</option>
                                        <option value="A">Option A</option>
                                        <option value="B">Option B</option>
                                        <option value="C">Option C</option>
                                        <option value="D">Option D</option>
                                    </select>
                                </div>
                            </li> */}
                            <li>
                                <div className="input-group select-group">
                                    <span className="input-group-addon">
                                    <img src={publicPath + "/assets/images/icons/block.svg"} width={20} />
                                        {/* <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 480 480">
                                            <g>
                                                <g>
                                                    <path className="st0" d="M440,464v-41.4c15.4-6.5,25-21.9,24-38.6c0-22.1-14.4-40-32-40s-32,17.9-32,40c-1,16.6,8.6,32.1,24,38.6V464
                                                        h-40V216c0-3-1.7-5.8-4.4-7.2L320,179.1V136c0-3.6-2.4-6.7-5.8-7.7L208,98V8c0-4.4-3.6-8-8-8H40c-4.4,0-8,3.6-8,8v456H0v16h480
                                                        v-16H440z M192,464H48v-16h72v-16H48v-32h72v-16H48v-32h72v-16H48v-32h72v-16H48v-32h72v-16H48v-32h72v-16H48v-32h72v-16H48v-32
                                                        h72V96H48V64h72V48H48V16h144V464z M304,464h-96v-16h56v-16h-56v-32h56v-16h-56v-32h56v-16h-56v-32h56v-16h-56v-32h56v-16h-56v-32
                                                        h56v-16h-56v-32h56v-16h-56v-29.4l96,27.4V464z M368,464h-48v-16h24v-16h-24v-32h24v-16h-24v-32h24v-16h-24v-32h24v-16h-24v-32h24
                                                        v-16h-24v-43.1l48,24V464z M424,404.6c-5.4-5.5-8.3-12.9-8-20.6c0-13,7.3-24,16-24s16,11,16,24c0.3,7.7-2.6,15.1-8,20.6V392h-16
                                                        V404.6z"/>
                                                </g>
                                            </g>
                                        </svg> */}
                                    </span>

                                    <select className="form-select" id="block" placeholder="Block" name="block" onChange={handleChangeBlock} defaultValue={''}>
                                        <option value="">Block</option>
                                        <option value="">All</option>
                                        {blocks.length > 0 && blocks.map((row, index) => <option value={row} key={index} >{row}</option>)}
                                    </select>

                                </div>
                            </li>
                            <li>
                                <div className="input-group select-group">
                                    <span className="input-group-addon">
                                    <img src={publicPath + "/assets/images/icons/floor.svg"} width={20} />
                                    {/* <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512">
                                        <g transform="translate(1 1)">
                                            <g>
                                                <g>
                                                    <path className="st0" d="M50.2,468.4H255h204.8c5.1,0,8.5-3.4,8.5-8.5V306.1V152.5V50.1c0-5.1-3.4-8.5-8.5-8.5H297.6h-93.9H50.2
                                                        c-5.1,0-8.5,3.4-8.5,8.5v204.8v68.3v102.4v34.1C41.6,464.9,45,468.4,50.2,468.4z M58.7,331.8H144c-4.3,45.2-40.1,81.1-85.3,85.3
                                                        C58.7,417.1,58.7,331.8,58.7,331.8z M58.7,58.7h136.5v51.2h-8.5c-5.1,0-8.5,3.4-8.5,8.5s3.4,8.5,8.5,8.5h34.1
                                                        c5.1,0,8.5-3.4,8.5-8.5s-3.4-8.5-8.5-8.5h-8.5V58.7h76.8v93.9c0,5.1,3.4,8.5,8.5,8.5h34.1v8.5c0,5.1,3.4,8.5,8.5,8.5
                                                        s8.5-3.4,8.5-8.5v-34.1c0-5.1-3.4-8.5-8.5-8.5s-8.5,3.4-8.5,8.5v8.5h-25.6V58.7h145.1V144h-34.1v-8.5c0-5.1-3.4-8.5-8.5-8.5
                                                        s-8.5,3.4-8.5,8.5v34.1c0,5.1,3.4,8.5,8.5,8.5s8.5-3.4,8.5-8.5v-8.5h34.1v136.5H400v-8.5c0-5.1-3.4-8.5-8.5-8.5s-8.5,3.4-8.5,8.5
                                                        v34.1c0,5.1,3.4,8.5,8.5,8.5s8.5-3.4,8.5-8.5v-8.5h51.2v136.5H263.5V314.8h51.2v8.5c0,5.1,3.4,8.5,8.5,8.5s8.5-3.4,8.5-8.5v-34.1
                                                        c0-5.1-3.4-8.5-8.5-8.5s-8.5,3.4-8.5,8.5v8.5H255c-5.1,0-8.5,3.4-8.5,8.5v145.1H58.7v-17.4c57.4-4.3,102.4-52,102.4-110.6
                                                        c0-5.1-3.4-8.5-8.5-8.5H58.7v-51.2h145.1c5.1,0,8.5-3.4,8.5-8.5v-59.7h8.5c5.1,0,8.5-3.4,8.5-8.5s-3.4-8.5-8.5-8.5h-34.1
                                                        c-5.1,0-8.5,3.4-8.5,8.5s3.4,8.5,8.5,8.5h8.5v51.2H58.7V58.7z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </svg> */}
                                    </span>
                                    <select className="form-select" id="floor" placeholder="Floor" name="floor" onChange={handleChangeFloor} defaultValue={''}>
                                        <option value="">Floor</option>
                                        <option value="">All</option>
                                        {floors.length > 0 && floors.map((row, index) => <option value={row} key={index} >{row}</option>)}
                                    </select>
                                </div>
                            </li>

                            <li>
                                <div className="input-group select-group">
                                    <span className="input-group-addon">
                                        <img src={publicPath + "/assets/images/icons/unittype.svg"} width={20} />
                                    </span>
                                    <select className="form-select" id="unitType" placeholder="unitType" name="unitType" onChange={handleChangeUnitType} defaultValue={''}>
                                        <option value="">Unit Type</option>
                                        <option value="">All</option>
                                        {unitTypes.length > 0 && unitTypes.map((row, index) => <option value={row} key={index} >{row}</option>)}
                                    </select>
                                </div>
                            </li>


                            <li>
                                <div className="input-group select-group">
                                    <span className="input-group-addon">
                                        <img src={publicPath + "/assets/images/icons/area.svg"} width={20} />
                                    </span>

                                    <select className="form-select" id="area" placeholder="Area" name="area" onChange={handleChangeArea} defaultValue={''}>
                                        <option value="">Area</option>
                                        <option value="">All</option>
                                        {areas.length > 0 && areas.map((row, index) => <option value={row} key={index} >{row} sq.m.</option>)}
                                    </select>

                                </div>
                            </li>
                            <li>
                                <div className="input-group select-group">
                                    <span className="input-group-addon">
                                        <img src={publicPath + "/assets/images/icons/price.svg"} width={20} />
                                    </span>
                                    <select className="form-select" id="price" placeholder="Price" name="price" onChange={handleChangePrice} defaultValue={''}>
                                        <option value="">Price</option>
                                        <option value="">All</option>
                                        {prices.length > 0 && prices.map((row, index) => <option value={row} key={index} >{row}</option>)}
                                    </select>

                                </div>
                            </li>
                            {/* <li>
                                <div className="input-group select-group">
                                    <span className="input-group-addon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                                        </svg>
                                    </span>
                                    <select className="form-control">
                                        <option default>Phase</option>
                                        <option value="A">Option A</option>
                                        <option value="B">Option B</option>
                                        <option value="C">Option C</option>
                                        <option value="D">Option D</option>
                                    </select>
                                </div>
                            </li> */}


                            <li>
                                <button type="button" className="btnSerach" onClick={searchNow}>Search</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* project list */}
            <div className="container">
                <div className="projectListItems0 my-5">
                    {unitsLoading ?
                        <>
                            <div className="text-center">Loading...</div>
                        </>
                        :
                        <>
                            <div className="container0">
                                <div className="text-light">Total Units : {units.length}</div>
                                <>
                                    {/* <UnitList unit={row} key={i} /> */}
                                    <div className="table-responsive">
                                        <table className="table table-sm table-hover0 table-bordered0 apartmentDetails" >
                                            <thead>
                                                <tr align="center">
                                                    <td>Apartment ID</td>
                                                    <td>Block</td>
                                                    <td>Floor</td>
                                                    <td>Bedroom</td>
                                                    <td>Unit Type</td>
                                                    <td>Built Up Area</td>
                                                    <td>Net Area</td>
                                                    <td>Direction</td>
                                                    <td onClick={() => onSortChange('price')}>{['sort-up', 'sort-down'].includes(sortTypes[currentSort].class) ? (sortTypes[currentSort].class === 'sort-up' ? '↑' : '↓') : ''} Price</td>
                                                    <td>Status</td>
                                                    <td>Action</td>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {units.length < 1 ? <tr><td colSpan={11} align="center">No units found.</td></tr> : <></>}
                                                {units.sort(dynamicSort(currentColumn)).map((row) =>
                                                    <tr key={row.id} align="center">
                                                        <td>{row.apartment_id}</td>
                                                        <td>{row.block}</td>
                                                        <td>{row.floor}</td>
                                                        <td>{row.bedroom}</td>
                                                        <td>{row.unit_type}</td>
                                                        <td>{row.built_up_area}</td>
                                                        <td>{row.net_area}</td>
                                                        <td>{row.direction === 'null' ? '-' : row.direction}</td>
                                                        <td>
                                                            <OverlayTrigger trigger="click" placement="right" overlay={popover(project.currency_symbol, row.price)} rootClose="true">
                                                                <CurrencyFormat value={row.price} displayType={'text'} thousandSeparator={true} suffix={project ? ' ' + project.currency_symbol : ''} />
                                                            </OverlayTrigger>
                                                        </td>
                                                        <td>
                                                            {row.reserved > 0 ?
                                                                <>
                                                                    <span className="badge rounded-pill bg-danger">{row.status}</span>
                                                                </>
                                                                :
                                                                <>
                                                                    <span className="badge rounded-pill bg-success">{row.status}</span>
                                                                </>
                                                            }
                                                        </td>
                                                        <td>
                                                            <Link className="btnView" title="view" to={`/projects/${id}/unit/${row.cubedots_id}`}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                </svg>
                                                            </Link>
                                                            &nbsp;&nbsp;
                                                            <button className="unitEnquitryBtn" onClick={() => showEnquireNowModal(row)}>
                                                                Enquire Now
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </>
                            </div>

                        </>
                    }
                </div>
            </div>
        </div>
    );
}

export default UnitsPage;