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
            <div className="my-2">
                Share it
                &nbsp;
                <FacebookShareButton
                url={'https://www.cubedots.com/cusocials/offers'}
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
                url={publicPath + 'https://www.cubedots.com/cusocials/' + props.data.category + '/' + props.data.featured_image }
                    // url={'imageUrl,whatsapp:https://www.cubedots.com/cusocials/offers'}
                >
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                &nbsp;
                <TelegramShareButton
                    url={publicPath + 'https://www.cubedots.com/cusocials/' + props.data.category + '/' + props.data.slug + props.data.featured_image}
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