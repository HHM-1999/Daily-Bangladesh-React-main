import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { scrollTop, ForLazyLoaderImg } from '../../AllFunctions'
var lazyloaded = false
export default function JobCorner() {
    const [state, setState] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateCategory26.json`)
            .then(({ data }) => {
                setState(data.data.slice(0, 3));
                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);
            });
    }, [])
    return (
        <>
            <div className="SPSecTitle"><Link to="/job-corner" onClick={scrollTop}><h2><img src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/Sign.png"} width={16} height={16} alt="Sign" title="Sign" /> জব কর্নার</h2></Link></div>
            <div className="DCatStyle3">
                {state.map((nc) => {
                    return (
                        <div className="DCatStyle3List" key={nc.ContentID}>
                            <Link to={"/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                <div className="row">
                                    <div className="col-lg-5 col-sm-3 col-5 videoIcon">
                                        <picture>
                                            <img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + nc.ImageThumbPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" />
                                        </picture>
                                        {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn"><i className="fas fa-play"></i></span> : ""}
                                    </div>
                                    <div className="col-lg-7 col-sm-9 col-7"><div className="Desc"><h3 className="Title SMTitle2">{nc.ContentHeading}</h3></div></div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}