import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { scrollTop, ForLazyLoaderImg } from '../../AllFunctions'
var lazyloaded = false

export default function SpecialEvent() {
    const [state, setState] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateSpecial13.json`)
            .then(({ data }) => {
                setState(data.data.slice(0, 6));
                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);
            });
    }, [])
    return (
        <>
            <div className="DSpecialEventMBanner">
                <div className="row">
                    <div className="col-lg-12 col-sm-12">
                        <img className="img-fluid img100" src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/Metro-mobile.jpg"} alt="মেট্রোরেল" title="মেট্রোরেল" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-5">
                    <div className="DSpeENewsSec">
                        <div className="row">
                            {state.map((nc) => {
                                return (
                                    <div className="col-lg-6 col-sm-6" key={nc.ContentID}>
                                        <div className="DSENList">
                                            <Link to={"/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                                <div className="row">
                                                    <div className="col-lg-5 col-sm-3 col-5 videoIcon">
                                                        <picture><img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + nc.ImageThumbPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" /></picture>
                                                        {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn"><i className="fas fa-play"></i></span> : ""}
                                                    </div>
                                                    <div className="col-lg-7 col-sm-9 col-7">
                                                        <div className="Desc">
                                                            <h3 className="Title">{nc.ContentHeading}</h3>
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
            </div>
        </>
    )
}
