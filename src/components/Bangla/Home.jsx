import React, { useEffect, useState } from 'react'
import LeadSection from './HomeContent/LeadSection'
import LatestMostPopular from './HomeContent/LatestMostPopular'
import RohingyaSec from './HomeContent/RohingyaSec'
// import FirstColumn from './HomeContent/FirstColumn'
import OpinionSec from './HomeContent/OpinionSec'
import ShirshoSection from './HomeContent/ShirshoSection'
import PrayerTime from './HomeContent/PrayerTime'
import TrendingSec from './HomeContent/TrendingSec'
import ChittagongHillTracts from './HomeContent/ChittagongHillTracts'
import EnHighlightSec from './HomeContent/EnHighlightSec'
import DristryJureBangla from './HomeContent/DristryJureBangla'
// import CoronaSec from './HomeContent/CoronaSec'
import National from './HomeContent/National'
import Politics from './HomeContent/Politics'
import International from './HomeContent/International'
import Country from './HomeContent/Country'
import Capital from './HomeContent/Capital'
import Entertainment from './HomeContent/Entertainment'
import Sports from './HomeContent/Sports'
import Economy from './HomeContent/Economy'
import CourtAndLaw from './HomeContent/CourtAndLaw'
import FaceToFace from './HomeContent/FaceToFace'
import Health from './HomeContent/Health'
import Lifestyle from './HomeContent/Lifestyle'
import Feature from './HomeContent/Feature'
import InformationTechnology from './HomeContent/InformationTechnology'
import JobCorner from './HomeContent/JobCorner'
import Religion from './HomeContent/Religion'
import ColorfulLife from './HomeContent/ColorfulLife'
import InterestingNews from './HomeContent/InterestingNews'
import Education from './HomeContent/Education'
import ExpatriateLife from './HomeContent/ExpatriateLife'
import ArtAndLiterature from './HomeContent/ArtAndLiterature'
import VideoGallery from './HomeContent/VideoGallery'
import FBpagePlugin from './FBpagePlugin'
import DocumentTitle from 'react-document-title'
import Vertical01 from '../AdsByGoogle/Vertical01'
import Squire01 from '../AdsByGoogle/Squire01'
import HomeLdjsonBn from './HomeLdjsonBn'
// import SpecialEvent from './HomeContent/SpecialEvent'
import LazyLoaderGIF from '../media/lazyComponentLoaderGIF.gif'
import Election from './HomeContent/MonthySpeEvent/Election'
// import WeatheIframe from './HomeContent/MonthySpeEvent/WeatheIframe'
import Dengue from './HomeContent/Dengue'

var firstSectionComponent = false;
var secondSectionComponent = false;
var thirdSectionComponent = false;
var fourthSectionComponent = false;
var fifthSectionComponent = false;

var allComponentsLoaded = false
export default function Home() {
    const [firstSection, setFirstSection] = useState(false)
    const [secondSection, setSecondSection] = useState(false)
    const [thirdSection, setThirdSection] = useState(false)
    const [fourthSection, setFourthSection] = useState(false)
    const [fifthSection, setFifthSection] = useState(false)
    useEffect(() => {
        // document.querySelectorAll('link[rel="canonical"]')[0].setAttribute('href', window.location.href)

        const handleScroll = () => {
            var Wscroll = window.pageYOffset
            var First_Section = document.getElementsByClassName('FirstSectioComponent');
            firstSectionComponent = document.querySelectorAll('.FirstSectioComponent .DEnHighlightSec .DEnHighlightNews .DEnHighlightList')[0]
            if (firstSectionComponent && Wscroll + 250 > (First_Section[0].offsetHeight + First_Section[0].offsetTop) - window.innerHeight) {
                setFirstSection(true)
                var Second_Section = document.getElementsByClassName('SecondSectioComponent');
                secondSectionComponent = document.querySelectorAll('.SecondSectioComponent #International .DCatStyle2List .DCatStyle2ListItem')[0]
                if (secondSectionComponent && Wscroll + 250 > (Second_Section[0].offsetHeight + Second_Section[0].offsetTop) - window.innerHeight) {
                    setSecondSection(true)
                    var Third_Section = document.getElementsByClassName('ThirdSectioComponent');
                    thirdSectionComponent = document.querySelectorAll('.ThirdSectioComponent .DEntertainment .DEnterTop3 .DEnterTop3List')[0]
                    if (thirdSectionComponent && Wscroll + 250 > (Third_Section[0].offsetHeight + Third_Section[0].offsetTop) - window.innerHeight) {
                        setThirdSection(true)
                        var Fourth_Section = document.getElementsByClassName('FourthSectioComponent');
                        fourthSectionComponent = document.querySelectorAll('.FourthSectioComponent #FaceToFace .DCatStyle1ListItem')[0]
                        if (fourthSectionComponent && Wscroll + 250 > (Fourth_Section[0].offsetHeight + Fourth_Section[0].offsetTop) - window.innerHeight) {
                            setFourthSection(true)
                            var Fifth_Section = document.getElementsByClassName('FifthSectioComponent');
                            fifthSectionComponent = document.querySelectorAll('.FifthSectioComponent #colorfulLife .DCatStyle3List')[0]
                            if (fifthSectionComponent && Wscroll + 250 > (Fifth_Section[0].offsetHeight + Fifth_Section[0].offsetTop) - window.innerHeight) {
                                setFifthSection(true)
                                allComponentsLoaded = true
                                window.removeEventListener("scroll", handleScroll);
                            }
                        }
                    }
                }
            }
        }
        window.addEventListener("scroll", handleScroll, { passive: true });
        const timer = setTimeout(() => { window.location.reload(1); }, 300000);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timer);
        }

    }, [])
    return (
        <>
            <main style={{ minHeight: "1620px" }}>
                <HomeLdjsonBn />
                <DocumentTitle title='Daily Bangladesh :: ডেইলি বাংলাদেশ' />
                <div className="FirstSectioComponent">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-sm-12">
                                <div className="row">
                                    <LeadSection />
                                    <div className="col-lg-4 col-12 order-lg-first">
                                        {/* <FirstColumn /> */}
                                        <Election />
                                        <div className="d-lg-none d-md-none d-block">
                                            <Squire01 />
                                        </div>
                                        <OpinionSec />
                                        <PrayerTime />
                                        <div className="d-lg-none d-md-none d-block">
                                            <Squire01 />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12">
                                <ShirshoSection />
                                <LatestMostPopular />
                                <RohingyaSec />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <Vertical01 />
                    </div>
                    <div className="TrendingSecBG">
                        <div className="container">
                            <div className="row">
                                <TrendingSec />
                                <ChittagongHillTracts />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <Vertical01 />
                    </div>
                    <div className="container">
                        <div className="DEnHighlightSec">
                            <EnHighlightSec />
                        </div>
                    </div>
                </div>

                {firstSection ?
                    <div className="container SecondSectioComponent">
                        <div className="row">
                            <div className="col-lg-9 col-12">
                                <DristryJureBangla />
                            </div>
                            <div className="col-lg-3 col-12">
                                <div className="d-lg-none d-md-none d-block">
                                    <Squire01 />
                                </div>
                                <div className="fb-page-banner"><FBpagePlugin /></div>
                                <Dengue />
                            </div>
                        </div>
                        <Vertical01 />
                        <div className="row">
                            <div className="col-lg-4 col-12">
                                <National />
                            </div>
                            <div className="col-lg-4 col-12">
                                <Politics />
                            </div>
                            <div className="col-lg-4 col-12">
                                <International />
                            </div>
                        </div>
                        <Vertical01 />
                    </div> : ""}

                {secondSection ?
                    <div className="container ThirdSectioComponent">
                        <div className="row">
                            <div className="col-lg-8 col-12">
                                <Country />
                            </div>
                            <div className="col-lg-4 col-12">
                                <Capital />
                            </div>
                        </div>
                        <Vertical01 />
                        <Entertainment />
                    </div> : ""}

                {thirdSection ?
                    <div className="container FourthSectioComponent">
                        <Vertical01 />
                        <Sports />
                        <Vertical01 />
                        <div className="row">
                            <div className="col-lg-4 col-12">
                                <Economy />
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="d-lg-none d-md-none d-block">
                                    <Squire01 />
                                </div>
                                <CourtAndLaw />
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="d-lg-none d-md-none d-block">
                                    <Squire01 />
                                </div>
                                <FaceToFace />
                            </div>
                        </div>
                        <Vertical01 />
                    </div> : ""}

                {fourthSection ?
                    <div className="container FifthSectioComponent">
                        <div className="row">
                            <div className="col-lg-4 col-12">
                                <Health />
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="d-lg-none d-md-none d-block">
                                    <Squire01 />
                                </div>
                                <Lifestyle />
                            </div>
                            <div className="col-lg-4 col-12">
                                <Feature />
                            </div>
                        </div>
                        <Vertical01 />
                        <div className="row">
                            <div className="col-lg-3 col-12">
                                <InformationTechnology />
                            </div>
                            <div className="col-lg-3 col-12">
                                <div className="d-lg-none d-md-none d-block">
                                    <Squire01 />
                                </div>
                                <JobCorner />
                            </div>
                            <div className="col-lg-3 col-12">
                                <Religion />
                            </div>
                            <div className="col-lg-3 col-12">
                                <ColorfulLife />
                            </div>
                        </div>
                        <Vertical01 />
                    </div> : ""}

                {fifthSection ?
                    <div className="container SixSectioComponent">
                        <div className='row'>
                            <div className="col-lg-3 col-12">
                                <InterestingNews />
                            </div>
                            <div className="col-lg-3 col-12">
                                <Education />
                            </div>
                            <div className="col-lg-3 col-12">
                                <div className="d-lg-none d-md-none d-block">
                                    <Squire01 />
                                </div>
                                <ExpatriateLife />
                            </div>
                            <div className="col-lg-3 col-12">
                                <ArtAndLiterature />
                            </div>
                        </div>
                        <Vertical01 />
                        <div className="row">
                            <div className="col-lg-9 col-sm-12 col-12">
                                <VideoGallery />
                            </div>
                            <div className="col-lg-3 col-sm-12 col-12">
                                <Squire01 />
                                <Squire01 />
                            </div>
                        </div>
                        <Vertical01 />
                    </div> : ""}

                {!allComponentsLoaded ?
                    <div className='container'>
                        <div className='row d-flex'>
                            <div className="col-lg-12 col-12 justify-content-between">
                                <img style={{ width: '200px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} src={LazyLoaderGIF} alt="loading" title='loading' className='img-fluid img100' />
                            </div>
                        </div>
                    </div> : ''}
            </main>
        </>
    )
}
