import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { scrollTop, ForLazyLoaderImg } from '../../AllFunctions'
var lazyloaded = false
export default function OpinionSec() {
    const [state, setState] = useState([])
    const [live, setLive] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateCategory23.json`)
            .then(({ data }) => {
                // setState(data.data.slice(0, 2));
                if (data.data) {
                    setState(data.data.slice(0, 2));
                    setTimeout(function () {
                        lazyloaded = false
                        ForLazyLoaderImg(lazyloaded)
                    }, 1000);
                }
            });
        axios
            .get(`${process.env.REACT_APP_API_URL}live-video`)
            .then(({ data }) => {
                if (data.livevideo.length !== 0) {
                    setLive(data.livevideo);
                } else setLive(null);
            });
    }, [])
    return (
        <>
            {live ?
                <div className='DOpinionBanner'>
                    {live.map((nc) => {
                        return (
                            <React.Fragment key={nc.WebLiveID}>
                                {nc.SourceType === 1 ?
                                    <iframe className="embed-responsive-item" width="100%" height="206" src={'https://www.youtube.com/embed/' + nc.WebTVLinkCode} title={nc.WebTVHeading} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                                    : nc.SourceType === 2 ?
                                        <div className="fb-wrapper">
                                            <iframe src={"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebookapp%2Fvideos%" + nc.WebTVLinkCode + "%2F&show_text=0"} title={nc.WebTVHeading} width="100%" height="314" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                                        </div>
                                        : nc.SourceType === 3 &&
                                        <iframe src={"https://player.vimeo.com/video/" + nc.WebTVLinkCode} title="vimeo-video" width="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>}
                            </React.Fragment>
                        )
                    })}
                </div> :
                <div className="DOpinionSec">
                    <div className="DOpinionBanner">
                        <Link to="/opinion"><img className="img-fluid img100" src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/New-Site-Banner-4.jpg"} width={304} height={40} alt="মুক্তকথা" title="মুক্তকথা" /></Link>
                    </div>
                    <div className="DOpinionNews">
                        {state.map((nc) => {
                            return (
                                <div className="DOpinionList" key={nc.ContentID}>
                                    <Link to={"/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                        <div className="row">
                                            {nc.writerImage ?
                                                <div className="col-lg-3 col-sm-2 col-3">
                                                    <picture><img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Writer + nc.writerImage} alt={nc.contentWriter} title={nc.contentWriter} className="img-fluid img100" /></picture>
                                                </div>
                                                :
                                                <div className="col-lg-3 col-sm-2 col-3 videoIcon">
                                                    <picture><img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + nc.ImageSmPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" /></picture>
                                                    {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn"><i className="fas fa-play"></i></span> : ""}
                                                </div>}
                                            <div className="col-lg-9 col-sm-10 col-9">
                                                <div className="Desc">
                                                    <h4 className="Title SMTitle2">{nc.ContentHeading}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
        </>
    )
}
