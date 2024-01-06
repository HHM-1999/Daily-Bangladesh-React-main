import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DocumentTitle from "react-document-title";
import axios from 'axios'
import { scrollTop, ForLazyLoaderImg } from '../../AllFunctions'
import FBpagePlugin from '../FBpagePlugin'
import Squire01 from '../../AdsByGoogle/Squire01'
import Vertical01 from '../../AdsByGoogle/Vertical01'

var lazyloaded = false
var showMore = true
var limit = 8
var offset = 0

export default function VideoGallery() {
    const [state, setState] = useState([])
    const [state2, setState2] = useState([])
    const [state3, setState3] = useState([])

    useEffect(() => {
        // document.querySelectorAll('link[rel="canonical"]')[0].setAttribute('href', window.location.href)
        showMore = true
        offset = 11
        axios
            .get(`${process.env.REACT_APP_API_URL}videos/11`)
            .then(({ data }) => {
                if (data.webVideos.length > 0) {
                    setState(data.webVideos[0]);
                    setState2(data.webVideos.slice(1, 3));
                    setState3(data.webVideos.slice(3, 11));
                    setTimeout(function () {
                        lazyloaded = false
                        ForLazyLoaderImg(lazyloaded)
                    }, 1000);

                    if (data.webVideos.length < offset) {
                        showMore = false
                    }
                }

            });
        const timer = setTimeout(() => { window.location.reload(1); }, 300000);
        return () => clearTimeout(timer);
    }, [])

    const toggleButtonState = () => {
        axios
            .get(`${process.env.REACT_APP_API_URL}all-video/${limit}/${offset}`)
            .then(({ data }) => {
                offset += limit
                if (data.webVideos.length < limit) {
                    showMore = false
                }
                for (let i = 0; i < data.webVideos.length; i++) {
                    setState3(oldArray => [...oldArray, data.webVideos[i]]);
                }
                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);
            });
    };

    return (
        <>
            <main>
                <div className="container">
                    {/* <div className="SPSecTitle"><Link to="/video-gallery" onClick={scrollTop}><h2><img src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/Sign.png"} width={16} height={16} alt="Sign" title="Sign" /> ভিডিও গ্যালারী</h2></Link></div> */}
                    <div className="row">
                        <div className="col-sm-12">
                            <DocumentTitle title="ভিডিও গ্যালারী" />
                            <h2 className="mvp-feat1-pop-head"><Link to="/video-gallery" onClick={scrollTop}><span className="mvp-feat1-pop-head">ভিডিও গ্যালারী</span></Link></h2>
                        </div>
                    </div>
                    <div className="DVideoTopArea mt-4">
                        <div className="row">
                            <div className="col-lg-9 col-sm-12 border-right-inner">
                                <div className="row">
                                    {state &&
                                        <div className="col-lg-8 col-12 border-right-inner d-flex">
                                            <div className="DVideoCatTopInner align-self-stretch">
                                                <Link to={"/video/show/" + state.WebTVID} onClick={scrollTop}>
                                                    <div className="videoIcon">
                                                        <picture><img src={process.env.REACT_APP_LAZYL_IMG} data-src={"https://img.youtube.com/vi/" + state.WebTVLinkCode + "/0.jpg"} alt={state.WebTVHeading} title={state.WebTVHeading} className="img-fluid img100" /></picture>
                                                        <span className="play-btn-big"><i className="fas fa-play"></i></span>
                                                    </div>
                                                    <div className="Desc">
                                                        <div className="NewsTitle">
                                                            <h3 className="Title">{state.WebTVHeading}</h3>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    }
                                    <div className="col-lg-4 col-12 d-flex">
                                        <div className="DVideoCatListTop2 align-self-stretch">
                                            {state2.map((nc) => {
                                                return (
                                                    <div className="DVideoCatListTop2List align-self-stretch" key={nc.WebTVID}>
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
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-12">
                                <Squire01 />
                                <div className="fb-page-banner"><FBpagePlugin /></div>
                            </div>
                        </div>
                    </div>

                    <Vertical01 />

                    <div className="DVideoCatListTop4 mb-5">
                        <div className="row">
                            {state3.map((nc) => {
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
                    {showMore ?
                        <div id="btnDiv" className="text-center mt-4 mb-4"><button id="ajax-more-btn" className="btn btn-lg btn-block ButtonBG" onClick={toggleButtonState}>আরো পড়ুন</button></div>
                        : false}

                </div>
            </main>
        </>
    )
}
