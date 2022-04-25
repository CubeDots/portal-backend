import { useEffect, useState } from "react";
import "animate.css/animate.min.css";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import CurrencyFormat from 'react-currency-format';
import ProgressBar from "@ramonak/react-progress-bar";

import CharactersLimitComponent from "../CharactersLimitComponent";
import ProjectEnquireNowModal from "./ProjectEnquireNowModal";


function ProjectList(props) {
    let publicPath = process.env.PUBLIC_URL;
    let navigate = useNavigate();
    const { row } = props;
    const [isProjectEnquireNowModalShow, setIsProjectEnquireNowModalShow] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);




    useEffect(() => {
        //
    }, [props]);

    // const handleClickContactBtn = () => {
    //     console.log("handleClickContactBtn");
    //     navigate(`/projects/${row.slug}?contact=true`);
    // }

    const showProjectEnquireNowModal = (p) => {
        console.log("showProjectEnquireNowModal clicked", p);
        setSelectedProject(p);
        setIsProjectEnquireNowModalShow(true);
    }

    const closeProjectEnquireNowModalModal = () => {
        console.log("closeProjectEnquireNowModalModal trigger");
        setSelectedProject(null);
        setIsProjectEnquireNowModalShow(false);
    }


    return (
        <>
            <Helmet>
                <title>Best Real Estate Projects In Istanbul – CubeDots</title>
                <meta name="description" content="CubeDots proudly presents the best residential projects all over the world for your clients looking to invest in real estate." />
                <meta name="Keywords" content="Cubedots, Cubedots, real estate, real estate projects, Turkey real estate, Istanbul Real estate" />
            </Helmet>
            {row ?
                <>
                    {/* <AnimationOnScroll animateIn="animate__pulse" animateOnce={true} > */}
                    <ProjectEnquireNowModal show={isProjectEnquireNowModalShow} onHide={closeProjectEnquireNowModalModal} project={selectedProject} />
                    {/* {console.log("row ", row.slug, row.hasOwnProperty("banners"), row.banners.length)} */}
                    <div className="listItem" >
                        <div className="container" style={{
                            // 'boxShadow': '0px 1px 4px 2px rgba(0,0,0,0.22)',
                            // 'WebkitBoxShadow': '0px 1px 4px 2px rgba(0,0,0,0.22)',
                            // 'MozBoxShadow': '0px 1px 4px 2px rgba(0,0,0,0.22)'
                        }}>
                            <div className="ProjectDetailContent">
                                <div className="row">
                                    <div className="col-md-5">
                                        <Link to={`/projects/${row.slug}`} className={row.project_status ? 'disabled-link' : ''}>
                                            <div className="row">
                                                <div className="col-8 pe-0">
                                                    <LazyLoadImage
                                                        effect="blur"
                                                        src={row.banners.length > 0 ? row.banners[0].media_s3_base_path + row.banners[0].local_path : publicPath + '/assets/images/home/01.jpg'}
                                                        placeholderSrc={publicPath + "/assets/images/thumbnail.png"}
                                                        className="img-fluid"
                                                        visibleByDefault={false}
                                                        wrapperClassName="mainBox"
                                                        alt="" />

                                                    {/* <img src={publicPath + row.banner_images[0]} alt="" className="img-fluid" /> */}
                                                </div>

                                                <div className="col-4 ps-2">
                                                    <LazyLoadImage
                                                        effect="blur"
                                                        src={row.banners.length > 0 ? row.banners[1].media_s3_base_path + row.banners[1].local_path : publicPath + '/assets/images/home/02.jpg'}
                                                        placeholderSrc={publicPath + "/assets/images/thumbnail.png"}
                                                        className="img-fluid smallImg"
                                                        visibleByDefault={false}
                                                        width="135"
                                                        alt="" />
                                                    <LazyLoadImage
                                                        effect="blur"
                                                        src={row.banners.length > 0 ? row.banners[2].media_s3_base_path + row.banners[2].local_path : publicPath + '/assets/images/home/03.jpg'}
                                                        placeholderSrc={publicPath + "/assets/images/thumbnail.png"}
                                                        className="img-fluid smallImg mt-2"
                                                        width="135"
                                                        visibleByDefault={false}
                                                        alt="" />

                                                    {/* 
                                        <img src={publicPath + row.banner_images[1]} alt="" className="img-fluid smallImg" width="135" />
                                        <img src={publicPath + row.banner_images[2]} alt="" className="img-fluid smallImg mt-2" width="135" /> 
                                        */}
                                                </div>

                                                {/* <span className="noofimg">{row.banner_images.length}</span> */}
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="projectdetailss">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <h5 className="projectDetailsHeading"><Link className={row.project_status ? 'disabled-link notranslate' : 'notranslate'} to={`/projects/${row.slug}`}>{row.title}</Link></h5>

                                                </div>
                                                <div className="col-md-6">
                                                    {!row.project_status ? 
                                                    <div className="pricing">
                                                        <h5>
                                                            <CurrencyFormat value={row.min_price} displayType={'text'} thousandSeparator={true} prefix={row.currency_symbol} /> - <CurrencyFormat value={row.max_price} displayType={'text'} thousandSeparator={true} />

                                                        </h5>

                                                    </div>
                                                    : ''}
                                                </div>
                                            </div>
                                            <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#B8532E" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            </svg> <small>{row.address}, {row.city}, {row.country}</small></div>

                                            <div className="mt-2">
                                                {/* {row.description} */}
                                                <p><CharactersLimitComponent isShowbutton={false} content={row.medium_description} limit={350} /></p>
                                            </div>

                                            {/* <p className="mb-0"><span>Status : </span> Lorem ipsum dolor sit amet, consectetur adipiscing</p> */}

                                            <div className="shareButtonSection">
                                                <div className="row">
                                                    {/* <div className="col">
                                                                <button className="shareBtn">
                                                                    Browse in 2D
                                                                </button>
                                                            </div>
                                                            <div className="col">
                                                                <button className="shareBtn">
                                                                    Browse in 3D
                                                                </button>
                                                            </div>
                                                            <div className="col">
                                                                <button className="shareBtn">
                                                                    Inventory
                                                                </button>
                                                            </div> */}
                                                    <div className="col-3 m-auto">
                                                        <div className="d-flex justify-content-between align-items-baseline">
                                                        <ProgressBar isLabelVisible={false} animateOnRender={true} completed={row.property_stage} height="10px" labelSize="10px" bgColor="#e65400" className="projectProgress" /> <span className="projectProgressText">{row.property_stage}%</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-9">
                                                        <div className="text-end">
                                                            {/* <button type="button" className="btn me-1 ratingBtn">
                                                                <img src={publicPath + "/assets/images/projectlist/heart.svg"} width="20" alt="" className="img-fluid" />
                                                            </button> */}

                                                            <button type="button" disabled={row.project_status ? true : false} className="btn contactBtn" onClick={() => showProjectEnquireNowModal(row.title)}>Contact</button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </AnimationOnScroll> */}
                </>
                : ''
            }
        </>
    );
}
export default ProjectList;