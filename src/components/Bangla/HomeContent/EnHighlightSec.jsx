import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { scrollTop, ForLazyLoaderImg } from '../../AllFunctions'
var lazyloaded = false
export default function EnHighlightSec() {
    const [state, setState] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL_EN}json/file/generateSpecial2.json`)
            .then(({ data }) => {
                setState(data.data.slice(0, 4));
                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);
            });
    }, [])
    return (
        <>
            <div className="DEnHighlightBanner MobileHide">
                <Link to="/english/"><img className="img-fluid img100" src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/English-Highlights.jpg"} width={1278} height={45} alt="English Highlights" title="English Highlights" /></Link>
            </div>
            <div className="DEnHighlightBanner MobileShow">
                <Link to="/english/"><img className="img-fluid img100" src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/New-Site-Banner-5.jpg"} alt="English Highlights" title="English Highlights" /></Link>
            </div>
            <div className="DEnHighlightNews">
                <div className="row">
                    {state.map((nc) => {
                        return (
                            <div className="col-lg-3 col-sm-12 col-12" key={nc.ContentID}>
                                <div className="DEnHighlightList">
                                    <Link to={"/english/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
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
        </>
    )
}
