import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
var lazyloaded = false
export default function ShirshoSection() {
    const [vote, setVote] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateActiveScroll.json`)
            .then(({ data }) => {
                if (data.data.length > 0) {
                    setVote(data.data)
                }
            })
    }, [])
    var settings = {
        dots: false,
        infinite: false,
        arrows: false,
        autoplay: true,
        pauseOnFocus: false,
        Speed: 300,
        slidesToShow: 1,
        slidesToScroll: 0,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    // const [isSkeletonLoading, setIsSkeletonLoading] = useState(true);
    // useEffect(() => {
    //     setIsSkeletonLoading(true)
    //     axios
    //         .get(`${process.env.REACT_APP_API_URL}json/file/generateSpecial6.json`)
    //         .then(({ data }) => {
    //             if (data.data.length > 0) {
    //                 setState(data.data.slice(0, 4));
    //                 setIsSkeletonLoading(false)
    //                 setTimeout(function () {
    //                     lazyloaded = false
    //                     ForLazyLoaderImg(lazyloaded)
    //                 }, 1000);
    //             }
    //         });
    // }, [])
    return (
        <>
            <div className="DShirshoSection">
                <div className="DShirshoBanner">
                    {/* <img className="img-fluid img100" src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/shirshi-news.png"} width={304} height={40} alt="শীর্ষ সংবাদ" title="শীর্ষ সংবাদ" /> */}
                    <img className="img-fluid img100" src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/vote.jpg"} width={304} height={40} alt="শীর্ষ সংবাদ" title="শীর্ষ সংবাদ" />
                </div>
                {/* <div className="DShirshoNews">
                    {isSkeletonLoading ? <>
                        {Array(4).fill("").map((nc, i) => (
                            <div className="DShirshoNewsList" key={i}>
                                <Link to={"/"}>
                                    <div className="row">
                                        <div style={{ width: '76%' }}>
                                            <Skeleton count={2} />
                                        </div>
                                        <div className="col-lg-3 col-sm-2 col-3 videoIcon" style={{ width: '24%' }}>
                                            <Skeleton width={66} height={66} />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </> : <>
                        {state.map((nc) => {
                            return (
                                <div className="DShirshoNewsList" key={nc.ContentID}>
                                    <Link to={"/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                        <div className="row">
                                            <div className="col-lg-9 col-sm-10 col-9 align-items-center d-flex">
                                                <div className="Desc"><h5 className="Title SMTitle2">{nc.ContentHeading}</h5></div>
                                            </div>
                                            <div className="col-lg-3 col-sm-2 col-3 videoIcon">
                                                <picture><img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + nc.ImageThumbPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" /></picture>
                                                {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn"><i className="fas fa-play"></i></span> : ""}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </>}
                </div> */}

                <Slider {...settings} >
                    <div className="DVoteSlider">
                        {vote.map((nc) => {
                            return (
                                <React.Fragment key={nc.ScrollID}>
                                    <a href={nc.ScrollUrl}>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="Desc2">
                                                    <h3 className="Title2">{nc.ScrollHead}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </Slider>
                <div className="DVoteTable">
                    <div class="party-wrap w-100">
                        <div class="party-header">
                            <div class="party-hname">দল / জোট</div>
                            <div class="party-hwon">প্রতীক</div>
                            <div class="party-hseat">জয়ী</div>
                        </div>
                        <div class="party-content awami">
                            <div class="party-name">আওয়ামী লীগ</div>
                            <div class="party-img">
                                <img src="https://backoffice.daily-bangladesh.com/media/common/singleImage/nawka80x80.png" alt="" className='img-fluid' />
                            </div>
                            <div class="party-seat">০</div>
                        </div>
                        <div class="party-content bnp">
                            <div class="party-name">জাতীয় পার্টি</div>
                            <div class="party-img">
                                <img src="https://backoffice.daily-bangladesh.com/media/common/singleImage/nagol80x80.png" alt="" className='img-fluid' />
                            </div>
                            <div class="party-seat">০</div>
                        </div>
                        <div class="party-content jp">
                            <div class="party-name">স্বতন্ত্র</div>
                            <div class="party-img">
                                <img src="https://backoffice.daily-bangladesh.com/media/common/singleImage/stontro.png" alt="" className='img-fluid' />
                            </div>
                            <div class="party-seat">০</div>
                        </div>
                        <div class="party-content others">
                            <div class="party-name">অন্যান্য</div>
                            <div class="party-img">
                                <img src="https://backoffice.daily-bangladesh.com/media/common/singleImage/stontro.png" alt="" className='img-fluid' />
                            </div>
                            <div class="party-seat">০</div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
