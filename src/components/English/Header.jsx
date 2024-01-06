import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { scrollTop } from '../AllFunctions'
import moment from 'moment';
import { useNavigate } from "react-router-dom";

const currentDay = moment().format('dddd')
const currentDate = moment().format('DD MMMM YYYY')

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
        e.preventDefault("click");
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
        navigate('/english/search/' + txt)
    }

    return (
        <>
            <header>
                <div className="HeaderTopBar MobileHide d-print-none">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mb-2 mt-0">
                                <img src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/Victory-Desktop-Size-English.jpg"} title="Victory of 53 years" alt="Victory of 53 years" className="img-fluid img100" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="DateTime h-100 d-flex align-items-center ">
                                    <p className="date"><i className="fas fa-calendar"></i>&nbsp;{currentDay}, {currentDate}</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
                                <div className="DSearch">
                                    <form onSubmit={handelSubmit}>
                                        <div className="input-group border rounded-pill">
                                            <input type="text" name="q" placeholder="Search Here..." aria-describedby="button-addon3" className="form-control bg-none border-0" />
                                            <div className="input-group-append border-0">
                                                <button id="button-addon3" type="submit" className="btn btn-link text-success"><i className="fa fa-search"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-12 d-flex justify-content-center">
                                <div className="HeaderButton">
                                    <ul>
                                        <li><a className="btn1" href="/" style={{ fontFamily: 'SolaimanLipi' }}>বাংলা</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-12 d-flex justify-content-end">
                                <div className="SocialIcon">
                                    <ul>
                                        <li className="fb-icon"><a href="https://www.facebook.com/DailyBangladeshEnglish/" target="blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="fb-icon2"><a href="https://www.facebook.com/groups/DailyBangladeshGroup/" target="blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="yt-icon"><a href="https://www.youtube.com/channel/UCb5cnskOB5d1mEFwcQe2H7Q" target="blank" rel="noreferrer"><i className="fab fa-youtube"></i></a></li>
                                        <li className="tw-icon"><a href="https://twitter.com/DB_English_News" target="blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
                                        <li className="li-icon"><a href="https://www.linkedin.com/in/daily-bangladesh" target="blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
                                        <li className="insta-icon"><a href="https://www.instagram.com/dailybangladesh/" target="blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
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
                                    <a href="/english" rel="home">
                                        <img src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/logoEn.png"} title="Daily Bangladesh" alt="Daily Bangladesh" className="img-fluid img100" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-9 col-12 d-print-none">
                                <div className="DHeaderAdd d-flex justify-content-end">
                                    <a href="https://www.facebook.com/bexlpg" target="_blank" rel="noreferrer">
                                        <img src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/Advertisement/Beximco-LPG-28-01-2023.webp"} alt="Beximco" title="Beximco" className="img-fluid img100" />
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
                                <Link to="/english" className="StickyLogo" rel="home" onClick={scrollTop}>
                                    <img src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/logoEn.png"} title="Daily Bangladesh" alt="Daily Bangladesh" className="img-fluid img100" />
                                </Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav  d-flex justify-content-between">
                                        <li className="nav-item"><Link className="nav-link" to="/english/national" onClick={scrollTop}>National</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/english/coronavirus" onClick={scrollTop}>Coronavirus</Link></li>
                                        <li className="nav-item"><Link className="nav-link" onClick={scrollTop} to="/english/international">International</Link></li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="/english/country" id="navbarDropdown" role="button" data-bs-toggle="dropdown disable" aria-expanded="false" onClick={scrollTop}>Country <i className="fa fa-angle-down"></i></Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><Link className="dropdown-item" to="/english/divisions/dhaka" onClick={scrollTop}>Dhaka</Link></li>
                                                <li><Link className="dropdown-item" to="/english/divisions/chattogram" onClick={scrollTop}>Chattogram</Link></li>
                                                <li><Link className="dropdown-item" to="/english/divisions/rajshahi" onClick={scrollTop}>Rajshahi</Link></li>
                                                <li><Link className="dropdown-item" to="/english/divisions/khulna" onClick={scrollTop}>Khulna</Link></li>
                                                <li><Link className="dropdown-item" to="/english/divisions/barishal" onClick={scrollTop}>Barishal</Link></li>
                                                <li><Link className="dropdown-item" to="/english/divisions/sylhet" onClick={scrollTop}>Sylhet</Link></li>
                                                <li><Link className="dropdown-item" to="/english/divisions/rangpur" onClick={scrollTop}>Rangpur</Link></li>
                                                <li><Link className="dropdown-item" to="/english/divisions/mymensingh" onClick={scrollTop}>Mymensingh</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item"><Link className="nav-link" onClick={scrollTop} to="/english/politics">Politics</Link></li>
                                        <li className="nav-item"><Link className="nav-link" onClick={scrollTop} to="/english/entertainment">Entertainment</Link></li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="/english/sports" id="navbarDropdown" role="button" data-bs-toggle="dropdown disable" aria-expanded="false" onClick={scrollTop}>Sports <i className="fa fa-angle-down"></i></Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><Link className="dropdown-item" to="/english/sub/world-cup-football" onClick={scrollTop}>World Cup Football</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item"><Link className="nav-link" onClick={scrollTop} to="/english/science-information-technology">Science & IT</Link></li>
                                        <li className="nav-item"><Link className="nav-link" onClick={scrollTop} to="/english/economy">Economy</Link></li>
                                        {/* <li className="nav-item"><Link className="nav-link" to="/english/prothom-prohor">Prothom Prohor</Link></li> */}
                                        <li className="nav-item dropdown has-megamenu">
                                            {/* <Link className="nav-link dropdown-toggle" onClick={scrollTop} to="/english" data-bs-toggle="dropdown">Other <i className="fa fa-angle-down"></i></Link> */}
                                            <p className="nav-link dropdown-toggle" onClick={scrollTop} >Other <i className="fa fa-angle-down"></i></p>
                                            <div className="dropdown-menu megamenu" role="menu">
                                                <div className="row w-100 ">
                                                    <div className="col-md-3">
                                                        <ul className="nav flex-column">
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/english/health-lifestyle">Health Lifestyle</Link></li>
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/english/law-court">Law & Court</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <ul className="nav flex-column">
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/english/education">Education</Link></li>
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/english/religion">Religion</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <ul className="nav flex-column">
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/english/cyber-space">Cyber Space</Link></li>
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/english/feature">Feature</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <ul className="nav flex-column">
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/english/special-report">Special Report</Link></li>
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/english/mujib-borsho">Mujib Borsho</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <ul className="nav flex-column">
                                                            {/* <li><Link className="dropdown-item" onClick={scrollTop} to="/english/special-news">Special News</Link></li> */}
                                                            <li><Link className="dropdown-item" onClick={scrollTop} to="/english/archives">Archives</Link></li>
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
                                <img src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/Victory-Mobile-Size-English.jpg"} title="Victory of 53 years" alt="Victory of 53 years" className="img-fluid img100" />
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
                                <div className="DMLogo"><a href="/english"><img src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/logoEn.png"} alt="Daily Bangladesh" title="Daily Bangladesh" className="img-fluid img100" /></a></div>
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
                                                <input type="text" name="q" placeholder="Search Here..." className="form-control" />
                                                <button type="submit"><i className="fa fa-search"></i></button>
                                                <button onClick={mobileHeaderSearch} className="close-search"><i className="fa fa-times"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="overflow" id="mobileMenuShow" style={{ maxHeight: '610px', display: 'none' }}>
                                <div className="accordion" id="accordionExample">
                                    <ul>
                                        <li>
                                            <div className="MobileDateArea">
                                                <p className="date">
                                                    <i className="fa fa-calendar" aria-hidden="true"></i>
                                                    <span>&nbsp;{currentDay}, {currentDate}</span>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="MobileHButton">
                                                <button className="btn1"><a href="/" style={{ fontFamily: 'SolaimanLipi' }}>বাংলা</a></button>
                                            </div>
                                        </li>
                                        <li onClick={mobileHeader}><Link to="/english/national" onClick={scrollTop}>National</Link></li>
                                        <li onClick={mobileHeader}><Link to="/english/coronavirus" onClick={scrollTop}>Coronavirus</Link></li>
                                        <div className="accordion-item">
                                            <div className='d-flex justify-content-between align-items-center' style={{ border: '1px solid #8a8a8a14', color: '#333', padding: '10px 15px 8px', background: '#f5f5f5' }}>
                                                <p onClick={mobileHeader}><Link to="/english/country" onClick={scrollTop}>Country</Link></p>
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" />
                                            </div>
                                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <ul className="accordion-body SubMenuM">
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/english/divisions/dhaka">Dhaka</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/english/divisions/chattogram">Chattogram</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/english/divisions/rajshahi">Rajshahi</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/english/divisions/khulna">Khulna</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/english/divisions/barishal">Barishal</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/english/divisions/sylhet">Sylhet</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/english/divisions/rangpur">Rangpur</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/english/divisions/mymensingh">Mymensingh</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <li onClick={mobileHeader}><Link onClick={scrollTop} to="/english/international">International</Link></li>
                                        <li onClick={mobileHeader}><Link onClick={scrollTop} to="/english/politics">Politics</Link></li>
                                        <li onClick={mobileHeader}><Link onClick={scrollTop} to="/english/entertainment">Entertainment</Link></li>
                                        <div className="accordion-item">
                                            <div className='d-flex justify-content-between align-items-center' style={{ border: '1px solid #8a8a8a14', color: '#333', padding: '10px 15px 8px', background: '#f5f5f5' }}>
                                                <p onClick={mobileHeader}><Link to="/english/sports" onClick={scrollTop}>Sports</Link></p>
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapseOne" />
                                            </div>
                                            <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <ul className="accordion-body SubMenuM">
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/english/sub/world-cup-football">World Cup Football</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <li onClick={mobileHeader}><Link onClick={scrollTop} to="/english/science-information-technology">Science & IT</Link></li>
                                        <li onClick={mobileHeader}><Link onClick={scrollTop} to="/english/economy">Economy</Link></li>
                                        {/* <li><Link onClick={scrollTop} to="/english/prothom-prohor">Prothom Prohor</Link></li> */}
                                        <div className="accordion-item">
                                            <div className='d-flex justify-content-between align-items-center' style={{ border: '1px solid #8a8a8a14', color: '#333', padding: '10px 15px 8px', background: '#f5f5f5' }}>
                                                <p className='readMore'>Other</p>
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" />
                                            </div>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <ul className="accordion-body SubMenuM">
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/english/health-lifestyle">Health Lifestyle</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/english/law-court">Law & Court</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/english/education">Education</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/english/religion">Religion</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/english/cyber-space">Cyber Space</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/english/feature">Feature</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/english/special-report">Special Report</Link></li>
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/english/mujib-borsho">Mujib Borsho</Link></li>
                                                    {/* <li onClick={mobileHeader}><Link onClick={scrollTop} to="/english/special-news">Special News</Link></li> */}
                                                    <li onClick={mobileHeader}><Link onClick={scrollTop} to="/english/archives">Archives</Link></li>
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
