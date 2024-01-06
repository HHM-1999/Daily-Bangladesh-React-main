import React from "react";
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { EmailIcon, FacebookIcon, LinkedinIcon, TwitterIcon, WhatsappIcon } from "react-share";

export default function SocialShare({ title, pageURL }) {
    return (
        <div className="DSocialTop">
            {/* social media button end */}
            <FacebookShareButton url={pageURL} title={title}>
                <FacebookIcon size={30} round={true} />
            </FacebookShareButton>
            <LinkedinShareButton url={pageURL}>
                <LinkedinIcon size={30} round={true} />
            </LinkedinShareButton>
            <TwitterShareButton url={pageURL}>
                <TwitterIcon size={30} round={true} />
            </TwitterShareButton>
            <EmailShareButton url={pageURL} body="mailto:newsroom@daily-bangladesh.com">
                <EmailIcon size={30} round={true} />
            </EmailShareButton>
            <WhatsappShareButton url={pageURL}>
                <WhatsappIcon size={30} round={true} />
            </WhatsappShareButton>
            {/* social media button end */}
        </div>
    )
}
