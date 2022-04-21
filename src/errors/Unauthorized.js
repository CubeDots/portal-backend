import { useNavigate } from "react-router-dom";

function UnauthenticatedPage() {
    const navigate = useNavigate();
    return (
        <>
            <div className="container">
                <div className="row my-5 py-5">
                    <div className="col my-5 text-center">
                        <h3>401 Unauthenticated.</h3>
                        <div><br /></div>
                        <button className="btn btn-primary" onClick={() => navigate(-1)}>Go back</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UnauthenticatedPage;