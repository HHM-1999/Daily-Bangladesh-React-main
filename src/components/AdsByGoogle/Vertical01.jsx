import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Vertical01() {
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
        <div className='row my-3 d-flex justify-content-center'>
            {ip !== "203.76.114.34" && ip !== "118.67.221.226" ?
                // <div className="col-12 Vertical01">
                <div className="col-12">
                    <ins class="adsbygoogle" style={{ display: 'block' }} data-ad-slot="2953796744" data-ad-format="auto" data-full-width-responsive="true"></ins>
                </div>
                : ""}
        </div>
    )
}
