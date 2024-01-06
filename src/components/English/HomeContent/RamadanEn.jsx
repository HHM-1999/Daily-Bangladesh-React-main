import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import moment from 'moment';
import { scrollTop, ForLazyLoaderImg } from '../../AllFunctions'
var lazyloaded = false

const moment_hijri = require('moment-hijri');

var currentDay = moment().format('dddd')
var today = moment().format('YYYY-MM-DD')

//to get date of tomorrow
let tomorrow = new Date(`${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate() + 1}`);
//for dd-mm-yy format
tomorrow = `${(tomorrow.getFullYear())}-${tomorrow.getMonth() + 1}-${tomorrow.getDate()}`;

//to get date of previous date
var previous = new Date();
previous.setDate(previous.getDate() - 1);
var arabicDate = moment_hijri(previous).format('iD');

var rojaTodayDate = ''
var rojaTodaySehri = ''
var rojaTodayIftar = ''
var rojatomorrowDate = ''
var rojatomorrowSehri = ''
var rojatomorrowIftar = ''

var todayDate = ''
var todaySehri = '';
var todayIftar = ''
var tomorrowDate = '';
var tomorrowSehri = '';
var tomorrowIftar = '';

var countDownDate;
var period;
var countDate; // eslint-disable-line no-unused-vars
export default function RamadanEn() {
    const [state, setState] = useState([])
    const [test1, setTest1] = useState([])// eslint-disable-line no-unused-vars

    const [isSkeletonLoading, setIsSkeletonLoading] = useState(true);
    useEffect(() => {
        setIsSkeletonLoading(true)
        axios
            .get(`${process.env.REACT_APP_API_URL_EN}json/file/generateSpecial8.json`)
            .then(({ data }) => {
                if (data.data.length > 0) {
                    setState(data.data.slice(0, 2));
                    setIsSkeletonLoading(false)
                    setTimeout(function () {
                        lazyloaded = false
                        ForLazyLoaderImg(lazyloaded)
                    }, 1000);
                }
            });
        axios
            .get(`https://www.emythmakers.com/namazapi/roja/${today}`,
                { headers: { Accesstoken: `62497a616353e` } }
            )
            .then(({ data }) => {
                if (data.data.length > 0) {
                    setTest1(data.data)
                    rojaTodayDate = data.data[0].date
                    rojaTodaySehri = data.data[0].sehri
                    rojaTodayIftar = data.data[0].iftar
                    rojatomorrowDate = data.data[1].date
                    rojatomorrowSehri = data.data[1].sehri
                    rojatomorrowIftar = data.data[1].iftar
                    sehriiftarfn(rojaTodayDate, rojaTodaySehri, rojaTodayIftar, rojatomorrowDate, rojatomorrowSehri, rojatomorrowIftar)
                }
            });
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    function sehriiftarfn(rojaTodayDate, rojaTodaySehri, rojaTodayIftar, rojatomorrowDate, rojatomorrowSehri, rojatomorrowIftar) {
        // console.log('here-sehriiftarfn');
        // console.log(rojaTodayDate);
        todayDate = rojaTodayDate.replace(/-/g, "/");
        todaySehri = rojaTodaySehri;
        todayIftar = rojaTodayIftar
        tomorrowDate = rojatomorrowDate.replace(/-/g, "/");
        tomorrowSehri = rojatomorrowSehri;
        tomorrowIftar = rojatomorrowIftar;

        setValue();
    }

    function setValue() {
        var currentTime = new Date().getTime();
        // console.log("todayDate - " + new Date(todayDate + ' ' + todayIftar).getTime());
        // console.log(todayDate);
        if (new Date(todayDate + ' ' + todaySehri).getTime() > currentTime) {
            countDownDate = new Date(todayDate + ' ' + todaySehri).getTime();
            period = 'Sehri';
            countDate = new Date(todayDate + ' ' + todaySehri);
            // console.log('here1')
        } else if (new Date(todayDate + ' ' + todayIftar).getTime() > currentTime) {
            countDownDate = new Date(todayDate + ' ' + todayIftar).getTime();
            period = 'Iftar';
            countDate = new Date(todayDate + ' ' + todayIftar);
            // console.log('here2')
        } else if (new Date(tomorrowDate + ' ' + tomorrowSehri).getTime() > currentTime) {
            countDownDate = new Date(tomorrowDate + ' ' + tomorrowSehri).getTime();
            period = 'Sehri';
            countDate = new Date(tomorrowDate + ' ' + tomorrowSehri);
            arabicDate = moment_hijri().format('iD');
            currentDay = moment(tomorrow).format('dddd')
            // console.log('here3')
        } else if (new Date(tomorrowDate + ' ' + tomorrowIftar).getTime() > currentTime) {
            countDownDate = new Date(tomorrowDate + ' ' + tomorrowIftar).getTime();
            period = 'Iftar';
            countDate = new Date(tomorrowDate + ' ' + tomorrowIftar);
            // console.log('here4')
        } else {
            countDownDate = new Date().getTime();
            period = '';
            countDate = '';
            // console.log('here5')
        }

        // console.log('here')
        // console.log("countDownDate - " + countDownDate)
        // console.log("currentTime - " + currentTime)

        counter();
    }

    function counter() {
        // Update the count down every 1 second
        var x = setInterval(function () {
            //Get today's date and time
            var now = new Date().getTime();

            //Find the distance between now and the count down date
            var distance = countDownDate - now;

            //console.log(distance);

            //Time calculations for days, hours, minutes and seconds
            //var days=Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // var dayStr=days.toString();
            var hourStr = hours.toString();
            var minuteStr = minutes.toString();
            var secondStr = seconds.toString();

            // if (days <= 9) {
            //  	dayStr='০' + dayStr;
            // }
            if (hours <= 9) {
                hourStr = '0' + hourStr;
            }
            if (minutes <= 9) {
                minuteStr = '0' + minuteStr;
            }
            if (seconds <= 9) {
                secondStr = '0' + secondStr;
            }


            //Output the result in an element with id="demo"
            //document.getElementById("demo").innerHTML=days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

            //*Commenting On below 4 lines when need to show 00-00-00-00 **
            // document.getElementById("days").innerHTML=dayStr;
            if (document.getElementById('DRamadanTable')) {
                document.getElementById("hours").innerHTML = (hourStr) + '</br>';
                document.getElementById("minutes").innerHTML = (minuteStr) + '</br>';
                document.getElementById("seconds").innerHTML = (secondStr) + '</br>';
                document.getElementById("period").innerHTML = period;
            }

            if (distance < 0) {
                clearInterval(x);
                document.getElementById("hours").innerHTML = '00';
                document.getElementById("minutes").innerHTML = '00';
                document.getElementById("seconds").innerHTML = '00';
                document.getElementById("period").innerHTML = '';
            }
        }, 1000);
    }

    return (
        <>
            <div className="DWorldCupSection DRamadan">
                <div className="DWorldCupBanner">
                    <img className="img-fluid img100" src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/RamadanBanner-English.jpg"} width={304} height={99} alt="Ramadan time-table" title="Ramadan time-table" />
                </div>
                <div className="DPrayer">
                    <div className="DRamadanTitle">
                        {arabicDate + ' Ramadan, ' + currentDay}
                    </div>
                    <div className="DRamadanTable table-responsive" id='DRamadanTable'>
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>Time</td>
                                    <td>Hours</td>
                                    <td>Minutes</td>
                                    <td>Seconds</td>
                                </tr>
                                <tr>
                                    <td id="period"></td>
                                    <td id="hours"></td>
                                    <td id="minutes"></td>
                                    <td id="seconds"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="DWorldCuphoNews">
                    {isSkeletonLoading ? <>
                        {Array(2).fill("").map((nc, i) => (
                            <div className="DWorldCupNewsList" key={i}>
                                <Link to={"/"}>
                                    <div className="row">
                                        <div className="col-lg-3 col-sm-2 col-3 videoIcon" style={{ width: '24%' }}>
                                            <Skeleton width={66} height={66} />
                                        </div>
                                        <div style={{ width: '76%' }}>
                                            <Skeleton count={2} />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </> : <>
                        {state.map((nc) => {
                            return (
                                <div className="DWorldCupNewsList" key={nc.ContentID}>
                                    <Link to={"/english/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                        <div className="row">
                                            <div className="col-lg-3 col-sm-2 col-3 videoIcon">
                                                <picture><img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + nc.ImageThumbPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" /></picture>
                                                {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn"><i className="fas fa-play"></i></span> : ""}
                                            </div>
                                            <div className="col-lg-9 col-sm-10 col-9 align-items-center d-flex">
                                                <div className="Desc"><h5 className="Title SMTitle2">{nc.ContentHeading}</h5></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </>}
                </div>
            </div>
        </>
    )
}
