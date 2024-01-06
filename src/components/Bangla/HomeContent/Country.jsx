import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { scrollTop, ForLazyLoaderImg } from '../../AllFunctions'
var lazyloaded = false
export default function Country() {
    const [state, setState] = useState([])
    const [state2, setState2] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateCategory2.json`)
            .then(({ data }) => {
                setState(data.data[0]);
                setState2(data.data.slice(1, 5));
                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);
            });
    }, [])
    return (
        <>
            <section className="Country">
                <div className="SPSecTitle"><Link to="/country" onClick={scrollTop}><h2><img src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/Sign.png"} width={16} height={16} alt="Sign" title="Sign" /> সারাদেশ</h2></Link></div>
                <div className="DDivisionNav">
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <div className="text-center">
                                <ul className="nav">
                                    <li className="dropdown">
                                        <Link to="/divisions/dhaka" className="dropdown-toggle" data-toggle="dropdown disable" role="button" aria-haspopup="true" aria-expanded="false">ঢাকা <i className="fa fa-angle-down"></i></Link>
                                        <ul className="dropdown-menu">
                                            <Link className="dropdown-item" to="/divisions/dhaka/kishoreganj">কিশোরগঞ্জ</Link>
                                            <Link className="dropdown-item" to="/divisions/dhaka/gazipur">গাজীপুর</Link>
                                            <Link className="dropdown-item" to="/divisions/dhaka/gopalganj">গোপালগঞ্জ</Link>
                                            <Link className="dropdown-item" to="/divisions/dhaka/tangail">টাঙ্গাইল</Link>
                                            <Link className="dropdown-item" to="/divisions/dhaka/dhaka">ঢাকা</Link>
                                            <Link className="dropdown-item" to="/divisions/dhaka/narsingdi">নরসিংদী</Link>
                                            <Link className="dropdown-item" to="/divisions/dhaka/narayanganj">নারায়ণগঞ্জ</Link>
                                            <Link className="dropdown-item" to="/divisions/dhaka/faridpur">ফরিদপুর</Link>
                                            <Link className="dropdown-item" to="/divisions/dhaka/madaripur">মাদারীপুর</Link>
                                            <Link className="dropdown-item" to="/divisions/dhaka/manikganj">মানিকগঞ্জ</Link>
                                            <Link className="dropdown-item" to="/divisions/dhaka/munshiganj">মুন্সিগঞ্জ</Link>
                                            <Link className="dropdown-item" to="/divisions/dhaka/rajbari">রাজবাড়ী</Link>
                                            <Link className="dropdown-item" to="/divisions/dhaka/shariatpur">শরীয়তপুর</Link>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <Link to="/divisions/chattogram" className="dropdown-toggle" data-toggle="dropdown disable" role="button" aria-haspopup="true" aria-expanded="false">চট্টগ্রাম <i className="fa fa-angle-down"></i></Link>
                                        <ul className="dropdown-menu">
                                            <Link className="dropdown-item" to="/divisions/chattogram/coxsbazar">কক্সবাজার</Link>
                                            <Link className="dropdown-item" to="/divisions/chattogram/cumilla">কুমিল্লা</Link>
                                            <Link className="dropdown-item" to="/divisions/chattogram/khagrachhari">খাগড়াছড়ি</Link>
                                            <Link className="dropdown-item" to="/divisions/chattogram/chattogram">চট্টগ্রাম</Link>
                                            <Link className="dropdown-item" to="/divisions/chattogram/chandpur">চাঁদপুর</Link>
                                            <Link className="dropdown-item" to="/divisions/chattogram/noakhali">নোয়াখালী</Link>
                                            <Link className="dropdown-item" to="/divisions/chattogram/feni">ফেনী</Link>
                                            <Link className="dropdown-item" to="/divisions/chattogram/bandarban">বান্দরবান</Link>
                                            <Link className="dropdown-item" to="/divisions/chattogram/brahmanbaria">ব্রাহ্মণবাড়িয়া</Link>
                                            <Link className="dropdown-item" to="/divisions/chattogram/rangamati">রাঙামাটি</Link>
                                            <Link className="dropdown-item" to="/divisions/chattogram/lakshmipur">লক্ষ্মীপুর</Link>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <Link to="/divisions/barishal" className="dropdown-toggle" data-toggle="dropdown disable" role="button" aria-haspopup="true" aria-expanded="false">বরিশাল <i className="fa fa-angle-down"></i></Link>
                                        <ul className="dropdown-menu">
                                            <Link className="dropdown-item" to="/divisions/barishal/jhalokati">ঝালকাঠী</Link>
                                            <Link className="dropdown-item" to="/divisions/barishal/patuakhali">পটুয়াখালি</Link>
                                            <Link className="dropdown-item" to="/divisions/barishal/pirojpur">পিরোজপুর</Link>
                                            <Link className="dropdown-item" to="/divisions/barishal/barguna">বরগুনা</Link>
                                            <Link className="dropdown-item" to="/divisions/barishal/barishal">বরিশাল</Link>
                                            <Link className="dropdown-item" to="/divisions/barishal/bhola">ভোলা</Link>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <Link to="/divisions/khulna" className="dropdown-toggle" data-toggle="dropdown disable" role="button" aria-haspopup="true" aria-expanded="false">খুলনা <i className="fa fa-angle-down"></i></Link>
                                        <ul className="dropdown-menu">
                                            <Link className="dropdown-item" to="/divisions/khulna/kushtia">কুষ্টিয়া</Link>
                                            <Link className="dropdown-item" to="/divisions/khulna/khulna">খুলনা</Link>
                                            <Link className="dropdown-item" to="/divisions/khulna/chuadanga">চুয়াডাঙ্গা</Link>
                                            <Link className="dropdown-item" to="/divisions/khulna/jhenaidah">ঝিনাইদহ</Link>
                                            <Link className="dropdown-item" to="/divisions/khulna/narail">নড়াইল</Link>
                                            <Link className="dropdown-item" to="/divisions/khulna/bagerhat">বাগেরহাট</Link>
                                            <Link className="dropdown-item" to="/divisions/khulna/magura">মাগুরা</Link>
                                            <Link className="dropdown-item" to="/divisions/khulna/meherpur">মেহেরপুর</Link>
                                            <Link className="dropdown-item" to="/divisions/khulna/jashore">যশোর</Link>
                                            <Link className="dropdown-item" to="/divisions/khulna/satkhira">সাতক্ষীরা</Link>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <Link to="/divisions/rajshahi" className="dropdown-toggle" data-toggle="dropdown disable" role="button" aria-haspopup="true" aria-expanded="false">রাজশাহী <i className="fa fa-angle-down"></i></Link>
                                        <ul className="dropdown-menu">
                                            <Link className="dropdown-item" to="/divisions/rajshahi/chapainawabganj">চাঁপাইনবাবগঞ্জ</Link>
                                            <Link className="dropdown-item" to="/divisions/rajshahi/joypurhat">জয়পুরহাট</Link>
                                            <Link className="dropdown-item" to="/divisions/rajshahi/naogaon">নওগাঁ</Link>
                                            <Link className="dropdown-item" to="/divisions/rajshahi/natore">নাটোর</Link>
                                            <Link className="dropdown-item" to="/divisions/rajshahi/pabna">পাবনা</Link>
                                            <Link className="dropdown-item" to="/divisions/rajshahi/bogura">বগুড়া</Link>
                                            <Link className="dropdown-item" to="/divisions/rajshahi/rajshahi">রাজশাহী</Link>
                                            <Link className="dropdown-item" to="/divisions/rajshahi/sirajganj">সিরাজগঞ্জ</Link>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <Link to="/divisions/sylhet" className="dropdown-toggle" data-toggle="dropdown disable" role="button" aria-haspopup="true" aria-expanded="false">সিলেট <i className="fa fa-angle-down"></i></Link>
                                        <ul className="dropdown-menu">
                                            <Link className="dropdown-item" to="/divisions/sylhet/maulvibazar">মৌলভীবাজার</Link>
                                            <Link className="dropdown-item" to="/divisions/sylhet/sylhet">সিলেট</Link>
                                            <Link className="dropdown-item" to="/divisions/sylhet/sunamganj">সুনামগঞ্জ</Link>
                                            <Link className="dropdown-item" to="/divisions/sylhet/habiganj">হবিগঞ্জ</Link>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <Link to="/divisions/rangpur" className="dropdown-toggle" data-toggle="dropdown disable" role="button" aria-haspopup="true" aria-expanded="false">রংপুর <i className="fa fa-angle-down"></i></Link>
                                        <ul className="dropdown-menu">
                                            <Link className="dropdown-item" to="/divisions/rangpur/kurigram">কুড়িগ্রাম</Link>
                                            <Link className="dropdown-item" to="/divisions/rangpur/gaibandha">গাইবান্ধা</Link>
                                            <Link className="dropdown-item" to="/divisions/rangpur/thakurgaon">ঠাকুরগাঁও</Link>
                                            <Link className="dropdown-item" to="/divisions/rangpur/dinajpur">দিনাজপুর</Link>
                                            <Link className="dropdown-item" to="/divisions/rangpur/nilphamari">নীলফামারী</Link>
                                            <Link className="dropdown-item" to="/divisions/rangpur/panchagarh">পঞ্চগড়</Link>
                                            <Link className="dropdown-item" to="/divisions/rangpur/rangpur">রংপুর</Link>
                                            <Link className="dropdown-item" to="/divisions/rangpur/lalmonirhat">লালমনিরহাট</Link>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <Link to="/divisions/mymensingh" className="dropdown-toggle" data-toggle="dropdown disable" role="button" aria-haspopup="true" aria-expanded="false">ময়মনসিংহ <i className="fa fa-angle-down"></i></Link>
                                        <ul className="dropdown-menu">
                                            <Link className="dropdown-item" to="/divisions/mymensingh/jamalpur">জামালপুর</Link>
                                            <Link className="dropdown-item" to="/divisions/mymensingh/netrokona">নেত্রকোনা</Link>
                                            <Link className="dropdown-item" to="/divisions/mymensingh/mymensingh">ময়মনসিংহ</Link>
                                            <Link className="dropdown-item" to="/divisions/mymensingh/sherpur">শেরপুর</Link>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="DCountry">
                    <div className="row">
                        <div className="col-lg-7 col-sm-12">
                            <div className="DCountryTop videoIcon">
                                <Link to={"/" + state.Slug + "/" + state.ContentID} onClick={scrollTop}>
                                    <picture><img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + state.ImageBgPath} alt={state.ContentHeading} title={state.ContentHeading} className="img-fluid img100" /></picture>
                                    {state.ShowVideo === 1 || state.VideoID !== null ? <span className="play-btn-big"><i className="fas fa-play"></i></span> : ""}
                                    <div className="Desc">
                                        <h3 className="Title LeadTitle fw-bold">{state.ContentHeading}</h3>
                                        <div className="Brief"><p dangerouslySetInnerHTML={{ __html: state.ContentBrief }} /></div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-12">
                            <div className="DCountryTop2">
                                {state2.map((nc) => {
                                    return (
                                        <div className="DCountryList" key={nc.ContentID}>
                                            <Link to={"/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                                <div className="row">
                                                    <div className="col-lg-5 col-sm-3 col-5 videoIcon">
                                                        <picture>
                                                            <img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + nc.ImageSmPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" />
                                                        </picture>
                                                        {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn"><i className="fas fa-play"></i></span> : ""}
                                                    </div>
                                                    <div className="col-lg-7 col-sm-9 col-7">
                                                        <div className="Desc">
                                                            <h3 className="Title SMTitle">{nc.ContentHeading}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
