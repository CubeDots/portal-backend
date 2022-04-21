
import { useEffect, useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const ProjectSlider = (props) => {
    let publicPath = process.env.PUBLIC_URL;
    const [images, setImages] = useState([]);
    const [index, setIndex] = useState(0);
    const [next, setNext] = useState(1);
    const [nextNext, setNextNext] = useState(2);

    useEffect(() => {
        if (props.images.length > 0) {
            setImages(props.images);
        }
    }, [props]);

    const moveLeft = () => {
        let totalImages = images.length;
        //console.log("next click ", totalImages);
        let temp1 = index - 1;
        if (temp1 < 0) {
            setTimeout(() => {
                setIndex(totalImages - 1);
            }, 100)
        } else {
            setIndex(temp1);
        }
        let temp2 = next - 1;
        if (temp2 < 0) {
            setTimeout(() => {
                setNext(totalImages - 1);
            }, 100)
        } else {
            setNext(temp2);
        }
        let temp3 = nextNext - 1;
        if (temp3 < 0) {
            setTimeout(() => {
                setNextNext(totalImages - 1);
            }, 100)
        } else {
            setNextNext(temp3);
        }
        //console.log("data", index, next, nextNext)
    }

    const moveRight = () => {
        let totalImages = images.length;
        //console.log("right click ", totalImages);
        let temp1 = index + 1;
        setIndex(temp1 % totalImages);
        let temp2 = next + 1;
        setNext(temp2 % totalImages);
        let temp3 = nextNext + 1;
        setNextNext(temp3 % totalImages);
        //console.log("data", index, next, nextNext)
    }

    return (
        <>
            <div className="row">
                {images ?
                    (
                        <>
                            <div className="col-8 pe-0">
                                <LazyLoadImage
                                    effect="blur"
                                    src={images.length > 0 ? images[index].media_s3_base_path + images[index].local_path : publicPath + '/assets/images/home/01.jpg'}
                                    placeholderSrc={publicPath + "/assets/images/thumbnail.png"}
                                    className="img-fluid"
                                    visibleByDefault={true}
                                    alt="" />

                                {/* <img className="img-fluid" src={publicPath + images[index]} alt="" /> */}
                            </div>
                            <div className="col-4">
                                <div className="mbottom-12">
                                    <LazyLoadImage
                                        effect="blur"
                                        src={images.length > 0 ? images[next].media_s3_base_path + images[next].local_path : publicPath + '/assets/images/home/02.jpg'}
                                        placeholderSrc={publicPath + "/assets/images/thumbnail.png"}
                                        className="img-fluid"
                                        visibleByDefault={true}
                                        alt="" />
                                    {/* <img className="img-fluid" src={publicPath + images[next]} alt="" /> */}
                                </div>
                                <div>
                                    <LazyLoadImage
                                        effect="blur"
                                        src={images.length > 0 ? images[nextNext].media_s3_base_path + images[nextNext].local_path : publicPath + '/assets/images/home/02.jpg'}
                                        placeholderSrc={publicPath + "/assets/images/thumbnail.png"}
                                        className="img-fluid"
                                        visibleByDefault={true}
                                        alt="" />
                                    {/* <img className="img-fluid" src={publicPath + images[nextNext]} alt="" /> */}
                                </div>
                            </div>
                        </>
                    )
                    : 'Loading...'}
            </div>
            <div className="navigationBars">
                {images.length > 0 ?
                    (
                        <>
                            <div className="previous" onClick={() => moveLeft()}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                </svg>
                            </div>
                            <div className="count-section">
                                <div className="count-inner-section">
                                    <span>{index + 1} / {images.length}</span>
                                </div>
                            </div>
                            <div className="next" onClick={() => moveRight()}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </div>
                        </>
                    )
                    : ''}
            </div>
        </>
    )
}

export default ProjectSlider;