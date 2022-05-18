import { useEffect, useState } from "react";
import axios from "axios";

import { API_ENDPOINT } from "../common/Constants";

import ProjectList from '../components/project/ProjectList';


function ProjectsPage() {

    let publicPath = process.env.PUBLIC_URL;
    window.onload = function () {
        window.scrollTo({ top:0,behavior:'smooth'});
      }

    const [projectsLoading, setProjectsLoading] = useState(false);

    const [projects, setProjects] = useState([]);
    const [projectsAll, setProjectsAll] = useState([]);

    const [cities, setCites] = useState([]);
    const [areas, setAreas] = useState([]);
    const [prices, setPrices] = useState([]);

    const [areaMin, setAreaMin] = useState(0);
    const [areaMax, setAreaMax] = useState(0);

    const [priceMin, setPriceMin] = useState(0);
    const [priceMax, setPriceMax] = useState(0);

    async function fetchProject() {
        setProjectsLoading(true);
        try {
            const res = await axios.get(API_ENDPOINT + "projects/list");
            if (res.data.data) {
                let data = res.data.data;
                setProjectsLoading(false);
                setProjectsAll(data.projects);
                setProjects(data.projects);
                setCites(data.filters.cities);

                setAreas(makeGroupArea(data.filters.min_built_up_area, data.filters.max_built_up_area));
                setPrices(makeGroupPrice(data.filters.min_price, data.filters.max_price));

                setAreaMin(data.filters.min_built_up_area);
                setAreaMax(data.filters.max_built_up_area);

                setPriceMin(data.filters.min_price);
                setPriceMax(data.filters.max_price);

            }
        } catch (error) {
            console.error("error ", error);
            setProjectsLoading(false);
        }
    }

    useEffect(() => {
        window.scrollTo({ top:0,left:0,behavior:'smooth'});
        fetchProject();
    }, []);

    const searchNow = (e) => {

        let city = document.querySelector('#city').value;
        let area = document.querySelector('#area').value;
        let price = document.querySelector('#price').value;
        //console.log('searchNow' ,block,floor,area,prices);
        let areaArray = area ? area.split(' - ') : [areaMin, areaMax];
        let priceArray = price ? price.split(' - ') : [priceMin, priceMax];

        // console.log('searchNow after' ,block,floor,areaArray,priceArray);
        let filterProjects = projectsAll.filter((item) => {
            return city ? (item.city === city) : true
        }).filter((item) => {
            //console.log("item.area ",item.built_up_area);
            return areaArray.length > 0 ? (item.min_built_up_area >= areaArray[0] && item.max_built_up_area <= areaArray[1]) : true
        }).filter((item) => {
            //console.log("item.price ",item.price);
            return priceArray.length > 0 ? (item.min_price >= priceArray[0] && item.max_price <= priceArray[1]) : true
        })
        console.log("filterProjects", projectsAll.length, filterProjects.length, filterProjects);

        setProjects(filterProjects);
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


    return (
        <div className="projectList mt-70">
            {/* <div className="search">
                <div className="container">

                    <div className="searchFilterBar">
                        <div className="row justify-content-between align-items-baseline">

                            <div className="col-md-2">
                                <p className="filterSearch">Filter Your Search :</p>
                            </div>
                            <div className="col-md-2">
                                <div className="input-group select-group">
                                    <span className="input-group-addon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>
                                    </span>


                                    <select className="form-control" id="city" placeholder="City" name="city" defaultValue={''}>
                                        <option value="">City</option>
                                        <option value="">All</option>
                                        {cities.length > 0 && cities.map((row, index) => <option value={row} key={index} >{row}</option>)}
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-2">
                                <div className="input-group select-group">
                                    <span className="input-group-addon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pin-map-fill" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z" />
                                            <path fillRule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" />
                                        </svg>
                                    </span>
                                    <select className="form-control" id="area" placeholder="Area" name="area" defaultValue={''}>
                                        <option value="">Area</option>
                                        <option value="">All</option>
                                        {areas.length > 0 && areas.map((row, index) => <option value={row} key={index} >{row} sq.m.</option>)}
                                    </select>

                                </div>
                            </div>

                            <div className="col-md-2">
                                <div className="input-group select-group">
                                    <span className="input-group-addon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-dollar" viewBox="0 0 16 16">
                                            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                                        </svg>
                                    </span>

                                    <select className="form-control" id="price" placeholder="Price" name="price" defaultValue={''}>
                                        <option value="">Price</option>
                                        <option value="">All</option>
                                        {prices.length > 0 && prices.map((row, index) => <option value={row} key={index} >{row}</option>)}
                                    </select>

                                </div>
                            </div>

                            <div className="col-md-2">
                                <button type="button" className="btnSerach" onClick={searchNow}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="container">
            <div className="row">
                <div className="col"><h2 className="vegonHeading">Projects</h2></div>
            </div>
            </div>
            {/* project list */}
            <div className="projectListItems">

                {projectsLoading ? (
                    <>
                        <div className="row"><div className="col-md-12 text-center">Loading...</div></div>
                    </>
                ) : (
                    <>
                        {projects.length < 1 ? <div className="row"><div className="col text-center">No project found.</div></div> : <></>}
                        {projects.length > 0 && projects.map((row, i) =>
                            <ProjectList row={row} key={i} />
                        )}
                    </>
                )
                }

            </div>
        </div>
    );
}

export default ProjectsPage;