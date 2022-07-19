import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton,
  Instagram,
} from "react-share";
import {
  FacebookIcon,
  TelegramIcon,
  WhatsappIcon,
  LinkedinIcon,
  EmailIcon,
  InstagramIcon,
} from "react-share";
import { width } from "@mui/system";

function openTab(opnUrl) {  
  window.open(opnUrl);
}

//alert('calling...');
// const ImageUrll = "https://cuengine-portal.s3.eu-west-2.amazonaws.com/"
function SocialShareButtons(props) {
  
  let publicPath = process.env.PUBLIC_URL;
  const second_url =
    "https://cuengine-portal.s3.eu-west-2.amazonaws.com/" +props.data.featured_image;
  const image_url =
    "https://www.cubedots.com/cusocials/" + props.data.category +"/" +props.data.slug;

  const phpurl = "https://www.cubedots.com/social_share.php?title=";

  const emailurl = "https://www.cubedots.com/social_share.php?callback="+image_url;

  const openURL = "mailto:?subject="+props.data.title+"&body=Please visit site once"+emailurl;

  const maxlength = 100;

  if (!props.data) return "";

  return (
    <>
      <div className="my-2">
        Share it &nbsp;
        <FacebookShareButton
          url={
            phpurl +
            props.data.title +
            "&desc=" +
            `${props.data.medium_description.substring(0, 100)}` +
            "&img=" +
            second_url +
            "&callback=" +
            image_url+"&type=f"
          }
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        &nbsp;
        <LinkedinShareButton
          url={
            phpurl +
            props.data.title +
            "&desc=" +
            `${props.data.medium_description.substring(0, 100)}` +
            "&img=" +
            second_url +
            "&callback=" +
            image_url+"&type=l"
          }
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        &nbsp;
        
        <TelegramShareButton
          url={
            phpurl +
            props.data.title.replace(/\s+/g, '_') +
            "&desc=" +
            `${props.data.medium_description.substring(0, 100).replace(/\s+/g, '_')}` +
            "&img=" +
            second_url +
            "&callback=" +
            image_url+"&type=t"
          }
        >
          <TelegramIcon size={32} round />
        </TelegramShareButton>

        &nbsp;
        {/*
        <WhatsappShareButton
          url={
            phpurl +
            props.data.title +
            "&desc=" +
            `${props.data.medium_description}` +
            "&img=" +
            second_url +
            "&callback=" +
            image_url
          }
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        &nbsp;        
        <a className="video-email_button button-hover" href="#"  onClick={() => openTab(openURL)} >            
            <svg className="video-email_button-text" viewBox="0 0 64 64" width="32" height="32"><circle cx="32" cy="32" r="31" fill="#7f7f7f"></circle><path d="M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z" fill="white"></path></svg>
        </a> 
        */}
      </div>
    </>
  );
}
export default SocialShareButtons;
