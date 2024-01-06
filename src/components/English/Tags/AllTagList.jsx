import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import { scrollTop } from '../../AllFunctions'

export default function AllTagList() {
    let { all_tags } = useParams();
    const [allTags, setAllTags] = useState([])

    useEffect(() => {
        // document.querySelectorAll('link[rel="canonical"]')[0].setAttribute('href', window.location.href)
        axios
            .get(`${process.env.REACT_APP_API_URL_EN}tags`)
            .then(({ data }) => {
                setAllTags(data.tags);
            });
        const timer = setTimeout(() => { window.location.reload(1); }, 300000);
        return () => clearTimeout(timer);
    }, [all_tags])

    return (
        <main>
            <div className="container">
                <div className="TopHomeSection"></div>
                <DocumentTitle title='All Tags' />
                <h2 className="mvp-feat1-pop-head DTitle En"><Link to="/english/all_tags" onClick={scrollTop}><span className="mvp-feat1-pop-head">All Tags</span></Link></h2>
                <div className="DTagListArea mb-5">
                    <ul className="row">
                        {allTags.map((nc) => {
                            return (
                                <li className="col-lg-4 col-sm-6 col-12" key={nc.TagID}>
                                    <div className="DTagListItem En">
                                        <Link to={"/english/tags/" + nc.TagName} onClick={scrollTop}>
                                            <div className="Desc">
                                                <h2 className="Title">{nc.TagName}</h2>
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
