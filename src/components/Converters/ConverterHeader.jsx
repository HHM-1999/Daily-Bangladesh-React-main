import React from 'react'
import { Link } from 'react-router-dom'

export default function ConverterHeader() {
    return (
        <header>
            <div className="row">
                <div className="col-12" id="LOGO">
                    <div className="Converterlogo d-flex align-items-center justify-content-center my-4">
                        <Link to="/">
                            <img src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/logo.png"} alt="Daily Bangladesh :: ডেইলি বাংলাদেশ" title='Daily Bangladesh :: ডেইলি বাংলাদেশ' />
                        </Link>
                    </div>
                    <div className="ConvertText text-center">
                        <p>সহজেই কনভার্ট করুন বাংলা ফন্ট - ডেইলি-বাংলাদেশ ডটকম</p>
                        <p>Bijoy to Unicode bangla converter - daily-bangladesh.com</p>
                    </div>
                </div>
            </div>
        </header>
    )
}
