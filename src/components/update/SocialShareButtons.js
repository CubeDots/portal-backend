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
// const ImageUrll = "https://cuengine-portal.s3.eu-west-2.amazonaws.com/"
function SocialShareButtons(props) {
    let publicPath = process.env.PUBLIC_URL;
    const second_url = "https://cuengine-portal.s3.eu-west-2.amazonaws.com/" + props.data.featured_image;
    const image_url = "https://www.cubedots.com/cusocials/" + props.data.category + '/' + props.data.slug;

    const phpurl = 'https://www.cubedots.com/social_share.php?title=';
   
    if (!props.data)
        return "";

    return (
        <>
            <div className="my-2">
                Share it
                &nbsp;
                <FacebookShareButton
                    url={ phpurl + props.data.title + '&desc=' + props.data.long_description+'&img='+ second_url+ '&callback=' +  image_url}>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                &nbsp;
                <LinkedinShareButton
                    url={ phpurl +props.data.title+ '&desc=' + props.data.long_description + '&img='+second_url + '&callback='+image_url}>
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                &nbsp;
                <WhatsappShareButton
                    url={ phpurl +props.data.title+'&desc='+props.data.long_description+'&img='+second_url+'&callback='+image_url}>
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                &nbsp;
                <TelegramShareButton
                    url={ phpurl +props.data.title+'&desc='+props.data.long_description+'&img='+second_url+'&callback='+image_url}>
                    <TelegramIcon size={32} round />
                </TelegramShareButton>
                &nbsp;
                <EmailShareButton
                   url={ phpurl +props.data.title+'&desc='+props.data.long_description+'&img='+second_url+'&callback='+image_url}>
                    <EmailIcon size={32} round />
                </EmailShareButton>
            </div>
        </>
    );
}
export default SocialShareButtons;