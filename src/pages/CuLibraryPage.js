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
        window.history.scrollRestoration = 'manual'
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        fetchProjects();
    }, []);

    return (
        <div className="mt-70">
            <div className="culibraryPage">
                <div className="culibraryBanner">
                    <img src={publicPath + "/assets/images/cuverse/" + id + ".jpg"} className="img-fluid" alt="" />
                </div>
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
                                                        // effect="blur"
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
                                        </div>
                                    </div>

                                </div>
                            </>
                        )}
                    </div>
                </div>

            </div>
        </div >
    );
}

export default CuLibraryPage;