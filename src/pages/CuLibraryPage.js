import { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IntlProvider } from "react-intl";
import { useIsAuthenticated } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';

import { API_ENDPOINT } from "../common/Constants";
import Loader from "../components/Loader";
import FolderChooser from "../components/cuverse/FolderChooser";

function CuLibraryPage() {
    let publicPath = process.env.PUBLIC_URL;
    let navigate = useNavigate();

    let { id } = useParams();
    const isAuthenticated = useIsAuthenticated()
    const [projectLoading, setProjectLoading] = useState(false);
    const [project, setProject] = useState(null);

    async function fetchProjects() {
        setProjectLoading(true);
        try {
            const res = await axios.get(API_ENDPOINT + "projects/show/" + id);
            if (res.data.data) {
                setProjectLoading(false);
                setProject(res.data.data);
            }
        } catch (error) {
            console.error("error ", error);
            setProjectLoading(false);
        }
    }

    useEffect(() => {
        window.scrollTo({ top:0,left:0,behavior:'smooth'});
        fetchProjects();
    }, []);

    return (
        <div className="mt-70">
            <div className="culibraryPage">
                <div className="culibraryBanner">
                    <img src={publicPath + "/assets/images/cuverse/" + id + ".jpg"} className="img-fluid" alt="" />
                </div>
                {/* 
                <div className="culibraryData">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="culibraryImage">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="culibraryContentBox">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="culibraryContentSection">
                                                <h5>Lorem Ipsum is</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
                                                <div className="d-flex justify-content-between">
                                                    <Link to="#" className="readMoreLink">Read More</Link>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                                                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="culibraryContentimage">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                                                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="culibraryContentSection">
                                                <h5>Lorem Ipsum is</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
                                                <div className="d-flex justify-content-between">
                                                    <Link to="#" className="readMoreLink">Read More</Link>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                                                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="culibraryContentSectionLorem">
                                                <h5>Lorem Ipsum is simply dummy  ipsum dolo</h5>
                                                <div className="d-flex justify-content-between">
                                                    <Link to="#" className="readMoreLink">Read More</Link>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                                                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="landingPageData">
                    <div className="container">
                        <div className="landingPageHeading">
                            <p>Lorem consectetur adipiscing elit.</p>
                            <h4>Lorem ipsum dolor sit amet</h4>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="landingPageContent">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="landingPageImage">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                                                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="col-6 m-auto">
                                            <div>
                                                <h5>Landing pages - Taksim</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                            </div>
                                        </div>
                                        <div className="col-2 m-auto">
                                            <div className="landingPageImageSvg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                                                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="landingPagecontetTaksim">
                                    <div className="">
                                        <h5>Landing pages - Taksim</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                                    </div>
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="landingPagecontetTaksim">
                                    <div className="">
                                        <h5>Landing pages - Taksim</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                                    </div>
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="landingPageContent">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="landingPageImage">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                                                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="col-6 m-auto">
                                            <div>
                                                <h5>Landing pages - Taksim</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                            </div>
                                        </div>
                                        <div className="col-2 m-auto">
                                            <div className="landingPageImageSvg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                                                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="searchBox">
                    <div className="container">
                        <div className="searchProjectBox flex-wrap">
                            <div className="seachInputBox">
                                <input type="search" className=" searchInput" placeholder="Seach" />
                                <div className="searchInputSvg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="selectBox">
                                <select>
                                    <option>Project</option>
                                </select>
                                <select>
                                    <option>Creatives</option>
                                </select>
                            </div>
                        </div>

                        <CuverseComponent />

                    </div>
                </div> 
                */}
                <div className="cuverseBox">
                    <div className="container ">
                        {projectLoading ? (
                            <>
                                <div className="col-md-1 ">
                                    <div className="row text-center">
                                        <Loader />
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="">
                                    <button className="cusocialBackBtn" onClick={() => navigate(-1)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                        </svg> Back
                                    </button>
                                </div>
                                <div className="row">

                                    <div className="col-lg-5">
                                        <div className="culibraryNewProject">
                                            {project ?
                                                <>
                                                    <h2 className="vegonHeading notranslate">{project.title}</h2>
                                                    <LazyLoadImage
                                                        effect="blur"
                                                        src={project.featured_image ? project.media_s3_base_path + project.featured_image : publicPath + '/assets/images/home/01.jpg'}
                                                        placeholderSrc={publicPath + "/assets/images/thumbnail.png"}
                                                        className="img-fluid"
                                                        visibleByDefault={false}
                                                        alt="" />
                                                </>
                                                : null}
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="culibraryNewContent">

                                            <div>
                                                {!projectLoading ?
                                                    <IntlProvider locale="en">
                                                        {project ?
                                                            <FolderChooser projectID={project.id} isAuthenticated={isAuthenticated()} />
                                                            : null}
                                                    </IntlProvider>
                                                    :
                                                    <>
                                                        <div className="text-center">Loading...</div>
                                                    </>}
                                            </div>

                                            {/* <div className="row">
                                                <div className="col-md-6">
                                                    <div className="zipFilePortal mt-2 mb-3">
                                                        <div className="d-flex">
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className

                                                                    ="bi bi-card-image" viewBox="0 0 16 16">
                                                                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                                    <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                                                                </svg>
                                                            </div>
                                                            <div className="">
                                                                <h5 className="ms-1"><Link to={""} >Photos </Link></h5>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</small>
                                                        </div>
                                                        <div>
                                                            <button className="d-flex align-items-center mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className

                                                                ="bi bi-download" viewBox="0 0 16 16">
                                                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                                            </svg>Download</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="zipFilePortal mt-2 mb-3">
                                                        <div className="d-flex">
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className

                                                                    ="bi bi-card-image" viewBox="0 0 16 16">
                                                                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                                    <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                                                                </svg>
                                                            </div>
                                                            <div className="">
                                                                <h5 className="ms-1"><Link to={""}>Videos</Link></h5>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</small>
                                                        </div>
                                                        <div>
                                                            <button className="d-flex align-items-center mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className

                                                                ="bi bi-download" viewBox="0 0 16 16">
                                                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                                            </svg>Download</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="zipFilePortal mt-2 mb-3">
                                                        <div className="d-flex">
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className

                                                                    ="bi bi-card-image" viewBox="0 0 16 16">
                                                                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                                    <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                                                                </svg>
                                                            </div>
                                                            <div className="">
                                                                <h5 className="ms-1"><Link to={""} >Price List</Link></h5>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</small>
                                                        </div>
                                                        <div>
                                                            <button className="d-flex align-items-center mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className

                                                                ="bi bi-download" viewBox="0 0 16 16">
                                                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                                            </svg>Download</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="zipFilePortal mt-2 mb-3">
                                                        <div className="d-flex">
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className

                                                                    ="bi bi-card-image" viewBox="0 0 16 16">
                                                                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                                    <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                                                                </svg>
                                                            </div>
                                                            <div className="">
                                                                <h5 className="ms-1"><Link to={""} >Catalog</Link></h5>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</small>
                                                        </div>
                                                        <div>
                                                            <button className="d-flex align-items-center mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className

                                                                ="bi bi-download" viewBox="0 0 16 16">
                                                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                                            </svg>Download</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="zipFilePortal mt-2 mb-3">
                                                        <div className="d-flex">
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className

                                                                    ="bi bi-card-image" viewBox="0 0 16 16">
                                                                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                                    <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                                                                </svg>
                                                            </div>
                                                            <div className="">
                                                                <h5 className="ms-1"><Link to={""} >Social Media</Link></h5>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</small>
                                                        </div>
                                                        <div>
                                                            <button className="d-flex align-items-center mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className

                                                                ="bi bi-download" viewBox="0 0 16 16">
                                                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                                            </svg>Download</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="zipFilePortal mt-2 mb-3">
                                                        <div className="d-flex">
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className

                                                                    ="bi bi-card-image" viewBox="0 0 16 16">
                                                                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                                    <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                                                                </svg>
                                                            </div>
                                                            <div className="">
                                                                <h5 className="ms-1"><Link to={""} >Offer</Link></h5>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</small>
                                                        </div>
                                                        <div>
                                                            <button className="d-flex align-items-center mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className

                                                                ="bi bi-download" viewBox="0 0 16 16">
                                                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                                            </svg>Download</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="zipFilePortal mt-2 mb-3">
                                                        <div className="d-flex">
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className

                                                                    ="bi bi-card-image" viewBox="0 0 16 16">
                                                                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                                    <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                                                                </svg>
                                                            </div>
                                                            <div className="">
                                                                <h5 className="ms-1"><Link to={""} >Apartment Virtual Tours</Link></h5>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</small>
                                                        </div>
                                                        <div>
                                                            <button className="d-flex align-items-center mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className

                                                                ="bi bi-download" viewBox="0 0 16 16">
                                                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                                            </svg>Download</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="zipFilePortal mt-2 mb-3">
                                                        <div className="d-flex">
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className

                                                                    ="bi bi-card-image" viewBox="0 0 16 16">
                                                                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                                    <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                                                                </svg>
                                                            </div>
                                                            <div className="">
                                                                <h5 className="ms-1"><Link to={""} >Apartment</Link></h5>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</small>
                                                        </div>
                                                        <div>
                                                            <button className="d-flex align-items-center mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className

                                                                ="bi bi-download" viewBox="0 0 16 16">
                                                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                                            </svg>Download</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>

                                </div>
                            </>
                        )}

                        {/* <div className="col-1">
                            <img src={publicPath + "/assets/images/card-image.svg"} className="img-fluid " />
                        </div>
                        <div className="col-11">
                            <h5><Link to={""} Project>Project Offer </Link></h5>
                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</small>
                        </div>
                        <div className="col-1">
                            <img src={publicPath + "/assets/images/card-image.svg"} className="img-fluid " />
                        </div>
                        <div className="col-11">
                            <h5><Link to={"/"}> Sales Pack </Link></h5>
                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</small>
                        </div>
                        <div className="col-1">
                            <img src={publicPath + "/assets/images/card-image.svg"} className="img-fluid " />
                        </div>
                        <div className="col-11">
                            <h5><Link to={"/pdfs"}> Pdfs </Link></h5>
                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</small>
                        </div>
                        <div className="col-1">
                            <img src={publicPath + "/assets/images/card-image.svg"} className="img-fluid " />
                        </div>
                        <div className="col-11">
                            <h5><Link to={"/drivelinks"}> Drive link </Link></h5>
                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</small>
                        </div>
                        <div className="col-1">
                            <img src={publicPath + "/assets/images/card-image.svg"} className="img-fluid " />
                        </div>
                        <div className="col-11">
                            <h5><Link to={"/"}> Landing Pages </Link></h5>
                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</small>
                        </div>
                        <div className="col-1">
                            <img src={publicPath + "/assets/images/card-image.svg"} className="img-fluid " />
                        </div>
                        <div className="col-11">
                            <h5><Link to={"/"}> Social media Marketing </Link></h5>
                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</small>
                        </div>
                        <div className="col-1">
                            <img src={publicPath + "/assets/images/card-image.svg"} className="img-fluid " />
                        </div>
                        <div className="col-11">
                            <h5><Link to={"/"}> Videos </Link></h5>
                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</small>
                        </div> */}
                    </div>
                </div>

            </div>
        </div >
    );
}

export default CuLibraryPage;