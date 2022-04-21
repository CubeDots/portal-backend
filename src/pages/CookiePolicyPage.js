import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';




function CookiePolicyPage() {
    let publicPath = process.env.PUBLIC_URL;
    useEffect(() => {
        window.scrollTo({ top:0,left:0,behavior:'smooth'});
    }, []);

    return (
        <>
            <div className="mt-70 cookieSection">
                <div className="banner_box">
                <img src={publicPath + "/assets/images/bannerimages/Cookie-Policy.jpg"} className="img-fluid" alt="" />
                </div>
                <div className="cookiesContentBox">
                    <div className="container">
                        <div className="cookiesContent">
                            <h2 className="vegonHeading">Cookie Policy</h2>
                            <h5>Content</h5>
                            <ul className="">
                                <li>General Information</li>
                                <li>Our Purpose of Use with Cookies We Use</li>
                                <li>Procedure for Removing Cookies</li>
                            </ul>
                        </div>
                        <div className="cookieGeneralInfo">
                            <h4>General Information</h4>
                            <p> Various cookies are used on our Site <a href="https:/www.cubedots.com/" target="_blank"> www.cubedots.com</a> belonging to CUBEDOTS TURKEY GAYRİMENKUL TEKNOLOJİLERİ LİMİTED  ŞİRKETİ’ne (hereinafter referred to as the "Company"). This policy is related to the cookies we use on our Site and is intended to explain to you what cookies we use and the purposes of our use during your visit to our Site.</p>
                            <p>A cookie is a small text file obtained through the Site you visit, allowing the person who placed the cookie to obtain information about you. Cookies are generally used for purposes such as functionality, performance, marketing activities, such as to make Sites work or work better, to create general usage reports or to ensure that users are remembered.</p>
                            <p>Our Purpose of Use with Cookies We Use</p>
                            <p>Some cookies we use are mandatory within the scope of the services we provide to you. Some cookies we use are only used as long as you give your consent. The cookies we use as a basis in this context are:</p>
                            <div>
                                <ul>
                                    <li>Cookies that we use as mandatory:</li>
                                    <ul>
                                        <li>These cookies are mandatory for the use of our Site and often do not contain personal data. Your consent is not sought in the use of such cookies.</li>
                                    </ul>
                                </ul>
                                <ul>
                                    <li>Cookies we use to improve functionality:</li>
                                    <ul>
                                        <li>These cookies are used to increase the functionality of our Site, such as ensuring language selection by region. These types of cookies are used based on your consent.</li>
                                    </ul>
                                </ul>
                                <ul>
                                    <li>Cookies we use for performance purposes:</li>
                                    <ul>
                                        <li>These cookies are used to improve our Site and make improvements. These types of cookies are used based on your consent.</li>
                                    </ul>
                                </ul>
                                <ul>
                                    <li>Profiling or targeting cookies:</li>
                                    <ul>
                                        <li>With these cookies, your transactions are recorded while visiting our Site and your behavioral habits are analyzed and in this way personalized advertising and marketing activities are carried out and special content is brought to the forefront. These types of cookies are used based on your consent.</li>
                                    </ul>
                                </ul>
                            </div>
                            <div className="cookiesLifspan">
                                <p> <b>However, we use the</b> following cookies according to their lifespan. These are:
                                </p>
                                <ul>
                                    <li>Persistent Cookies: These types of cookies are those that are assigned to your device and used throughout their validity period.</li>
                                    <li>Temporary Cookies or Session Cookies: With such cookies, each of your visits is specifically assigned and the lifespan is the duration of your visit. Such cookies are deleted when you close your browser.</li>
                                </ul>
                            </div>
                            <div>
                                <p>Finally, we use our own cookies and third-party cookies on our Site. We can explain the cookies we use in this direction as follows:</p>
                                <ul>
                                    <li>First Party Cookies: Cookies placed by our own Site and used for purposes for our own products and services.</li>
                                    <li>Third Party Cookies: Cookies placed by third parties other than our own Site, whose purposes and methods of use depend on third parties.
                                    </li>
                                </ul>
                                <p> Procedure for Removing Cookies</p>
                                <p>Cookies are placed on our system through the browsers you use. Users can delete, block or re-approve any cookies used, stored, processed on our Site by methods that vary according to the browsers they use. According to the browser you use to visit our Site, you can make the mentioned transactions from the links below.</p>
                                <p>When you revoke your consent to cookies, you may not be able to use some functions of our Site or use them with efficiency.</p>
                                <ul>
                                    <li>Internet Explorer -<a href="https://support.microsoft.com/en-GB/kb/278835">https://support.microsoft.com/en-GB/kb/278835</a></li>
                                    <li>Chrome - <a href="https://support.google.com/chrome/answer/95647?hl=en-GB">https://support.google.com/chrome/answer/95647?hl=en-GB</a></li>
                                    <li>Firefox - <a href="https://support.mozilla.org/en-GB/kb/delete-browsing-search-download-history-firefox">https://support.mozilla.org/en-GB/kb/delete-browsing-search-download-history-firefox</a></li>
                                    <li>Safari - <a href="https://support.apple.com/kb/PH5042?locale=en-GB">https://support.apple.com/kb/PH5042?locale=en-GB</a></li>
                                    <li>Opera - <a href="http://www.opera.com/help/tutorials/">https://support.microsoft.com/en-GB/kb/278835</a></li>
                                </ul>
                                <p>If you are using a different browser than the one above, visit the developer page of your browser.</p>
                                <p>You can use <a href="http://tools.google.com/dlpage/gaoptout">http://tools.google.com/dlpage/gaoptout</a> to turn off Google Analytics cookies in all browsers.</p>
                                <p>This policy has been executed on 25/01/2022. Cubedots reserves the right to make changes to this cookie policy. You can always access the current version by visiting our Site.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default CookiePolicyPage;