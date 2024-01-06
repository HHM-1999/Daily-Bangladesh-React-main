import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import { scrollTop } from '../../AllFunctions'

export default function AllWriters() {
    let { all_writers } = useParams();
    const [allWriter, setAllWriter] = useState([])

    useEffect(() => {
        // document.querySelectorAll('link[rel="canonical"]')[0].setAttribute('href', window.location.href)
        axios
            .get(`${process.env.REACT_APP_API_URL_EN}writers`)
            .then(({ data }) => {
                setAllWriter(data.writers);
            });
        const timer = setTimeout(() => { window.location.reload(1); }, 300000);
        return () => clearTimeout(timer);
    }, [all_writers])

    return (
        <main>
            <div className="container">
                <div className="TopHomeSection"></div>
                <DocumentTitle title='All Writers' />
                <h2 className="mvp-feat1-pop-head DTitle En"><Link to="/english/all_writers" onClick={scrollTop}><span className="mvp-feat1-pop-head">All Writers</span></Link></h2>
                <div className="DTagListArea mb-5">
                    <ul className="row">
                        {allWriter.map((nc) => {
                            return (
                                <li className="col-lg-4 col-sm-6 col-12" key={nc.WriterID}>
                                    <div className="DTagListItem En">
                                        <Link to={"/english/writers/" + nc.Slug} onClick={scrollTop}>
                                            <div className="Desc">
                                                <h2 className="Title"><span>{nc.WriterNameEn}</span></h2>
                                            </div>
                                        </Link>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </main>
    )
}
