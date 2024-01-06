import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import { scrollTop, ForLazyLoaderImg } from '../AllFunctions'
import Skeleton from 'react-loading-skeleton'
import Vertical01 from '../AdsByGoogle/Vertical01'
var lazyloaded = false
var offset = 0
var limit = 12
var showMore = true

var start_date = ""
var end_date = ""
var category_name = ""

var formData = []
export default function Archives() {
    const [allCategoryList, setAllCategoryList] = useState([]);
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingData, setIsLoadingData] = useState(false);

    const [selectedStartDate, setSelectedStartDate] = useState('');

    const [isSkeletonLoading, setIsSkeletonLoading] = useState(true);
    useEffect(() => {
        setIsSkeletonLoading(true)
        // document.querySelectorAll('link[rel="canonical"]')[0].setAttribute('href', window.location.href)
        offset = 0
        formData = { 'start_date': "", 'end_date': "", 'category_name': "", 'limit': limit, 'offset': offset }
        showMore = true
        axios
            .post(`${process.env.REACT_APP_API_URL_EN}archive`, formData)
            .then(({ data }) => {
                if (data.archive_data.length < limit) {
                    showMore = false
                }
                setNews(data.archive_data);
                setIsSkeletonLoading(false)
                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);
            });
        axios
            .get(`${process.env.REACT_APP_API_URL_EN}category`)
            .then(({ data }) => {
                setAllCategoryList(data.categories);
            });
        const timer = setTimeout(() => { window.location.reload(1); }, 300000);
        return () => clearTimeout(timer);
    }, []);

    const resultSubmit = (e) => {
        e.preventDefault()
        start_date = e.target.start_date.value;
        end_date = e.target.end_date.value;
        category_name = parseInt(e.target.category_name.value);
        offset = 0
        formData = { 'start_date': start_date, 'end_date': end_date, 'category_name': category_name, 'limit': limit, 'offset': offset }
        setIsLoading(true)
        showMore = true
        axios
            .post(`${process.env.REACT_APP_API_URL_EN}archive`, formData)
            .then(({ data }) => {
                setIsLoading(false)
                if (data.archive_data.length > 0) {
                    setNews(data.archive_data);
                    setIsSkeletonLoading(false)
                    if (data.archive_data.length < limit) {
                        showMore = false
                    }
                    setTimeout(function () {
                        lazyloaded = false
                        ForLazyLoaderImg(lazyloaded)
                    }, 1000);
                } else setNews(null)
            });
    }

    const toggleButtonState = (e) => {
        e.preventDefault()
        offset += limit
        formData = { 'start_date': start_date, 'end_date': end_date, 'category_name': category_name, 'limit': limit, 'offset': offset }
        setIsLoadingData(true)
        showMore = true
        axios
            .post(`${process.env.REACT_APP_API_URL_EN}archive`, formData)
            .then(({ data }) => {
                setIsLoadingData(false)
                setIsSkeletonLoading(false)
                if (data.archive_data.length < limit) {
                    showMore = false
                }
                for (let i = 0; i < data.archive_data.length; i++) {
                    setNews(oldArray => [...oldArray, data.archive_data[i]]);
                }
                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);
            });
    }
    const handleChange = (e) => {
        setSelectedStartDate(e.target.value);
    };
    return (
        <main>
            <div className="container">
                <div className="TopHomeSection"></div>
                <DocumentTitle title="Archives" />
                <h2 className="mvp-feat1-pop-head DTitle En"><Link to="/english/archives" onClick={scrollTop}><span className="mvp-feat1-pop-head">Archive</span></Link></h2>
                <div className="row">
                    <div className="col-sm-12 my-4">
                        <form className="form-inline" onSubmit={resultSubmit}>
                            <div className="form-group clearfix">
                                <div className="row">
                                    <div className="col-sm-4 my-2">
                                        <label htmlFor="start_date">  Start Date :</label>
                                        <input type="date" className="form-control hasDatepicker" id="datepicker" name="start_date" onChange={handleChange} />
                                    </div>
                                    <div className="col-sm-4 my-2">
                                        <label htmlFor="end_date">  End Date :</label>
                                        <input type="date" id="datepickerto" name="end_date" min={selectedStartDate} className="form-control hasDatepicker" />
                                    </div>
                                    <div className="col-sm-4 my-2">
                                        <label htmlFor="category_name">  All Category :</label>
                                        <select defaultValue={''} name="category_name" className="form-control cboCatName">
                                            <option value="">All News</option>
                                            {allCategoryList.map((nc) => {
                                                return (
                                                    <option key={nc.CategoryID} value={nc.CategoryID}>{nc.CategoryName}</option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div id="btnDiv" className="text-center my-4">
                                <button type="submit" name="btnSubmit" className="btn btn-lg btn-block ButtonBG">
                                    Search
                                    {isLoading === true &&
                                        <img src={process.env.REACT_APP_FONT_DOMAIN_URL + "/media/common/loading.gif"} alt="loading" title='loading' style={{ width: '28px', marginLeft: '12px' }} />
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {isSkeletonLoading ?
                    <div className="row">
                        {Array(12).fill("").map(() => (
                            <div className="col-lg-8 offset-lg-2 col-sm-12 border-right-inner1">
                                <div className="DCategoryListNews" >
                                    <div className="row">
                                        <div className="col-sm-4 col-5 videoIcon">
                                            {window.innerWidth > 991 ?
                                                <Skeleton height={157} width={`100%`} /> :
                                                <Skeleton height={91} width={`100%`} />}
                                        </div>
                                        <div className="col-sm-8 col-7">
                                            <div className="pDesc">
                                                <h3 className="pHead"><Skeleton count={3} /></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div> : <>
                        {isLoading === false &&
                            <>
                                {news === null ?
                                    <><h1 className='warningHeader'> <span>Sorry,</span> No news found.</h1></>
                                    : <>
                                        <div className="row">
                                            {news.map((nc, i) => {
                                                return (
                                                    <div className="col-lg-8 offset-lg-2 col-sm-12 border-right-inner1" key={nc.ContentID}>
                                                        <div className="DCategoryListNews En" >
                                                            <Link to={"/english/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                                                <div className="row">
                                                                    <div className="col-sm-4 col-5 videoIcon">
                                                                        <picture>
                                                                            <img src={process.env.REACT_APP_LAZYL_IMG_En} data-src={process.env.REACT_APP_IMG_Path + nc.ImageSmPath} alt={nc.ContentHeading} title={nc.ContentHeading} />
                                                                        </picture>
                                                                        {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn"><i className="fas fa-play"></i></span> : ""}
                                                                    </div>
                                                                    <div className="col-sm-8 col-7">
                                                                        <div className="pDesc">
                                                                            <p className="pCatName">{nc.CategoryName}</p>
                                                                            <h3 className="pHead">{nc.ContentHeading}</h3>
                                                                            <p dangerouslySetInnerHTML={{ __html: nc.ContentBrief }}></p>
                                                                        </div>
                                                                        <p className="pDate">{nc.create_date}</p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        {(i + 1) % 4 === 0 && i > 0 && i < news.length - 1 ?
                                                            <Vertical01 />
                                                            : false}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        {showMore &&
                                            <div id="btnDiv" className="text-center mt-3 mb-4">
                                                <button onClick={toggleButtonState} id="ajax-more-btn" className="btn btn-lg btn-block ButtonBG">
                                                    Read More
                                                    {isLoadingData === true &&
                                                        <img src={process.env.REACT_APP_FONT_DOMAIN_URL + "/media/common/loading.gif"} alt="loading" title='loading' style={{ width: '28px', marginLeft: '12px' }} />
                                                    }
                                                </button>
                                            </div>}
                                    </>}
                            </>}
                    </>}
            </div>
        </main>
    )
}
