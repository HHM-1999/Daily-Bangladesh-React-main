import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import axios from 'axios'
import { scrollTop } from '../../AllFunctions'
export default function FirstColumn() {
    const [state, setState] = useState([])

    const [isSkeletonLoading, setIsSkeletonLoading] = useState(true);
    useEffect(() => {
        setIsSkeletonLoading(true)
        axios
            .get(`${process.env.REACT_APP_API_URL_EN}json/file/generateSpecial7.json`)
            .then(({ data }) => {
                if (data.data) {
                    setIsSkeletonLoading(false)
                    setState(data.data[0]);
                }
            });
    }, [])
    return (
        <>
            <div className="DFirstColumn">
                <div className="DFirstColumnBanner">
                    <img className="img-fluid img100" src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/First-colum-en.jpg"} alt="First-colum" title="First-colum" />
                </div>
                <div className="DFirstColumnContent En">
                    {isSkeletonLoading ?
                        <Link to={"/english/"}>
                            <div className="Desc">
                                <h3 className="Title fw-bold"><Skeleton count={3} /></h3>
                                <span className="WInfo"><Skeleton count={1} /></span>
                                <div className="Brief"><p><Skeleton count={6} /></p></div>
                            </div>
                            <div className="FCNDetails"><p>Details...</p></div>
                        </Link> : <Link to={"/english/" + state.Slug + "/" + state.ContentID} onClick={scrollTop}>
                            <div className="Desc">
                                <h3 className="Title fw-bold">{state.ContentHeading}</h3>
                                <span className="WInfo">{state.contentWriter ? state.contentWriter : state.WriterName}</span>
                                <div className="Brief"><p dangerouslySetInnerHTML={{ __html: state.ContentBrief }}></p></div>
                            </div>
                            <div className="FCNDetails"><p>Details...</p></div>
                        </Link>}
                </div>
            </div>
        </>
    )
}
