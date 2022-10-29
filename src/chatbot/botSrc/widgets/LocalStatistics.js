import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import { getData } from "../data";

const Statistics = () => {
  const [stats, setStats] = useState([{ id: 0, link: `https://www.loopnet.com/solutions/help?site_tag=USA`, heading: "How many properties can I own?" },
  { id: 1, link: `https://support.realtor.com/s/#iid=rdc_hdr_realtors_support`, heading: "How can I qualify for exemptions on the Capital Gains Tax?" },
  { id: 2, link: `https://prnt.sc/RRljBPFc9tex`, heading: "What are the current rates for the different property taxes that need to be paid?" },
  { id: 3, link: `https://prnt.sc/R5idPNpRORnv`, heading: "What are the taxes that I need to pay before buying a property? " },
  { id: 4, link: `https://ajuda.zapmais.com/s`, heading: "What should be the language of the registration document?" },
  { id: 5, link: `https://ajuda.zapmais.com/s`, heading: "How can I register my property?" },
  { id: 6, link: `https://ajuda.zapmais.com/s`, heading: "What is property registration?" },
  { id: 7, link: `https://ajuda.zapmais.com/s`, heading: "What documents would I need at the time of possession? " },
  { id: 8, link: `https://ajuda.zapmais.com/s`, heading: "How could I verify that the documents shown to me by the seller are genuine?" },
  { id: 9, link: `https://ajuda.zapmais.com/s`, heading: "What documents should I check before buying a new property?" },
  { id: 10, link: `https://ajuda.zapmais.com/s`, heading: "What is generally the tenure of a home insurance? " },
  { id: 11, link: `https://ajuda.zapmais.com/s`, heading: "If I have money, is it still necessary to avail of a bank loan for buying a home?" },
  { id: 12, link: `https://ajuda.zapmais.com/s`, heading: "What is a down payment?" },
  { id: 13, link: `https://ajuda.zapmais.com/s`, heading: "How is the interest rate calculated?" },
  { id: 14, link: `https://ajuda.zapmais.com/s`, heading: "What are the documents needed to apply for a home loan?" },
  { id: 15, link: `https://ajuda.zapmais.com/s`, heading: "How does my salary influence my home loan amount?" },
  { id: 16, link: `https://ajuda.zapmais.com/s`, heading: "What are the general eligibility conditions for availing a home loan?" },
  { id: 17, link: `https://ajuda.zapmais.com/s`, heading: "How to lower your EMI?" },
  { id: 18, link: `https://ajuda.zapmais.com/s`, heading: "What is a carpet area?" },
  { id: 19, link: `https://ajuda.zapmais.com/s`, heading: "Project is developed?" },
  { id: 20, link: `https://ajuda.zapmais.com/s`, heading: "How does property valuation help?" },
  { id: 21, link: `https://ajuda.zapmais.com/s`, heading: "What the first step of the home buying process?" },
  { id: 22, link: `https://ajuda.zapmais.com/s`, heading: "How long does it take to buy a home?" },
  { id: 23, link: `https://ajuda.zapmais.com/s`, heading: "How many homes should I view before buying one?" },
  { id: 24, link: `https://ajuda.zapmais.com/s`, heading: "What if my offer is rejected?" },
  { id: 25, link: `https://ajuda.zapmais.com/s`, heading: "Do I need to do a final walk-through?" },
  { id: 26, link: `https://ajuda.zapmais.com/s`, heading: "Should I talk with a bank before looking at homes?" },
  { id: 27, link: `https://ajuda.zapmais.com/s`, heading: "How is the neighborhood/area?" },
  { id: 28, link: `https://ajuda.zapmais.com/s`, heading: "Why is it considered necessary to register Agreement for Sale? What is the purpose of registration?" },
  { id: 29, link: `https://ajuda.zapmais.com/s`, heading: "Are there any income tax considerations while transferring newly acquired property?" },
  { id: 30, link: `https://ajuda.zapmais.com/s`, heading: "What are the charges to be paid while gifting property?" },
  { id: 31, link: `https://ajuda.zapmais.com/s`, heading: "How secure is the home I will be buying? Will I get any eco-friendly and pet-friendly apartments?" },
  { id: 32, link: `https://ajuda.zapmais.com/s`, heading: "Why do I need a real estate agent?" },
  { id: 33, link: `https://ajuda.zapmais.com/s`, heading: "How much commission do you charge?" },
  { id: 34, link: `https://ajuda.zapmais.com/s`, heading: "What is selling/buying process like?" },
  { id: 35, link: `https://ajuda.zapmais.com/s`, heading: "How long does it take for email verification?" },
  { id: 36, link: `https://ajuda.zapmais.com/s`, heading: "How do I avoid a scam?" },
  { id: 37, link: `https://ajuda.zapmais.com/s`, heading: "Does Cubedots.com  support mobile/iPAD devices?" },
  { id: 38, link: `https://ajuda.zapmais.com/s`, heading: "What do visitors love about Cubedots.com?" },
  { id: 39, link: `https://ajuda.zapmais.com/s`, heading: "What kinds of properties are in your database?" },
  { id: 40, link: `https://ajuda.zapmais.com/s`, heading: "What are the benefits to me when I subscribe to the www.Cubedots.com database?" },
  { id: 41, link: `https://ajuda.zapmais.com/s`, heading: "What information do you provide for each property?" },
  { id: 42, link: `https://ajuda.zapmais.com/s`, heading: "What should I be aware of?" },
  { id: 43, link: `https://ajuda.zapmais.com/s`, heading: "I am new to city, how can I use Cubedots to find a suitable house for me?" },
  { id: 44, link: `https://ajuda.zapmais.com/s`, heading: "Is it safe to use login via facebook  & Google (social network)?" }]);
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
        <div className="stats" style={{ margin: 10 }}>
          <div className="column-right">
            {/* <ClipLoader color={"#fff"} loading={loading} /> */}
            <p onClick={() => setIsSelected(true)}>{item1.heading}</p>
            <p onClick={() => setIsSelected(true)} style={{ margin: 10 }}>{item1.heading}</p>
          </div>
        </div>
      );
    })}
    </>
  );
};

export default Statistics;
