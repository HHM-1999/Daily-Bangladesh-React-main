import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { scrollTop, ForLazyLoaderImg } from '../../AllFunctions'
var lazyloaded = false
export default function Dengue() {
    const [state, setState] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateCategory61.json`)
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
            <div className="DCoronaSec">
                <div className="DCoronaBanner">
                    <Link to="/dengue"><img className="img-fluid img100" src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/dengue.jpg"} width={304} height={63} alt="dengue" title="dengue" /></Link>
                </div>
                <div className="DCoronaNews">
                    {state.map((nc) => {
                        return (
                            <div className="DCoronaNewsList" key={nc.ContentID}>
                                <Link to={"/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                    <div className="row">
                                        <div className="col-lg-5 col-sm-3 col-5 videoIcon">
                                            <picture><img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + nc.ImageSmPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" /></picture>
                                            {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn"><i className="fas fa-play"></i></span> : ""}
                                        </div>
                                        <div className="col-lg-7 col-sm-9 col-7">
                                            <div className="Desc"><h5 className="Title SMTitle2">{nc.ContentHeading}</h5></div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                    <div className="DReadMore"><Link to="/dengue" onClick={scrollTop}><span>আরো পড়ুন</span></Link></div>
                </div>
            </div>
        </>
    )
}
