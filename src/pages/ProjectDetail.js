import { React, useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from 'react-router-dom';
import AmenitiesComponent from "../components/project-detail/AmenitiesComponent"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import axios from "axios";

import Loader from "../components/Loader";
import PopoverButton from "../components/PopoverButton";
import { Tabs, Tab } from 'react-bootstrap';
import CurrencyFormat from 'react-currency-format';

import { API_ENDPOINT } from '../common/Constants';

//import FbImageLibrary from 'react-fb-image-grid';
import ProjectSlider from '../components/project-detail/ProjectSlider';
import MapProject from '../components/project/MapComponent';

import FbLikeGridGallery from "../components/project-detail/FbLikeGridGallery";
import EnquireAboutThisPropertyComponent from "../components/project-detail/EnquireAboutThisPropertyComponent"

function ProjectDetail(props) {
    let publicPath = process.env.PUBLIC_URL;
    let navigate = useNavigate();
    let { id } = useParams();
    const [open, setOpen] = useState(false);
    const [threeDbutton, setThreeDButton] = useState(true);
    const [projectLoading, setProjectLoading] = useState(true);
    const [locationAirport, setlocationAirport] = useState([]);
    const [locationPublic, setlocationPublic] = useState([]);
    const [locationMall, setlocationMall] = useState([]);
    const [locationHospital, setlocationHospital] = useState([]);
    const [project, setProject] = useState(null);

    async function fetchProject() {
        setProjectLoading(true);
        try {
            console.log("response data", id);
            const res = await axios.get(API_ENDPOINT + "projects/show/" + id);
            if (res.data) {
                //let projectsData = res.data.data;
                // let filteredProject = projectsData.filter(a => a.slug === id);
                // console.log("filteredProject ", filteredProject.length, filteredProject);
                setProjectLoading(false);
                setProject(res.data.data);
                // if (filteredProject.length === 1)
                //     setProject(filteredProject[0]);
            }
        } catch (error) {
            console.error("error ", error);
            setProjectLoading(false);
        }
    }

    async function fetchLocation() {
        try {
            const response = await axios.get(publicPath + "/assets/data/projectsLocation/" + id + ".json");
            console.log("location data", response.data);
            let resLocation = response.data;
            setlocationAirport(resLocation[0].airport);
            setlocationPublic(resLocation[1].publictransport);
            setlocationMall(resLocation[2].mall);
            setlocationHospital(resLocation[3].hospital);
        } catch (error) {
            console.error("error ", error);
            setProjectLoading(false);
        }
    }
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
      }, []);

    useEffect(() => {
        window.scrollTo({
            top:0,
            left:0,
            behavior:'smooth'
        });
        fetchProject();
        fetchLocation();
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
              navigator.userAgent
            )
          ) {
            setThreeDButton(false);
          } else {
            setThreeDButton(true);
          }
    }, []);

    // if(!project){

    //         navigate('/404');

    // }

    const openModal = () => {
        //console.log("info", info);
        setOpen(true);
    }
    const closeModal = () => setOpen(false);

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: '',
            },
        },
    };

    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Population in milion',
                data: [10, 50, 100, 150, 200, 50, 300, 350, 400, 450, 300, 500],
                backgroundColor: 'rgba(13, 110, 253,.7)',
            }
        ],
    };
    const images = [
        publicPath + "/assets/images/home/01.jpg",
        publicPath + "/assets/images/home/02.jpg",
        publicPath + "/assets/images/home/03.jpg",
        publicPath + "/assets/images/home/04.jpg",
        publicPath + "/assets/images/home/01.jpg",
        publicPath + "/assets/images/home/02.jpg",
        publicPath + "/assets/images/home/02.jpg",
        publicPath + "/assets/images/home/03.jpg",
        publicPath + "/assets/images/home/01.jpg",
        publicPath + "/assets/images/home/02.jpg",
        publicPath + "/assets/images/home/03.jpg",
        publicPath + "/assets/images/home/04.jpg",
        publicPath + "/assets/images/home/01.jpg",
        publicPath + "/assets/images/home/02.jpg",
        publicPath + "/assets/images/home/02.jpg",
        publicPath + "/assets/images/home/03.jpg"
    ];
    const GalleryImg = [
        publicPath + "/assets/images/home/acarblu1.jpg",
        publicPath + "/assets/images/home/acarblu2.jpg",
        publicPath + "/assets/images/home/acarblu3.jpg",
        publicPath + "/assets/images/home/acarblu1.jpg",
        publicPath + "/assets/images/home/acarblu2.jpg",
        publicPath + "/assets/images/home/acarblu3.jpg",
        publicPath + "/assets/images/home/acarblu1.jpg"
    ];



    return (
        <>
            {projectLoading ? (
                <>
                    <Loader />
                </>
            ) : (
                <>
                    {
                        project ?
                            <>
                                <Helmet>
                                    <title>{project.meta_title}</title>
                                    <meta name="description" content={project.meta_description} />
                                    <meta name="Keywords" content={project.meta_keywords} />
                                </Helmet>
                                < div className="ProjectDetail mt-70" >
                                    <div className='container-fluid'>
                                        <button className="backBtn" onClick={() => navigate('/projects')}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                            </svg> Back
                                        </button>
                                    </div>
                                    <div className="ProjectDetailSlider">
                                        <div className='container-fluid'>
                                            {project ?
                                                <ProjectSlider images={project.banners} />
                                                :
                                                ''
                                            }
                                        </div>
                                    </div>
                                    <div className="headingWithButton">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="col-md-7">
                                                    <h2 className="vegonHeading notranslate">{project.title}</h2>
                                                    <div className='projectMapLinkAddress'><a href={project.google_map_shortlink} target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#B8532E" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                    </svg> <small>{project.address}, {project.city}, {project.country}</small></a></div>


                                                </div>
                                                <div className="col-md-5">
                                                    <ul>
                                                        <li>
                                                            {project.is_2d_enabled ?
                                                                <PopoverButton to={`/projects/2dSystem/${project.slug}`}>
                                                                    Browse in 2D
                                                                </PopoverButton>
                                                                : null}
                                                            {project.is_3d_enabled ?
                                                                <PopoverButton to={`/projects/3dSystem/${project.slug}`}>
                                                                    Browse in 3D
                                                                </PopoverButton>
                                                                : null}

                                                            <PopoverButton to={`/projects/${project.slug}/units`}>
                                                                Inventory
                                                            </PopoverButton>

                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="twoGridSection">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-8">
                                                    <div className="projectDesc">
                                                        <h4>Project Description</h4>
                                                        <p><strong>{project.small_description} </strong></p>
                                                        <p>{project.medium_description}</p>
                                                        <div dangerouslySetInnerHTML={{ __html: `${project.long_description}` }} />
                                                        {/* <button className="btntheme">Ask Questions</button> */}
                                                    </div>
                                                    <div className='row justify-content-between projectArea'>
                                                        <div className='col-md-3 col-6 text-center'>
                                                            <div className='projectAreaContent'>
                                                                <img src={publicPath + "/assets/images/area.svg"} />
                                                                <h6 className='pt-2'>Area</h6>
                                                                <div className="">{project.property_area}sqm.</div>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-3 col-6 text-center'>
                                                            <div className='projectAreaContent'>
                                                                <img src={publicPath + "/assets/images/unittype.svg"} />
                                                                <h6 className='pt-2'>Unit Type</h6>
                                                                <div className="">{project.unit_type}</div>
                                                            </div>
                                                        </div>

                                                        <div className='col-md-3 col-6 text-center'>
                                                            <div className='projectAreaContent'>
                                                                <img src={publicPath + "/assets/images/propertytype.svg"} />
                                                                <h6 className='pt-2'>Property Type</h6>
                                                                <div className="">{project.property_type}</div>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-3 col-6 text-center'>
                                                            <div className='projectAreaContent'>
                                                                <img src={publicPath + "/assets/images/dollar.svg"} />
                                                                <h6 className='pt-2'>Price Range</h6>
                                                                <div className=""><CurrencyFormat value={project.min_price} displayType={'text'} thousandSeparator={true} prefix={project.currency_symbol} /> - <CurrencyFormat value={project.max_price} displayType={'text'} thousandSeparator={true} /></div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="galleryFloorplan">
                                                        {/* <div className="row">
                                                            <div className="col-md-5">
                                                                <div className="floorplans">
                                                                    <h3>Amenities</h3>
                                                                    <img alt="" src={publicPath + "/assets/images/1.jpg"} className="img-fluid" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-7">
                                                                <div className="gallerys">
                                                                    <h3>Views</h3>
                                                                    <FbLikeGridGallery countFrom={6} images={images} />
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                        <Tabs
                                                            defaultActiveKey="home"
                                                            transition={false}
                                                            id="noanim-tab-example"
                                                            className="mb-3">
                                                            <Tab eventKey="home" title="Gallery">
                                                                <div className="gallerys ">
                                                                    <h3>Gallery</h3>
                                                                    <FbLikeGridGallery title={'Gallery'} countFrom={7} images={project.gallery} />
                                                                    {/* <FbImageLibrary countFrom={5} images={images} /> */}
                                                                </div>
                                                            </Tab>
                                                            <Tab eventKey="profile" title="Floor Plan">
                                                                <div className="floorplans">
                                                                    <h3>Floor Plan</h3>
                                                                    <FbLikeGridGallery title={'Floor plan'} countFrom={7} images={project.floorplan} />
                                                                </div>
                                                            </Tab>
                                                            <Tab eventKey="contact" title="Views">
                                                                <div className="Views">
                                                                    <h3>Views</h3>
                                                                    <FbLikeGridGallery title={'Views'} countFrom={3} images={project.view} />
                                                                </div>
                                                            </Tab>
                                                        </Tabs>
                                                    </div>

                                                    <AmenitiesComponent amenities={project.amenities} />
                                                    <div className="location">
                                                        <Tabs
                                                            defaultActiveKey="home"
                                                            transition={false}
                                                            id="noanim-tab-example"
                                                            className="mb-3">
                                                            <Tab eventKey="home" title="Location">
                                                                <div className="map">
                                                                    {project.google_map_embed ?
                                                                        <iframe src={project.google_map_embed} allowFullScreen="" loading="lazy" title="map"></iframe>
                                                                        :
                                                                        <div className="col-12 mb-2 text-center text-light">No data available. </div>
                                                                    }
                                                                </div>
                                                                {/* <h1>Near By Location</h1> */}
                                                                <div className="locationData">
                                                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                                        <li className="nav-item" role="presentation">
                                                                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                                                                                Airport
                                                                            </button>
                                                                        </li>
                                                                        <li className="nav-item" role="presentation">
                                                                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                                                                Public Transport
                                                                            </button>
                                                                        </li>
                                                                        <li className="nav-item" role="presentation">
                                                                            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                                                                                Mall
                                                                            </button>
                                                                        </li>
                                                                        <li className="nav-item" role="presentation">
                                                                            <button className="nav-link" id="hospital-tab" data-bs-toggle="tab" data-bs-target="#hospital" type="button" role="tab" aria-controls="hospital" aria-selected="false">
                                                                                Hospital
                                                                            </button>
                                                                        </li>
                                                                        {/* <a href="#" className="linkotherlocation">Show Other Location</a> */}
                                                                    </ul>
                                                                    <div className="tab-content" id="myTabContent">
                                                                        <div className="tab-pane fade show active p-2" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                                            {locationAirport.length > 0 && locationAirport.map((item, index) => {
                                                                                return (
                                                                                    <ul key={index}>
                                                                                        <li>{item.name}</li>
                                                                                        <li className='text-center'>{item.distance}</li>
                                                                                        <li className='text-center'>{item.time}</li>
                                                                                    </ul>
                                                                                )
                                                                            })
                                                                            }
                                                                        </div>
                                                                        <div className="tab-pane fade p-2" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                                            {locationPublic.length > 0 && locationPublic.map((item, index) => {
                                                                                return (
                                                                                    <ul key={index}>
                                                                                        <li>{item.name}</li>
                                                                                        <li className='text-center'>{item.distance}</li>
                                                                                        <li className='text-center'>{item.time}</li>
                                                                                    </ul>
                                                                                )
                                                                            })
                                                                            }

                                                                        </div>
                                                                        <div className="tab-pane fade p-2" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                                                            {locationMall.length > 0 && locationMall.map((item, index) => {
                                                                                return (
                                                                                    <ul key={index}>
                                                                                        <li>{item.name}</li>
                                                                                        <li className='text-center'>{item.distance}</li>
                                                                                        <li className='text-center'>{item.time}</li>
                                                                                    </ul>
                                                                                )
                                                                            })}

                                                                        </div>
                                                                        <div className="tab-pane fade p-2" id="hospital" role="tabpanel" aria-labelledby="hospital-tab">
                                                                            {locationHospital.length > 0 && locationHospital.map((item, index) => {
                                                                                return (
                                                                                    <ul key={index}>
                                                                                        <li>{item.name}</li>
                                                                                        <li className='text-center'>{item.distance}</li>
                                                                                        <li className='text-center'>{item.time}</li>
                                                                                    </ul>
                                                                                )
                                                                            })}

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Tab>
                                                        </Tabs>

                                                    </div>
                                                    {/* <div className="inventory">
                                    <h3>Inventory</h3>
                                    <img alt="" src={publicPath + "/assets/images/inventories.png"} className="img-fluid" />
                                </div> */}
                                                    {/* <div className="aboutAgent">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="aboutagentContent">
                                                            <small>About the agents</small>
                                                            <h3>Lorem ipsum dolor sit amet</h3>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6"></div>
                                                </div>
                                            </div> */}
                                                    <hr />
                                                    {/* <div className="populationCount">
                                                <h3>Population</h3>
                                                <ul>
                                                    <li><span>45,562</span><p>Total population</p></li>
                                                    <li><span>32</span><p>Medium Age</p></li>
                                                    <li><span>96,256</span><p>population density</p></li>
                                                    <li><span>17.03</span><p className="mb-0">population changes </p><p>(since 2000)</p></li>
                                                    <li><span>6.32</span><p className="mb-0">population changes</p> <p>(since 2010)</p></li>
                                                </ul>
                                            </div>
                                            <div className="populationGender">
                                                <h3>Population Gender</h3>
                                                <div className="progress">
                                                    <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <div className="womenmentext"><p>Women</p><p>Men</p></div>
                                            </div>
                                            <div className="populationBar">
                                                <h3>Population Age</h3>
                                                <Bar options={options} data={data} />
                                            </div>
                                            <div className="populationCount">
                                                <h3>Household</h3>
                                                <ul>
                                                    <li><span>45,562</span><p>Total Household</p></li>
                                                    <li><span>14,536</span><p>Avg Household Income</p></li>
                                                    <li><span>96,256</span><p>Medium Household Income</p></li>
                                                    <li><span>17%</span><p>Education Level </p></li>
                                                </ul>
                                            </div>
                                            <div className="populationGender">
                                                <h3>Martial Status</h3>
                                                <div className="progress">
                                                    <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <div className="womenmentext"><p>Married</p><p>Unmarried</p></div>
                                            </div>
                                            <div className="populationGender">
                                                <h3>Household With</h3>
                                                <div className="progress">
                                                    <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <div className="womenmentext"><p>Household With Children</p><p>Household Without Children</p></div>
                                            </div>
                                            <div className="populationCount">
                                                <h3>Employment</h3>
                                                <ul>
                                                    <li><span>45,562</span><p>Total Employment</p></li>
                                                    <li><span>14,536</span><p>Avg Employment Income</p></li>
                                                    <li><span>96,256</span><p>Medium Employment Income</p></li>
                                                    <li><span>17%</span><p>Employment Level </p></li>
                                                </ul>
                                            </div>
                                            <div className="populationGender">
                                                <h3>Martial Status</h3>
                                                <div className="progress">
                                                    <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <div className="womenmentext"><p>Married</p><p>Unmarried</p></div>
                                            </div>
                                            <div className="populationGender">
                                                <h3>Household With Children</h3>
                                                <div className="progress">
                                                    <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <div className="womenmentext"><p>Household With Children</p><p>Household Without Children</p></div>
                                            </div>
                                            <div className="reviews">
                                                <div className="headingwithbtn">
                                                    <h3>Review</h3>
                                                    <ul>
                                                        <li><Link to="">Show all reviews</Link></li>
                                                        <li>
                                                            <div className="dropdown">
                                                                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    More Recent
                                                                </button>
                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="reviewBox">
                                                    <h4>Lorem Ipsum is simply dummy, printing</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                    <ul className="reviewShareBtn">
                                                        <li><img alt="" className="smallIcon" src={publicPath + "/assets/images/thumbnail.png"} /> Was this helpful ?</li>
                                                        <li><img alt="" className="smallIcon" src={publicPath + "/assets/images/thumbnail.png"} /> Share</li>
                                                    </ul>
                                                </div>
                                                <div className="reviewBox">
                                                    <h4>Lorem Ipsum is simply dummy, printing</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                    <ul className="reviewShareBtn">
                                                        <li><img alt="" className="smallIcon" src={publicPath + "/assets/images/thumbnail.png"} /> Was this helpful ?</li>
                                                        <li><img alt="" className="smallIcon" src={publicPath + "/assets/images/thumbnail.png"} /> Share</li>
                                                    </ul>
                                                </div>
                                                <div className="reviewBox">
                                                    <h4>Lorem Ipsum is simply dummy, printing</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                    <ul className="reviewShareBtn">
                                                        <li><img alt="" className="smallIcon" src={publicPath + "/assets/images/thumbnail.png"} /> Was this helpful ?</li>
                                                        <li><img alt="" className="smallIcon" src={publicPath + "/assets/images/thumbnail.png"} /> Share</li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                        */}
                                                </div>
                                                <div className="col-md-4">
                                                    <EnquireAboutThisPropertyComponent data={project} />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    {
                                        open ?
                                            <MapProject closeModal={() => closeModal()} openModal={() => openModal()} show={open} />
                                            :
                                            ''
                                    }
                                </div>
                            </>
                            : ''}
                </>
            )
            }
        </>
    );
}

export default ProjectDetail;