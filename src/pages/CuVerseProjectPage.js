import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useLocation } from 'react-router-dom';

//import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { API_ENDPOINT } from "../common/Constants";
import Loader from "../components/Loader";
import Knowlegdepage from "../components/cuverse/Knowlegdepage"


function CuVerseProjectPage() {
    let publicPath = process.env.PUBLIC_URL;
    const navigate = useNavigate();
    let location = useLocation();
    const [projectsLoading, setProjectsLoading] = useState(false);
    const [projects, setProjects] = useState([]);

    async function fetchProjects() {
        setProjectsLoading(true);
        try {
            const res = await axios.get(API_ENDPOINT + "projects/list");
            if (res.data.data.projects) {
                setProjectsLoading(false);
                setProjects(res.data.data.projects);
            }
        } catch (error) {
            console.error("error ", error);
            setProjectsLoading(false);
        }
    }
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    }, []);
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        fetchProjects();
    }, []);


    useEffect(() => {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            console.log("elem ", elem, elem.offsetTop);
            if (elem) {
                //elem.scrollIntoView({behavior: "smooth"})
                window.scrollTo({ top: elem.offsetTop - 100, left: 0, behavior: "smooth" })
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
    }, [location,])

    return (
        <>
            <Helmet>
                <title>CuVerse</title>
                <meta name="description" content="Get to see more about our 3D virtual tour system and learn how to virtually visit the real estate projects in our inventory." />
                <meta name="Keywords" content="Cubedots, Cubedots 3d, virtual tour, real estate, investment, Turkey, Turkey house, Istanbul House, turkish citizenship" />
            </Helmet>
            <div className="mt-70">
                <div className="cuverseProjectsSection">
                    <div className="cuverseHeading">
                        <img alt="" src={publicPath + "/assets/images/bannerimages/cuverse.jpg"} className="img-fluid w-100" />
                    </div>
                    <div className="container">
                        <div className="projectsCuverse">
                            {/* <div className="d-flex ">
                                <button className="cusocialBackBtn" onClick={() => navigate(-1)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                    </svg> Back
                                </button>
                            </div> */}
                            <div className="row">
                                <div className="col-md-6">
                                    <img alt="" src={publicPath + "/assets/images/missionvision.png"} className="img-fluid" />
                                </div>
                                <div className="col-md-6">
                                    <h2 id="projectContent" className="projectsHeading vegonHeading">Projects</h2>
                                    {projectsLoading ? (
                                        <> <Loader /> </>
                                    ) : (
                                        <>
                                            {projects.length > 0 ?
                                                <>
                                                    <ul>
                                                        {projects.map((row, i) =>
                                                            <div className="" key={row.id} >
                                                                {row.slug != 'acarblu' ?
                                                                    <Link className="notranslate" to={"/culibrary/" + row.slug}>
                                                                        <li className="skylandContentSection mb-1">
                                                                            <h5>{row.title}</h5>
                                                                        </li>
                                                                    </Link>
                                                                    : ''}
                                                            </div>
                                                        )}
                                                    </ul>

                                                </>
                                                :
                                                <>
                                                    <div className="text-center text-light">No data available.</div>
                                                </>
                                            }
                                        </>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>
                    <div id="insights">
                        < Knowlegdepage />
                    </div>
                </div>
            </div>
        </>
    )
}
export default CuVerseProjectPage;