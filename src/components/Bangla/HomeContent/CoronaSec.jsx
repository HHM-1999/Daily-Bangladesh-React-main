import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { scrollTop, ForLazyLoaderImg, banglaDateConvetar } from '../../AllFunctions'
var lazyloaded = false
export default function CoronaSec() {
    const [state, setState] = useState([])
    const [corona, setCorona] = useState({})
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateCategory39.json`)
            .then(({ data }) => {
                setState(data.data.slice(0, 2));
                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);
            });

        axios
            .get(`${process.env.REACT_APP_API_URL}corona-info`)
            .then(({ data }) => {
                setCorona(data.data);
            });
    }, [])
    return (
        <>
            <div className="DCoronaSec">
                <div className="DCoronaBanner">
                    <Link to="/"><img className="img-fluid img100" src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/corona.jpg"} width={304} height={63} alt="corona" title="corona" /></Link>
                </div>
                <div className="DCoronaTable table-responsive">
                    {corona.CorID ?
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th className="Danger">আক্রান্ত</th>
                                    <th className="Success">সুস্থ</th>
                                    <th className="Dark">মৃত</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>বিশ্বব্যাপী</b></td>
                                    <td className="Danger">{banglaDateConvetar((corona.AffWrld).toString())}</td>
                                    <td className="Success">{banglaDateConvetar((corona.CuredWrld).toString())}</td>
                                    <td className="Dark">{banglaDateConvetar((corona.DiedWrld).toString())}</td>
                                </tr>
                                <tr>
                                    <td><b>বাংলাদেশ</b></td>
                                    <td className="Danger">{banglaDateConvetar((corona.AffBD).toString())}</td>
                                    <td className="Success">{banglaDateConvetar((corona.CuredBD).toString())}</td>
                                    <td className="Dark">{banglaDateConvetar((corona.DiedBD).toString())}</td>
                                </tr>
                            </tbody>
                        </table>
                        : false}
                </div>
                <div className="DCoronaNews">
                    {state.map((nc) => {
                        return (
                            <div className="DCoronaNewsList" key={nc.ContentID}>
                                <Link to={"/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                    <div className="row">
                                        <div className="col-lg-5 col-sm-3 col-5 videoIcon">
                                            <picture><img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + nc.ImageSmPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" /></picture>
                                            {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn"><i className="fas fa-play"></i></span> : ""}
                                        </div>
                                        <div className="col-lg-7 col-sm-9 col-7">
                                            <div className="Desc"><h5 className="Title SMTitle2">{nc.ContentHeading}</h5></div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                    <div className="DReadMore"><Link to="/coronavirus" onClick={scrollTop}><span>আরো পড়ুন</span></Link></div>
                </div>
            </div>
        </>
    )
}
