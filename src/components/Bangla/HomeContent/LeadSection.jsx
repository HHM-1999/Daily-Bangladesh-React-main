import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import axios from 'axios'
import { scrollTop, ForLazyLoaderImg } from '../../AllFunctions'
var lazyloaded = false
export default function LeadSection() {
    const [state, setState] = useState([])
    const [state2, setState2] = useState([])

    const [isSkeletonLoading, setIsSkeletonLoading] = useState(true);
    useEffect(() => {
        setIsSkeletonLoading(true)
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateSpecial2.json`)
            .then(({ data }) => {
                if (data.data.length > 0) {
                    setState(data.data[0]);
                    setState2(data.data.slice(1, 5));
                    setIsSkeletonLoading(false)
                    setTimeout(function () {
                        lazyloaded = false
                        ForLazyLoaderImg(lazyloaded)
                    }, 1000);
                }
            });
    }, [])
    return (
        <>
            <div className="col-lg-8 col-12">
                <div className="DLeadNews">
                    {isSkeletonLoading ?
                        <div className="thumbnail videoIcon">
                            {window.innerWidth > 991 ?
                                <Skeleton width={630} height={381} /> :
                                <>
                                    <Skeleton width={`100%`} height={222} />
                                    <div className="Desc">
                                        <h1 className="Title"><Skeleton count={2} /></h1>
                                    </div>
                                </>}
                        </div> : <div className="thumbnail videoIcon">
                            <Link to={"/" + state.Slug + "/" + state.ContentID} onClick={scrollTop}>
                                <picture><img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + state.ImageBgPath} alt={state.ContentHeading} title={state.ContentHeading} className="img-fluid img100" /></picture>
                                {state.ShowVideo === 1 || state.VideoID !== null ? <span className="play-btn-big"><i className="fas fa-play"></i></span> : ""}
                                <div className="Desc">
                                    <h1 className="Title">{state.ContentHeading}</h1>
                                </div>
                            </Link>
                        </div>}
                </div>
                <div className="DTop2">
                    <div className="row">
                        {isSkeletonLoading ? <>
                            {Array(4).fill("").map((nc, i) => (
                                <div className="col-lg-6 col-sm-6 col-6 d-flex" key={i}>
                                    <div className="DTop2List align-self-stretch videoIcon">
                                        <Link to={"/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                            {window.innerWidth > 991 ?
                                                <Skeleton width={284} height={170} /> :
                                                <Skeleton width={169} height={106} />}
                                            <div className="Desc"><h2 className="Title fw-bold"><Skeleton count={2} /></h2></div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </> : <>
                            {state2.map((nc) => {
                                return (
                                    <div className="col-lg-6 col-sm-6 col-6 d-flex" key={nc.ContentID}>
                                        <div className="DTop2List align-self-stretch videoIcon">
                                            <Link to={"/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                                <picture><img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + nc.ImageSmPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" /></picture>
                                                {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn"><i className="fas fa-play"></i></span> : ""}
                                                <div className="Desc"><h2 className="Title fw-bold">{nc.ContentHeading}</h2></div>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}
                        </>}
                    </div>
                </div>
            </div>
        </>
    )
}