import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { scrollTop, ForLazyLoaderImg } from '../../AllFunctions'
var lazyloaded = false
export default function Entertainment() {
    const [state, setState] = useState([])
    const [state2, setState2] = useState([])
    const [state3, setState3] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateCategory13.json`)
            .then(({ data }) => {
                setState(data.data[0]);
                setState2(data.data.slice(1, 4));
                setState3(data.data.slice(4, 8));
                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);
            });
    }, [])
    return (
        <>
            <div className="SPSecTitle"><Link to="/entertainment" onClick={scrollTop}><h2><img src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/Sign.png"} width={16} height={16} alt="Sign" title="Sign" /> বিনোদন</h2></Link></div>
            <div className="DEntertainment">
                <div className="row">
                    <div className="col-lg-7 col-sm-12 col-12 colresize">
                        <div className="DEnterTopBlock">
                            <div className="DEnterTop">
                                <div className="thumbnail videoIcon">
                                    <Link to={"/" + state.Slug + "/" + state.ContentID} onClick={scrollTop}>
                                        <picture><img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + state.ImageBgPath} alt={state.ContentHeading} title={state.ContentHeading} className="img-fluid img100" /></picture>
                                        {state.ShowVideo === 1 || state.VideoID !== null ? <span className="play-btn-big"><i className="fas fa-play"></i></span> : ""}
                                        <div className="Desc">
                                            <h3 className="Title BGTitle fw-bold">{state.ContentHeading}</h3>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-sm-12 col-12 colresize">
                        <div className="DEnterTop2">
                            {state2.map((nc) => {
                                return (
                                    <div className="DEnterTop2List" key={nc.ContentID}>
                                        <Link to={"/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                            <div className="row">
                                                <div className="col-lg-4 col-sm-3 col-5 videoIcon">
                                                    <picture>
                                                        <img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + nc.ImageSmPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" />
                                                    </picture>
                                                    {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn"><i className="fas fa-play"></i></span> : ""}
                                                </div>
                                                <div className="col-lg-8 col-sm-9 col-7 order-lg-first">
                                                    <div className="Desc">
                                                        <h4 className="Title SMTitle fw-bold">{nc.ContentHeading}</h4>
                                                        <div className="Brief"><p dangerouslySetInnerHTML={{ __html: nc.ContentBrief }} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="DEnterTop3">
                    <div className="row">
                        {state3.map((nc) => {
                            return (
                                <div className="col-lg-3 col-sm-12 col-12 d-flex" key={nc.ContentID}>
                                    <div className="DEnterTop3List align-self-stretch">
                                        <Link to={"/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                            <div className="row">
                                                <div className="col-lg-12 col-sm-3 col-5 videoIcon">
                                                    <picture>
                                                        <img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + nc.ImageSmPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" />
                                                    </picture>
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
            </div>
        </>
    )
}
