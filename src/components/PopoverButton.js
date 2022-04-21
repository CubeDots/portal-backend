
import React, { useState } from 'react';
import Popover from 'react-bootstrap/Popover';
import { useNavigate } from "react-router-dom";

//import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { useIsAuthenticated } from 'react-auth-kit';
import BecomeOurPartnerModal from "./home/BecomeOurPartnerModal";

// const UpdatingPopover = React.forwardRef(
//   ({ popper, children, show: _, ...props }, ref) => {
//     useEffect(() => {
//       console.log('updating!');
//       popper.scheduleUpdate();
//     }, [children, popper]);

//     return (
//       <Popover ref={ref} body {...props}>
//         {children}
//       </Popover>
//     );
//   },
// );


function PopoverButton(props) {
  const { to } = props;
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  //const content = "Unauthenticated";

  const [isBecomeOurPartnerModalShow, setIsBecomeOurPartnerModalShow] = useState(false);
  const showBecomeOurPartnerModal = () => {
    console.log("showBecomeOurPartnerModal clicked");
    setIsBecomeOurPartnerModalShow(true);
  }

  const closeBecomeOurPartnerModalModal = () => {
    console.log("closeBecomeOurPartnerModalModal trigger");
    setIsBecomeOurPartnerModalShow(false);
  }

  const redirectPage = () => {
    //console.log(" redirectPage clicked");
    if (isAuthenticated()) {
      return navigate(to);
      //   return (
      //     <Navigate to={to} />
      //   );
    }
  }


  // const [content, setContent] = useState(shortContent);

  // useEffect(() => {
  //     console.log("PopoverButton props ",props);
  //   const timerId = setInterval(() => {
  //     setContent(content === shortContent ? longContent : shortContent);
  //   }, 3000);

  //   return () => clearInterval(timerId);
  // });

  return (
    <>
      <BecomeOurPartnerModal show={isBecomeOurPartnerModalShow} onHide={closeBecomeOurPartnerModalModal} />
      {/* <OverlayTrigger
        trigger="click"
        overlay={
          <UpdatingPopover id="popover-contained">Login required.</UpdatingPopover>
        } 
      >*/}
        {isAuthenticated() ? 
        <button type="button" className="btntheme" onClick={redirectPage}>{props.children}</button> 
        : <button type="button" className="btntheme" onClick={showBecomeOurPartnerModal}>{props.children}</button>
        }
        
      {/* </OverlayTrigger> */}
    </>
  );
}

export default PopoverButton;