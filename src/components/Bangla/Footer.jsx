import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import { scrollTop } from '../AllFunctions';
const { toBengaliNumber } = require('bengali-number');

const years = new Date().getFullYear()
export default function Footer() {
    const [scroll, setScroll] = useState([])
    const [breaking, setBreaking] = useState([])
    const [ticker, setTicker] = useState(false)

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}active-breaking`)
            .then(({ data }) => {
                setBreaking(data.breaking);
                if (data.breaking.length <= 0) {
                    axios
                        .get(`${process.env.REACT_APP_API_URL}json/file/generateActiveScroll.json`)
                        .then(({ data }) => {
                            setScroll(data.data);
                            if (data.data.length > 0) {
                                setTicker(true)
                            }
                        });
                }
                else {
                    setTicker(true)
                }
            });
    }, [])

    return (
        <>
            <footer>
                <div className="DFooterBg d-print-none">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-12 d-flex justify-content-start border-right-inner">
                                <div className="DFooterLogo"><Link to="/" onClick={scrollTop}><img src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/logo.png"} width={250} height={99} title="ডেইলি বাংলাদেশ" alt="ডেইলি বাংলাদেশ" className="img-fluid img100" /></Link></div>
                            </div>
                            <div className="col-lg-4 col-12 d-flex align-items-center justify-content-center  border-right-inner">
                                <div className="contact ">
                                    <p><b>ভারপ্রাপ্ত সম্পাদক:</b> রেজাউল করিম (রনি রেজা)</p>
                                    <p>২৪ উত্তর কাফরুল (৫ম তলা), ঢাকা-১২০৬।</p>
                                    <p><b>ফোন:</b><a href="tel:+88029833942"> +৮৮-০২-৯৮৩৩৯৪২</a></p>
                                    <p><b>ফ্যাক্স:</b> +৮৮-০২-৯৮৩৩৬০৯ </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12 d-flex align-items-center justify-content-end">
                                <div>
                                    <p className="SocialHeader">সোশ্যাল মিডিয়াতে আমরা</p>
                                    <div className="DSocialLink">
                                        <ul className="social-network social-circle">
                                            <li><a href="https://www.facebook.com/DailyBangladeshOnline/" aria-label="fb" target="blank" rel="noreferrer" className="icoFacebook" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="https://www.facebook.com/groups/DailyBangladeshGroup/" aria-label="fb-g" target="blank" rel="noreferrer" className="icoFacebook2" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="https://twitter.com/DB_News_portal" aria-label="twitter" target="blank" rel="noreferrer" className="icoTwitter" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="https://www.instagram.com/dailybangladesh/" aria-label="insta" target="blank" rel="noreferrer" className="icoInstagram" title="instagram"><i className="fab fa-instagram"></i></a></li>
                                            <li><a href="https://www.linkedin.com/in/daily-bangladesh" aria-label="linkedin" target="blank" rel="noreferrer" className="icoLinkedin" title="Linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="https://www.youtube.com/channel/UCb5cnskOB5d1mEFwcQe2H7Q" aria-label="youtube" target="blank" rel="noreferrer" className="icoYoutube" title="youtube"><i className="fab fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="MoreInfo">
                                        <p><i className="fas fa-envelope" /> <a href="mailto:editor@daily-bangladesh.com">editor@daily-bangladesh.com</a></p>
                                        <p><i className="fas fa-envelope" /> <a href="mailto:newsroom@daily-bangladesh.com">newsroom@daily-bangladesh.com</a></p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                <div className={ticker ? "DFooterBottomBg d-print-none" : "DFooterBottomBg mb-0 d-print-none"}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <p>© {toBengaliNumber(years)} | <a href="/">ডেইলি বাংলাদেশ</a> কর্তৃক সর্বসত্ব ® সংরক্ষিত | উন্নয়নে <a href="https://www.emythmakers.com" target="_blank" rel="noreferrer">ইমিথমেকারস.কম</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <section>
                <div className="container-fluid d-print-none">
                    {breaking.length > 0 ?
                        <div className="DScrollBreaking">
                            <div className="DScrollSectionBreaking">
                                <div className="ScrollHeadingBreaking d-flex justify-content-center">
                                    <p>ব্রেকিং নিউজ::</p>
                                </div>
                                <div className="ScrollSubjectBreaking">
                                    <Marquee delay='0' speed='70' direction="left" pauseOnHover='true' play='true'>
                                        {breaking.map((nd) => {
                                            return (
                                                <React.Fragment key={nd.BreakingID}>
                                                    <a href={nd.ScrollUrl === null ? '' : nd.ScrollUrl} onClick={scrollTop}><span><div className="SquareIcon"></div> {nd.BreakingHead}</span></a>
                                                </React.Fragment>
                                            )
                                        })}
                                    </Marquee>
                                </div>

                            </div>
                        </div>
                        :
                        <>
                            {scroll.length > 0 ?
                                <div className="DScroll">
                                    <div className="DScrollSection">
                                        <div className="ScrollHeading d-flex justify-content-center">
                                            <p>শিরোনাম:</p>
                                        </div>
                                        <div className="ScrollSubject">
                                            <Marquee delay='0' speed='70' direction="left" pauseOnHover='true' play='true'>
                                                {scroll.map((nd) => {
                                                    return (
                                                        <React.Fragment key={nd.ScrollID}>
                                                            <a href={nd.ScrollUrl === null ? '' : nd.ScrollUrl} onClick={scrollTop}><span><div className="SquareIcon"></div> {nd.ScrollHead}</span></a>
                                                        </React.Fragment>
                                                    )
                                                })}
                                            </Marquee>
                                        </div>

                                    </div>
                                </div>
                                : false}
                        </>}
                </div>

            </section>

        </>
    )
}