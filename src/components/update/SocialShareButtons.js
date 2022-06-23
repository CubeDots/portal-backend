import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    EmailShareButton,
} from 'react-share';
import {
    FacebookIcon,
    TelegramIcon,
    WhatsappIcon,
    LinkedinIcon,
    EmailIcon,
} from 'react-share';

//alert('calling...');
const ImageUrll = "https://cuengine-portal.s3.eu-west-2.amazonaws.com/"
function SocialShareButtons(props) {
    let publicPath = process.env.PUBLIC_URL;

    const image_url = "https://cuengine-portal.s3.eu-west-2.amazonaws.com/" + props.data.featured_image;
    const [title , setTitle] = useState(props.data.title);
    const [imageurl , setImageurl] = useState(image_url);
    const [description , setDescription] = useState(props.data.long_description);

    document.querySelector('meta[property="og:title"]').setAttribute("content", title);
    document.querySelector('meta[property="og:image"]').setAttribute("content", imageurl);
    document.querySelector('meta[property="og:url"]').setAttribute("content", 'https://staging.cubedots.com/');
    document.querySelector('meta[property="og:description"]').setAttribute("content", description);

    

    const TitleClickHandler = (props) =>{
        setTitle(props.data.title)
    }

    const ImageUrlHandler = () =>{
        setImageurl(imageurl)
    }

    const DescritionHandler = (props) =>{
        setDescription(props.data.long_description)
    }

    if (!props.data)
        return "";

    return (
        <>
            <div className="my-2">
                Share it
                &nbsp;
                <FacebookShareButton
                    url={imageurl}
                    // url={'imageUrl,whatsapp:https://www.cubedots.com/cusocials/offers'}
                    onImageurl={ImageUrlHandler}
                    onTitle={TitleClickHandler}
                    onDescription={DescritionHandler}
                    >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                &nbsp;
                <LinkedinShareButton
                    url={'https://www.cubedots.com/cusocials/offers'}
                    quote={props.data.title}>
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                &nbsp;
                <WhatsappShareButton
                    url={publicPath + 'https://www.cubedots.com/cusocials/' + props.data.category + '/' + props.data.slug}
                    // url={'imageUrl,whatsapp:https://www.cubedots.com/cusocials/offers'}
                    imageUrl={image_url}>
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                &nbsp;
                <TelegramShareButton
                    url={publicPath + 'https://www.cubedots.com/cusocials/' + props.data.category + '/' + props.data.slug}
                    title={props.data.title}>
                    <TelegramIcon size={32} round />
                </TelegramShareButton>
                &nbsp;
                <EmailShareButton
                    url={publicPath + 'https://www.cubedots.com/cusocials/' + props.data.category + '/' + props.data.slug}
                    subject={props.data.title}
                    body={props.data.small_description}>
                    <EmailIcon size={32} round />
                </EmailShareButton>

            </div>
           

        </>
    );


}

export default SocialShareButtons;