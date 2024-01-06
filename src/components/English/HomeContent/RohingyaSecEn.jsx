import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { scrollTop, ForLazyLoaderImg } from '../../AllFunctions'
var lazyloaded = false
export default function RohingyaSecEn() {
    const [state, setState] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL_EN}json/file/generateSpecial3.json`)
            .then(({ data }) => {
                if (data.data.length > 0) {
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
            <div className="DRohingyaSec">
                <div className="DRohingyaBanner">
                    <img className="img-fluid img100" src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/Rohingya-Issue.jpg"} alt="Rohingya Issue" title="Rohingya Issue" />
                </div>
                <div className="DRohingyaNews">
                    {state.map((nc) => {
                        return (
                            <div className="DRohingyaList En" key={nc.ContentID}>
                                <Link to={"/english/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                    <div className="row">
                                        <div className="col-lg-5 col-sm-3 col-5 videoIcon">
                                            <picture><img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + nc.ImageThumbPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" /></picture>
                                            {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn"><i className="fas fa-play"></i></span> : ""}
                                        </div>
                                        <div className="col-lg-7 col-sm-9 col-7 order-lg-first">
                                            <div className="Desc"><h5 className="Title SMTitle2">{nc.ContentHeading}</h5></div>
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
