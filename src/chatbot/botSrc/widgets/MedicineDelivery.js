import Link from "./Link";
import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import LocalStatics from "./LocalStatistics";

import { getData } from "../data";
import ShowAnswer from "./ShowAnswer";

const DeliveryLink = () => {
  const [stats, setStats] = useState([{ id: 0, link: `https://www.loopnet.com/solutions/help?site_tag=USA`, heading: "Help Center" },
  { id: 1, link: `https://support.realtor.com/s/#iid=rdc_hdr_realtors_support`, heading: "Support for Real Estate Professionals" },
  { id: 2, link: `https://prnt.sc/RRljBPFc9tex`, heading: "Have a question about" },
  { id: 3, link: `https://prnt.sc/R5idPNpRORnv`, heading: "Submit a Help Request" },
  { id: 4, link: `https://ajuda.zapmais.com/s`, heading: "How can we help you?" },
  { id: 5, link: `https://prnt.sc/pqqCDkPrhXoz`, heading: "Need Help" }]);
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
  );
};
// const DeliveryLink = () => {
//   const getUrl = () => {
//     return `https://www.hpb.health.gov.lk/en/covid-19#:~:text=Delivery%20of%20medicine%20from%20hospital%20clinics`;
//   };

//   return (
//     <Link url={getUrl()} title={"delivery of medicine from hospital clinics"} />
//   );
// };

export default DeliveryLink;
