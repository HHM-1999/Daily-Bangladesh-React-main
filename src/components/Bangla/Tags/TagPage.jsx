import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import { scrollTop, ForLazyLoaderImg } from '../../AllFunctions'
import ErrorPageBn from '../ErrorPageBn';
import Lazy_img2 from '../../media/db-lazy2.jpg'
import SocialShare from '../../SocialShare';

var lazyloaded = false
var showMore = true
var limit = 8
var offset = 0

export default function TagPage() {
    const [pageURL, setPageURL] = useState(0);
    const [tags, setTags] = useState([]);
    const [tagsRelatedNews, setTagsRelatedNews] = useState([]);
    let { TagTitle } = useParams();

    useEffect(() => {
        // document.querySelectorAll('link[rel="canonical"]')[0].setAttribute('href', window.location.href)
        offset = 0
        showMore = true
        setPageURL(window.location.href);
        axios
            .get(`${process.env.REACT_APP_API_URL}tagsname/${TagTitle}`)
            .then(({ data }) => {
                if (data.tags.length !== 0) {
                    setTags(data.tags[0])
                } else {
                    setTags(null)
                }
            })
        axios
            .get(`${process.env.REACT_APP_API_URL}tag-content/${TagTitle}/${limit}/${offset}`)
            .then(({ data }) => {
                setTagsRelatedNews(data.tag_content)
                if (data.tag_content.length < limit) {
                    showMore = false
                }
                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);
            })
        const timer = setTimeout(() => { window.location.reload(1); }, 300000);
        return () => clearTimeout(timer);
    }, [TagTitle])

    const toggleButtonState = () => {
        offset += limit
        axios
            .get(`${process.env.REACT_APP_API_URL}tag-content/${TagTitle}/${limit}/${offset}`)
            .then(({ data }) => {
                if (data.tag_content.length < limit) {
                    showMore = false
                }
                for (let i = 0; i < data.tag_content.length; i++) {
                    setTagsRelatedNews(oldArray => [...oldArray, data.tag_content[i]]);
                }
                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);
            });
    };

    return (
        <>
            {tags ?
                <main>
                    <div className="container">
                        <div className="TopHomeSection"></div>
                        <div className="DTagLead">
                            <DocumentTitle title={TagTitle} />
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="DTagName">
                                        <i className="fas fa-tags"></i>
                                        <h1>{tags.TagName}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row writers-details">
                                {tags.ImagePath ? (
                                    <>
                                        <div className="col-lg-3 col-sm-4 col-5">
                                            <img src={Lazy_img2} data-src={process.env.REACT_APP_IMG_Tag + tags.ImagePath} alt={tags.TagTitle} title={tags.TagTitle} className="img-fluid img100" />
                                        </div>
                                        <div className="col-lg-9 col-sm-8 col-7">
                                            <div className="Desc">
                                                <h2 className="Title">{tags.TagTitle}</h2>
                                                <p dangerouslySetInnerHTML={{ __html: tags.TagDesc }}></p>
                                                <div className="Brief mb-2">
                                                    <p>{tags.TagDesc}</p>
                                                </div>
                                                <SocialShare pageURL={pageURL} title={TagTitle} />
                                            </div>
                                        </div>
                                    </>) : (
                                    <div className="col-12">
                                        <div className="Desc">
                                            <h2 className="Title mb-2">{tags.TagTitle}</h2>
                                            <SocialShare pageURL={pageURL} title={TagTitle} />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="row">
                            {tagsRelatedNews.map((nc) => {
                                return (
                                    <div className="col-lg-3 col-12 d-flex" key={nc.ContentID}>
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
                            {showMore &&
                                <div id="btnDiv" className="text-center my-4">
                                    <button type="submit" name="btnSubmit" className="btn btn-lg btn-block ButtonBG" onClick={toggleButtonState}>
                                        আরো পড়ুন
                                    </button>
                                </div>}
                        </div>
                    </div>
                </main>
                : <ErrorPageBn />}
        </>
    )
}
