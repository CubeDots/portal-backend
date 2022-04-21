import React, { useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import ReactPlayer from 'react-player/lazy'


function VideoPopUp(props) {
    let publicPath = process.env.PUBLIC_URL;

    useEffect(() => {
        //
        console.log(props.data);
    }, [props]);

    return (
        <>
            <Modal {...props} backdrop="static" keyboard={false} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header className="p-2" closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.data ? props.data.title : ''}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-0">
                    {props.data ?
                        <>
                            <div className='player-wrapper'>
                                <ReactPlayer
                                    className='react-player'
                                    controls={true}
                                    url={props.data.youtube_url}
                                    width='100%'
                                    height='100%'
                                />
                            </div>


                            {/* <iframe title={props.data.id} src={`${props.data.youtube_url}`} width="100%" height="100%" frameBorder="0" style={{ border: 0, height: 'calc(100vh - 6px)' }} loading="lazy" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe> */}
                        </>
                        : ''}
                </Modal.Body>
            </Modal>

        </>
    )
}
export default VideoPopUp;