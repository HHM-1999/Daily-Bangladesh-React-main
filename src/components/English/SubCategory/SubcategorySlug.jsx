import React, { useState, useEffect } from 'react';
import axios from "axios";
import Skeleton from 'react-loading-skeleton'
// import RLoader from '../RLoader';
// import DTabs2 from '../Body/DTabs2';
// import ErrorPage from '../Body/ErrorPage';
// import MostReadable from '../Body/MostReadable';
import DocumentTitle from 'react-document-title';
import { Link, useParams } from 'react-router-dom'
import { scrollTop, ForLazyLoaderImg } from '../../AllFunctions'
import ErrorPageEn from '../ErrorPageEn';
import FBpagePlugin from '../FBpagePlugin';
import SubCatLdjsonEn from './SubCatLdjsonEn';
import Squire01 from '../../AdsByGoogle/Squire01';

// var showMore = true
var LeadNewsLimit = 10
var limit = 10
var offset = 0

var lazyloaded = false
var subCatID = 0
var InnerSpecialContents
var formData = []
export default function SubcategorySlug() {
    const [catName, setCatName] = useState([]);
    const [subCatName, setSubCatName] = useState([]);
    const [subCatreadMore, setSubCatreadMore] = useState([]);
    const [showMore, setShowMore] = useState(true);
    let { subCatSlug } = useParams();
    const [isLoadingData, setIsLoadingData] = useState(false);

    const [isSkeletonLoading, setIsSkeletonLoading] = useState(true);
    useEffect(() => {
        // document.querySelectorAll('link[rel="canonical"]')[0].setAttribute('href', window.location.href)
        setIsSkeletonLoading(true)
        axios
            .get(`${process.env.REACT_APP_API_URL_EN}sub-category-info/${subCatSlug}`)
            .then(({ data }) => {
                setCatName(data.category);
                if (data.message === undefined) {
                    setSubCatName(data.subCategory);
                    subCatID = data.subCategory.CategoryID
                    axios
                        .get(`${process.env.REACT_APP_API_URL_EN}sub-category-content/${data.subCategory.CategoryID}/${LeadNewsLimit}`)
                        .then(({ data }) => {
                            if (data.sub_category_content) {
                                setSubCatreadMore(data.sub_category_content);
                                setIsSkeletonLoading(false)
                                setTimeout(function () {
                                    lazyloaded = false
                                    ForLazyLoaderImg(lazyloaded)
                                }, 1000);
                                // leadNews position array ------ start
                                InnerSpecialContents = ``
                                for (let i = 0; i < data.sub_category_content.length; i++) {
                                    if (data.sub_category_content[i].ContentID) {
                                        InnerSpecialContents = InnerSpecialContents + `${data.sub_category_content[i].ContentID}`
                                        if (data.sub_category_content.length !== i + 1) {
                                            InnerSpecialContents = InnerSpecialContents + `, `
                                        }
                                    }
                                }
                                if (data.sub_category_content.length < LeadNewsLimit) {
                                    let positionLength = data.sub_category_content.length
                                    formData = { 'CategoryID': subCatID, 'limit': LeadNewsLimit - data.sub_category_content.length, 'offset': 0, 'InnerSpecialContents': InnerSpecialContents }
                                    axios
                                        .post(`${process.env.REACT_APP_API_URL_EN}sub-category-content-more`, formData)
                                        .then(({ data }) => {
                                            if (data.data) {
                                                for (let i = 0; i < data.data.length; i++) {
                                                    setSubCatreadMore(oldArray => [...oldArray, data.data[i]]);
                                                }
                                                offset += data.data.length
                                                if (data.data.length + positionLength < LeadNewsLimit) {
                                                    setShowMore(false)
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
                            }
                        });
                } else {
                    setSubCatName();
                }
            })
        const timer = setTimeout(() => { window.location.reload(1); }, 300000);
        return () => clearTimeout(timer);
    }, [subCatSlug]);

    const toggleButtonState = () => {
        // offset += limit
        setIsLoadingData(true)
        formData = { 'CategoryID': subCatID, 'limit': limit, 'offset': offset, 'InnerSpecialContents': InnerSpecialContents }
        axios
            .post(`${process.env.REACT_APP_API_URL_EN}sub-category-content-more`, formData)
            .then(({ data }) => {
                setIsLoadingData(false)
                if (data.data) {
                    if (data.data.length < limit) {
                        setShowMore(false)
                    }
                    for (let i = 0; i < data.data.length; i++) {
                        setSubCatreadMore(oldArray => [...oldArray, data.data[i]]);
                    }
                    offset += limit
                    setTimeout(function () {
                        lazyloaded = false
                        ForLazyLoaderImg(lazyloaded)
                    }, 1000);
                }
            });
        // axios
        //     .get(`${process.env.REACT_APP_API_URL_EN}sub-category-contents-and-more/${subCatSlug}/${limit}/${offset}`)
        //     .then(({ data }) => {
        //         setIsLoadingData(false)
        //         if (data.sub_category_more_content.length < limit) {
        //             setShowMore(false)
        //         }
        //         for (let i = 0; i < data.sub_category_more_content.length; i++) {
        //             setSubCatreadMore(oldArray => [...oldArray, data.sub_category_more_content[i]]);
        //         }
        //         setTimeout(function () {
        //             lazyloaded = false
        //             ForLazyLoaderImg(lazyloaded)
        //         }, 1000);
        //     });
    };
    return (
        <>
            {subCatName ?
                <main>
                    <div className="container">
                        <div className="TopHomeSection"></div>
                        <div className="row">
                            <div className="col-sm-12">
                                <SubCatLdjsonEn CatNames={catName.CategoryName} CatNameSlug={catName.Slug} SubCatNames={subCatName.CategoryName} SubCatNameSlug={subCatName.Slug} />
                                <DocumentTitle title={subCatName.CategoryName}></DocumentTitle>
                                <h2 className="mvp-feat1-pop-head"><Link to={'/english/sub/' + subCatName.Slug} onClick={scrollTop}><span className="mvp-feat1-pop-head">{subCatName.CategoryName || <Skeleton count={1} />}</span></Link></h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-9 col-sm-12 border-right-inner1">
                                <section className="SubCategoryList read-more">
                                    {isSkeletonLoading ? <>
                                        {Array(10).fill("").map((nc) => (
                                            <div className="DSubCategoryTopNews">
                                                <Link to={"/"}>
                                                    {window.innerWidth > 991 ?
                                                        <div className="row">
                                                            <div className="col-lg-4 col-sm-4 col-5 videoIcon">
                                                                <Skeleton width={314} height={177} />
                                                            </div>
                                                            <div className="col-lg-8 col-sm-8 col-7">
                                                                <div className="Desc">
                                                                    <h5 className="Title"><Skeleton count={2} /></h5>
                                                                    <Skeleton count={3} />
                                                                </div>
                                                            </div>
                                                        </div> : <div className="row">
                                                            <div className="col-lg-4 col-sm-4 col-5 videoIcon">
                                                                <Skeleton width={`100%`} height={100} />
                                                            </div>
                                                            <div className="col-lg-8 col-sm-8 col-7">
                                                                <div className="Desc">
                                                                    <h5 className="Title"><Skeleton count={2} /></h5>
                                                                </div>
                                                            </div>
                                                        </div>}
                                                </Link>
                                            </div>
                                        ))}
                                    </> : <>
                                        {subCatreadMore && subCatreadMore.map((nc) => {
                                            return (
                                                <div className="DSubCategoryTopNews" key={nc.ContentID}>
                                                    <Link to={"/english/" + catName.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                                        <div className="row">
                                                            <div className="col-lg-4 col-sm-4 col-5 videoIcon">
                                                                <picture><img src={process.env.REACT_APP_LAZYL_IMG_En} data-src={nc.ImageSmPath ? process.env.REACT_APP_IMG_Path + nc.ImageSmPath : process.env.REACT_APP_LAZYL_IMG_En} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" /></picture>
                                                                {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn-big"><i className="fas fa-play"></i></span> : ""}
                                                            </div>
                                                            <div className="col-lg-8 col-sm-8 col-7">
                                                                <div className="Desc">
                                                                    <h5 className="Title">{nc.ContentHeading}</h5>
                                                                    <p dangerouslySetInnerHTML={{ __html: nc.ContentBrief }} />
                                                                </div>
                                                                <span className="pDateAR"><i className="far fa-clock"></i> {nc.create_date}</span>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            )
                                        })}
                                    </>}
                                </section>
                                {showMore ?
                                    <div id="btnDiv" className="text-center mt-2 mb-4">
                                        <button id="ajax-more-btn" className="btn btn-danger btn-lg btn-block ButtonBG" onClick={toggleButtonState}>
                                            Read More
                                            {isLoadingData === true &&
                                                <img src={process.env.REACT_APP_FONT_DOMAIN_URL + "/media/common/loading.gif"} alt="loading" title='loading' style={{ width: '28px', marginLeft: '12px' }} />
                                            }
                                        </button>
                                    </div>
                                    : false}
                            </div>
                            <div className="col-lg-3 col-sm-12 mb-4 Subcat">
                                <Squire01 />
                                <div className="fb-page-banner"><FBpagePlugin /></div>
                            </div>
                        </div>
                    </div>
                </main>
                : <ErrorPageEn />}
        </>
    )
}
