import { Link, useNavigate } from "react-router-dom";

function NotFoundPage() {
    let publicPath = process.env.PUBLIC_URL;
    const navigate = useNavigate();
    return (
        <>
            <div className="ErrorPage">
                <div className="ErrorPageContent">
                    <h3>Don't worry you will be back on track in no time!</h3>
                    <img src={publicPath + "/assets/images/404.png"} className="img-fluid" />
                    <h3>Page doesn't exist or some other error occurred. </h3>
                    <h2>Go to our <Link to="/" className="ErrorAcnhorTag">home page</Link>  or go back to <a className="ErrorAcnhorTag" onClick={() => navigate(-1)}>previous page</a></h2>
                </div>
            </div>
        </>
    );
}

export default NotFoundPage;