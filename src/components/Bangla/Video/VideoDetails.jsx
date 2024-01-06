import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import DocumentTitle from "react-document-title";
import axios from 'axios'
import { banglaDateConvetar, scrollTop, ForLazyLoaderImg } from '../../AllFunctions'
import FBpagePlugin from '../FBpagePlugin'
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { EmailIcon, FacebookIcon, LinkedinIcon, TwitterIcon, WhatsappIcon } from "react-share";
import ErrorPageBn from '../ErrorPageBn';
import Squire01 from '../../AdsByGoogle/Squire01'

var lazyloaded = false
var cat
export default function VideoDetails() {
    const [videoPlay, setVideoPlay] = useState([]);
    const [videosList, setVideosList] = useState([]);
    const [pageURL, setPageURL] = useState(0);
    let { vid } = useParams();

    useEffect(() => {
        // document.querySelectorAll('link[rel="canonical"]')[0].setAttribute('href', window.location.href)
        axios
            .get(`${process.env.REACT_APP_API_URL}video-hit-count/${vid}`)
            .then(({ data }) => {
            })
        axios
            .get(`${process.env.REACT_APP_API_URL}videos-details/${vid}`)
            .then(({ data }) => {
                if (data.VideoDetails.length !== 0) {
                    setVideoPlay(data.VideoDetails[0]);
                    setTimeout(function () {
                        lazyloaded = false
                        ForLazyLoaderImg(lazyloaded)
                    }, 1000);
                } else {
                    setVideoPlay(null)
                }
                if (data.VideoDetails.length > 0) {
                    cat = data.VideoDetails[0].CategoryID.toString()
                    if (cat) {
                        cat = cat.split(',')[0]
                    }
                }
                axios
                    .get(`${process.env.REACT_APP_API_URL}details-video-latest/4/${vid}`)
                    .then(({ data }) => {
                        setVideosList(data.allLatestVideos);
                    })
            })
        setPageURL(window.location.href);
        const timer = setTimeout(() => { window.location.reload(1); }, 300000);
        return () => clearTimeout(timer);
    }, [vid])

    return (
        <>
            {videoPlay ?
                <main>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2 className="mvp-feat1-pop-head"><Link to="/video-gallery" onClick={scrollTop}><span className="mvp-feat1-pop-head">ভিডিও গ্যালারী</span></Link></h2>
                            </div>
                        </div>

                        <div className="DVideoDetailsArea mb-5 mt-4">
                            <div className="row">
                                <div className="col-lg-9 col-12 border-right-inner">
                                    <h1 className="Title BGTitle fw-bold mb-2">{videoPlay.WebTVHeading}</h1>
                                    <p className="VideoPublishDate"> <span>প্রকাশিত:</span> {videoPlay.create_date ? banglaDateConvetar((videoPlay.create_date).toString()) : ""} </p>
                                    <div className="DSocialTop mb-2">
                                        {/* social media button end */}
                                        <FacebookShareButton url={pageURL} title={videoPlay.WebTVHeading}>
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
                                    <div className="DVideoDetailsFrame" key={videoPlay.WebTVHeading}>
                                        <DocumentTitle title={videoPlay.WebTVHeading} />
                                        <div className="col-sm-12 video-container">
                                            {videoPlay.SourceType === "1" || videoPlay.SourceType === 1 ?
                                                <iframe className="embed-responsive-item" title="youtube-video" src={"https://www.youtube.com/embed/" + videoPlay.WebTVLinkCode + "?autoplay=1"} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                                                : videoPlay.SourceType === "2" || videoPlay.SourceType === 2 ?
                                                    <iframe src={"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebookapp%2Fvideos%2F" + videoPlay.WebTVLinkCode + "%2F&show_text=0&width=560"} title="facebook-video" width="560" height="315" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                                                    : videoPlay.SourceType === "3" || videoPlay.SourceType === 3 ?
                                                        <iframe src={"https://player.vimeo.com/video/" + videoPlay.WebTVLinkCode} title="vimeo-video" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                                                        : false}
                                        </div>
                                    </div>

                                    <div className="DSocialTop my-4">
                                        {/* social media button end */}
                                        <FacebookShareButton url={pageURL} title={videoPlay.WebTVHeading}>
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

                                    {videoPlay.Remarks ?
                                        <div className="Brief"><p dangerouslySetInnerHTML={{ __html: videoPlay.Remarks }} /></div>
                                        : false}
                                </div>

                                <div className="col-lg-3 col-12">
                                    <Squire01 />
                                    <div className="fb-page-banner"><FBpagePlugin /></div>
                                    <Squire01 />
                                </div>
                            </div>
                        </div>

                        <div className="DVideoCatListTop4 mb-5">
                            <div className="SPSecTitle"><Link to="/video-gallery" onClick={scrollTop}><h2><img src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/Sign.png"} width={16} height={16} alt="Sign" title="Sign" /> আরও দেখুন</h2></Link></div>
                            <div className="row">
                                {videosList.map((nc) => {
                                    return (
                                        <div className="col-lg-3 col-12 d-flex" key={nc.WebTVID}>
                                            <div className="DVideoCatListTop4List align-self-stretch">
                                                <Link to={"/video/show/" + nc.WebTVID} onClick={scrollTop}>
                                                    <div className="row">
                                                        <div className="col-lg-12 col-sm-4 col-5 videoIcon">
                                                            <picture><img src={process.env.REACT_APP_LAZYL_IMG} data-src={"https://img.youtube.com/vi/" + nc.WebTVLinkCode + "/0.jpg"} alt={nc.WebTVHeading} title={nc.WebTVHeading} className="img-fluid img100" /></picture>
                                                            <span className="play-btn-big"><i className="fas fa-play"></i></span>
                                                        </div>
                                                        <div className="col-lg-12 col-sm-8 col-7">
                                                            <div className="Desc">
                                                                <h3 className="Title">{nc.WebTVHeading}</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </main>
                : <ErrorPageBn />}
        </>
    )
}
