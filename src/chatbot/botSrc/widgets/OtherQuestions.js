import Link from "./Link";
import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import LocalStatics from "./LocalStatistics";

import { getData } from "../data";
import ShowAnswer from "./ShowAnswer";
import Overview from "./Overview";

const OtherQuestions = () => {
  const [formData, setFormData] = React.useState({ name: '', email: '', mobile: '' });
  const [submit, setSubmit] = React.useState(false);
  const [stats, setStats] = useState([{ id: 0, link: `https://www.loopnet.com/solutions/help?site_tag=USA`, heading: "What to do if blank page occur during navigation between pages?" },
  { id: 1, link: `https://support.realtor.com/s/#iid=rdc_hdr_realtors_support`, heading: "In how much time the team will respond after the form submission? " },
  { id: 2, link: `https://prnt.sc/RRljBPFc9tex`, heading: "Can we share the offers? " },
  { id: 3, link: `https://prnt.sc/R5idPNpRORnv`, heading: "Can I create a new account?" },
  { id: 4, link: `https://ajuda.zapmais.com/s`, heading: "Can I add multiple Profiles in Dashboard?" },
  { id: 5, link: `https://ajuda.zapmais.com/s`, heading: "Agent can manage his dashboard? " },
  { id: 6, link: `https://ajuda.zapmais.com/s`, heading: "Is it possible to save downloaded file on any cloud platform?" },
  { id: 7, link: `https://ajuda.zapmais.com/s`, heading: "Any other option to explore project apart from 2d, 3d?" },
  { id: 8, link: `https://ajuda.zapmais.com/s`, heading: "How the inventory is managed in projects?" },
  { id: 9, link: `https://ajuda.zapmais.com/s`, heading: "Does one user can enquire for 2 different projects?" },
  { id: 10, link: `https://ajuda.zapmais.com/s`, heading: "How do I troubleshoot a browser issue?" },
  { id: 11, link: `https://ajuda.zapmais.com/s`, heading: "Is it necessary to update my browser?" },
  { id: 12, link: `https://ajuda.zapmais.com/s`, heading: "Pages don’t appear as expected. " },
  { id: 13, link: `https://ajuda.zapmais.com/s`, heading: "Auto fill isn’t working properly." },
  { id: 14, link: `https://ajuda.zapmais.com/s`, heading: "Browser page is not loading? " },
  { id: 15, link: `https://ajuda.zapmais.com/s`, heading: "Appears white screen only? " },
  { id: 16, link: `https://ajuda.zapmais.com/s`, heading: "Slow performance and page loads " },
  { id: 17, link: `https://ajuda.zapmais.com/s`, heading: "Repeated random browser crashes." },
  { id: 18, link: `https://ajuda.zapmais.com/s`, heading: "Pages don’t work as intended " },
  { id: 19, link: `https://ajuda.zapmais.com/s`, heading: "Broken images and video. " },
  { id: 20, link: `https://ajuda.zapmais.com/s`, heading: "The homepage keeps changing. " },
  { id: 21, link: `https://ajuda.zapmais.com/s`, heading: "Why is my internet blocking certain websites? " },
  { id: 22, link: `https://ajuda.zapmais.com/s`, heading: "I can't access any websites " },
  { id: 23, link: `https://ajuda.zapmais.com/s`, heading: "How do I update my browser? " },
  { id: 24, link: `https://ajuda.zapmais.com/s`, heading: "How do I clear my browser cache & Cookies? " },
  { id: 25, link: `https://ajuda.zapmais.com/s`, heading: "What are the supported browsers for the Cubedots.com? " },
  { id: 26, link: `https://ajuda.zapmais.com/s`, heading: "How do I refresh my browser to experience the updates to the web portal? " },
  { id: 27, link: `https://ajuda.zapmais.com/s`, heading: "Why some websites are not opening in Chrome? " },
  { id: 28, link: `https://ajuda.zapmais.com/s`, heading: "How do I reset my Chrome browser? " },
  { id: 29, link: `https://ajuda.zapmais.com/s`, heading: "Web pages not opening in any Internet browser " },
  { id: 30, link: `https://ajuda.zapmais.com/s`, heading: "How to Increase the size of browsing window? " },
  { id: 31, link: `https://ajuda.zapmais.com/s`, heading: "No Internet Connection? How to Troubleshoot Internet Issues? " },
  { id: 32, link: `https://ajuda.zapmais.com/s`, heading: "How to clear your DNS cache?" },
  { id: 33, link: `https://ajuda.zapmais.com/s`, heading: "How to launch the app again. " },
  { id: 34, link: `https://ajuda.zapmais.com/s`, heading: "How can I get your support? " },
  { id: 35, link: `https://ajuda.zapmais.com/s`, heading: "Is your site secure?  " },
  { id: 36, link: `https://ajuda.zapmais.com/s`, heading: "How to fix chrome not loading pages properly? " },
  { id: 37, link: `https://ajuda.zapmais.com/s`, heading: "Is it necessary to accept privacy and Cookies policy? " },
  { id: 38, link: `https://ajuda.zapmais.com/s`, heading: "Is it safe to use login via facebook & Google (social network)? " },
  { id: 39, link: `https://ajuda.zapmais.com/s`, heading: "How to: Troubleshoot Browser Issues? " }]);
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
        <div className="column-right">
          {/* <ClipLoader color={"#fff"} loading={loading} /> */}
          {stats.map((item1) => {
          return <p onClick={() => setIsSelected(true)}>{item1.heading}</p>
        })}
          {/* {!submit ? <div>
          <label htmlFor="floatingInput">Enter Name</label>
            <input type="name" className="form-control" id="floatingInput" placeholder="John Doe"
            onMouseEnter={(e) => setFormData({ ...formData, name: e.target.value })}  onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            <label htmlFor="floatingInput" style={{marginTop: 10}}>Enter Email Address</label>
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" 
            onMouseEnter={(e) => setFormData({ ...formData, email: e.target.value })}  onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <label htmlFor="floatingInput" style={{marginTop: 10}}>Mobile No.</label>
            <input type="phone" className="form-control" id="floatingInput" placeholder="name@example.com" 
            onMouseEnter={(e) => setFormData({ ...formData, mobile: e.target.value })}  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
            <div onClick={() => setSubmit(true)} style={{height: 25, width:60, borderRadius: 5, marginTop:15, backgroundColor: '#002532', justifyContent: 'center', alignItems: 'center', paddingLeft: 7}}><text>Submit</text></div>
          </div>
          :
          <p>Hi {formData.name}</p>}
        </div> */}
        </div>
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

export default OtherQuestions;
