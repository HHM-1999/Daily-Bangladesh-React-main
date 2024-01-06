import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from "react-router-dom";
import DocumentTitle from 'react-document-title';
import LatestMostPopular from '../HomeContent/LatestMostPopular';
import { scrollTop, ForLazyLoaderImg } from '../../AllFunctions'
import ErrorPageBn from '../ErrorPageBn';
import DivisionDistrictName from './DivisionDistrictName';
import Squire01 from '../../AdsByGoogle/Squire01';

var lazyloaded = false
export default function DivisionSlug() {
    let { divisionSlug } = useParams();
    const [divisionName, setDivisionName] = useState([])
    const [division, setDivision] = useState([])
    useEffect(() => {
        // document.querySelectorAll('link[rel="canonical"]')[0].setAttribute('href', window.location.href)
        axios
            .get(`${process.env.REACT_APP_API_URL}district-division-content/${divisionSlug}`)
            .then(({ data }) => {
                if (data.districtContent.length !== 0) {
                    setDivisionName(data.districtContent[0].DivisionNameBn);
                    setDivision(data.districtContent);
                    setTimeout(function () {
                        lazyloaded = false
                        ForLazyLoaderImg(lazyloaded)
                    }, 1000);
                } else {
                    setDivision(null);
                }
            })
        const timer = setTimeout(() => { window.location.reload(1); }, 300000);
        return () => clearTimeout(timer);
    }, [divisionSlug])

    return (
        <>
            {division ?
                <main>
                    <div className="container">
                        <div className="TopHomeSection"></div>
                        {/* <ModalADS /> */}
                        <DocumentTitle title={divisionName} />
                        <h2 className="mvp-feat1-pop-head"><Link to={+ "/"} onClick={scrollTop}><span className="mvp-feat1-pop-head">{divisionName}</span></Link></h2>
                        <div className="row">
                            <div className="col-lg-9 col-sm-12 border-right-inner1">
                                <DivisionDistrictName />
                                <div className="DivisionAllNews">
                                    <div className="row">
                                        {division.map((nc) => {
                                            return (
                                                <div className="col-lg-4 col-sm-12" key={nc.DistrictID}>
                                                    <div className="Division-panel">
                                                        <div className="DivisionHeader">
                                                            <Link to={"/divisions/" + divisionSlug + '/' + nc.DistrictSlug} >
                                                                <img src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/Sign.png"} width={16} height={16} alt="Sign" title="Sign" />{nc.DistrictNameBn}
                                                            </Link>
                                                        </div>
                                                        <div className="DivisionBody">
                                                            {nc.content.map((nd, i) => {
                                                                return (
                                                                    <>
                                                                        {i === 0 ?
                                                                            <div className="DivisionLeadNews">
                                                                                <Link to={"/country/" + nd.ContentID} onClick={scrollTop}>
                                                                                    <div className="DImgBlock card-video-part">
                                                                                        <div className="Imgresize">
                                                                                            <figure className="ImgViewer">
                                                                                                <picture className="FixingRatio">
                                                                                                    <img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + nd.ImageSmPath} alt={nd.ContentHeading} title={nd.ContentHeading} className="img-fluid img100 ImgRatio" />
                                                                                                </picture>
                                                                                            </figure>
                                                                                            {nd.ShowVideo === 1 || nd.VideoID !== null ? <span className="play-btn-big"><i className="fas fa-play"></i></span> : ""}
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="Desc">
                                                                                        <h2 className="Title">{nd.ContentHeading}</h2>
                                                                                    </div>
                                                                                </Link>
                                                                            </div> :
                                                                            <div className="DivisionListNews">
                                                                                <Link to={"/country/" + nd.ContentID} onClick={scrollTop}>
                                                                                    <div className="Desc">
                                                                                        <h3 className="Title">
                                                                                            {nd.ContentHeading}
                                                                                        </h3>
                                                                                    </div>
                                                                                </Link>
                                                                            </div>}
                                                                    </>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12">
                                <div className="MarginBottom30">
                                    <LatestMostPopular />
                                </div>
                                <Squire01 />
                            </div>
                        </div>
                    </div>
                </main>
                : <ErrorPageBn />}
        </>
    )
}
