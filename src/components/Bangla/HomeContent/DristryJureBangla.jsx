import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { scrollTop, ForLazyLoaderImg } from '../../AllFunctions'
var lazyloaded = false
export default function DristryJureBangla() {
    const [state, setState] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateSpecial4.json`)
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
            <div className="DBanglaSPNewsArea">
                <div className="DBanglaSPNewsList">
                    <div className="row">
                        {state.map((nc) => {
                            return (
                                <div className="col-lg-4 col-12 d-flex" key={nc.ContentID}>
                                    <div className="DBanglaSPNews align-self-stretch">
                                        <Link to={"/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                            <div className="row">
                                                <div className="col-lg-12 col-sm-3 col-5 videoIcon">
                                                    <picture><img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + nc.ImageSmPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" /></picture>
                                                    {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn-big"><i className="fas fa-play"></i></span> : ""}
                                                </div>
                                                <div className="col-lg-12 col-sm-9 col-7">
                                                    <div className="Desc"><h3 className="Title fw-bold">{nc.ContentHeading}</h3></div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <span className="BadgeOverlay strip"><p>দৃষ্টিজুড়ে বাংলা</p></span>
            </div>
        </>
    )
}
