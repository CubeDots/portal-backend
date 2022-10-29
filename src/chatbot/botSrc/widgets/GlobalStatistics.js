import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import { getData } from "../data";

const Statistics = () => {
  const [stats, setStats] = useState([{ id: 0, link: `https://www.loopnet.com/solutions/help?site_tag=USA`, heading: "Are there Any Tax Benefits For Non-Resident Indians buying properties?" },
  { id: 1, link: `https://support.realtor.com/s/#iid=rdc_hdr_realtors_support`, heading: "What are the documents required for obtaining NRI Home Loans?" },
  { id: 2, link: `https://prnt.sc/RRljBPFc9tex`, heading: "How is the mode of payment for NRI home loans?" },
  { id: 3, link: `https://prnt.sc/R5idPNpRORnv`, heading: "What is the repayment period for the home loan for NRIs?" },
  { id: 4, link: `https://ajuda.zapmais.com/s`, heading: "What is the eligibility criteria for obtaining NRI Home Loans? " },
  { id: 5, link: `https://ajuda.zapmais.com/s`, heading: "What kinds of property can an NRI avail home loans for?" },
  { id: 6, link: `https://ajuda.zapmais.com/s`, heading: "What should be the mode of payment for purchase of residential/commercial property in India by an NRI." },
  { id: 7, link: `https://ajuda.zapmais.com/s`, heading: "Is there any limit on the number of housing properties that an NRI can buy?" }]);
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
    <>{stats.map((item1) => {
      return (
      <div className="stats" style={{margin:10}}>
        <div className="column-right">
          {/* <ClipLoader color={"#fff"} loading={loading} /> */}
          <p onClick={() => setIsSelected(true)}>{item1.heading}</p>
          <p onClick={() => setIsSelected(true)} style={{margin:10}}>{item1.heading}</p>
        </div>
      </div>
      );
    })}
    </>
  );
};

export default Statistics;
