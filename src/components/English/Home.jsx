import React, { useState, useEffect } from 'react'
import LeadSection from './HomeContent/LeadSection'
import LatestMostPopular from './HomeContent/LatestMostPopular'
import FirstColumn from './HomeContent/FirstColumn'
// import OpinionSec from './HomeContent/OpinionSec'
// import ElectionEng from './HomeContent/MonthySpeEvent/ElectionEng';
import ShirshoSection from './HomeContent/ShirshoSection'
import PrayerTime from './HomeContent/PrayerTime'
import TrendingSec from './HomeContent/TrendingSec'
import DristryJureBangla from './HomeContent/DristryJureBangla'
import CoronaSec from './HomeContent/CoronaSec'
import National from './HomeContent/National'
import Politics from './HomeContent/Politics'
import International from './HomeContent/International'
import Country from './HomeContent/Country'
import Entertainment from './HomeContent/Entertainment'
import Sports from './HomeContent/Sports'
import Economy from './HomeContent/Economy'
import CourtAndLaw from './HomeContent/CourtAndLaw'
import ScienceIT from './HomeContent/ScienceIT'
import Health from './HomeContent/Health'
import Feature from './HomeContent/Feature'
import Religion from './HomeContent/Religion'
import Education from './HomeContent/Education'
import FBpagePlugin from './FBpagePlugin'
import DocumentTitle from 'react-document-title'
import SpecialNews from './HomeContent/SpecialNews'
import CyberSpace from './HomeContent/CyberSpace'
import SpecialReports from './HomeContent/SpecialReports'
import RohingyaSecEn from './HomeContent/RohingyaSecEn'
import HomeLdjsonEn from './HomeLdjsonEn'

import LazyLoaderGIF from '../media/lazyComponentLoaderGIF.gif'
// import RamadanEn from './HomeContent/RamadanEn'
import Vertical01 from '../AdsByGoogle/Vertical01'
import Squire01 from '../AdsByGoogle/Squire01'
// import WeatheIframe from './HomeContent/MonthySpeEvent/WeatheIframe'

var firstSectionComponent = false;
var secondSectionComponent = false;
var thirdSectionComponent = false;
var fourthSectionComponent = false;

var allComponentsLoaded = false;
export default function Home() {
    const [firstSection, setFirstSection] = useState(false)
    const [secondSection, setSecondSection] = useState(false)
    const [thirdSection, setThirdSection] = useState(false)
    const [fourthSection, setFourthSection] = useState(false)

    useEffect(() => {
        // document.querySelectorAll('link[rel="canonical"]')[0].setAttribute('href', window.location.href)

        const handleScroll = () => {
            var Wscroll = window.pageYOffset
            var First_Section = document.getElementsByClassName('FirstSectioComponent');
            firstSectionComponent = document.querySelectorAll('.FirstSectioComponent .DBanglaSPNewsArea .DBanglaSPNewsList .DBanglaSPNews.En')[0]
            if (firstSectionComponent && Wscroll + 250 > (First_Section[0].offsetHeight + First_Section[0].offsetTop) - window.innerHeight) {
                setFirstSection(true)
                var Second_Section = document.getElementsByClassName('SecondSectioComponent');
                secondSectionComponent = document.querySelectorAll('.SecondSectioComponent .DCatStyle1List.En .DCatStyle1ListItem')[0]
                if (secondSectionComponent && Wscroll + 250 > (Second_Section[0].offsetHeight + Second_Section[0].offsetTop) - window.innerHeight) {
                    setSecondSection(true)
                    var Third_Section = document.getElementsByClassName('ThirdSectioComponent');
                    thirdSectionComponent = document.querySelectorAll('.ThirdSectioComponent .DSports .DSportsTop3 .DSportsTop2List.En')[0]
                    if (thirdSectionComponent && Wscroll + 250 > (Third_Section[0].offsetHeight + Third_Section[0].offsetTop) - window.innerHeight) {
                        setThirdSection(true)
                        var Fourth_Section = document.getElementsByClassName('FourthSectioComponent');
                        fourthSectionComponent = document.querySelectorAll('.FourthSectioComponent .DCatStyle1List.En.FeatureC .DCatStyle1ListItem')[0]
                        if (fourthSectionComponent && Wscroll + 250 > (Fourth_Section[0].offsetHeight + Fourth_Section[0].offsetTop) - window.innerHeight) {
                            setFourthSection(true)
                            allComponentsLoaded = true
                            window.removeEventListener("scroll", handleScroll);
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
            <main style={{ minHeight: '1970px' }}>
                <HomeLdjsonEn />
                <DocumentTitle title='Daily Bangladesh English :: ডেইলি বাংলাদেশ' />
                <div className="FirstSectioComponent">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-sm-12">
                                <div className="row">
                                    <LeadSection />
                                    <div className="col-lg-4 col-12 order-lg-first">
                                        <FirstColumn />
                                        {/* <ElectionEng /> */}
                                    
                                        <div className="d-lg-none d-md-none d-block">
                                            <Squire01 />
                                        </div>
                                        <PrayerTime />
                                        <RohingyaSecEn />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12">
                                <div className="d-lg-none d-md-none d-block">
                                    <Squire01 />
                                </div>
                                <ShirshoSection />
                                <LatestMostPopular />
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
                                <div className="col-lg-3 col-sm-12">
                                    <Squire01 />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <Vertical01 />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-12">
                                <DristryJureBangla />
                            </div>
                            <div className="col-lg-3 col-12">
                                <div className="d-lg-none d-md-none d-block">
                                    <Squire01 />
                                </div>
                                <div className="fb-page-banner"><FBpagePlugin /></div>
                                <CoronaSec />
                            </div>
                        </div>
                    </div>
                </div>
                {firstSection ?
                    <div className="container SecondSectioComponent">
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
                        <div className="row">
                            <div className="col-lg-8 col-12">
                                <Country />
                            </div>
                            <div className="col-lg-4 col-12">
                                <Economy />
                            </div>
                        </div>
                        <Vertical01 />
                    </div> : ""}

                {secondSection ?
                    <div className="container ThirdSectioComponent">
                        <Vertical01 />
                        <Entertainment />
                        <Vertical01 />
                        <Sports />
                    </div> : ""}

                {thirdSection ?
                    <div className="container FourthSectioComponent">
                        <Vertical01 />

                        <div className="row">
                            <div className="col-lg-4 col-12">
                                <div className="d-lg-none d-md-none d-block">
                                    <Squire01 />
                                </div>
                                <CourtAndLaw />
                            </div>
                            <div className="col-lg-4 col-12">
                                <ScienceIT />
                            </div>
                            <div className="col-lg-4 col-12">
                                <Religion />
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="d-lg-none d-md-none d-block">
                                    <Squire01 />
                                </div>
                                <Health />
                            </div>
                            <div className="col-lg-4 col-12">
                                <Education />
                            </div>
                            <div className="col-lg-4 col-12">
                                <Feature />
                            </div>
                        </div>
                    </div> : ""}
                {fourthSection ?
                    <div className="container FifthSectioComponent">
                        <Vertical01 />

                        <div className="row">
                            <div className="col-lg-4 col-12">
                                <SpecialNews />
                            </div>
                            <div className="col-lg-4 col-12">
                                <CyberSpace />
                            </div>
                            <div className="col-lg-4 col-12">
                                <SpecialReports />
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
