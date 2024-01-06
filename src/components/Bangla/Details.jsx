import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import axios from 'axios'
import FBpagePlugin from './FBpagePlugin'
import SocialShare from '../SocialShare'
import DocumentTitle from "react-document-title";
import { banglaDateConvetar, scrollTop, ForLazyLoaderImg } from '../AllFunctions'
import CatMostReadable from './Category/CatMostReadable'
import ErrorPageBn from './ErrorPageBn'
import Squire01 from '../AdsByGoogle/Squire01'
import LdjsonBn from './LdjsonBn'
import Horizontal01 from '../AdsByGoogle/Horizontal01'
import { InArticleDetails03 } from "../AdsByGoogle/DetailsPageInnerAD"
import Vertical01 from '../AdsByGoogle/Vertical01'

var lazyloaded = false
var tag
var tagToarray = []
var RelatedNews

var innerAds = false
export default function Details() {
    let { catSlug } = useParams();
    let { id } = useParams();
    const [catName, setCatName] = useState([])
    const [contentID, setContentID] = useState([])
    const [writer, setWriter] = useState([]);
    const [involvedNews, setInvolvedNews] = useState([])
    const [relatedNews, setRelatedNews] = useState([])
    const [readMore, setReadMore] = useState([])
    const [latestNews, setLatestNews] = useState([])
    const [popularNews, setPopularNews] = useState([])
    const [pageURL, setPageURL] = useState(0);
    const [fontSize, setFontSize] = useState(20);

    const [catReadNewsMore, setcCatReadLeadMore] = useState([])
    const [isSkeletonLoading, setIsSkeletonLoading] = useState(true);
    const [isSkeletonLoadingInvolved, setIsSkeletonLoadingInvolved] = useState(true);

    const [ip, setIP] = useState([]) // eslint-disable-line no-unused-vars
    const PrintAble = () => { window.print(); };
    useEffect(() => {
        // document.querySelectorAll('link[rel="canonical"]')[0].setAttribute('href', window.location.href)
        setPageURL(window.location.href);
        setIsSkeletonLoading(true)
        setIsSkeletonLoadingInvolved(true)
        axios
            .get(`${process.env.REACT_APP_API_URL}hit-count/${id}`)
            .then(({ data }) => {
            })
        axios
            .get(`${process.env.REACT_APP_API_URL}category/${catSlug}`)
            .then(({ data }) => {
                setCatName(data.category);
                axios
                    .get(`${process.env.REACT_APP_API_URL}details-readmore-content/${data.category.CategoryID}/${id}`)
                    .then(({ data }) => {
                        setReadMore(data.relatedContent);
                        setTimeout(function () {
                            lazyloaded = false
                            ForLazyLoaderImg(lazyloaded)
                        }, 1000);
                    });
                axios
                    .get(`${process.env.REACT_APP_API_URL}json/file/generateCategoryPopular${data.category.CategoryID}.json`)
                    .then(({ data }) => {
                        setcCatReadLeadMore(data.data);
                        setTimeout(function () {
                            lazyloaded = false
                            ForLazyLoaderImg(lazyloaded)
                        }, 1000);
                    });
            });
        axios
            .get(`${process.env.REACT_APP_API_URL}content-details/${id}`)
            .then(({ data }) => {
                if (data.contentDetails.length !== 0) {
                    setContentID(data.contentDetails[0]);
                    setIsSkeletonLoading(false)
                    innerAds = false
                    axios
                        .get(`${process.env.REACT_APP_API_URL}get-client-ip`)
                        .then(({ data }) => {
                            setIP(data.data);
                            if (data.data !== "203.76.114.34" && data.data !== "118.67.221.226") {
                                // setTimeout(function () {
                                //     (window.adsbygoogle = window.adsbygoogle || []).push({});
                                // }, 1000);
                                // setTimeout(function () {
                                //     (window.adsbygoogle = window.adsbygoogle || []).push({});
                                // }, 1000);
                                let contentDetails2 = document.querySelectorAll('#contentDetails p')[0].children.length
                                let innerPeraLength = contentDetails2 + 1
                                // console.log(innerPeraLength);
                                for (let j = 0; j < innerPeraLength; j++) {
                                    // console.log('hello google =' + innerPeraLength);
                                    if ((j + 1) % 2 === 0 && j > 0 && j < innerPeraLength - 1) {
                                        setTimeout(function () {
                                            (window.adsbygoogle = window.adsbygoogle || []).push({});
                                            // console.log('hello google push inner');
                                        }, 1000);
                                        // console.log('hello google push');
                                    }
                                }
                            }
                        })
                    setTimeout(function () {
                        if (!innerAds) {
                            innerAds = true
                            inner_Caption()
                        }
                    }, 400);
                    setTimeout(function () {
                        InArticleDetails03()
                    }, 400);

                    tag = data.contentDetails[0].Tags
                    if (tag) {
                        tagToarray = tag.split(',')
                    }
                    RelatedNews = data.contentDetails[0].RelNewsIDs
                    if (RelatedNews) {
                        axios
                            .get(`${process.env.REACT_APP_API_URL}related-news/${id}`)
                            .then(({ data }) => {
                                setRelatedNews(data.relatedNewslist);
                            });
                    }
                    // console.log(data.contentDetails[0]);
                    if (data.contentDetails[0].WriterID) {
                        axios
                            .get(`${process.env.REACT_APP_API_URL}writers-info/${data.contentDetails[0].WriterID}`)
                            .then(({ data }) => {
                                setWriter(data.writers_by_ID)
                            })
                    }
                } else {
                    setContentID(null);
                }
            });
        axios
            .get(`${process.env.REACT_APP_API_URL}involve-news/${id}`)
            .then(({ data }) => {
                if (data.involveNewslist) {
                    setInvolvedNews(data.involveNewslist.slice(0, 4));
                    setIsSkeletonLoadingInvolved(false)
                }
            });
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateLatest.json`)
            .then(({ data }) => {
                setLatestNews(data.data);
            });
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generatePopular.json`)
            .then(({ data }) => {
                setPopularNews(data.data);
            });
        const timer = setTimeout(() => { window.location.reload(1); }, 300000);
        return () => clearTimeout(timer);
    }, [catSlug, id])

    const inner_Caption = () => {
        window.setTimeout(() => {
            let contentImages = document.querySelectorAll('#contentDetails p img')
            for (let index = 0; index < contentImages.length; index++) {
                let caption = contentImages[index].getAttribute('alt');
                let pstyle = contentImages[index].getAttribute('style');
                contentImages[index].removeAttribute('style');
                let image = contentImages[index].outerHTML
                if (caption !== "") {
                    let newDiv = `<div class="dCaption2" style="${pstyle}">${image}<p class="img-caption">${caption}</p></div>`
                    contentImages[index].outerHTML = newDiv
                } else {
                    let newDiv = `<div class="dCaption2" style="${pstyle}">${image}</div>`
                    contentImages[index].outerHTML = newDiv
                }
            }

            let contentIframes = document.querySelectorAll('#contentDetails p iframe')
            for (let index = 0; index < contentIframes.length; index++) {
                let iframe = contentIframes[index].outerHTML
                let newDiv = `<div class="embed-responsive embed-responsive-16by9">${iframe}</div>`
                contentIframes[index].outerHTML = newDiv
            } //internal video from iframe

            let contentScript = document.querySelectorAll('#contentDetails p script')
            for (let index = 0; index < contentScript.length; index++) {
                let script = contentScript[index]
                var newscript = document.createElement('script');
                newscript.type = 'text/javascript';
                newscript.async = true;
                newscript.src = script.src;
                script.parentNode.insertBefore(newscript, script)
                script.remove()
            }//reRun twitter & instragram-embed script from API
        }, 200);
    }

    return (
        <>
            {contentID ?
                <main>
                    <div className="container">
                        <LdjsonBn contentID={contentID} catName={catName} pageURL={pageURL} />
                        <div className="row">
                            <div className="col-lg-2 col-12 MobileHide">
                                <div className="mt-5 AdditionalInfo d-print-none">
                                    {writer.length ?
                                        <div className="WritterName">
                                            {writer.map((nc) => {
                                                return (
                                                    <p key={nc.WriterID}>
                                                        <Link to={"/writers/" + nc.Slug}>
                                                            <picture>
                                                                <img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Writer + nc.ImagePath || <Skeleton />} alt={nc.WriterName} title={nc.WriterName} className="Writer-img"></img>
                                                            </picture>
                                                            <i className="fas fa-pencil-alt"></i> {nc.WriterName || <Skeleton />}
                                                        </Link>
                                                        {/* <span className='DInitial'>, ডেইলি-বাংলাদেশ ডটকম</span> */}
                                                        {contentID.create_date && <div className="DPublishTime"><p><i className="fas fa-clock"></i> প্রকাশিত: {banglaDateConvetar(contentID.create_date || <Skeleton />)}</p></div>}
                                                        {contentID.updated_date && <div className="DPublishTime"><p><i className="fas fa-clock"></i> আপডেট: {banglaDateConvetar(contentID.updated_date) || <Skeleton />}</p></div>}
                                                    </p>
                                                )
                                            })}
                                        </div>
                                        :
                                        <>
                                            <div className="WritterName"><p><i className="fas fa-pencil-alt"></i> {contentID.WriterName || <Skeleton />}</p></div>
                                            {contentID.create_date && <div className="DPublishTime"><p><i className="fas fa-clock"></i> প্রকাশিত: {banglaDateConvetar(contentID.create_date || <Skeleton />)}</p></div>}
                                            {contentID.updated_date && <div className="DPublishTime"><p><i className="fas fa-clock"></i> আপডেট: {banglaDateConvetar(contentID.updated_date) || <Skeleton />}</p></div>}
                                        </>
                                    }
                                    <div className="DAdditionalInfo">
                                        <button type="button" className="printMe" onClick={PrintAble}>
                                            <i className="fas fa-print"></i>
                                        </button>
                                        <button id="btnDecrease" onClick={() => setFontSize(fontSize - 1)}><span>A-</span></button>
                                        <button id="btnOriginal" onClick={() => setFontSize(20)}><span>A</span></button>
                                        <button id="btnIncrease" onClick={() => setFontSize(fontSize + 1)}><span>A+</span></button>
                                    </div>
                                    <SocialShare title={contentID.DetailsHeading ? contentID.DetailsHeading : contentID.ContentHeading} pageURL={pageURL} />
                                    <div className="DGoogleNewsBox"><a href="https://news.google.com/publications/CAAqBwgKMLqtngsw0be2Aw?hl=en-US&gl=US&ceid=US:en" target="blank" rel="noreferrer"><img className="img-fluid img100" src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/DB-GoogleNewsGIF.gif"} alt="Google News" title="Google News" /></a></div>
                                </div>
                                <Horizontal01 />
                                <Squire01 />
                            </div>
                            <div className="col-lg-7 col-12">
                                <div className="HeadingArea">
                                    <Link to={"/" + catName.Slug} onClick={scrollTop}>
                                        <h4 className='DCatNameInner'>{catName.CategoryName}</h4>
                                    </Link>
                                    {contentID.ContentShoulder && <h3 className='DHeadingSubHeading'>{contentID.ContentShoulder || <Skeleton count={3} />}</h3>}
                                    <h1 className='DHeadingInner'>{contentID.DetailsHeading ? contentID.DetailsHeading : contentID.ContentHeading || <Skeleton count={3} />}</h1>
                                    {contentID.ContentSubHeading && <h4 className='DHeadingContentShoulder'>{contentID.ContentSubHeading || <Skeleton count={3} />}</h4>}

                                    <div className="AdditionalInfo d-print-none MobileShow">
                                        <div className="row d-flex align-items-center">
                                            <div className="col-sm-6">
                                                {writer.length ?
                                                    <div className="WritterName">
                                                        {writer.map((nc) => {
                                                            return (
                                                                <p key={nc.WriterID}>
                                                                    <Link to={"/writers/" + nc.Slug}>
                                                                        <picture>
                                                                            <img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Writer + nc.ImagePath || <Skeleton />} alt={nc.WriterName} title={nc.WriterName} className="Writer-img"></img>
                                                                        </picture>
                                                                        <i className="fas fa-pencil-alt"></i> {nc.WriterName || <Skeleton />}
                                                                    </Link>
                                                                    {/* <span className='DInitial'>, ডেইলি-বাংলাদেশ ডটকম</span> */}
                                                                    {contentID.create_date && <div className="DPublishTime"><p><i className="fas fa-clock"></i> প্রকাশিত: {banglaDateConvetar(contentID.create_date || <Skeleton />)}</p></div>}
                                                                    {contentID.updated_date && <div className="DPublishTime"><p><i className="fas fa-clock"></i> আপডেট: {banglaDateConvetar(contentID.updated_date) || <Skeleton />}</p></div>}
                                                                </p>
                                                            )
                                                        })}
                                                    </div>
                                                    :
                                                    <>
                                                        {/* <div className="WritterName"><p style={{ marginLeft: '8px' }}><i className="fas fa-pencil-alt"></i> {contentID.WriterName}, ডেইলি-বাংলাদেশ ডটকম</p></div> */}
                                                        <div className="WritterName"><p><i className="fas fa-pencil-alt"></i> {contentID.WriterName || <Skeleton />}</p></div>
                                                        {contentID.create_date && <div className="DPublishTime"><p><i className="fas fa-clock"></i> প্রকাশিত: {contentID.create_date && banglaDateConvetar(contentID.create_date || <Skeleton />)}</p></div>}
                                                        {contentID.updated_date && <div className="DPublishTime"><p><i className="fas fa-clock"></i> আপডেট: {banglaDateConvetar(contentID.updated_date) || <Skeleton />}</p></div>}
                                                    </>
                                                }
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="DAdditionalInfo">
                                                    <button type="button" className="printMe" onClick={PrintAble}>
                                                        <i className="fas fa-print"></i>
                                                    </button>
                                                    <button id="btnDecrease" onClick={() => setFontSize(fontSize - 1)}><span>A-</span></button>
                                                    <button id="btnOriginal" onClick={() => setFontSize(20)}><span>A</span></button>
                                                    <button id="btnIncrease" onClick={() => setFontSize(fontSize + 1)}><span>A+</span></button>
                                                </div>
                                                <SocialShare title={contentID.DetailsHeading ? contentID.DetailsHeading : contentID.ContentHeading} pageURL={pageURL} />
                                                <div className="DGoogleNewsBox"><a href="https://news.google.com/publications/CAAqBwgKMLqtngsw0be2Aw?hl=en-US&gl=US&ceid=US:en" target="blank" rel="noreferrer"><img className="img-fluid img100" src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/DB-GoogleNewsGIF.gif"} alt="Google News" title="Google News" /></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {isSkeletonLoading ? <>
                                    {window.innerWidth > 991 ?
                                        <Skeleton height={452} width={`100%`} /> :
                                        <>{window.innerWidth > 526 ?
                                            <Skeleton width={`100%`} height={420} /> :
                                            <Skeleton width={`100%`} height={220} />}</>}
                                </> : <>
                                    {contentID.VideoID !== null && contentID.VideoID !== '' ?
                                        <div className="col-sm-12 video-container">
                                            {contentID.VideoType === "youtube" ?
                                                <iframe className="embed-responsive-item pb-3" title="youtube-video" src={"https://www.youtube.com/embed/" + contentID.VideoID + "?autoplay=1"} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                                                : contentID.VideoType === "vimeo" ?
                                                    <iframe src={"https://player.vimeo.com/video/" + contentID.VideoID} title="vimeo-video" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                                                    : contentID.VideoType === "facebook" ?
                                                        <iframe src={"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebookapp%2Fvideos%2F" + contentID.VideoID + "%2F&show_text=0&width=560"} title="facebook-video" width="560" height="315" style={{ border: "none", overflow: "hidden", paddingBottom: '1rem' }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                                                        : contentID.VideoType === "instagram" ?
                                                            <iframe className="embed-responsive-item pb-3" title="instagram-video" src={"//instagram.com/p/" + contentID.VideoID + ">/embed"} width="100%" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
                                                            : false}
                                        </div>
                                        :
                                        <div className="TopImg">
                                            <img src={process.env.REACT_APP_IMG_Path + contentID.ImageBgPath} alt={contentID.ContentHeading} title={contentID.ContentHeading} className="img-fluid img100" />
                                            {contentID.ImageBgPathCaption ?
                                                <p className="DDetailsCaption">{contentID.ImageBgPathCaption}</p> : <p className="DDetailsCaption">{contentID.ContentHeading || <Skeleton />}</p>}
                                        </div>
                                    }</>}
                                <DocumentTitle title={contentID.DetailsHeading ? contentID.DetailsHeading : contentID.ContentHeading} />

                                <div id="contentDetails" className='DDetailsContent' style={{ fontSize: `${fontSize}px` }}>
                                    {!contentID.ContentDetails ?
                                        <Skeleton count={20} /> :
                                        <p dangerouslySetInnerHTML={{ __html: contentID.ContentDetails }}></p>}
                                    {contentID.Source && <p>{contentID.Source || <Skeleton />}</p>}
                                    {contentID.Initial && <p className="DInitSeq">ডেইলি-বাংলাদেশ/{contentID.InitSeq || <Skeleton />}</p>}
                                    {/* <div className="DAdd2 d-flex justify-content-center mb-4 d-print-none"><a href="/"><img src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/Advertisement/10236860777953529754.png"} alt="Advertisement" title="Advertisement" className="img-fluid" /></a></div> */}
                                    {tag &&
                                        <div className="RelatedTags d-print-none">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <p className="Subject"><i className="fas fa-tag"></i> সম্পর্কিত বিষয়: </p>
                                                    {tagToarray.map((nc) => {
                                                        return (
                                                            <div className="TagList" key={nc}>
                                                                <Link to={"/tags/" + nc} onClick={scrollTop}><p>{nc || <Skeleton />}</p></Link>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {RelatedNews &&
                                        <div className="InnerReadMore d-print-none">
                                            <p className="Title"><i className="fas fa-list"></i> সংশ্লিষ্ট খবর:</p>
                                            <ul className="InnerReadMoreList">
                                                {relatedNews.map((nc) => {
                                                    return (
                                                        <li key={nc.ContentID}>
                                                            <Link to={"/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}><img src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/Sign.png"} width={16} height={16} alt="Sign" title="Sign" className="imgIcon" /><p>{nc.ContentHeading || <Skeleton />}</p></Link>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    }
                                </div>
                                <div className="row MarginTop20 d-print-none">
                                    <Vertical01 />
                                    <div className="col-sm-12">
                                        <div className="CommentBg">
                                            {/* <div className="fb-comments" data-href="https://www.thedailystar.net/" data-numposts="3"></div> */}
                                            <div className="fb-comments" data-href={pageURL} data-width="" data-numposts="3"></div>
                                        </div>
                                    </div>
                                </div>
                                {involvedNews.length > 0 &&
                                    <>
                                        <p className="catTitle d-print-none mt-4 mb-3"> সম্পর্কিত খবর:</p>
                                        {isSkeletonLoadingInvolved ?
                                            <div className="row d-print-none">
                                                {Array(3).fill("").map(() => (
                                                    <div className="col-lg-4 col-12 d-flex">
                                                        <div className="DReadMoreList align-self-stretch">
                                                            <div className="row">
                                                                <div className="col-lg-12 col-sm-4 col-5 videoIcon">
                                                                    <Skeleton height={190} />
                                                                </div>
                                                                <div className="col-lg-12 col-sm-8 col-7">
                                                                    <h3 className="Title fw-bold"><Skeleton /></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div> :
                                            <div className="row d-print-none">
                                                {involvedNews.map((nc) => {
                                                    return (
                                                        <div className="col-lg-4 col-12 d-flex" key={nc.ContentID}>
                                                            <div className="DReadMoreList align-self-stretch">
                                                                <Link to={"/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                                                    <div className="row">
                                                                        <div className="col-lg-12 col-sm-4 col-5 videoIcon">
                                                                            <picture>
                                                                                <img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + nc.ImageSmPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" />
                                                                            </picture>
                                                                            {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn-big"><i className="fas fa-play"></i></span> : ""}
                                                                        </div>
                                                                        <div className="col-lg-12 col-sm-8 col-7">
                                                                            <h3 className="Title fw-bold">{nc.ContentHeading}</h3>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        }
                                    </>
                                }
                            </div>
                            <div className="col-lg-3 d-print-none">
                                <Squire01 />
                                <div className="MostPopularArea">
                                    <div className="MostPopularTitle"><p>সর্বশেষ খবর</p></div>
                                    <div className="MostPopularInner">
                                        {latestNews.map((nc) => {
                                            return (
                                                <div className="MostPopularInnerList" key={nc.ContentID}>
                                                    <Link to={"/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                                        <div className="row">
                                                            <div className="col-lg-5 col-sm-4 col-5 videoIcon">
                                                                <picture><img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + nc.ImageThumbPath} alt={nc.ContentHeading} title={nc.ContentHeading} /></picture>
                                                                {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn"><i className="fas fa-play"></i></span> : ""}
                                                            </div>
                                                            <div className="col-lg-7 col-sm-8 col-7">
                                                                <div className="Desc"><h3 className="Title SMTitle fw-bold">{nc.ContentHeading}</h3></div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="fb-page-banner">
                                    <FBpagePlugin />
                                </div>
                                <Squire01 />
                                <CatMostReadable catReadNewsMore={catReadNewsMore} />
                                <Squire01 />
                                <div className="MostPopularArea">
                                    <div className="MostPopularTitle"><p>সর্বাধিক পঠিত</p></div>
                                    <div className="MostPopularInner">
                                        {popularNews.map((nc) => {
                                            return (
                                                <div className="MostPopularInnerList" key={nc.ContentID}>
                                                    <Link to={"/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                                        <div className="row">
                                                            <div className="col-lg-5 col-sm-4 col-5 videoIcon">
                                                                <picture><img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + nc.ImageThumbPath} alt={nc.ContentHeading} title={nc.ContentHeading} /></picture>
                                                                {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn"><i className="fas fa-play"></i></span> : ""}
                                                            </div>
                                                            <div className="col-lg-7 col-sm-8 col-7">
                                                                <div className="Desc"><h3 className="Title SMTitle fw-bold">{nc.ContentHeading}</h3></div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <Squire01 />
                            </div>
                        </div>
                        <Vertical01 />
                        <div className="DReadMore d-print-none">
                            <p className="catTitle">আরো পড়ুন &nbsp;</p>
                            <div className="row">
                                {readMore && readMore.map((nc) => {
                                    return (
                                        <div className="col-lg-3 col-12 d-flex" key={nc.ContentID}>
                                            <div className="DReadMoreList align-self-stretch">
                                                <Link to={"/" + nc.CategorySlug + "/" + nc.ContentID} onClick={scrollTop}>
                                                    <div className="row">
                                                        <div className="col-lg-12 col-sm-4 col-5 videoIcon">
                                                            <picture>
                                                                <img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + nc.ImageSmPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" />
                                                            </picture>
                                                            {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn-big"><i className="fas fa-play"></i></span> : ""}
                                                        </div>
                                                        <div className="col-lg-12 col-sm-8 col-7">
                                                            <h3 className="Title fw-bold">{nc.ContentHeading}</h3>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <Vertical01 />
                    </div>
                </main>
                : <ErrorPageBn />}
        </>
    )
}
