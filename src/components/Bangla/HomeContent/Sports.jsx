import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { scrollTop, ForLazyLoaderImg } from '../../AllFunctions'
var lazyloaded = false
export default function Sports() {
    const [state, setState] = useState([])
    const [state2, setState2] = useState([])
    const [state3, setState3] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateCategory9.json`)
            .then(({ data }) => {
                setState(data.data[0]);
                setState2(data.data.slice(1, 5));
                setState3(data.data.slice(5, 9));
                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);
            });
    }, [])
    return (
        <>
            <div className="SPSecTitle"><Link to="/sports" onClick={scrollTop}><h2><img src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/Sign.png"} width={16} height={16} alt="Sign" title="Sign" /> খেলা</h2></Link></div>
            <div className="DSports">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 col-12">
                        <div className="DSportsTopBlock">
                            <div className="DSportsTop">
                                <div className="thumbnail videoIcon">
                                    <Link to={"/" + state.Slug + "/" + state.ContentID} onClick={scrollTop}>
                                        <picture><img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + state.ImageBgPath} alt={state.ContentHeading} title={state.ContentHeading} className="img-fluid img100" /></picture>
                                        {state.ShowVideo === 1 || state.VideoID !== null ? <span className="play-btn-big"><i className="fas fa-play"></i></span> : ""}
                                        <div className="Desc"><h3 className="Title BGTitle fw-bold">{state.ContentHeading}</h3></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 col-12 order-lg-first">
                        <div className="DSportsTop2">
                            {state2.map((nc) => {
                                return (
                                    <div className="DSportsTop2List" key={nc.ContentID}>
                                        <Link to={"/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                            <div className="row">
                                                <div className="col-lg-5 col-sm-3 col-5 videoIcon">
                                                    <picture>
                                                        <img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + nc.ImageThumbPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" />
                                                    </picture>
                                                    {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn"><i className="fas fa-play"></i></span> : ""}
                                                </div>
                                                <div className="col-lg-7 col-sm-9 col-7">
                                                    <div className="Des8">
                                                        <h2 className="Title SMTitle2">{nc.ContentHeading}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 col-12">
                        <div className="DSportsTop3">
                            {state3.map((nc) => {
                                return (
                                    <div className="DSportsTop2List" key={nc.ContentID}>
                                        <Link to={"/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                            <div className="row">
                                                <div className="col-lg-5 col-sm-3 col-5 videoIcon">
                                                    <picture>
                                                        <img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + nc.ImageThumbPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" />
                                                    </picture>
                                                    {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn"><i className="fas fa-play"></i></span> : ""}
                                                </div>
                                                <div className="col-lg-7 col-sm-9 col-7 order-lg-first">
                                                    <div className="Des8">
                                                        <h2 className="Title SMTitle2">{nc.ContentHeading}</h2>
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
            </div>
        </>
    )
}
