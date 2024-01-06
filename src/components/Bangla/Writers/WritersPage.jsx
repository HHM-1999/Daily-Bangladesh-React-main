import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import DocumentTitle from 'react-document-title';
import LatestMostPopular from '../HomeContent/LatestMostPopular';
import { scrollTop, ForLazyLoaderImg, banglaDateConvetar } from '../../AllFunctions'
import ErrorPageBn from '../ErrorPageBn';
import Lazy_img2 from '../../media/db-lazy2.jpg'
import SocialShare from '../../SocialShare';

var lazyloaded = false
var showMore = true
var limit = 8
var offset = 0
export default function WritersPage() {
    const [writers, setWriters] = useState([]);
    const [writersRelatedNews, setWritersRelatedNews] = useState([]);
    const [pageURL, setPageURL] = useState(0);
    let { WriterSlug } = useParams();

    useEffect(() => {
        setPageURL(window.location.href);
        // document.querySelectorAll('link[rel="canonical"]')[0].setAttribute('href', window.location.href)
        offset = 0
        showMore = true
        axios
            .get(`${process.env.REACT_APP_API_URL}writers/${WriterSlug}`)
            .then(({ data }) => {
                if (data.writers.length > 0) {
                    setWriters(data.writers[0])
                } else {
                    setWriters(null)
                }
            })
        axios
            .get(`${process.env.REACT_APP_API_URL}writers-content/${WriterSlug}/${limit}/${offset}`)
            .then(({ data }) => {
                if (data.writers_content.length < limit) {
                    showMore = false
                }
                setWritersRelatedNews(data.writers_content)
                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);
            })
        const timer = setTimeout(() => { window.location.reload(1); }, 300000);
        return () => clearTimeout(timer);
    }, [WriterSlug])

    const toggleButtonState = () => {
        offset += limit
        axios
            .get(`${process.env.REACT_APP_API_URL}writers-content/${WriterSlug}/${limit}/${offset}`)
            .then(({ data }) => {
                if (data.writers_content.length < limit) {
                    showMore = false
                }
                for (let i = 0; i < data.writers_content.length; i++) {
                    setWritersRelatedNews(oldArray => [...oldArray, data.writers_content[i]]);
                }
                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);
            });
    };
    return (
        <>
            {writers ?
                <main>
                    <div className="container">
                        <div className="TopHomeSection"></div>
                        <div className="DTagLead writers-details">
                            <div className="DTagName">
                                <i className="fas fa-user"></i>
                                <h1>লেখক বৃত্তান্ত :</h1>
                            </div>
                            <DocumentTitle title={writers.WriterName} />
                            <>
                                <div className="WritterName">
                                    {writers.ImagePath &&
                                        <span className="W-img">
                                            <picture>
                                                <img src={Lazy_img2} data-src={process.env.REACT_APP_IMG_Writer + writers.ImagePath} alt={writers.WriterName} title={writers.WriterName} />
                                            </picture>
                                        </span>}
                                    <div className="desc">
                                        {writers.WriterEmail && <> <a href={"mailto:" + writers.WriterEmail}> <span>ইমেল : </span>{writers.WriterEmail} </a> <br /></>}
                                        {writers.WriterPhone && <a href={"tel:" + writers.WriterPhone}> <span>ফোন : </span>{banglaDateConvetar(writers.WriterPhone)} </a>}
                                        <h2 className="Title"><i className="fas fa-pencil-alt" style={{ paddingRight: '6px' }}></i> {writers.WriterName}</h2>
                                        <p dangerouslySetInnerHTML={{ __html: writers.WriterBio }}></p>
                                        <div className="mt-3">
                                            <SocialShare title={writers.WriterName} pageURL={pageURL} />
                                        </div>
                                    </div>
                                </div>
                            </>
                        </div>

                        <section>
                            <div className="row">
                                <div className="col-lg-9 col-12">
                                    <div className="row">
                                        {writersRelatedNews.map((nc) => {
                                            return (
                                                <div className="col-lg-4 col-12 d-flex" key={nc.ContentID}>
                                                    <div className="DWriters align-self-stretch">
                                                        <Link to={"/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                                            <div className="row">
                                                                <div className="col-lg-12 col-sm-4 col-5 videoIcon">
                                                                    <picture><img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + nc.ImageSmPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" /></picture>
                                                                    {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn-big"><i className="fas fa-play"></i></span> : ""}
                                                                </div>
                                                                <div className="col-lg-12 col-sm-8 col-7">
                                                                    <div className="Desc"><h3 className="Title fw-bold">{nc.ContentHeading}</h3></div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    {showMore &&
                                        <div id="btnDiv" className="text-center my-4">
                                            <button type="submit" name="btnSubmit" className="btn btn-lg btn-block ButtonBG" onClick={toggleButtonState}>
                                                আরো পড়ুন
                                            </button>
                                        </div>}
                                </div>
                                <div className="col-lg-3 col-12 writersRightSide">
                                    <LatestMostPopular />
                                </div>
                            </div>
                        </section>

                    </div >
                </main >
                : <ErrorPageBn />}
        </>
    )
}
