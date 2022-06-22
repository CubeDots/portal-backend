import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
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
    const image_url = "https://cuengine-portal.s3.eu-west-2.amazonaws.com/"+props.data.featured_image;
    document.querySelector('meta[property="og:image"]').setAttribute("content", "https://cuengine-portal.s3.eu-west-2.amazonaws.com/" + props.data.featured_image);
    document.querySelector('meta[property="og:title"]').setAttribute("content", props.data.title);
    document.querySelector('meta[property="og:description"]').setAttribute("content", props.data.long_description);
    document.querySelector('meta[property="og:image:height"]').style.height = "100px";
    document.querySelector('meta[property="og:image:width"]').style.width = "100px";
    if (!props.data)
        return "";

    return (
        <>
            <div className="my-2">
                Share it
                &nbsp;
                <FacebookShareButton
                    url={publicPath + 'https://staging.cubedots.com/cusocials/' + props.data.category + '/' + props.data.slug}
                    // url={'imageUrl,whatsapp:https://www.cubedots.com/cusocials/offers'}
                    imageUrl={'og:image'}
                    title={props.data.title}
                    description={props.data.long_description}>
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