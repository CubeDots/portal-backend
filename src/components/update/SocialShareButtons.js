import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HelmetMetaData from "../../components/HelmetMetaData"
import {FacebookShareButton, FacebookIcon} from "react-share";
class Appp extends Component {
   render() {
   const { classes } = this.props;
   return (
       <>
    {/* //  <div className={classes.root}> */}
   <HelmetMetaData title={"dfkjfk"}
          description={ 'this.state.blog.title + this.state.blog.author.name'}
          image={"https://cuengine-portal.s3.eu-west-2.amazonaws.com/cusocials/featured_image/1653032988_offers%20for%20web%20alya-03.jpg"}
      ></HelmetMetaData>
   <FacebookShareButton
     url={"https://ogp.me/"}
     quote={"CampersTribe - World is yours to explore"}
     hashtag="#camperstribe"
     imageUrl={'https://cuengine-portal.s3.eu-west-2.amazonaws.com/cusocials/featured_image/1653032988_offers%20for%20web%20alya-03.jpg'}
    height={"300px"}
    width={"300px"}
     //  className={classes.socialMediaButton}
   >
     <FacebookIcon size={36} />
   </FacebookShareButton>
{/* //  </div> */}
</>
  )};
}
export default Appp;