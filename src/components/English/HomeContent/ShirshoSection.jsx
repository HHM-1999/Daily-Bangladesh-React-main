import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import axios from 'axios'
import { scrollTop, ForLazyLoaderImg } from '../../AllFunctions'
var lazyloaded = false
export default function ShirshoSection() {
    const [state, setState] = useState([])

    const [isSkeletonLoading, setIsSkeletonLoading] = useState(true);
    useEffect(() => {
        setIsSkeletonLoading(true)
        axios
            .get(`${process.env.REACT_APP_API_URL_EN}json/file/generateSpecial6.json`)
            .then(({ data }) => {
                if (data.data) {
                    setState(data.data.slice(0, 5));
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
            <div className="DShirshoSection">
                <div className="DShirshoBanner">
                    {/* <Link to="/english/special-top-1" onClick={scrollTop}><img className="img-fluid img100" src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/Top-News-en.jpg"} alt="shirshi-news" title="shirshi-news" /></Link> */}
                    <img className="img-fluid img100" src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/Top-News-en.jpg"} alt="Top News" title="Top News" />
                </div>
                <div className="DShirshoNews">
                    {isSkeletonLoading ? <>
                        {Array(5).fill("").map((nc, i) => (
                            <div className="DShirshoNewsList" key={i}>
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
                                <div className="DShirshoNewsList En" key={nc.ContentID}>
                                    <Link to={"/english/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                        <div className="row">
                                            <div className="col-lg-9 col-sm-10 col-9 align-items-center d-flex">
                                                <div className="Desc"><h5 className="Title SMTitle2">{nc.ContentHeading}</h5></div>
                                            </div>
                                            <div className="col-lg-3 col-sm-2 col-3 videoIcon">
                                                <picture><img src={process.env.REACT_APP_LAZYL_IMG_En} data-src={process.env.REACT_APP_IMG_Path + nc.ImageThumbPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" /></picture>
                                                {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn"><i className="fas fa-play"></i></span> : ""}
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
