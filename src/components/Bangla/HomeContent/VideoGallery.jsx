import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { scrollTop, ForLazyLoaderImg } from '../../AllFunctions'
var lazyloaded = false
export default function VideoGallery() {
    const [state, setState] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}videos/6`)
            .then(({ data }) => {
                setState(data.webVideos);
                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);
            });
    }, [])
    return (
        <>
            <div className="SPSecTitle"><Link to="/video-gallery" onClick={scrollTop}><h2><img src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/Sign.png"} width={16} height={16} alt="Sign" title="Sign" /> ভিডিও গ্যালারী</h2></Link></div>
            <div className="DVideoGallery">
                <div className="row">
                    {state.map((nc) => {
                        return (
                            <div className="col-lg-4 col-sm-6 co-6 d-flex" key={nc.WebTVID}>
                                <div className="DVideoGalleryTopList align-self-stretch">
                                    <Link to={"/video/show/" + nc.WebTVID} onClick={scrollTop}>
                                        <div className="row">
                                            <div className="col-lg-12 col-sm-3 col-5">
                                                <div className="DImgBlock">
                                                    <picture><img src={process.env.REACT_APP_LAZYL_IMG} data-src={'https://img.youtube.com/vi/' + nc.WebTVLinkCode + '/0.jpg'} alt={nc.WebTVHeading} title={nc.WebTVHeading} /></picture>
                                                    <span className="play-btn-big"><i className="fas fa-play"></i></span>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-sm-9 col-7">
                                                <div className="Desc"><h3 className="Title fw-bold">{nc.WebTVHeading}</h3></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}