import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { scrollTop, ForLazyLoaderImg } from '../../AllFunctions'
var lazyloaded = false
export default function CoronaSec() {
    const [state, setState] = useState([])
    // const [corona, setCorona] = useState({})
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL_EN}json/file/generateCategory17.json`)
            .then(({ data }) => {
                setState(data.data.slice(0, 2));
                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);
            });

        // axios
        //     .get(`${process.env.REACT_APP_API_URL_EN}corona-info`)
        //     .then(({ data }) => {
        //         setCorona(data.data);
        //     });
    }, [])
    return (
        <>
            <div className="DCoronaSec En">
                <div className="DCoronaBanner">
                    <Link to="/english/coronavirus"><img className="img-fluid img100" src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/CoronaEN.jpg"} alt="corona" title="corona" /></Link>
                </div>
                {/* <div className="DCoronaTable table-responsive">
                    {corona.CorID ?
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th className="Danger">Infected</th>
                                    <th className="Success">Cured</th>
                                    <th className="Dark">Died</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Worldwide</b></td>
                                    <td className="Danger">{(corona.AffWrld).toString()}</td>
                                    <td className="Success">{(corona.CuredWrld).toString()}</td>
                                    <td className="Dark">{(corona.DiedWrld).toString()}</td>
                                </tr>
                                <tr>
                                    <td><b>Bangladesh</b></td>
                                    <td className="Danger">{(corona.AffBD).toString()}</td>
                                    <td className="Success">{(corona.CuredBD).toString()}</td>
                                    <td className="Dark">{(corona.DiedBD).toString()}</td>
                                </tr>
                            </tbody>
                        </table>
                        : false}
                </div> */}
                <div className="DCoronaNews">
                    {state.map((nc) => {
                        return (
                            <div className="DCoronaNewsList" key={nc.ContentID}>
                                <Link to={"/english/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                    <div className="row">
                                        <div className="col-lg-5 col-sm-3 col-5 videoIcon">
                                            <picture><img src={process.env.REACT_APP_LAZYL_IMG_En} data-src={process.env.REACT_APP_IMG_Path + nc.ImageSmPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" /></picture>
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
                    <div className="DReadMore"><Link to="/english/coronavirus" onClick={scrollTop}><span>Read More</span></Link></div>
                </div>
            </div>
        </>
    )
}
