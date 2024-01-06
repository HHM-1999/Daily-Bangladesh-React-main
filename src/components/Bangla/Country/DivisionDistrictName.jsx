import React from 'react'
import { Link } from 'react-router-dom'

export default function DivisionDistrictName() {
    return (
        <div className="DDivisionNav my-4 mt-4">
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
                                    <Link className="dropdown-item" to="/divisions/dhaka/munshiganj">মুন্সীগঞ্জ</Link>
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
                                    <Link className="dropdown-item" to="/divisions/chattogram/rangamati">রাঙ্গামাটি</Link>
                                    <Link className="dropdown-item" to="/divisions/chattogram/lakshmipur">লক্ষ্মীপুর</Link>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <Link to="/divisions/barishal" className="dropdown-toggle" data-toggle="dropdown disable" role="button" aria-haspopup="true" aria-expanded="false">বরিশাল <i className="fa fa-angle-down"></i></Link>
                                <ul className="dropdown-menu">
                                    <Link className="dropdown-item" to="/divisions/barishal/jhalokati">ঝালকাঠি</Link>
                                    <Link className="dropdown-item" to="/divisions/barishal/patuakhali">পটুয়াখালী</Link>
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
                                    <Link className="dropdown-item" to="/divisions/mymensingh/netrokona">নেত্রকোণা</Link>
                                    <Link className="dropdown-item" to="/divisions/mymensingh/mymensingh">ময়মনসিংহ</Link>
                                    <Link className="dropdown-item" to="/divisions/mymensingh/sherpur">শেরপুর</Link>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
