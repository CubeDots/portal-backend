import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Helmet from "../../components/HelmetMetaData"
import {FacebookShareButton, FacebookIcon} from "react-share";
class Appp extends Component {
   render() {
   const { classes } = this.props;
   return (
       <>
    {/* //  <div className={classes.root}> */}

    <Helmet>
        <meta property="og:image" content="https://staging.cubedots.com/" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="The Open Graph logo"></meta>
    </Helmet>
    <FacebookShareButton
     url={"https://staging.cubedots.com/"}
     quote={"Cubedots - World is yours to explore"}
     hashtag="#Cubedots-Portal"
     imageUrl={'https://staging.cubedots.com/'}
    >
      <FacebookIcon size={36} />
    </FacebookShareButton>
{/* //  </div> */}
</>
  )};
}
export default Appp;