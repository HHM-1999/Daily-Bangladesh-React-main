import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { scrollTop } from '../../AllFunctions'
export default function FirstColumn() {
    const [state, setState] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateSpecial11.json`)
            .then(({ data }) => {
                setState(data.data[0]);
            });
    }, [])
    return (
        <>
            <div className="DFirstColumn">
                <div className="DFirstColumnBanner">
                    <img className="img-fluid img100" src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/first-column.png"} alt="প্রথম কলাম" title="প্রথম কলাম" />
                </div>
                <div className="DFirstColumnContent">
                    <Link to={"/" + state.Slug + "/" + state.ContentID} onClick={scrollTop}>
                        <div className="Desc">
                            <h3 className="Title fw-bold">{state.ContentHeading}</h3>
                            {/* <span className="WInfo">{state.contentWriter && state.contentWriter !== "তানভীর আহমেদ" ? state.contentWriter : state.WriterName}</span> */}
                            <span className="WInfo">{state.contentWriter ? state.contentWriter : state.WriterName}</span>
                            <div className="Brief"><p dangerouslySetInnerHTML={{ __html: state.ContentBrief }} /></div>
                        </div>
                        <div className="FCNDetails"><p>বিস্তারিত...</p></div>
                    </Link>
                </div>
            </div>
        </>
    )
}
