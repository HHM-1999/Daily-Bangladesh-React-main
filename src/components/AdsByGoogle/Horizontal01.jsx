import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Horizontal01() {
    const [ip, setIP] = useState([])
    useEffect(() => {
        axios
            // .get(`https://api.ipify.org/?format=json`)
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
        <div className='row my-3 text-center d-lg-block d-none'>
            {ip !== "203.76.114.34" && ip !== "118.67.221.226" ?
                <div className="col-12">
                    <ins class="adsbygoogle"
                        style={{ display: 'block' }}
                        data-ad-slot="8042471895"
                        data-ad-format="auto"
                        data-full-width-responsive="true"></ins>
                </div>
                : ""}
        </div>
    )
}
