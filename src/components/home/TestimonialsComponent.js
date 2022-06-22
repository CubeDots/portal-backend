
import { useEffect, useState } from 'react';
import { youtube_parser } from '../../common/Constants'
import axios from "axios";
import VideoPopUp from "../update/VideoPopUp";
function TestimonialsComponent() {
  let publicPath = process.env.PUBLIC_URL;
  const [testimonialsLoading, setTestimonialsLoading] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [isVideoModalShow, setIsVideoModalShow] = useState(false);
  const [activeVideoData, setActiveVideoData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const showVideoModal = (r) => {
    // console.log("showVideoModal clicked");
    setActiveVideoData(r);
    setIsVideoModalShow(true);
  }

  const closeVideoModal = () => {
    // console.log("closeVideoModal trigger");
    setIsVideoModalShow(false);
    setActiveVideoData(null);
  }
  async function fetchData() {
    setTestimonialsLoading(true);
    try {
      const res = await axios.get(publicPath + "/assets/data/testimonials.json");
      setTestimonials(res.data);
      setTestimonialsLoading(false);

    } catch (error) {
      // console.error("error ", error);
      setTestimonialsLoading(false);
    }
  }

  if (testimonialsLoading)
    return ("Please wait...");

  return (
    <>
      <div id="testimonialcarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          {testimonials && testimonials.map((row, i) =>
            <div className={i === 0 ? 'carousel-item active' : 'carousel-item'} key={i}>
              <div className="testimonial-block">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="testimonial-block_user_info testimonialContent">
                      <h3 className="testimonial-block_user_info_name testimonialNameHeading">{row.name}</h3>
                      <h5>{row.designation}</h5>
                      <div className="testimonial-block_content">
                        
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-quote testimonialQuote" viewBox="0 0 16 16">
                          <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                        </svg>{row.message}
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16">
                            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                          </svg>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="testimonial-block_user">
                      <div className="testimonial-block_user_image position-relative">
                        <img onClick={() => showVideoModal({ title: row.name + ' - ' + row.designation, youtube_url: row.youtube_url })} src={'https://img.youtube.com/vi/' + youtube_parser(row.youtube_url) + '/maxresdefault.jpg'} alt="" className='img-fluid' />
                        {/* <iframe width="560" height="315" src={row.youtube_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                        <div className="videoThumbnailBtn">
                          <img onClick={() => showVideoModal({ title: row.name + ' - ' + row.designation, youtube_url: row.youtube_url })} src={publicPath + "/assets/images/Play_button.svg"} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
        <div className="carouselNav">
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialcarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"><img alt="" src={publicPath + "/assets/images/left.svg"} /></span>
            <span className="visually-hidden">prev</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialcarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"><img alt="" src={publicPath + "/assets/images/right.svg"} /></span>
            <span className="visually-hidden">next</span>
          </button>
        </div>
      </div>
      <VideoPopUp show={isVideoModalShow} onHide={closeVideoModal} data={activeVideoData} />
    </>
  );
}

export default TestimonialsComponent;