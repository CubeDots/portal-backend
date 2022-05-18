import { useEffect } from "react";
import { Link } from "react-router-dom";

function SiteMapPage() {

    useEffect(() => {
        window.history.scrollRestoration = 'manual'
      }, []);
      useEffect(() => {
        window.scrollTo({top:0})
    }, [])
    return (
        <>
            <div className="mt-70 sitemapSection">
                <div className="container">
                    <h2 className="text-center">Site Map</h2>
                    <ul>
                        <Link to={"/home"}> <li>Home Page</li></Link>
                        <Link to={"/projects"}><li>Projects</li></Link>
                        <Link to={"/cusocials"}><li>CuSocial</li></Link>
                        <Link to={"/cuverse"}><li>CuVerse</li></Link>
                        <Link to={"/about"}><li>About Us</li></Link>
                        <Link to={"/whyus"}> <li>Why Us</li></Link>
                        <Link to={"/contact"}><li>Contact Us</li></Link>
                        <Link to={"/privacy-policy"}><li>Privacy Policy</li></Link>
                        <Link to={"/terms"}><li>Terms & Condition</li></Link>
                        <Link to={"/cookie-policy"}><li>Cookies Policy</li></Link>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default SiteMapPage;