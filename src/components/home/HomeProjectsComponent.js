import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import CurrencyFormat from 'react-currency-format';
import Carousel from 'react-grid-carousel'
import { API_ENDPOINT } from "../../common/Constants";
import ProgressBar from "@ramonak/react-progress-bar";


function HomeProjectsComponent() {
    let publicPath = process.env.PUBLIC_URL;
    const [projectsLoading, setProjectsLoading] = useState(false);
    const [projects, setProjects] = useState([]);

    async function fetchProject() {
        setProjectsLoading(true);
        try {
            const res = await axios.get(API_ENDPOINT + "projects/featuredHome");
            if (res.data.data) {
                setProjectsLoading(false);
                //let featuredProjects = res.data.filter(obj => ["skylandistanbul", "alya4mevsim", "nisantasi", "acar-blu"].includes(obj.slug))
                setProjects(res.data.data);
            }
        } catch (error) {
            // console.error("error ", error);
            setProjectsLoading(false);
        }
    }
    const arrowLeft = () => (
        <span className="projectArrowLeft"
            style={{
                position: 'absolute',
                left: '46%',
                bottom: '-55px',
                display: 'flex',
                height: '2rem',
                width: '2rem',
                background: '#fff',
                borderRadius: '50%',
                textAlign: 'center',
                padding: '8px',
                cursor: 'pointer'
            }}
        ><img src={publicPath + '/assets/images/left.svg'} alt="" /></span>
    )

    const arrowRight = () => (
        <span className="projectArrowRight"
            style={{
                position: 'absolute',
                right: '46%',
                bottom: '-55px',
                display: 'flex',
                height: '2rem',
                width: '2rem',
                background: '#fff',
                borderRadius: '50%',
                textAlign: 'center',
                padding: '8px',
                cursor: 'pointer'
            }}
        ><img src={publicPath + '/assets/images/right.svg'} alt="" /></span>
    )
    useEffect(() => {
        // window.scrollTo({ top:0,left:0,behavior:'smooth'});
        fetchProject();
    }, []);

    if (projectsLoading)
        return ("Please wait...");
    return (
        <>

            <div className="projectCardSection scroller">
                <div className="row">
                    {projects && projects.map((row, i) => {
                        return (
                            <div className="col-md-6" key={i}>
                                <div className="projectcard ">
                                    {/* <AnimationOnScroll animateIn="animate__zoomIn"> */}
                                    <div className="imgproject">
                                        <Link to={`/projects/${row.slug}`} className={row.project_status ? 'disabled-link' : ''}>
                                            {row.banners.length > 0 ?
                                                <LazyLoadImage
                                                    effect="blur"
                                                    src={row.banners[0].media_s3_base_path + row.banners[0].local_path}
                                                    placeholderSrc={publicPath + "/assets/images/thumbnail.png"}
                                                    className="img-fluid"
                                                    visibleByDefault={true}
                                                    alt={row.title} />
                                                :
                                                <LazyLoadImage
                                                    effect="blur"
                                                    src={publicPath + "/assets/images/home/01.jpg"}
                                                    placeholderSrc={publicPath + "/assets/images/thumbnail.png"}
                                                    className="img-fluid"
                                                    visibleByDefault={true}
                                                    alt={row.title} />
                                            }
                                        </Link>
                                    </div>
                                    {/* </AnimationOnScroll> */}
                                    <div className="projectcardContent">
                                        <div className="row justify-content-between">
                                            <div className="col-lg-6 pe-0">
                                                <h4 className="projectCardTitle"><Link className={row.project_status ? 'disabled-link notranslate' : 'notranslate'} to={`/projects/${row.slug}`}>{row.title}</Link></h4>

                                            </div>
                                            <div className="col-lg-6 text-lg-end">
                                                {!row.project_status ?
                                                    <h4 className="projectCardPrice">
                                                        <CurrencyFormat value={row.min_price} displayType={'text'} thousandSeparator={true} prefix={row.currency_symbol} /> - <CurrencyFormat value={row.max_price} displayType={'text'} thousandSeparator={true} />
                                                    </h4>
                                                    : ''}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-8 pe-0">
                                                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#B8532E" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                </svg>{row.city}, {row.country}</p>
                                            </div>
                                            <div className="col-4">
                                                <div className="d-flex justify-content-between align-items-baseline">
                                                    <ProgressBar height="10px" isLabelVisible={false} animateOnRender={true} completed={row.property_stage} labelSize="10px" bgColor="#e65400" className="projectProgress" /> <span className="projectProgressText">{row.property_stage}%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="projectCardPara">{row.small_description}</p>
                                        <p className="mb-0" style={{fontSize:'11px'}}>{row.slogan}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
            {/* <Carousel itemClass="ps-2 pe-2" responsive={partnerresponsive} showDots={true} autoPlay={false} arrows={false} infinite={false}>
                {projects && projects.map((row, i) => {
                    return (
                        <div key={i}>
                            <div className="projectcard ">
                                <AnimationOnScroll animateIn="animate__zoomIn">
                                    <div className="imgproject">
                                        <Link to="/projects/"  >
                                            {row.banners.length > 0 ?
                                                <LazyLoadImage
                                                    effect="blur"
                                                    src={row.banners[0].media_s3_base_path + row.banners[0].local_path}
                                                    placeholderSrc={publicPath + "/assets/images/thumbnail.png"}
                                                    className="img-fluid"
                                                    visibleByDefault={true}
                                                    alt={row.title} />
                                                :
                                                <LazyLoadImage
                                                    effect="blur"
                                                    src={publicPath + "/assets/images/home/01.jpg"}
                                                    placeholderSrc={publicPath + "/assets/images/thumbnail.png"}
                                                    className="img-fluid"
                                                    visibleByDefault={true}
                                                    alt={row.title} />
                                            }
                                        </Link>
                                    </div>
                                </AnimationOnScroll>
                                <div className="projectcardContent">
                                    <div className="row justify-content-between">
                                        <div className="col-md-6 pe-0">
                                            <h4 className="projectCardTitle"><Link to={`/projects/${row.slug}`}>{row.title}</Link></h4>

                                        </div>
                                        <div className="col-md-6 text-md-end">
                                            <h4 className="projectCardPrice">
                                                <CurrencyFormat value={row.min_price} displayType={'text'} thousandSeparator={true} prefix={row.currency_symbol} /> - <CurrencyFormat value={row.max_price} displayType={'text'} thousandSeparator={true} />
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#B8532E" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>{row.city}, {row.country}</p>
                                        <p className="progressStage"> <img src={publicPath + "/assets/images/projectstage.svg"} width={20} alt="" /> {row.property_stage}%</p>
                                    </div>
                                    <p className="projectCardPara">{row.small_description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Carousel> */}
            {/* <div className="row">
                {projects && projects.map((row, i) =>
                    <div className="col-lg-6" key={i}>
                        <div className="projectcard ">
                            <AnimationOnScroll animateIn="animate__zoomIn">
                                <div className="imgproject">
                                    <Link to="/projects/"  >
                                        {row.banners.length > 0 ?
                                            <LazyLoadImage
                                                effect="blur"
                                                src={row.banners[0].media_s3_base_path + row.banners[0].local_path}
                                                placeholderSrc={publicPath + "/assets/images/thumbnail.png"}
                                                className="img-fluid"
                                                visibleByDefault={true}
                                                alt={row.title} />
                                            :
                                            <LazyLoadImage
                                                effect="blur"
                                                src={publicPath + "/assets/images/home/01.jpg"}
                                                placeholderSrc={publicPath + "/assets/images/thumbnail.png"}
                                                className="img-fluid"
                                                visibleByDefault={true}
                                                alt={row.title} />
                                        }
                                    </Link>
                                </div>
                            </AnimationOnScroll>
                            <div className="projectcardContent">
                                <div className="row justify-content-between">
                                    <div className="col-md-5">
                                        <h4><Link to={`/projects/${row.slug}`}>{row.title}</Link></h4>

                                    </div>
                                    <div className="col-md-7 text-md-end">
                                        <h4>
                                            <CurrencyFormat value={row.min_price} displayType={'text'} thousandSeparator={true} prefix={row.currency_symbol} /> - <CurrencyFormat value={row.max_price} displayType={'text'} thousandSeparator={true} />
                                        </h4>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#B8532E" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg>{row.city}, {row.country}</p>
                                    <p className="progressStage"> <img src={publicPath + "/assets/images/projectstage.svg"} width={20} alt="" /> {row.property_stage}%</p>
                                </div>
                                <p className="projectCardPara">{row.small_description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div> */}
        </>
    );
}

export default HomeProjectsComponent;