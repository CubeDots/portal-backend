import { useEffect, useState } from "react";
import { useParams, useNavigate, Link, Navigate } from "react-router-dom";
import { useAuthHeader, useIsAuthenticated } from 'react-auth-kit';
import Platform from 'react-platform-js';
import axios from "axios";
import UnauthenticatedPage from "../errors/Unauthorized";
import { API_ENDPOINT } from '../common/Constants';


// function idleLogout() {
//   var t;
//   window.onload = resetTimer;
//   window.onmousemove = resetTimer;
//   window.onmousedown = resetTimer;  // catches touchscreen presses as well      
//   window.ontouchstart = resetTimer; // catches touchscreen swipes as well      
//   window.ontouchmove = resetTimer;  // required by some devices 
//   window.onclick = resetTimer;      // catches touchpad clicks as well
//   window.onkeydown = resetTimer;   
//   document.onkeypress = resetTimer;
//   window.addEventListener('scroll', resetTimer, true); // improved; see comments

//   function yourFunction() {
//       // your function for too long inactivity goes here
//       // e.g. window.location.href = 'logout.php';
//       window.location.href = "https://www.cubedots.com/projects";
//   }

//   function resetTimer() {
//       clearTimeout(t);
//       t = setTimeout(yourFunction, 10000);  // time is in milliseconds
//   }
// }
// idleLogout();

/* SET TIME-OUT FUCNTION FOR PROMPT USER TO CONTINUE CURRENT SESSION OR NOT */
// let timeoutHandler = null;
// function mm(){        
//     var cc = window.confirm("Are you continue with current session?");   
//     //console.log("result", cc);     
//     if(cc === true ){
//         clearTimeout(timeoutHandler);
//         timeoutHandler = setTimeout(mm, 10*60*1000);
//         return false;
//     }else{
//         window.location.href = "https://www.cubedots.com/projects/";//document.write(document.referrer);//
//     }
// }
// timeoutHandler = setTimeout(mm, 10*60*1000);

function redfun(){
  window.location.href = "https://www.cubedots.com/projects/";//document.write(document.referrer);//
}

function ThreeDSystemPage() {
  let { id, sdk } = useParams();
  const authHeader = useAuthHeader();
  const isAuthenticated = useIsAuthenticated();
  let navigate = useNavigate();
  const [projectStreamLoading, setProjectStreamLoading] = useState(false);
  const [projectStream, setProjectStream] = useState(null);
  const [idealMsg, setIdealMsg]=useState("");

     
function showDiv1() {
  document.getElementById("ideldiv1").style.display = "grid";
  setTimeout(redfun, 6*60*1000);
}

function hideDiv1() {
  document.getElementById("ideldiv1").style.display = "none";
}

//SET TIME-OUT FUCNTION FOR PROMPT USER TO CONTINUE CURRENT SESSION OR NOT
function idleLogout() {
    var t;
    window.onload = resetTimer;
    window.onmousemove = resetTimer;
    window.onmousedown = resetTimer;  // catches touchscreen presses as well      
    window.ontouchstart = resetTimer; // catches touchscreen swipes as well      
    window.ontouchmove = resetTimer;  // required by some devices 
    window.onclick = resetTimer;      // catches touchpad clicks as well
    window.onkeydown = resetTimer;   
    window.addEventListener('scroll', resetTimer, true); // improved; see comments

    function yourFunction() {
        
        setTimeout(showDiv1(), 5000); // after 15 sec
    }

    function resetTimer() {
        hideDiv1();
        clearTimeout(t);
        t = setTimeout(yourFunction, 10000);  // time is in milliseconds
    }
}
idleLogout();

  useEffect(() => {
    fetchProjectStream();
    console.log("Platform ", Platform);
    
  }, []);

//   function mm(){
//     var cc = window.confirm("Are you continue with current session?");
//     if(cc === true ){            
//         //setTimeout(mm, 10000);        
//     }else{
//       window.location.href = 'http://localhost:3000/projects/';
//     }
// }
// setTimeout(mm, 10000);

  if (!isAuthenticated()) {
    // Redirect to login
    console.log("valid Redirect to login");
    return (
      <>
        <UnauthenticatedPage />
        {/* <Navigate to="/401" replace /> */}
      </>
    );
  }


  async function fetchProjectStream() {
    setProjectStreamLoading(true);
    let postData = {
      test: null,
      project_id: id
    };
    try {

      const res = await axios.post(API_ENDPOINT + "vagon/getStream", postData, { headers: { Authorization: authHeader() } });
      if (res.data.data) {
        setProjectStreamLoading(false);
        setProjectStream(res.data.data);
      }
    } catch (error) {
      console.error("error ", error);
      setProjectStreamLoading(false);

      if (error.response.status === 422) {
        console.log("errors data ", error.response.data.errors);
        let errors = error.response.data.errors;
        if (errors.client_code === 4601) {
          alert("Insufficient Capacity. Please try again later.");
        }
        // console.log("error \n", error.response.data.message)
        // setFormValidationErrors(error.response.data.errors);
        // setFormErrors(error.response.data.message);
        // setTimeout(() => {
        //     setFormValidationErrors({});
        //     setFormErrors('');
        // }, 5000);
      }

    }
  }



  const mobileCheck = () => {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipad|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };



  // 896.992
  //const userId = auth().user.id;
  const token = authHeader();
  const simpleToken = token.replace('Bearer ', '-token%20');

  let devicePlatform = '';
  if (Platform.OS === 'Android' && Platform.DeviceType === 'mobile')
    devicePlatform = 'Android';
  else if (Platform.OS === 'iOS' && Platform.DeviceType === 'mobile')
    devicePlatform = 'iPhone';
  else if (Platform.OS === 'iOS' && Platform.DeviceType === 'tablet')
    devicePlatform = 'iPad';
  else
    devicePlatform = 'Desktop';

    function openFullscreen() {
      var elem = document.getElementsByTagName("iframe")[0];//document.getElementById("twoDSales");
  
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      } else if (elem.mozRequestFullScreen) { /* moz */
        elem.mozRequestFullScreen();
      } else if (elem.webkitEnterFullScreen) {
        elem.webkitEnterFullScreen();
      } else {
        //elem.webkitEnterFullscreen();
        alert('The requested browser does not support full-screen mode.');
      }
    }
  return (
    <>
    <div id="ideldiv1" className="text-center fw-bold idelModal">
     Are you continue with current session?
    </div>
      {projectStreamLoading ?
        <>
          <div className="text-center">Loading...</div>
        </>
        :
        <>
          {projectStream ?
            <div id="parentDiv">
              {projectStream.project.is_3d_enabled ?
                <>
                  <div className="col-auto twoDbackBtn" id="childDiv">
                    <Link title="Back" className="cusocialBackBtn" to={"/projects/" + id}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                      </svg>
                    </Link>
                    &nbsp;
                    <button title="FullScreen" className="cusocialBackBtn" onClick={() => openFullscreen()}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-fullscreen" viewBox="0 0 16 16">
                        <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z" />
                      </svg>
                    </button>
                  </div>
                  <iframe title="3Dstream" src={`${projectStream.stream.vagon_stream_url}?launchFlags=${simpleToken}%20-platform%20${devicePlatform}`} width="100%" height="100%" style={{ border: 0, margin:0, height: 'calc(100vh - 8px)' }} allowFullScreen={true} ></iframe>
                </>
                :
                <><div className="text-center">3d system is not available.</div></>
              }
            </div>
            :
            <><div className="text-center">No data available.</div></>
          }
        </>
      }

      {/* <iframe title="3Dstream" src={`https://furioos.cubedots.com/?playerId=${sdk}&token=${simpleToken}`} width="100%" height="100%" frameBorder="0" style={{ border: 0 , height:'calc(100vh - 50px)'}} loading="lazy" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe> */}
    </>
  );
}

export default ThreeDSystemPage;