
import React, { useEffect, useState } from 'react';
import Popover from 'react-bootstrap/Popover';
//import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
import { useIsAuthenticated } from 'react-auth-kit';
import BecomeOurPartnerModal from "../home/BecomeOurPartnerModal";

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


function PopoverDownloadButton(props) {
  const { row } = props;
  const [downLoading, setdownLoading] = useState(false);
  const [downLoadingPercentage, setdownLoadingPercentage] = useState(0);

  const isAuthenticated = useIsAuthenticated();

  const getFileDownload = async (row) => {
    setdownLoading(true);
    console.log("row.mime_type ", row.mime_type, row.path, row);
    let fileURL = row.path;
    console.log("fileURL", fileURL.replace(" ", "_"));
    let fileNameRename = row.name;
    let newFileName = fileNameRename.replace(" ", "_");
    let fileName = newFileName;
    setdownLoadingPercentage(0);
    try {
     
      await axios({
        url: decodeURI(fileURL),
        method: "GET",
        responseType: "blob", // important
        onDownloadProgress(progressEvent) {
          let progress = Math.round((progressEvent.loaded  * 100 ) / progressEvent.total);
          setdownLoadingPercentage(progress);
        }
      })
        // .then(resp => resp.blob())
        .then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", fileName); //or any other extension
          document.body.appendChild(link);
          link.click();
          window.URL.revokeObjectURL(url);
          setdownLoading(false);
        })
        .catch(error => {
          setdownLoading(false);
          console.log("Errors: ", error.message);
          return [];
        });

    } catch (error) {
      console.log("error ", error);
      setdownLoading(false);
      alert('File downloading failed.')
    }

    /* fetch(fileURL)
      .then(resp => resp.blob())
      .then(blob => {
        setdownLoading(false);
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        // the filename you want
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        // alert('your file has downloaded!'); // or you know, something with better UX...
      })
      .catch(() => alert('Download failed.')); 
    */

  };
  const [isBecomeOurPartnerModalShow, setIsBecomeOurPartnerModalShow] = useState(false);
  const showBecomeOurPartnerModal = () => {
    console.log("showBecomeOurPartnerModal clicked");
    setIsBecomeOurPartnerModalShow(true);
  }

  const closeBecomeOurPartnerModalModal = () => {
    console.log("closeBecomeOurPartnerModalModal trigger");
    setIsBecomeOurPartnerModalShow(false);
  }

  return (
    <>
      {isAuthenticated() ?
        <>
          {downLoading ?
            <button type="button" className="btn btn-sm btn-primary align-items-center" disabled >
              <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> {downLoadingPercentage ? downLoadingPercentage+'%' : ''} Downloading...
            </button>
            :
            <button type="button" className="btn btn-sm btn-primary align-items-center" onClick={() => getFileDownload(row)} >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
              </svg> {props.children}
            </button>
          }
        </>

        :
        <>
          <BecomeOurPartnerModal show={isBecomeOurPartnerModalShow} onHide={closeBecomeOurPartnerModalModal} />
          <button type="button" className="btn btn-sm btn-primary align-items-center mb-3" onClick={showBecomeOurPartnerModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
            </svg> {props.children}
          </button>
          {/* <OverlayTrigger
          trigger="click"
          overlay={<UpdatingPopover id="popover-contained">Login required.</UpdatingPopover>}
        >
          <button type="button" className="btn btn-sm btn-primary align-items-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
            </svg> {props.children}
          </button>
        </OverlayTrigger> */}
        </>
      }
    </>
  );
}

export default PopoverDownloadButton;