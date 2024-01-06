import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import axios from 'axios'
import { scrollTop, ForLazyLoaderImg } from '../../../AllFunctions'
var lazyloaded = false
export default function ElectionEng() {
    const [state, setState] = useState([])

    const [isSkeletonLoading, setIsSkeletonLoading] = useState(true);
    useEffect(() => {
        setIsSkeletonLoading(true)
        axios
            .get(`${process.env.REACT_APP_API_URL_EN}json/file/generateSpecial8.json`)
            .then(({ data }) => {
                if (data.data) {
                    setState(data.data.slice(0, 4));
                    setIsSkeletonLoading(false)
                    setTimeout(function () {
                        lazyloaded = false
                        ForLazyLoaderImg(lazyloaded)
                    }, 1000);
                }
            });
    }, [])
    return (
        <>
            <div className="DElectionSection">
                <div className="DElectionBanner">
                    <Link to="/tags/সালতামামি ২০২৩" onClick={scrollTop}>
                        {window.innerWidth > 990 ?
                            <img className="img-fluid img100" src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/Year-banner.jpg"} width={305} height={100} alt="Look Back 2023" title="Look Back 2023" /> :
                            <img className="img-fluid img100" src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/Year-banner.jpg"} width={305} height={100} alt="Look Back 2023" title="Look Back 2023" />}
                    </Link>
                </div>
                <div className="DElectionNews">
                    {isSkeletonLoading ? <>
                        {Array(4).fill("").map((nc) => (
                            <div className="DElectionNewsList" key={nc.ContentID}>
                                <Link to={"/"}>
                                    <div className="row">
                                        <div style={{ width: '76%' }}>
                                            <Skeleton count={2} />
                                        </div>
                                        <div className="col-lg-3 col-sm-2 col-3 videoIcon" style={{ width: '24%' }}>
                                            <Skeleton width={66} height={66} />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </> : <>
                        {state.map((nc) => {
                            return (
                                <div className="DRightlist En" key={nc.ContentID}>
                                    <Link to={"/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                        <div className="row">
                                            <div className="col-lg-3 col-sm-2 col-3 videoIcon">
                                                <picture><img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + nc.ImageThumbPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" /></picture>
                                                {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn"><i className="fas fa-play"></i></span> : ""}
                                            </div>
                                            <div className="col-lg-9 col-sm-10 col-9 align-items-center d-flex">
                                                <div className="Desc"><h5 className="Title SMTitle2">{nc.ContentHeading}</h5></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </>}
                </div>
            </div>
        </>
    )
}
