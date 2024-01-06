import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { scrollTop, ForLazyLoaderImg } from '../../AllFunctions'
var lazyloaded = false
export default function Economy() {

    const [economy, setEconomy] = useState([])
    const [economy2, setEconomy2] = useState([])

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateCategory7.json`)
            .then(({ data }) => {
                setEconomy(data.data[0]);
                setEconomy2(data.data.slice(1, 3));
                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);
            });
    }, [])
    return (
        <>
            <div className="SPSecTitle">
                <Link to="/economy" onClick={scrollTop}>
                    <h2><img src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/Sign.png"} width={16} height={16} alt="Sign" title="Sign" /> অর্থনীতি </h2>
                </Link>
            </div>
            <div className="DCatStyle1List">
                <div className="DCatStyle1Top">
                    <div className="thumbnail videoIcon">
                        <Link to={"/" + economy.Slug + "/" + economy.ContentID} onClick={scrollTop}>
                            <picture>
                                <img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + economy.ImageSmPath} alt={economy.ContentHeading} title={economy.ContentHeading} className="img-fluid img100" />
                            </picture>
                            {economy.ShowVideo === 1 || economy.VideoID !== null ? <span className="play-btn-big"><i className="fas fa-play"></i></span> : ""}
                            <div className="Desc">
                                <h3 className="Title fw-bold">{economy.ContentHeading}</h3>
                            </div>
                        </Link>
                    </div>
                </div>
                {economy2.map((nc) => {
                    return (
                        <div className="DCatStyle1ListItem" key={nc.ContentID}>
                            <Link to={"/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                <div className="row">
                                    <div className="col-lg-4 col-sm-3 col-5 videoIcon">
                                        <picture>
                                            <img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + nc.ImageThumbPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" />
                                        </picture>
                                        {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn"><i className="fas fa-play"></i></span> : ""}
                                    </div>
                                    <div className="col-lg-8 col-sm-9 col-7">
                                        <div className="Desc">
                                            <h4 className="Title SMTitle">{nc.ContentHeading}</h4>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
