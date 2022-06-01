import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    RedditShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    MailruShareButton,
    ViberShareButton,
    WorkplaceShareButton,
    LineShareButton,
    EmailShareButton,
} from 'react-share';
import {
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon,
    GooglePlusIcon,
    LinkedinIcon,
    PinterestIcon,
    VKIcon,
    OKIcon,
    RedditIcon,
    TumblrIcon,
    LivejournalIcon,
    MailruIcon,
    ViberIcon,
    WorkplaceIcon,
    LineIcon,
    EmailIcon,
} from 'react-share';


function SocialShareButtons(props) {
    let publicPath = process.env.PUBLIC_URL;

    if (!props.data)
        return "";

    return (
        <>
            <Helmet>
                {/* <meta property="og:image" content="https://staging.cubedots.com/" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="300" />
                <meta property="og:image:height" content="300" />
                <meta property="og:image:alt" content="The Open Graph logo"></meta> */}
                <meta property="og:title" content="About us" />
                <meta property="og:image" content="https://staging.cubedots.com/assets/images/aboutus/aboutus.jpg" />
                <meta property="og:image:secure_url" content="https://staging.cubedots.com/assets/images/aboutus/aboutus.jpg" />
                <meta property="og:image" content="aboutus.jpg" />
                <meta property="og:image:width" content="140" />
                <meta property="og:image:height" content="140" />
            </Helmet>
          
            <div className="my-2">
                Share it
                &nbsp;
                <FacebookShareButton
                    url='https://staging.cubedots.com'
                // url={publicPath + '/cusocials/' + props.data.category + '/' + props.data.slug}
                // quote={props.data.title}
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                &nbsp;
                <LinkedinShareButton
                    url={'https://www.cubedots.com/cusocials/offers'}
                    quote={props.data.title}
                >
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                &nbsp;
                <WhatsappShareButton
                    url={publicPath + 'https://www.cubedots.com/cusocials/' + props.data.category + '/' + props.data.slug}
                // url={'imageUrl,whatsapp:https://www.cubedots.com/cusocials/offers'}
                >
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                &nbsp;
                <TelegramShareButton
                    url={publicPath + 'https://www.cubedots.com/cusocials/' + props.data.category + '/' + props.data.slug}
                    title={props.data.title}
                >
                    <TelegramIcon size={32} round />
                </TelegramShareButton>
                &nbsp;
                <EmailShareButton
                    url={publicPath + 'https://www.cubedots.com/cusocials/' + props.data.category + '/' + props.data.slug}
                    subject={props.data.title}
                    body={props.data.small_description}
                >
                    <EmailIcon size={32} round />
                </EmailShareButton>

            </div>
        </>
    );


}

export default SocialShareButtons;