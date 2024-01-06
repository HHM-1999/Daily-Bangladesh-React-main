import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { banglaDateConvetar, scrollTop } from '../AllFunctions'
import moment from 'moment';
import { getDate, getMonth, getYear } from 'bangla-calendar';
import { useNavigate } from "react-router-dom";

const currentDay = moment().format('dddd')
const currentDate = moment().format('DD MMMM YYYY')

const date1 = new Date();
let bnDate = getDate(date1, { format: 'D' })
let bnMonth = getMonth(date1, { format: 'MMMM' })
let bnYear = getYear(date1, { format: 'YYYY' })
let BNDATEs = bnDate + ' ' + bnMonth + ' ' + bnYear

var navbar
var sticky = 0
var navbarMobile
var sticky2 = 0


export default function Header() {
    let navigate = useNavigate();

    useEffect(() => {
        window.addEventListener('scroll', myFixedNav);
        navbar = document.getElementById("myHeader");
        sticky = navbar.offsetTop;
        navbarMobile = document.getElementById("myHeader2");
        sticky2 = navbarMobile.offsetTop;
    }, [])

    function myFixedNav() {
        navbar = document.getElementById("myHeader");
        navbarMobile = document.getElementById("myHeader2");
        if (navbar) {
            if (window.pageYOffset > sticky) {
                navbar = document.getElementById("myHeader");
                navbar.classList.add("sticky");
            } else {
                navbar = document.getElementById("myHeader");
                navbar.classList.remove("sticky");
            }
        }
        if (navbarMobile) {
            if (window.pageYOffset > sticky2) {
                navbarMobile = document.getElementById("myHeader2");
                navbarMobile.classList.add("sticky2");
            } else {
                navbarMobile = document.getElementById("myHeader2");
                navbarMobile.classList.remove("sticky2");
            }
        }
    }

    function mobileHeader(e) {
        var mobileMenu = document.getElementById("mobileMenuShow");
        var menuBarClose = document.getElementById("closeBTN");
        var menuBar = document.getElementById("menuBTN");
        if (mobileMenu.style.display === "block") {
            mobileMenu.style.display = "none";
            if (mobileMenu.style.display === "none") {
                menuBarClose.classList.add('Hide')
                menuBarClose.classList.remove('show')
                menuBar.classList.add('show')
                menuBar.classList.remove('Hide')
            }
        } else {
            mobileMenu.style.display = "block";
            if (mobileMenu.style.display === "block") {
                menuBarClose.classList.add('show')
                menuBarClose.classList.remove('Hide')
                menuBar.classList.add('Hide')
                menuBar.classList.remove('show')
            }
        }
    }

    function mobileHeaderSearch(e) {
        e.preventDefault();
        // var searchWeb = document.getElementById("deskSearch");
        // if (searchWeb.style.display === "none") {
        //     searchWeb.style.display = "block";
        // } else {
        //     searchWeb.style.display = "none";
        // }
        var searchMobile = document.getElementById("mobileSearchBar");
        if (searchMobile.style.display === "none") {
            searchMobile.style.display = "block";
        } else {
            searchMobile.style.display = "none";
        }
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        const txt = e.target.q.value;
        navigate('/search/' + txt)
        // window.location.href = '/search/' + txt
        // window.location.hash = txt
    }

    return (
        <>
            <header>
                <div className="HeaderTopBar MobileHide d-print-none">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mb-2 mt-0">
                                <img src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/Victory-Desktop-Size-Bangla.jpg"} title="বিজয়ের ৫৩ বছর" alt="বিজয়ের ৫৩ বছর" className="img-fluid img100" width={1280} height={107} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="DateTime h-100 d-flex align-items-center">
                                    <p className="date"><i className="fas fa-calendar"></i>&nbsp;{banglaDateConvetar(currentDay)}, {banglaDateConvetar(currentDate)}, {BNDATEs}</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
                                <div className="DSearch">
                                    <form onSubmit={handelSubmit}>
                                        <div className="input-group border rounded-pill">
                                            <input type="text" name="q" placeholder="এখানে লিখুন..." aria-describedby="button-addon3" className="form-control bg-none border-0" />
                                            <div className="input-group-append border-0">
                                                <button id="button-addon3" type="submit" className="btn btn-link text-success" aria-label="search news"><i className="fa fa-search"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-12 d-flex justify-content-center">
                                <div className="HeaderButton">
                                    <ul>
                                        <li><a className="btn1" href="/english">English</a></li>
                                        <li><a className="btn2" href='https://tools.daily-bangladesh.com/converter/' target="blank" rel="noreferrer">Converter</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-12 d-flex justify-content-end">
                                <div className="SocialIcon">
                                    <ul>
                                        <li className="fb-icon"><a href="https://www.facebook.com/DailyBangladeshOnline/" aria-label="fb" target="blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="fb-icon2"><a href="https://www.facebook.com/groups/DailyBangladeshGroup/" aria-label="fb-g" target="blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="yt-icon"><a href="https://www.youtube.com/channel/UCb5cnskOB5d1mEFwcQe2H7Q" aria-label="yt" target="blank" rel="noreferrer"><i className="fab fa-youtube"></i></a></li>
                                        <li className="tw-icon"><a href="https://twitter.com/DB_News_portal" aria-label="twitter" target="blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
                                        <li className="li-icon"><a href="https://www.linkedin.com/in/daily-bangladesh" aria-label="linkedin" target="blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
                                        <li className="insta-icon"><a href="https://www.instagram.com/dailybangladesh/" aria-label="instragram" target="blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="DLogoArea MobileHide">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-12 d-flex align-items-center">
                                <div className="Dlogo">
                                    <a href="/" rel="home" aria-label="logo">
                                        <img src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/logo.png"} width={250} height={99} title="ডেইলি বাংলাদেশ" alt="ডেইলি বাংলাদেশ" className="img-fluid img100" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-9 col-12 d-print-none">
                                <div className="DHeaderAdd d-flex justify-content-end">
                                    <a href="https://www.facebook.com/bexlpg" aria-label="fb" target="_blank" rel="noreferrer">
                                        <img src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/Advertisement/Beximco-LPG-28-01-2023.webp"} width={850} height={100} alt="Beximco" className="img-fluid img100" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="myHeader">
                    <div className="DHeaderNav MobileHide d-print-none">
                        <div className="container">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <Link to="/" className="StickyLogo" rel="home" onClick={scrollTop} aria-label="logo">
                                    <img src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/logo.png"} width={135} height={54} title="ডেইলি বাংলাদেশ" alt="ডেইলি বাংলাদেশ" className="img-fluid img100" />
                                </Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav  d-flex justify-content-between">
                                        <li className="nav-item"><Link className="nav-link" to="/national" onClick={scrollTop}>জাতীয়</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/dengue" onClick={scrollTop}>ডেঙ্গু</Link></li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="/country" id="navbarDropdown1" role="button" data-bs-toggle="dropdown disable" aria-expanded="false" onClick={scrollTop}>সারাদেশ <i className="fa fa-angle-down"></i></Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><Link className="dropdown-item" to="/divisions/dhaka" onClick={scrollTop}>ঢাকা</Link></li>
                                                <li><Link className="dropdown-item" to="/divisions/chattogram" onClick={scrollTop}>চট্টগ্রাম</Link></li>
                                                <li><Link className="dropdown-item" to="/divisions/rajshahi" onClick={scrollTop}>রাজশাহী</Link></li>
                                                <li><Link className="dropdown-item" to="/divisions/khulna" onClick={scrollTop}>খুলনা</Link></li>
                                                <li><Link className="dropdown-item" to="/divisions/barishal" onClick={scrollTop}>বরিশাল</Link></li>
                                                <li><Link className="dropdown-item" to="/divisions/sylhet" onClick={scrollTop}>সিলেট</Link></li>
                                                <li><Link className="dropdown-item" to="/divisions/rangpur" onClick={scrollTop}>রংপুর</Link></li>
                                                <li><Link className="dropdown-item" to="/divisions/mymensingh" onClick={scrollTop}>ময়মনসিংহ</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item"><Link className="nav-link" onClick={scrollTop} to="/capital">রাজধানী</Link></li>
                                        <li className="nav-item"><Link className="nav-link" onClick={scrollTop} to="/international">আন্তর্জাতিক</Link></li>
                                        <li className="nav-item"><Link className="nav-link" onClick={scrollTop} to="/bd-politics">রাজনীতি</Link></li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" onClick={scrollTop} to="/entertainment" id="navbarDropdown2" role="button" data-bs-toggle="dropdown disable" aria-expanded="false">বিনোদন <i className="fa fa-angle-down"></i></Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><Link className="dropdown-item" onClick={scrollTop} to="/sub/deshi">দেশি</Link></li>
                                                <li><Link className="dropdown-item" onClick={scrollTop} to="/sub/foreign">বিদেশি</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" onClick={scrollTop} to="/sports" id="navbarDropdown3" role="button" data-bs-toggle="dropdown disable" aria-expanded="false">খেলা <i className="fa fa-angle-down"></i></Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><Link className="dropdown-item" onClick={scrollTop} to="/sub/world-cup-football">বিশ্বকাপ ফুটবল</Link></li>
                                                <li><Link className="dropdown-item" onClick={scrollTop} to="/sub/icc-wordcup">বিশ্বকাপ ক্রিকেট</Link></li>
                                                <li><Link className="dropdown-item" onClick={scrollTop} to="/sub/special-column">বিশ্বকাপ ক্রিকেট : বিশেষ কলাম</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" onClick={scrollTop} to="/lifestyle" id="navbarDropdown4" role="button" data-bs-toggle="dropdown disable" aria-expanded="false">লাইফস্টাইল <i className="fa fa-angle-down"></i></Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><Link className="dropdown-item" onClick={scrollTop} to="/sub/fashion">ফ্যাশন</Link></li>
                                                <li><Link className="dropdown-item" onClick={scrollTop} to="/sub/recepe">রেসিপি</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item"><Link className="nav-link" onClick={scrollTop} to="/religion">ধর্ম</Link></li>
                                        <li className="nav-item"><Link className="nav-link" onClick={scrollTop} to="/colorful-life">সাতরং</Link></li>
                                        {/* <li className="nav-item"><a className="nav-link" target="blank" rel="noreferrer" href="https://prothom-prohor.daily-bangladesh.com/">প্রথম প্রহর</a></li> */}
                                        {/* <li className="nav-item"><a className="nav-link" href="/">প্রথম প্রহর</a></li> */}
                                        <li className="nav-item dropdown has-megamenu">
                                            {/* <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="true">অন্যান্য <i className="fa fa-angle-down"></i></a> */}
                                            <p className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="true">অন্যান্য <i className="fa fa-angle-down"></i></p>
                                            <div className="dropdown-menu megamenu" role="menu">
                                                <div className="row w-100 ">
                                                    <div className="col-md-3">
                                                        <ul className="nav flex-column">
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/economy">অর্থনীতি</Link></li>
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/information-technology">তথ্যপ্রযুক্তি</Link></li>
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/education">শিক্ষাঙ্গন</Link></li>
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/law-and-court">আইন-আদালত</Link></li>
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/art-and-culture">শিল্প ও সাহিত্য</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <ul className="nav flex-column">
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/health-and-medical">স্বাস্থ্য ও চিকিৎসা</Link></li>
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/science">বিজ্ঞান</Link></li>
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/feature">ফিচার</Link></li>
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/tourism">ভ্রমণ</Link></li>
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/opinion">মুক্তকথা</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <ul className="nav flex-column">
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/book-fair">বইমেলা</Link></li>
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/interview">মুখোমুখি</Link></li>
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/exile-life">প্রবাস জীবন</Link></li>
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/job-corner">জব কর্নার</Link></li>
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/interesting-news">মজার খবর</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <ul className="nav flex-column">
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/cartoon">কার্টুন</Link></li>
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/social-media">সোশ্যাল মিডিয়ায়</Link></li>
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/cyber-space">সাইবার স্পেস</Link></li>
                                                            <li><a className="dropdown-item" target="_blank" rel="noreferrer" onClick={scrollTop} href="/namaz">নামাজের সময়সূচি</a></li>
                                                            {/* <li><a className="dropdown-item" target="_blank" rel="noreferrer" href="https://tools.daily-bangladesh.com/namaz/">নামাজের সময়সূচি</a></li> */}
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/mujib-borsho">মুজিববর্ষ</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <ul className="nav flex-column">
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/special-news">বিশেষ প্রতিবেদন</Link></li>
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/sub/special-report-train">বিশেষ প্রতিবেদন ট্রেন</Link></li>
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/coronavirus">করোনাভাইরাস</Link></li>
                                                            {/* <li><Link className="dropdown-item" onClick={scrollTop} to="/chittagong-hill-tracts">পার্বত্য চট্টগ্রাম</Link></li> */}
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/video-gallery">ভিডিও গ্যালারী</Link></li>
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/archives">আর্কাইভস</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <>
                    <div className="container">
                        <div className="row d-block d-lg-none">
                            <div className="col-12 mb-2 mt-0">
                                <img src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/Victory-Mobile-Size-Bangla.jpg"} title="বিজয়ের ৫৩ বছর" alt="বিজয়ের ৫৩ বছর" className="img-fluid img100" />
                            </div>
                        </div>
                    </div>
                    <div id="myHeader2">
                        <div id="mobile-nav" className="MobileMenu MobileShow d-print-none">
                            <div className="d-flex justify-content-between align-items-center">
                                <>
                                    <span onClick={mobileHeader} id="menuBTN" className="menu-button fas fa-bars show"></span>
                                    <span onClick={mobileHeader} id="closeBTN" className="menu-button fas fa-times Hide"></span>
                                </>
                                <div className="DMLogo"><a href="/" aria-label="logo"><img src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/logo.png"} width={155} height={61} alt="ডেইলি বাংলাদেশ" className="img-fluid img100" /></a></div>
                                <div className="menu-search" onClick={mobileHeaderSearch} >
                                    <div className="nav-link-search">
                                        <i className="fa fa-search"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="search_block" id="mobileSearchBar" style={{ display: 'none' }}>
                                <div className="container">
                                    <div className="col-xl p-0">
                                        <form onSubmit={handelSubmit}>
                                            <div className="search_logo display-flex" style={{ textAlign: 'center' }}>
                                                <input type="text" name="q" placeholder="এখানে খুঁজুন..." className="form-control" />
                                                <button type="submit" aria-label="submit"><i className="fa fa-search"></i></button>
                                                <button onClick={mobileHeaderSearch} className="close-search" aria-label="close search"><i className="fa fa-times"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="overflow" id="mobileMenuShow" style={{ maxHeight: '610px', display: 'none' }}>
                                <div className="accordion" id="accordionExample">
                                    <ul>
                                        {/* <ul id="mobileMenuShow" style={{ display: 'none' }}> */}
                                        <li>
                                            <div className="MobileDateArea">
                                                <p className="date">
                                                    <i className="fa fa-calendar" aria-hidden="true"></i>
                                                    <span>&nbsp;{banglaDateConvetar(currentDay)}, {banglaDateConvetar(currentDate)}, {BNDATEs}</span>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="MobileHButton">
                                                <button className="btn1"><a href="/english">English</a></button>
                                                <button className="btn2"><a href="https://tools.daily-bangladesh.com/converter/" target="blank" rel="noreferrer">Converter</a></button>
                                            </div>
                                        </li>
                                        <li onClick={mobileHeader}><Link to="/national" onClick={scrollTop}>জাতীয়</Link></li>
                                        <li onClick={mobileHeader}><Link to="/dengue" onClick={scrollTop}>ডেঙ্গু</Link></li>
                                        <div className="accordion-item">
                                            <div className='d-flex justify-content-between align-items-center' style={{ border: '1px solid #8a8a8a14', color: '#333', padding: '10px 15px 8px', background: '#f5f5f5' }}>
                                                <p onClick={mobileHeader}><Link to="/country" onClick={scrollTop}>সারাদেশ</Link></p>
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" />
                                            </div>
                                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <ul className="accordion-body SubMenuM">
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/divisions/dhaka">ঢাকা</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/divisions/chattogram">চট্টগ্রাম</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/divisions/rajshahi">রাজশাহী</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/divisions/khulna">খুলনা</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/divisions/barishal">বরিশাল</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/divisions/sylhet">সিলেট</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/divisions/rangpur">রংপুর</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/divisions/mymensingh">ময়মনসিংহ</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <li onClick={mobileHeader}><Link onClick={scrollTop} to="/capital">রাজধানী</Link></li>
                                        <li onClick={mobileHeader}><Link onClick={scrollTop} to="/international">আন্তর্জাতিক</Link></li>
                                        <li onClick={mobileHeader}><Link onClick={scrollTop} to="/bd-politics">রাজনীতি</Link></li>
                                        <div className="accordion-item">
                                            <div className='d-flex justify-content-between align-items-center' style={{ border: '1px solid #8a8a8a14', color: '#333', padding: '10px 15px 8px', background: '#f5f5f5' }}>
                                                <p onClick={mobileHeader}><Link onClick={scrollTop} to="/entertainment">বিনোদন</Link></p>
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" />
                                            </div>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <ul className="accordion-body SubMenuM">
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/sub/deshi">দেশি</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/sub/foreign">বিদেশি</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <div className='d-flex justify-content-between align-items-center' style={{ border: '1px solid #8a8a8a14', color: '#333', padding: '10px 15px 8px', background: '#f5f5f5' }}>
                                                <p onClick={mobileHeader}><Link onClick={scrollTop} to="/sports">খেলা</Link></p>
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" />
                                            </div>
                                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <ul className="accordion-body SubMenuM">
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/sub/world-cup-football">বিশ্বকাপ ফুটবল</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/sub/icc-wordcup">বিশ্বকাপ ক্রিকেট</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/sub/special-column">বিশ্বকাপ ক্রিকেট : বিশেষ কলাম</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <div className='d-flex justify-content-between align-items-center' style={{ border: '1px solid #8a8a8a14', color: '#333', padding: '10px 15px 8px', background: '#f5f5f5' }}>
                                                <p onClick={mobileHeader}><Link onClick={scrollTop} to="/lifestyle">লাইফস্টাইল</Link></p>
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" />
                                            </div>
                                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                <ul className="accordion-body SubMenuM">
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/sub/fashion">ফ্যাশন</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/sub/recepe">রেসিপি</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <li onClick={mobileHeader}><Link onClick={scrollTop} to="/religion">ধর্ম</Link></li>
                                        <li onClick={mobileHeader}><Link onClick={scrollTop} to="/colorful-life">সাতরং</Link></li>
                                        {/* <li><a target="blank" rel="noreferrer" href="https://prothom-prohor.daily-bangladesh.com/">প্রথম প্রহর</a></li> */}
                                        {/* <li><a href="/">প্রথম প্রহর</a></li> */}
                                        <div className="accordion-item">
                                            <div className='d-flex justify-content-between align-items-center' style={{ border: '1px solid #8a8a8a14', color: '#333', padding: '10px 15px 8px', background: '#f5f5f5' }}>
                                                <p className='readMore'>আরও</p>
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" />
                                            </div>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <ul className="accordion-body SubMenuM">
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/economy">অর্থনীতি</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/information-technology">তথ্যপ্রযুক্তি</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/education">শিক্ষাঙ্গন</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/law-and-court">আইন-আদালত</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/art-and-culture">শিল্প ও সাহিত্য</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/health-and-medical">স্বাস্থ্য ও চিকিৎসা</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/science">বিজ্ঞান</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/feature">ফিচার</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/tourism">ভ্রমণ</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/opinion">মুক্তকথা</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/book-fair">বইমেলা</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/interview">মুখোমুখি</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/exile-life">প্রবাস জীবন</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/job-corner">জব কর্নার</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/interesting-news">মজার খবর</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/cartoon">কার্টুন</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/social-media">সোশ্যাল মিডিয়ায়</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/cyber-space">সাইবার স্পেস</Link></li>
                                                    <li onClick={mobileHeader}><a target="_blank" rel="noreferrer" href="/namaz">নামাজের সময়সূচি</a></li>
                                                    {/* <li onClick={mobileHeader}><a onClick={scrollTop} target="_blank" rel="noreferrer" href="https://tools.daily-bangladesh.com/namaz/">নামাজের সময়সূচি</a></li> */}

                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/mujib-borsho">মুজিববর্ষ</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/special-news">বিশেষ প্রতিবেদন</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/">বিশেষ প্রতিবেদন ট্রেন</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/coronavirus">করোনাভাইরাস</Link></li>
                                                    {/* <li onClick={mobileHeader}><Link onClick={scrollTop} to="/chittagong-hill-tracts">পার্বত্য চট্টগ্রাম</Link></li> */}
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/video-gallery">ভিডিও গ্যালারী</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/archives">আর্কাইভস</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </header>
        </>
    )
}
