import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import _ from 'lodash';
import axios from "axios";
import { API_ENDPOINT } from '../common/Constants';

function UnitInventoryData(props) {
    let { apartment_id, id } = useParams();
    const [unitsLoading, setUnitsLoading] = useState(false);
    const [floorplan, setFloorPlan] = useState(null);
    const [project, setProject] = useState({});
    let navigate = useNavigate();
    async function fetchUnits() {
        setUnitsLoading(true);
        try {
            const res = await axios.get(API_ENDPOINT + "projects/interiorInventory/" + id + '/' + apartment_id);
            if (res.data) {
                console.log('res.data.data ', res.data.floorplans);
                setFloorPlan(res.data.floorplans);
                setUnitsLoading(false);
                let units = res.data.data.data;
                setProject(res.data.project);
                console.log("units", units);
            }
        } catch (error) {
            console.error("error ", error);
            setUnitsLoading(false);
        }
    }
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    }, []);
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        fetchUnits();
    }, [])
    return (
        <div className="mt-70 unitInventory">
            <div className="pt-3 pb-3 container">
                <div className="row mb-3">
                    <div className="col-auto"><button className="cusocialBackBtn" onClick={() => navigate(-1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>Back
                    </button>
                    </div>
                    <div className="col-auto">
                        <h4>Floor Plan</h4>
                    </div>
                </div>
                <div className="searchUnitHeading col mb-3">
                    <h2>{project ? project.title : ''}</h2>
                </div>
                <div className="text-center">
                    {unitsLoading ?
                        <>
                            <div className="text-center">Loading...</div>
                        </>
                        :
                        <>
                            {floorplan ?
                                <img src={floorplan.media_s3_base_path + floorplan.local_path} alt="" className="img-fluid" />
                                :
                                <h4>Floorplan Not Available</h4>
                            }
                        </>
                    }
                </div>
            </div>
        </div>
    );
}

export default UnitInventoryData;