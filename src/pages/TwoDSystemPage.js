import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { API_ENDPOINT } from '../common/Constants';


function TwoDSystemPage() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [projectLoading, setProjectLoading] = useState(false);
  const [project, setProject] = useState(null);

  async function fetchProject() {
    setProjectLoading(true);
    try {
      const res = await axios.get(API_ENDPOINT + "projects/show/" + id);
      if (res.data.data) {
        setProjectLoading(false);
        setProject(res.data.data);
      }
    } catch (error) {
      console.error("error ", error);
      setProjectLoading(false);
    }
  }

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);
  useEffect(() => {
    window.scrollTo({top:0})
}, [])

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


  useEffect(() => {
    window.scrollTo({ top:0,left:0,behavior:'smooth'});
    fetchProject();
    // setTimeout(() => {
    //   openFullscreen();
    // }, 5000);
  }, []);

  return (
    <>
      {projectLoading ?
        <>
          <div className="text-center">Loading...</div>
        </>
        :
        <>
          {project ?
            <div>
              {project.is_2d_enabled ?
                <>
                  <div className="col-auto twoDbackBtn">
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
                  <iframe id="twoDSales" title="2DSales" src={`${project.portal_2d_url}`} width="100%" height="100%" frameBorder="0" style={{ border: 0, height: '100vh' }} loading="lazy" allowFullScreen></iframe></>
                :
                <><div className="text-center">2d system is not available.</div></>
              }
            </div>
            :
            <><div className="text-center">No data available.</div></>
          }
        </>
      }
    </>
  );
}

export default TwoDSystemPage;