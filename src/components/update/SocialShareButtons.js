import { Link } from 'react-router-dom';

import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TelegramShareButton,
    TelegramIcon,
    EmailShareButton,
    EmailIcon,
} from 'next-share';

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
                    url={publicPath + '/cusocials/' + props.data.category + '/' + props.data.slug}
                    quote={props.data.title}
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                &nbsp;
                <LinkedinShareButton
                    url={publicPath + '/cusocials/' + props.data.category + '/' + props.data.slug}
                    quote={props.data.title}
                >
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                &nbsp;
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={'https://web.whatsapp.com/send?phone=905443825121&text=Hi'}
                    title={props.data.title}
                >
                    <WhatsappIcon size={32} round />
                </a>
                &nbsp;
                <TelegramShareButton
                    url={publicPath + '/cusocials/' + props.data.category + '/' + props.data.slug}
                    title={props.data.title}
                >
                    <TelegramIcon size={32} round />
                </TelegramShareButton>
                &nbsp;
                <EmailShareButton
                    url={publicPath + '/cusocials/' + props.data.category + '/' + props.data.slug}
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