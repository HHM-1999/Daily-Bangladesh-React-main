import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import axios from 'axios'
import DocumentTitle from "react-document-title";
import { scrollTop, banglaDateConvetar, ForLazyLoaderImg } from '../../AllFunctions'
import LatestMostPopular from '../HomeContent/LatestMostPopular';
import CatMostReadable from './CatMostReadable';
import ErrorPageBn from '../ErrorPageBn';
import DivisionDistrictName from '../Country/DivisionDistrictName';
import CatLdjsonBn from './CatLdjsonBn';
import Squire01 from '../../AdsByGoogle/Squire01';
import Vertical01 from '../../AdsByGoogle/Vertical01';

var lazyloaded = false
var catID = 0
var showMore = true
var limit = 10
var offset = 0
var leadLimit = 5
var InnerSpecialContents
var formData = []

export default function Category() {
    let { catSlug } = useParams();
    const [catName, setcatName] = useState([])
    const [catNewsMore, setcatLeadMore] = useState([])

    const [catLeadNews1, setcatLeadNews1] = useState([])
    const [catLeadNews2, setcatLeadNews2] = useState([])
    const [catLeadNews3, setcatLeadNews3] = useState([])

    const [catReadNewsMore, setcCatReadLeadMore] = useState([])

    const [isLoadingData, setIsLoadingData] = useState(false);

    const [isSkeletonLoading, setIsSkeletonLoading] = useState(true);
    useEffect(() => {
        // document.querySelectorAll('link[rel="canonical"]')[0].setAttribute('href', window.location.href)
        showMore = true
        offset = 0
        setIsSkeletonLoading(true)
        axios
            .get(`${process.env.REACT_APP_API_URL}category/${catSlug}`)
            .then(({ data }) => {
                if (data.category) {
                    setcatName(data.category);
                    if (data.category) {
                        catID = data.category.CategoryID;
                    }
                    axios
                        .get(`${process.env.REACT_APP_API_URL}inner-category-content/${catID}/${leadLimit}`)
                        .then(({ data }) => {
                            if (data.inner_category_content) {
                                setcatLeadNews1(data.inner_category_content[0]);
                                setcatLeadNews2(data.inner_category_content[1]);
                                setcatLeadNews3(data.inner_category_content.slice(2, 5));
                                setIsSkeletonLoading(false)
                                // leadNews position array ------ start
                                InnerSpecialContents = ``
                                for (let i = 0; i < data.inner_category_content.length; i++) {
                                    if (data.inner_category_content[i].ContentID) {
                                        InnerSpecialContents = InnerSpecialContents + `${data.inner_category_content[i].ContentID}`
                                        if (data.inner_category_content.length !== i + 1) {
                                            InnerSpecialContents = InnerSpecialContents + `, `
                                        }
                                    }
                                }
                                // InnerSpecialContents = InnerSpecialContents + ``
                                // leadNews position array ------ end

                                formData = { 'CategoryID': catID, 'limit': limit, 'offset': 0, 'InnerSpecialContents': InnerSpecialContents }
                                axios
                                    .post(`${process.env.REACT_APP_API_URL}inner-category-content-more`, formData)
                                    .then(({ data }) => {
                                        if (data.data) {
                                            setcatLeadMore(data.data);
                                            setTimeout(function () {
                                                lazyloaded = false
                                                ForLazyLoaderImg(lazyloaded)
                                            }, 1000);
                                            if (data.data.length < limit) {
                                                showMore = false
                                            }
                                        }
                                    });
                                setTimeout(function () {
                                    lazyloaded = false
                                    ForLazyLoaderImg(lazyloaded)
                                }, 1000);
                            }
                        });
                    // offset = leadLimit
                    // axios
                    //     .get(`${process.env.REACT_APP_API_URL}inner-category-content-more/${catID}/${limit}/${offset}`)
                    //     .then(({ data }) => {
                    //         if (data.inner_category_more_content) {
                    //             setcatLeadMore(data.inner_category_more_content);
                    //             setTimeout(function () {
                    //                 lazyloaded = false
                    //                 ForLazyLoaderImg(lazyloaded)
                    //             }, 1000);
                    //             if (data.inner_category_more_content.length < limit) {
                    //                 showMore = false
                    //             }
                    //         }
                    //     });
                    axios
                        .get(`${process.env.REACT_APP_API_URL}json/file/generateCategoryPopular${catID}.json`)
                        .then(({ data }) => {
                            setcCatReadLeadMore(data.data);
                        });
                } else {
                    setcatName(null)
                }
            });
        const timer = setTimeout(() => { window.location.reload(1); }, 300000);
        return () => clearTimeout(timer);
    }, [catSlug])

    const toggleButtonState = () => {
        offset += limit
        setIsLoadingData(true)
        showMore = true
        formData = { 'CategoryID': catID, 'limit': limit, 'offset': offset, 'InnerSpecialContents': InnerSpecialContents }
        axios
            .post(`${process.env.REACT_APP_API_URL}inner-category-content-more`, formData)
            .then(({ data }) => {
                setIsLoadingData(false)
                if (data.data) {
                    if (data.data.length < limit) {
                        showMore = false
                    }
                    for (let i = 0; i < data.data.length; i++) {
                        setcatLeadMore(oldArray => [...oldArray, data.data[i]]);
                    }
                    setTimeout(function () {
                        lazyloaded = false
                        ForLazyLoaderImg(lazyloaded)
                    }, 1000);
                }
            });
        // axios
        //     .get(`${process.env.REACT_APP_API_URL}inner-category-content-more/${catID}/${limit}/${offset}`)
        //     .then(({ data }) => {
        //         setIsLoadingData(false)
        //         if (data.inner_category_more_content.length < limit) {
        //             showMore = false
        //         }
        //         for (let i = 0; i < data.inner_category_more_content.length; i++) {
        //             setcatLeadMore(oldArray => [...oldArray, data.inner_category_more_content[i]]);
        //         }
        //         setTimeout(function () {
        //             lazyloaded = false
        //             ForLazyLoaderImg(lazyloaded)
        //         }, 1000);
        //     });
    };

    return (
        <>
            {catName ?
                <main>
                    <div className="container">
                        <h2 className="mvp-feat1-pop-head"><Link to={"/" + catName.Slug} onClick={scrollTop}><span className="mvp-feat1-pop-head">{catName.CategoryName || <Skeleton count={1} />}</span></Link></h2>
                        <DocumentTitle title={catName && catName.CategoryName} />
                        <CatLdjsonBn CatNames={catName.CategoryName} CatNameSlug={catName.Slug} />
                        <div className="row">
                            <div className="col-lg-9 col-sm-12">
                                {catSlug === 'country' && <DivisionDistrictName />}
                                <>
                                    <div className="row">
                                        <div className="col-lg-8 col-12 d-flex">
                                            {isSkeletonLoading ?
                                                <div className="DCatLeadTop" style={{ width: '100%' }}>
                                                    <Link to={"/"}>
                                                        {window.innerWidth > 991 ?
                                                            <div className="row">
                                                                <div className="col-lg-8 col-12 videoIcon">
                                                                    <Skeleton height={252} width={413} />
                                                                </div>
                                                                <div className="col-lg-4 col-12">
                                                                    <div className="Desc">
                                                                        <h1 className="Title BGTitle"><Skeleton count={3} /></h1>
                                                                        <div className="Brief">
                                                                            <Skeleton count={5} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div> : <div className="row">
                                                                <div className="col-lg-8 col-12 videoIcon">
                                                                    {window.innerWidth > 526 ?
                                                                        <Skeleton width={`100%`} height={464} /> :
                                                                        <Skeleton width={`100%`} height={222} />}
                                                                </div>
                                                                <div className="col-lg-4 col-12">
                                                                    <div className="Desc">
                                                                        <Skeleton count={5} />
                                                                    </div>
                                                                </div>
                                                            </div>}
                                                    </Link>
                                                </div>
                                                :
                                                <div className="DCatLeadTop">
                                                    <Link to={"/" + catSlug + "/" + catLeadNews1.ContentID} onClick={scrollTop}>
                                                        <div className="row">
                                                            <div className="col-lg-8 col-12 videoIcon">
                                                                <picture><img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + catLeadNews1.ImageBgPath} alt={catLeadNews1.ContentHeading} title={catLeadNews1.ContentHeading} /></picture>
                                                                {catLeadNews1.ShowVideo === 1 || catLeadNews1.VideoID !== null ? <span className="play-btn-big"><i className="fas fa-play"></i></span> : ""}
                                                            </div>
                                                            <div className="col-lg-4 col-12">
                                                                <div className="Desc">
                                                                    <h1 className="Title BGTitle">{catLeadNews1.ContentHeading}</h1>
                                                                    <div className="Brief">
                                                                        <p dangerouslySetInnerHTML={{ __html: catLeadNews1.ContentBrief }} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>}
                                        </div>
                                        <div className="col-lg-4 col-12 d-flex">
                                            {isSkeletonLoading ?
                                                <div className="DCatTop2 align-self-stretch" >
                                                    <Link to={"/"}>
                                                        {window.innerWidth > 991 ?
                                                            <div className="row">
                                                                <div className="col-lg-12 col-sm-3 col-5 videoIcon">
                                                                    <div className="DImgZoomBlock">
                                                                        <Skeleton height={186} width={304} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12 col-sm-9 col-7">
                                                                    <div className="Desc">
                                                                        <h3 className="Title"><Skeleton count={2} /></h3>
                                                                    </div>
                                                                </div>
                                                            </div> : <div className="row">
                                                                <div className="col-lg-12 col-sm-3 col-5 videoIcon">
                                                                    <div className="DImgZoomBlock">
                                                                        <Skeleton height={91} width={`100%`} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12 col-sm-9 col-7">
                                                                    <div className="Desc">
                                                                        <h3 className="Title"><Skeleton count={2} /></h3>
                                                                    </div>
                                                                </div>
                                                            </div>}
                                                    </Link>
                                                </div> :
                                                <div className="DCatTop2 align-self-stretch" >
                                                    <Link to={"/" + catSlug + "/" + catLeadNews2.ContentID} onClick={scrollTop}>
                                                        <div className="row">
                                                            <div className="col-lg-12 col-sm-3 col-5 videoIcon">
                                                                <div className="DImgZoomBlock">
                                                                    <picture><img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + catLeadNews2.ImageSmPath} alt={catLeadNews2.ContentHeading} title={catLeadNews2.ContentHeading} /></picture>
                                                                    {catLeadNews2.ShowVideo === 1 || catLeadNews2.VideoID !== null ? <span className="play-btn-big"><i className="fas fa-play"></i></span> : ""}
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 col-sm-9 col-7">
                                                                <div className="Desc">
                                                                    <h3 className="Title">{catLeadNews2.ContentHeading}</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>}
                                        </div>
                                    </div>
                                    <div className="DCatTop3">
                                        <div className="row">
                                            {isSkeletonLoading ? <>
                                                {Array(3).fill("").map((nc) => (
                                                    <div className="col-lg-4 col-12 d-flex" key={nc.ContentID}>
                                                        <div className="DCatTop3tList align-self-stretch">
                                                            <Link to={"/"}>
                                                                {window.innerWidth > 991 ?
                                                                    <div className="row">
                                                                        <div className="col-lg-12 col-sm-3 col-5 videoIcon">
                                                                            <Skeleton height={186} width={304} />
                                                                        </div>
                                                                        <div className="col-lg-12 col-sm-9 col-7">
                                                                            <div className="Desc">
                                                                                <h3 className="Title"><Skeleton count={2} /></h3>
                                                                            </div>
                                                                        </div>
                                                                    </div> : <div className="row">
                                                                        <div className="col-lg-12 col-sm-3 col-5 videoIcon">
                                                                            <Skeleton height={91} width={`100%`} />
                                                                        </div>
                                                                        <div className="col-lg-12 col-sm-9 col-7">
                                                                            <div className="Desc">
                                                                                <h3 className="Title"><Skeleton count={2} /></h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>}
                                                            </Link>
                                                        </div>
                                                    </div>
                                                ))}
                                            </> : <>
                                                {catLeadNews3 && catLeadNews3.map((nc) => {
                                                    return (
                                                        <div className="col-lg-4 col-12 d-flex" key={nc.ContentID}>
                                                            <div className="DCatTop3tList align-self-stretch">
                                                                <Link to={"/" + catSlug + "/" + nc.ContentID} onClick={scrollTop}>
                                                                    <div className="row">
                                                                        <div className="col-lg-12 col-sm-3 col-5 videoIcon">
                                                                            <div className="DImgZoomBlock">
                                                                                <picture><img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + nc.ImageSmPath} alt={nc.ContentHeading} title={nc.ContentHeading} /></picture>
                                                                                {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn-big"><i className="fas fa-play"></i></span> : ""}                                                                        </div>
                                                                        </div>
                                                                        <div className="col-lg-12 col-sm-9 col-7">
                                                                            <div className="Desc">
                                                                                <h3 className="Title">{nc.ContentHeading}</h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </>}
                                        </div>
                                    </div>
                                </>
                            </div>
                            <div className="col-lg-3 col-sm-12 category">
                                <Squire01 />
                                <LatestMostPopular />
                            </div>
                        </div>
                        <Vertical01 />
                        <div className="row">
                            <div className="col-lg-9 col-sm-12">
                                <div className="row">
                                    <div className="col-lg-12 col-sm-12">
                                        <div className="SPSecTitle">
                                            <h2><img src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/Sign.png"} width={16} height={16} alt="Sign" title="Sign" /> {catName.CategoryName} বিভাগের সব খবর</h2>
                                        </div>
                                    </div>
                                </div>
                                <section className="DCatNewsListArea">
                                    <div className="row">
                                        {catNewsMore && catNewsMore.map((nc, i) => {
                                            return (
                                                <>
                                                    <div className="col-lg-6 col-12 d-flex" key={nc.ContentID}>
                                                        <div className="DCatNewsList align-self-stretch">
                                                            <Link to={"/" + catSlug + "/" + nc.ContentID} onClick={scrollTop}>
                                                                <div className="row">
                                                                    <div className="col-lg-5 col-sm-4 col-5 videoIcon">
                                                                        <picture><img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + nc.ImageSmPath} alt={nc.ContentHeading} title={nc.ContentHeading} /></picture>
                                                                        {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn"><i className="fas fa-play"></i></span> : ""}
                                                                    </div>
                                                                    <div className="col-lg-7 col-sm-8 col-7">
                                                                        <div className="Desc">
                                                                            <h3 className="Title">{nc.ContentHeading}</h3>
                                                                            <p className="pDate">{banglaDateConvetar(nc.create_date)}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <>
                                                        {(i + 1) % 4 === 0 && i > 0 && i < catNewsMore.length - 1 ?
                                                            <Vertical01 />
                                                            : ""}
                                                    </>
                                                </>
                                            )
                                        })}
                                    </div>
                                </section>
                                {showMore ?
                                    <div id="btnDiv" className="text-center mt-4 mb-4"><button id="ajax-more-btn" className="btn btn-lg btn-block ButtonBG" onClick={toggleButtonState}>
                                        আরো পড়ুন
                                        {isLoadingData === true &&
                                            <img src={process.env.REACT_APP_FONT_DOMAIN_URL + "/media/common/loading.gif"} alt="loading" title='loading' style={{ width: '28px', marginLeft: '12px' }} />
                                        }</button></div>
                                    : false}
                            </div>
                            <div className="col-lg-3 col-sm-12">
                                <CatMostReadable catReadNewsMore={catReadNewsMore} />
                                <Squire01 />
                            </div>
                        </div>
                    </div>
                </main>
                : <ErrorPageBn />}
        </>
    )
}
