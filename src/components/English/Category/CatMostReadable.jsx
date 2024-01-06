import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { scrollTop, ForLazyLoaderImg } from '../../AllFunctions'
var lazyloaded = false
export default function CatMostReadable({ catID }) {
    const [catReadNewsMore, setcCatReadLeadMore] = useState([])
    useEffect(() => {
        axios
            // .get(`${process.env.REACT_APP_API_URL_EN}category-popular-content/${catID}/10`)
            .get(`${process.env.REACT_APP_API_URL_EN}json/file/generateCategoryPopular${catID}.json`)
            .then(({ data }) => {
                setcCatReadLeadMore(data.data);
                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);
            });
    }, [catID])

    return (
        <>
            <section className="MostPopularTab mt-4">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item En">
                                <Link className="nav-link active" data-bs-toggle="tab" to="#tabs-1" role="tab" aria-selected="true">Most Popular of This Category</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="panel-body PanelHeight">
                        <div className="tab-content">
                            <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                <div className="DLatestNews">
                                    {catReadNewsMore && catReadNewsMore.map((nc) => {
                                        return (
                                            <div className="MostPopularTabList En" key={nc.ContentID}>
                                                <Link to={"/english/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                                    <div className="row">
                                                        <div className="col-lg-5 col-sm-4 col-5 videoIcon">
                                                            <picture><img src={process.env.REACT_APP_LAZYL_IMG_En} data-src={process.env.REACT_APP_IMG_Path + nc.ImageThumbPath} alt={nc.ContentHeading} title={nc.ContentHeading} /></picture>
                                                            {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn"><i className="fas fa-play"></i></span> : ""}
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
