import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { scrollTop } from '../../AllFunctions'
export default function LatestMostPopular() {
    const [state, setState] = useState([])
    const [state2, setState2] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL_EN}json/file/generateLatest.json`)
            .then(({ data }) => {
                setState(data.data);
            });
        axios
            .get(`${process.env.REACT_APP_API_URL_EN}json/file/generatePopular.json`)
            .then(({ data }) => {
                setState2(data.data);
            });
    }, [])
    return (
        <>
            <section className="DLPSTab2 En">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <ul className="nav nav-tabs En" role="tablist">
                            <li className="nav-item"><a className="nav-link active" data-bs-toggle="tab" href="#tabs-1" role="tab" aria-selected="true">Latest News</a></li>
                            <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#tabs-2" role="tab" aria-selected="false">Popular News</a></li>
                        </ul>
                    </div>
                    <div className="panel-body PanelHeight">
                        <div className="tab-content">
                            <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                <ul className="LatestList">
                                    {state.map((nc, i) => {
                                        return (
                                            <li key={nc.ContentID}>
                                                <div className="DLatestNewsList">
                                                    <Link to={"/english/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                                        <div className="d-flex  align-items-center">
                                                            <div className="d-flex h-100 align-items-center"><span className="Counter">{i + 1}</span></div>
                                                            <div className="">
                                                                <p className="Title">{nc.ContentHeading}</p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="tab-pane" id="tabs-2" role="tabpanel">
                                <ul className="LatestList">
                                    {state2.map((nc, i) => {
                                        return (
                                            <li key={i}>
                                                <div className="DLatestNewsList">
                                                    <Link to={"/english/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                                        <div className="d-flex  align-items-center">
                                                            <div className="d-flex h-100 align-items-center"><span className="Counter">{i + 1}</span></div>
                                                            <div className="">
                                                                <p className="Title">{nc.ContentHeading}</p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
