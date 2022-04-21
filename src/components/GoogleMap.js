import Loader from "../components/Loader";

function GoogleMap(props) {

    if (!props) {
        return <Loader />
    }

    if (!props.address) {
        return 'Address not provided'
    }

    return (
        <>
            <div className="google-map-code">
                <iframe title="map" src={props.address} width={props.width} height={props.height} frameBorder="0" style={{ border: 0 }} loading="lazy" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
        </>
    );
}

export default GoogleMap;