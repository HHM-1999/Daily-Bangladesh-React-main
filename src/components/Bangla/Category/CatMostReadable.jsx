import React from 'react'
import { Link } from 'react-router-dom'
import { scrollTop } from '../../AllFunctions'
export default function CatMostReadable({ catReadNewsMore }) {
    return (
        <>
            <section className="MostPopularTab mt-4">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <Link className="nav-link active" data-bs-toggle="tab" to="#tabs-1" role="tab" aria-selected="true">এই বিভাগের সর্বাধিক পঠিত</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="panel-body PanelHeight">
                        <div className="tab-content">
                            <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                <div className="DLatestNews">
                                    {catReadNewsMore && catReadNewsMore.map((nc) => {
                                        return (
                                            <div className="MostPopularTabList" key={nc.ContentID}>
                                                <Link to={"/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                                    <div className="row">
                                                        <div className="col-lg-5 col-sm-4 col-5 videoIcon">
                                                            <div className="DImgZoomBlock">
                                                                <picture><img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + nc.ImageThumbPath} alt={nc.ContentHeading} title={nc.ContentHeading} /></picture>
                                                                {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn"><i className="fas fa-play"></i></span> : ""}
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-7 col-sm-8 col-7">
                                                            <div className="Desc">
                                                                <h5 className="Title">{nc.ContentHeading}</h5>
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
                </div>
            </section>
        </>
    )
}
