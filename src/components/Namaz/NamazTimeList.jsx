import React, { useState } from 'react'
import DocumentTitle from 'react-document-title'
import NamazHeader from '../Namaz/NamazHeader'
import CitysName from '../Namaz/CitysName'
import { useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { banglaDateConvetar } from '../AllFunctions';
import Vertical01 from '../AdsByGoogle/Vertical01';
import Header from '../Bangla/Header'
import Footer from '../Bangla/Footer'

// var currentDay = moment().format('DD')
var currentMonth = moment().format('MMMM')
var currentDate = moment().format('YYYY-MM-DD')
var selectedMonth = ""
export default function NamazTimeList() {
    const [city, setCity] = useState(CitysName) // eslint-disable-line no-unused-vars
    const [namazTime, setNamazTime] = useState([])

    useEffect(() => {
        // document.querySelectorAll('link[rel="canonical"]')[0].setAttribute('href', window.location.href)
        window.scroll(0, 0)
        axios
            .get(`https://www.emythmakers.com/namazapi/month/${currentMonth}`,
                { headers: { Accesstoken: `62497a616353e` } }
            )
            .then(({ data }) => {
                setNamazTime(data.prayertimes)
            });
    }, []);

    const monthValue = (e) => {
        selectedMonth = e.target.getAttribute("data-month");
        axios
            .get(`https://www.emythmakers.com/namazapi/month/${selectedMonth}`,
                { headers: { Accesstoken: `62497a616353e` } }
            )
            .then(({ data }) => {
                setNamazTime(data.prayertimes)
            });

        var activeBtn = document.querySelectorAll(".btn.btn-info.active");
        for (var j = 0; j < activeBtn.length; j++) {
            activeBtn[j].classList.remove("active");
        }
        e.target.classList.add("active");
    }

    function submitForm(e) {
        e.preventDefault();
        var selectedDistrictName = ""
        selectedDistrictName = e.target.value
        if (selectedMonth) {
            axios
                .get(`https://www.emythmakers.com/namazapi/month/${selectedMonth}/district/${selectedDistrictName}`,
                    { headers: { Accesstoken: `62497a616353e` } }
                )
                .then(({ data }) => {
                    setNamazTime(data.prayertimes)
                });
        } else {
            axios
                .get(`https://www.emythmakers.com/namazapi/month/${currentMonth}/district/${selectedDistrictName}`,
                    { headers: { Accesstoken: `62497a616353e` } }
                )
                .then(({ data }) => {
                    setNamazTime(data.prayertimes)
                });
        }
    }
    return (
        <>
        <div className='page-bangla'>
            <Header />
            <DocumentTitle title='নামাজের সময়সূচি :: Salah Time in Bangladesh' />
            <div className="container">
                <NamazHeader />
                <main>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="DPTLocation">
                                <h1>নামাজ, সেহরি ও ইফতার এর  সময়সূচি</h1>
                                <p> সহ দেশের সব কয়টি জেলার সারা বছরের নামাজ, সেহরি ও ইফতারের সময় দেখুন এই পাতায়।</p>
                            </div>
                        </div>
                    </div>
                    <div className="DSDistrict">
                        <div className="row">
                            <div className="col-sm-6 text-end"><h3>আপনার জেলা খুঁজুন : </h3></div>
                            <div className="col-sm-6">
                                <div className="form-group clearfix">
                                    <div className="col-sm-4">
                                        <form>
                                            <select id="cboDistrictID" onChange={submitForm} defaultValue={''} name="city" className="form-control">
                                                <option value="">জেলা  খুঁজুন</option>
                                                {city.map((nc) => {
                                                    return (
                                                        <option key={nc.id} value={nc.id}>{nc.name}</option>
                                                    );
                                                })}
                                            </select>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Vertical01 />

                    <div className="row DMonlthList">
                        <div className="col-sm-12 text-center">
                            <button onClick={monthValue} data-month="January" type="button" className={currentMonth === 'January' ? "btn btn-info active" : "btn btn-info"}>জানুয়ারি </button>
                            <button onClick={monthValue} data-month="February" type="button" className={currentMonth === 'February' ? "btn btn-info active" : "btn btn-info"}>ফেব্রুয়ারি</button>
                            <button onClick={monthValue} data-month="March" type="button" className={currentMonth === 'March' ? "btn btn-info active" : "btn btn-info"}>মার্চ </button>
                            <button onClick={monthValue} data-month="April" type="button" className={currentMonth === 'April' ? "btn btn-info active" : "btn btn-info"}>এপ্রিল </button>
                            <button onClick={monthValue} data-month="May" type="button" className={currentMonth === 'May' ? "btn btn-info active" : "btn btn-info"}>মে </button>
                            <button onClick={monthValue} data-month="June" type="button" className={currentMonth === 'June' ? "btn btn-info active" : "btn btn-info"}>জুন </button>
                            <button onClick={monthValue} data-month="July" type="button" className={currentMonth === 'July' ? "btn btn-info active" : "btn btn-info"}>জুলাই </button>
                            <button onClick={monthValue} data-month="August" type="button" className={currentMonth === 'August' ? "btn btn-info active" : "btn btn-info"}>আগস্ট </button>
                            <button onClick={monthValue} data-month="September" type="button" className={currentMonth === 'September' ? "btn btn-info active" : "btn btn-info"}>সেপ্টেম্বর </button>
                            <button onClick={monthValue} data-month="October" type="button" className={currentMonth === 'October' ? "btn btn-info active" : "btn btn-info"}>অক্টোবর </button>
                            <button onClick={monthValue} data-month="November" type="button" className={currentMonth === 'November' ? "btn btn-info active" : "btn btn-info"}>নভেম্বর </button>
                            <button onClick={monthValue} data-month="December" type="button" className={currentMonth === 'December' ? "btn btn-info active" : "btn btn-info"}>ডিসেম্বর </button>
                        </div>
                    </div>

                    <div className="row NamazTime">
                        <div className="col-sm-12">
                            <div className="DMNamazTime table-responsive">
                                <table id="example" className="display table table-striped" style={{ width: '100%' }}>
                                    <thead>
                                        <tr>
                                            <th>তারিখ</th>
                                            <th>ফজর </th>
                                            <th>যোহর</th>
                                            <th>আছর</th>
                                            <th>মাগরিব</th>
                                            <th>ইশা</th>
                                            <th>সাহরি</th>
                                            <th>ইফতার</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {namazTime && namazTime.map((nc, i) => {
                                            return (
                                                <tr className={currentDate === nc.Date ? "xyz001 active" : 'xyz001'} key={i}>
                                                    <td>{banglaDateConvetar(nc.Date)}</td>
                                                    {/* <td>{banglaDateConvetar(nc.Date)}</td> */}
                                                    <td>{banglaDateConvetar(nc.Fajr)} ভোর</td>
                                                    <td>{banglaDateConvetar(nc.Dhuhr)} দুপুর</td>
                                                    <td>{banglaDateConvetar(nc.Asr)} বিকেল</td>
                                                    <td>{banglaDateConvetar(nc.Maghrib)} সন্ধ্যা</td>
                                                    <td>{banglaDateConvetar(nc.Isha)} রাত</td>
                                                    <td>{banglaDateConvetar(nc.Sehri)} ভোর</td>
                                                    <td>{banglaDateConvetar(nc.Iftar)} সন্ধ্যা</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <Vertical01 />
                </main>
            </div>
            <Footer />
        </div>
        </>
    )
}
