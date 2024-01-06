import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function InArticleDetails01() {
    const [ip, setIP] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}get-client-ip`)
            .then(({ data }) => {
                setIP(data.data);
                if (data.data !== "203.76.114.34" && data.data !== "118.67.221.226") {
                    setTimeout(() => {
                        (window.adsbygoogle = window.adsbygoogle || []).push({})
                    }, 1000);
                }
            })
    }, [])

    return (
        <div className='row my-3'>
            {ip !== "203.76.114.34" && ip !== "118.67.221.226" ?
                <div className="col-12">
                    <ins class="adsbygoogle"
                        style={{ display: 'block', textAlign: 'center' }}
                        data-ad-layout="in-article"
                        data-ad-format="fluid"
                        data-ad-slot="9000970973"></ins>
                </div>
                : ""}
        </div>
    )
}
