import { useState, useEffect } from "react";
import AmenitiesModalComponent from "../project-detail/AmenitiesModalComponent"
import { Tabs, Tab } from 'react-bootstrap'

function AmenitiesComponent(props) {
    let publicPath = process.env.PUBLIC_URL;
    const [isAmenitiesModalShow, setIsAmenitiesModalShow] = useState(false);
    const [amenities, setAmenities] = useState([]);

    useEffect(() => {
        if (props.amenities.length)
            setAmenities(props.amenities);
            // console.log("amenities", props.amenities);

    }, [props.amenities]);

    const showAmenitiesModal = () => {
        // console.log("showAmenitiesModal clicked");
        // setIsAmenitiesModalShow(true);
    }

    const closeAmenitiesModalModal = () => {
        // console.log("closeAmenitiesModalModal trigger");
        setIsAmenitiesModalShow(false);
    }
    return (
        <>
            <div className="amenties">
                <div className="amentiesHeadingSecion">
                    <Tabs
                        defaultActiveKey="home"
                        transition={false}
                        id="noanim-tab-example"
                        className="mb-3">
                        <Tab eventKey="home" title="Amenities">
                            <div className='text-center my-3 justify-content-between'>
                                {amenities.length > 0 ?
                                    <div className="row">
                                        {amenities.map((amenity) =>
                                            <div className="col-md-3 col-4 pb-5 text-align-center" key={amenity}>
                                                <img alt={amenity} src={`${publicPath}/assets/images/amenities/${amenity}.svg`} className="img-fluid" width={"50"} />
                                                <h6 className="pt-2">{amenity ? amenity.replace(/-/g," "): ''}</h6>
                                            </div>
                                        )}
                                    </div>
                                    :
                                    <> <div className="row"><div className="col text-center">No data available.</div></div></>}
                            </div>

                        </Tab>
                    </Tabs>
                </div>
            </div>

            <AmenitiesModalComponent show={isAmenitiesModalShow} onHide={closeAmenitiesModalModal} />
        </>
    )
}
export default AmenitiesComponent;