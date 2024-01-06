import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DocumentTitle from 'react-document-title'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { scrollTop, ForLazyLoaderImg } from '../AllFunctions'
var lazyloaded = false
var showMore = true
var formData = []
var offset = 0
var limit = 12
export default function SearchResult() {
    let navigate = useNavigate();
    let searchSlug = useParams();
    var searchValue = searchSlug.searchSlug
    const [news, setNews] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingData, setIsLoadingData] = useState(false);
    useEffect(() => {
        if (searchValue) {
            // document.querySelectorAll('link[rel="canonical"]')[0].setAttribute('href', window.location.href)
            window.scroll(0, 0)
            offset = 0
            formData = { 'keyword': searchValue, 'limit': limit, 'offset': offset }
            setIsLoading(true)
            showMore = true
            axios
                .post(`${process.env.REACT_APP_API_URL_EN}archive-search`, formData)
                .then(({ data }) => {
                    setIsLoading(false)
                    if (data.data.length > 0) {
                        setNews(data.data)
                        setTimeout(function () {
                            lazyloaded = false
                            ForLazyLoaderImg(lazyloaded)
                        }, 1000);
                    } else setNews(null)
                    if (data.data.length < limit) {
                        showMore = false
                    }
                });
        }
        const timer = setTimeout(() => { window.location.reload(1); }, 300000);
        return () => clearTimeout(timer);
    }, [searchValue]);
    const toggleButtonState = (e) => {
        e.preventDefault()
        offset += limit
        formData = { 'keyword': searchValue, 'limit': limit, 'offset': offset }
        setIsLoadingData(true)
        showMore = true
        axios
            .post(`${process.env.REACT_APP_API_URL_EN}archive-search`, formData)
            .then(({ data }) => {
                console.log(`${process.env.REACT_APP_API_URL_EN}archive-search`, formData);
                setIsLoadingData(false)
                if (data.data.length < limit) {
                    showMore = false
                }
                for (let i = 0; i < data.data.length; i++) {
                    setNews(oldArray => [...oldArray, data.data[i]]);
                }
                offset += data.data.length
                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);
            });
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        const txt = e.target.q.value;
        navigate('/english/search/' + txt)
    }
    return (
        <>
            <main>
                <div className="container">
                    <div className="TopHomeSection"></div>
                    <DocumentTitle title="Search" />
                    <h2 className="mvp-feat1-pop-head"><a href={"/english/search/" + searchValue} onClick={scrollTop}><span className="mvp-feat1-pop-head">Search</span></a></h2>
                    {!searchValue ?
                        <><h1 className='warningHeaderForSearch'> <span>Sorry,</span> No news found।</h1>
                            <div className="row searchResult">
                                <div className="col-sm-12 d-flex justify-content-center my-5">
                                    <form className="row g-3" onSubmit={handelSubmit}>
                                        <div className="col-auto">
                                            <input type="text" name="q" placeholder="Search Here..." className="form-control" required />
                                        </div>
                                        <div className="col-auto">
                                            <button type="submit" className="btn btn-primary mb-3">
                                                Search
                                                {isLoading === true &&
                                                    <img src={process.env.REACT_APP_FONT_DOMAIN_URL + "/media/common/loading.gif"} alt="loading" title='loading' style={{ width: '28px', marginLeft: '12px' }} />
                                                }
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </>
                        : <>
                            <div className="row searchResult">
                                <div className="col-sm-12 d-flex justify-content-center my-5">
                                    <form className="row g-3" onSubmit={handelSubmit}>
                                        {/* <div className="col-auto">
                                    <label htmlFor="staticEmail2" style={{ paddingTop: '7px' }}>Search : </label>
                                </div> */}
                                        <div className="col-auto">
                                            <input type="text" name="q" placeholder="Search Here..." className="form-control" required />
                                        </div>
                                        <div className="col-auto">
                                            <button type="submit" className="btn btn-primary mb-3">Search
                                                {isLoading === true &&
                                                    <img src={process.env.REACT_APP_FONT_DOMAIN_URL + "/media/common/loading.gif"} alt="loading" title='loading' style={{ width: '28px', marginLeft: '12px' }} />
                                                }</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {isLoading === false &&
                                <>
                                    {news === null ?
                                        <><h1 className='warningHeader'><span>Sorry,</span> No news found।</h1></>
                                        : <>
                                            <div className="row">
                                                {news && news.map((nc) => {
                                                    return (
                                                        <div className="col-lg-6 col-sm-12 border-right-inner1" key={nc.ContentID}>
                                                            <div className="DCategoryListNews En" >
                                                                <Link to={"/english/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                                                    <div className="row">
                                                                        <div className="col-sm-4 col-5 card-video-part">
                                                                            <div className="Imgresize">
                                                                                <figure className="ImgViewer">
                                                                                    <picture className="FixingRatio">
                                                                                        <img src={process.env.REACT_APP_LAZYL_IMG_En} data-src={process.env.REACT_APP_IMG_Path + nc.ImageSmPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100 ImgRatio" />
                                                                                    </picture>
                                                                                </figure>
                                                                            </div>
                                                                            {nc.ShowVideo === 1 || nc.VideoID !== null ? <div className="card-video-icon transition"></div> : ""}
                                                                        </div>
                                                                        <div className="col-sm-8 col-7">
                                                                            <div className="pDesc">
                                                                                <h3 className="pHead">{nc.ContentHeading}</h3>
                                                                                <p dangerouslySetInnerHTML={{ __html: nc.ContentBrief }}></p>
                                                                            </div>
                                                                            <p className="pDate">{nc.create_date}</p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            {showMore &&
                                                <div id="btnDiv" className="text-center mt-3 mb-4">
                                                    <button onClick={toggleButtonState} id="ajax-more-btn" className="btn btn-lg btn-block ButtonBG">Read More...
                                                        {isLoadingData === true &&
                                                            <img src={process.env.REACT_APP_FONT_DOMAIN_URL + "/media/common/loading.gif"} alt="loading" title='loading' style={{ width: '28px', marginLeft: '12px' }} />
                                                        }</button>
                                                </div>}
                                        </>}
                                </>}
                        </>}
                </div>
            </main >
        </>
    )
}
