import React, { useEffect, useState } from "react";
import UrlIcon from "../icons/call.svg";

import { getData } from "../data";
import ShowAnswer from "./ShowAnswer";

const ContactLink = () => {
  const [stats, setStats] = useState([{ id: 0, link: `https://www.loopnet.com/solutions/help?site_tag=USA`, heading: "Our Stories" },
  { id: 1, link: `https://support.realtor.com/s/#iid=rdc_hdr_realtors_support`, heading: "Recent Stories" },
  { id: 2, link: `https://prnt.sc/RRljBPFc9tex`, heading: "Recent Posts" },
  { id: 3, link: `https://prnt.sc/R5idPNpRORnv`, heading: "Popular Tags " },
  { id: 4, link: `https://ajuda.zapmais.com/s`, heading: "Property Blog" },
  { id: 5, link: `https://ajuda.zapmais.com/s`, heading: "Category" },
  { id: 6, link: `https://ajuda.zapmais.com/s`, heading: "Search Bar" },
  { id: 7, link: `https://ajuda.zapmais.com/s`, heading: "Follow Us " },
  { id: 8, link: `https://ajuda.zapmais.com/s`, heading: "Featured Blogs" },
  { id: 9, link: `https://ajuda.zapmais.com/s`, heading: "What’s New " },
  { id: 10, link: `https://ajuda.zapmais.com/s`, heading: "Property Tips & Guides" },
  { id: 11, link: `https://ajuda.zapmais.com/s`, heading: "Topics" },
  { id: 12, link: `https://ajuda.zapmais.com/s`, heading: "Recommended Topics" },
  { id: 13, link: `https://ajuda.zapmais.com/s`, heading: "Like our articles? Subscribe!" },
  { id: 14, link: `https://ajuda.zapmais.com/s`, heading: "Living Room Blog" },
  { id: 15, link: `https://ajuda.zapmais.com/s`, heading: "All Articles" },
  { id: 16, link: `https://ajuda.zapmais.com/s`, heading: "Market Trends " },
  { id: 17, link: `https://ajuda.zapmais.com/s`, heading: "Real Estate 101 " },
  { id: 18, link: `https://ajuda.zapmais.com/s`, heading: "Home Improvement " },
  { id: 19, link: `https://ajuda.zapmais.com/s`, heading: "Neighbourhood Guides " },
  { id: 20, link: `https://ajuda.zapmais.com/s`, heading: "Unique Homes " },
  { id: 21, link: `https://ajuda.zapmais.com/s`, heading: "Design Files " },
  { id: 22, link: `https://ajuda.zapmais.com/s`, heading: "DIY Projects " },
  { id: 23, link: `https://ajuda.zapmais.com/s`, heading: "Contributors " },
  { id: 24, link: `https://ajuda.zapmais.com/s`, heading: "Howookies" },
  { id: 25, link: `https://ajuda.zapmais.com/s`, heading: "REAL ESTATE" },
  { id: 26, link: `https://ajuda.zapmais.com/s`, heading: "Recommended Reads " },
  { id: 27, link: `https://ajuda.zapmais.com/s`, heading: "Nearby Properties " },
  { id: 28, link: `https://ajuda.zapmais.com/s`, heading: "Top  Places " },
  { id: 29, link: `https://ajuda.zapmais.com/s`, heading: "Life Style" },
  { id: 30, link: `https://ajuda.zapmais.com/s`, heading: "Property  news Insider" },
  { id: 31, link: `https://ajuda.zapmais.com/s`, heading: "Latest Videos" },
  { id: 32, link: `https://ajuda.zapmais.com/s`, heading: "Guides for you " },
  { id: 33, link: `https://ajuda.zapmais.com/s`, heading: "Get the latest news in your inbox " },
  { id: 34, link: `https://ajuda.zapmais.com/s`, heading: "Developers" },
  { id: 35, link: `https://ajuda.zapmais.com/s`, heading: "Why should I choose Cubedots.com? " },
  { id: 36, link: `https://ajuda.zapmais.com/s`, heading: "How much experience do you have in real estate? " },
  { id: 37, link: `https://ajuda.zapmais.com/s`, heading: "In which cities do you offer your services? " },
  { id: 38, link: `https://ajuda.zapmais.com/s`, heading: "Who should I contact in case I face any issues? " },
  { id: 39, link: `https://ajuda.zapmais.com/s`, heading: "How can I book a property through Cubedots.com? " },
  { id: 40, link: `https://ajuda.zapmais.com/s`, heading: "How soon would I receive a call from you after placing my requirement? " },
  { id: 41, link: `https://ajuda.zapmais.com/s`, heading: "Do you offer home loan services? " }
]);
  const [loading, setLoading] = useState(true);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const getStats = async () => {
      const stats = await getData();

      // setStats(stats);
      setLoading(false);
    };
    getStats();
  }, []);

  return (
    <>
      <div className="stats">
        {/* <div className="column-left">
        <p> Help Center:</p>
        <p> Support for Real Estate Professionals:</p>
        <p> Have a question about:</p>
        <p> Submit a Help Request:</p>
        <p> How can we help you?:</p>
        <p> Need Help:</p>
      </div> */}
        <div className="column-right">
          {/* <ClipLoader color={"#fff"} loading={loading} /> */}
          {stats.map((item1) => {
            return <p onClick={() => setIsSelected(true)}>{item1.heading}</p>
          })}
          {/* <Link url={`https://www.loopnet.com/solutions/help?site_tag=USA`} title={"Help Center"} />
        <Link url={`https://support.realtor.com/s/#iid=rdc_hdr_realtors_support`} title={"Support for Real Estate Professionals"} />
        <Link url={`https://prnt.sc/RRljBPFc9tex`} title={"Have a question about"} />
        <Link url={`https://prnt.sc/R5idPNpRORnv`} title={"Submit a Help Request"} />
        <Link url={`https://ajuda.zapmais.com/s`} title={"How can we help you?"} />
        <Link url={`https://prnt.sc/pqqCDkPrhXoz`} title={"Need Help"} /> */}
        </div>
      </div>
      <div style={{ marginTop: 20 }}>
        {isSelected && <ShowAnswer />}
      </div>
    </>
  // return (
  //   <a href="tel:1999" className="tel-link">
  //     <img className="url-icon" alt="CallIcon" src={UrlIcon} />
  //     <h1 className="tel-header"> Call 1999 </h1>
  //   </a>
  // );
  );
};

export default ContactLink;
