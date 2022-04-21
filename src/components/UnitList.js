
import { useEffect, useState } from "react";

function UnitList(props) {

    let publicPath = process.env.PUBLIC_URL;
    const [unitRow, setUnitRow] = useState(null);
    //const [fullscreen, setFullscreen] = useState(true);

    useEffect(() => {
        // window.scrollTo({ top:0,left:0,behavior:'smooth'});
        //console.log("unit ", props.unit);
        if (props.unit) {
            setUnitRow(props.unit);
        }
    }, [props]);

    return (
        <>

            <div className="listItem" >
                <div className="container" style={{
                    // 'boxShadow': '0px 1px 4px 2px rgba(0,0,0,0.22)',
                    // 'WebkitBoxShadow': '0px 1px 4px 2px rgba(0,0,0,0.22)',
                    // 'MozBoxShadow': '0px 1px 4px 2px rgba(0,0,0,0.22)'
                }}>
                    {unitRow ?
                        <>
                        <div className="ProjectDetailContent">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="row">
                                        <div className="col-md-8 pe-0">
                                            <img src={publicPath + "/assets/images/home/01.jpg"} alt="" className="img-fluid" />
                                        </div>

                                        <div className="col-md-4 ps-2">
                                            <img src={publicPath + "/assets/images/home/02.jpg"} alt="" className="img-fluid smallImg" width="135" />
                                            <img src={publicPath + "/assets/images/home/03.jpg"} alt="" className="img-fluid smallImg mt-2" width="135" />
                                        </div>
                                        <span className="noofimg">No of image</span>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="projectdetailss">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <h5><a data-bs-toggle="modal" type="button" data-bs-target="#exampleModal">{unitRow.cubedots_id}</a></h5>
                                                <small>Lorem ipsum do</small>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="pricing">
                                                    <small>Project Logo</small>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="mt-2"><span>Details : </span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vesti bulum"
                                            lobortis luctus tempus.Nulla quis dapibus magna.Duis porta sagittis neque a lobortis.Vivamus mattis est ut massa convallis viverra.Nam </p>

                                        <p className=""><span>Status : </span> Lorem ipsum dolor sit amet, consectetur adipiscing</p>

                                        <div className="shareButtonSection">
                                            <div className="row">
                                                <div className="col-md-9">
                                                    <div className="row">
                                                        <div className="col">
                                                            <button className="shareBtn">
                                                                <img src={publicPath + "/assets/images/thumbnail.png"} width="30" alt="" className="img-fluid" />
                                                                View
                                                            </button>
                                                        </div>

                                                        <div className="col">
                                                            <button className="shareBtn">
                                                                <img src={publicPath + "/assets/images/thumbnail.png"} width="30" alt="" className="img-fluid" />
                                                                Interior
                                                            </button>
                                                        </div>
                                                        <div className="col">
                                                            <button className="shareBtn">
                                                                <img src={publicPath + "/assets/images/thumbnail.png"} width="30" alt="" className="img-fluid" />
                                                                Floorplan
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3">

                                                    <button type="button" className="btn ratingBtn me-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                        </svg>
                                                    </button>

                                                    <button type="button" className="btn contactBtn">Contact</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </>
                        :
                        <>
                        <div>lol</div>
                        </>
                    }

                    {/* <!-- Modal --> */}
                    <div className="modal fade unitDetailModal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Lorem ipsum</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <ul>
                                                <li><span>Unit Number </span>-------------</li>
                                                <li><span>Unit Id </span>-------------</li>
                                                <li><span>Build Up Area </span>-------------</li>
                                                <li><span>Net Area </span>-------------</li>
                                                <li><span>Unit Type </span>-------------</li>
                                                <li><span>Apartment Id </span>-------------</li>
                                                <li><span>Floor </span>-------------</li>
                                                <li><span>Block </span>-------------</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <ul>
                                                <li><span>Layout </span>-------------</li>
                                                <li><span>Bedroom </span>-------------</li>
                                                <li><span>Direction </span>-------------</li>
                                                <li><span>Balcony </span>-------------</li>
                                                <li><span>Terrace </span>-------------</li>
                                                <li><span>Private Parking </span>-------------</li>
                                                <li><span>Checks </span>-------------</li>
                                                <li><span>View </span>-------------</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <button className="shareBtn">
                                                <img src={publicPath + "/assets/images/thumbnail.png"} width="30" alt="" className="img-fluid" />
                                                View
                                            </button>
                                        </div>

                                        <div className="col">
                                            <button className="shareBtn">
                                                <img src={publicPath + "/assets/images/thumbnail.png"} width="30" alt="" className="img-fluid" />
                                                Interior
                                            </button>
                                        </div>
                                        <div className="col">
                                            <button className="shareBtn">
                                                <img src={publicPath + "/assets/images/thumbnail.png"} width="30" alt="" className="img-fluid" />
                                                Floorplan
                                            </button>
                                        </div>
                                        <div className="col">
                                            <button className="btntheme">
                                                Enquire Now
                                            </button>
                                        </div>
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
export default UnitList;