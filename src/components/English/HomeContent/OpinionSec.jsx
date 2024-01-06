import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { scrollTop, ForLazyLoaderImg } from '../../AllFunctions'
var lazyloaded = false
export default function OpinionSec() {
    const [state, setState] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL_EN}json/file/generateCategory22.json`)
            .then(({ data }) => {
                if (data.data) {
                    setState(data.data.slice(0, 2));
                    // setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                    // }, 1000);
                }
            });
    }, [])
    return (
        <>
            <div className="DOpinionSec">
                <div className="DOpinionBanner">
                    <Link to="/english/opinion"><img className="img-fluid img100" src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/Opinion-banner-en.jpg"} alt="Opinion" title="Opinion" /></Link>
                </div>
                <div className="DOpinionNews">
                    {state.map((nc) => {
                        return (
                            <div className="DOpinionList" key={nc.ContentID}>
                                <Link to={"/english/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                    <div className="row">
                                        <div className="col-lg-3 col-sm-2 col-3 videoIcon">
                                            {nc.writerImage ?
                                                <picture><img src={process.env.REACT_APP_LAZYL_IMG_En} data-src={process.env.REACT_APP_IMG_Writer + nc.writerImage} alt={nc.contentWriter} title={nc.contentWriter} className="img-fluid img100" /></picture>
                                                :
                                                <>
                                                    <picture><img src={process.env.REACT_APP_LAZYL_IMG_En} data-src={process.env.REACT_APP_IMG_Path + nc.ImageThumbPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" /></picture>
                                                    {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn"><i className="fas fa-play"></i></span> : ""}
                                                </>
                                            }
                                        </div>
                                        <div className="col-lg-9 col-sm-10 col-9 d-flex align-items-center">
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
        </>
    )
}
