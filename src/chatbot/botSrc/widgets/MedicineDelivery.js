import Link from "./Link";
import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import { getData } from "../data";

const DeliveryLink = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStats = async () => {
      const stats = await getData();

      setStats(stats);
      setLoading(false);
    };
    getStats();
  }, []);

  return (
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
        <ClipLoader color={"#fff"} loading={loading} />
        <Link url={`https://www.loopnet.com/solutions/help?site_tag=USA`} title={"Help Center"} />
        <Link url={`https://support.realtor.com/s/#iid=rdc_hdr_realtors_support`} title={"Support for Real Estate Professionals"} />
        <Link url={`https://prnt.sc/RRljBPFc9tex`} title={"Have a question about"} />
        <Link url={`https://prnt.sc/R5idPNpRORnv`} title={"Submit a Help Request"} />
        <Link url={`https://ajuda.zapmais.com/s`} title={"How can we help you?"} />
        <Link url={`https://prnt.sc/pqqCDkPrhXoz`} title={"Need Help"} />
      </div>
    </div>
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
