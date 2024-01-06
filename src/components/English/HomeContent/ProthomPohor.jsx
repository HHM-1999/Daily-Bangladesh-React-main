import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { scrollTop, ForLazyLoaderImg } from '../../AllFunctions'
var lazyloaded = false
export default function ProthomPohor() {
    const [state, setState] = useState([])
    const [state2, setState2] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL_EN}json/file/generateCategory14.json`)
            .then(({ data }) => {
                setState(data.data[0]);
                setState2(data.data.slice(1, 3));
                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);
            });
    }, [])
    return (
        <>
            <div className="SPSecTitle En"><Link to="/english/lifestyle" onClick={scrollTop}><h2><img src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/Sign.png"} width={16} height={16} alt="Sign" title="Sign" /> লাইফস্টাইল </h2></Link></div>
            <div className="DCatStyle1List">
                <div className="DCatStyle1Top">
                    <div className="thumbnail">
                        <Link to={"/english/" + state.Slug + "/" + state.ContentID} onClick={scrollTop}>
                            <picture>
                                <img src={process.env.REACT_APP_LAZYL_IMG_En} data-src={process.env.REACT_APP_IMG_Path + state.ImageSmPath} alt={state.ContentHeading} title={state.ContentHeading} className="img-fluid img100" />
                            </picture>
                            <div className="Desc">
                                <h3 className="Title fw-bold">{state.ContentHeading}</h3>
                            </div>
                        </Link>
                    </div>
                </div>
                {state2.map((nc) => {
                    return (
                        <div className="DCatStyle1ListItem" key={nc.ContentID}>
                            <Link to={"/english/" + nc.Slug + "/" + nc.ContentID} onClick={scrollTop}>
                                <div className="row">
                                    <div className="col-lg-4 col-sm-3 col-5">
                                        <picture>
                                            <img src={process.env.REACT_APP_LAZYL_IMG_En} data-src={process.env.REACT_APP_IMG_Path + nc.ImageThumbPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" />
                                        </picture>
                                    </div>
                                    <div className="col-lg-8 col-sm-9 col-7">
                                        <div className="Desc">
                                            <h4 className="Title SMTitle">{nc.ContentHeading}</h4>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
