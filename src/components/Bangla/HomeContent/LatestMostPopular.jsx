import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { scrollTop } from '../../AllFunctions'
const { toBengaliNumber } = require('bengali-number');
export default function LatestMostPopular() {
    const [state, setState] = useState([])
    const [state2, setState2] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateLatest.json`)
            .then(({ data }) => {
                setState(data.data);
            });
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generatePopular.json`)
            .then(({ data }) => {
                setState2(data.data);
            });
    }, [])
    return (
        <>
            <section className="DLPSTab2">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item" role="tab"><a className="nav-link active" data-bs-toggle="tab" href="#tabs-1" role="tab" aria-selected="true">সর্বশেষ</a></li>
                            <li className="nav-item" role="tab"><a className="nav-link" data-bs-toggle="tab" href="#tabs-2" role="tab" aria-selected="false">জনপ্রিয়</a></li>
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
                                                    <Link to={"/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                                        <div className="d-flex  align-items-center">
                                                            <div className="d-flex h-100 align-items-center"><span className="Counter">{toBengaliNumber(i + 1)}</span></div>
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
                                            <li key={nc.ContentID}>
                                                <div className="DLatestNewsList">
                                                    <Link to={"/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                                        <div className="d-flex  align-items-center">
                                                            <div className="d-flex h-100 align-items-center"><span className="Counter">{toBengaliNumber(i + 1)}</span></div>
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
