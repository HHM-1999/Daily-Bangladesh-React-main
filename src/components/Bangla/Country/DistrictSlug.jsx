import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { format } from 'date-fns'
import { Link, useParams } from "react-router-dom";
import DocumentTitle from 'react-document-title';
import LatestMostPopular from '../HomeContent/LatestMostPopular';
import { scrollTop, banglaDateConvetar, ForLazyLoaderImg } from '../../AllFunctions'
import ErrorPageBn from '../ErrorPageBn';
import DivisionDistrictName from './DivisionDistrictName';
import Squire01 from '../../AdsByGoogle/Squire01';

var lazyloaded = false
var showMore = true
var LeadNewsLimit = 10
var limit = 10
var offset = 0
var Did
var InnerSpecialContents
var formData = []
export default function DistrictSlug() {
    let { divisionSlug } = useParams();
    let { dristrictSlug } = useParams();
    const [dristrictName, setDristrictName] = useState([])
    const [districtContentList, setDistrictContentList] = useState([])
    const [isLoadingData, setIsLoadingData] = useState(false);
    useEffect(() => {
        // document.querySelectorAll('link[rel="canonical"]')[0].setAttribute('href', window.location.href)
        offset = 0
        showMore = true
        axios
            .get(`${process.env.REACT_APP_API_URL}district-division-content/${divisionSlug}/${dristrictSlug}`)
            .then(({ data }) => {
                if (data.districtContent.content.length !== 0) {
                    setDristrictName(data.districtContent)
                    Did = data.districtContent.DistrictID
                    setDistrictContentList(data.districtContent.content);
                    setTimeout(function () {
                        lazyloaded = false
                        ForLazyLoaderImg(lazyloaded)
                    }, 1000);
                    // leadNews position array ------ start
                    InnerSpecialContents = ``
                    for (let i = 0; i < data.districtContent.content.length; i++) {
                        if (data.districtContent.content[i].ContentID) {
                            InnerSpecialContents = InnerSpecialContents + `${data.districtContent.content[i].ContentID}`
                            if (data.districtContent.content.length !== i + 1) {
                                InnerSpecialContents = InnerSpecialContents + `, `
                            }
                        }
                    }
                    if (data.districtContent.content.length < LeadNewsLimit) {
                        let positionLength = data.districtContent.content.length
                        formData = { 'DistrictID': Did, 'limit': LeadNewsLimit - data.districtContent.content.length, 'offset': 0, 'InnerSpecialContents': InnerSpecialContents }
                        axios
                            .post(`${process.env.REACT_APP_API_URL}inner-district-content-more`, formData)
                            .then(({ data }) => {
                                if (data.inner_district_more_content) {
                                    for (let i = 0; i < data.inner_district_more_content.length; i++) {
                                        setDistrictContentList(oldArray => [...oldArray, data.inner_district_more_content[i]]);
                                    }
                                    offset += data.inner_district_more_content.length
                                    if (data.inner_district_more_content.length + positionLength < LeadNewsLimit) {
                                        showMore = false
                                    }
                                    setTimeout(function () {
                                        lazyloaded = false
                                        ForLazyLoaderImg(lazyloaded)
                                    }, 1000);
                                }
                            });
                    }
                    // InnerSpecialContents = InnerSpecialContents + ``
                    // leadNews position array ------ end
                } else {
                    setDistrictContentList(null);
                }
            })
        const timer = setTimeout(() => { window.location.reload(1); }, 300000);
        return () => clearTimeout(timer);
    }, [divisionSlug, dristrictSlug])

    const toggleButtonState = () => {
        // offset += limit
        setIsLoadingData(true)
        showMore = true
        formData = { 'DistrictID': Did, 'limit': limit, 'offset': offset, 'InnerSpecialContents': InnerSpecialContents }
        axios
            .post(`${process.env.REACT_APP_API_URL}inner-district-content-more`, formData)
            .then(({ data }) => {
                setIsLoadingData(false)
                if (data.data.length < limit) {
                    showMore = false
                }
                for (let i = 0; i < data.data.length; i++) {
                    setDistrictContentList(oldArray => [...oldArray, data.data[i]]);
                }
                offset += limit
                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);
            });
    };
    return (
        <>
            {dristrictName ?
                <main>
                    <div className="container">
                        <div className="TopHomeSection"></div>
                        <DocumentTitle title={dristrictName.DistrictNameBn} />
                        <h2 className="mvp-feat1-pop-head"><Link to={+ "/"} onClick={scrollTop}><span className="mvp-feat1-pop-head">{dristrictName.DistrictNameBn}</span></Link></h2>
                        <div className="row">
                            <div className="col-lg-9 col-sm-12 border-right-inner1">
                                <DivisionDistrictName />
                                <div className="DivisionAllNews mt-3">
                                    <div className="row">
                                        {districtContentList && districtContentList.map((nc) => {
                                            return (
                                                <div className="col-lg-6 col-sm-12" key={nc.ContentID}>
                                                    <div className="Division-panel">
                                                        <div className="DistrictListNews">
                                                            <Link to={"/country/" + nc.ContentID} onClick={scrollTop}>
                                                                <div className="row">
                                                                    <div className="col-lg-5 col-sm-4 col-5">
                                                                        <div className="Imgresize">
                                                                            <figure className="ImgViewer">
                                                                                <picture className="FixingRatio">
                                                                                    <img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + nc.ImageThumbPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100 ImgRatio" />
                                                                                </picture>
                                                                            </figure>
                                                                            {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn"><i className="fas fa-play"></i></span> : ""}
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-7 col-sm-8 col-7">
                                                                        <div className="Desc">
                                                                            <h3 className="Title">{nc.ContentHeading}</h3>
                                                                        </div>
                                                                        <span className="DateTime"> {banglaDateConvetar(format(new Date(nc.create_date), 'EEEE, dd MMMM yyyy, HH:mm'))}</span>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                {showMore ?
                                    <div id="btnDiv" className="text-center mt-2 mb-4">
                                        <button id="ajax-more-btn" className="btn btn-danger btn-lg btn-block ButtonBG" onClick={toggleButtonState}>
                                            আরো পড়ুন
                                            {isLoadingData === true &&
                                                <img src={process.env.REACT_APP_FONT_DOMAIN_URL + "/media/common/loading.gif"} alt="loading" title='loading' style={{ width: '28px', marginLeft: '12px' }} />
                                            }
                                        </button>
                                    </div>
                                    : false}
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
