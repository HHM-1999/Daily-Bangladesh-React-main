import React from 'react'
// import { Link } from 'react-router-dom'
import NamazBG from '../media/NamazBG.jpg'

export default function NamazHeader() {
    return (
        <header>
            {/* <div className="row">
                <div className="col-12" id="LOGO">
                    <div className="Nlogo d-flex align-items-center justify-content-center">
                        <Link to="/">
                            <img src={process.env.REACT_APP_FONT_DOMAIN_URL + "media/common/logo.png"} alt="Daily Bangladesh :: ডেইলি বাংলাদেশ" title='Daily Bangladesh :: ডেইলি বাংলাদেশ' />
                        </Link>
                    </div>
                </div>
            </div> */}
            <div id="HeaderBG">
                <div className="row mt-3 mb-4">
                    <div className="col-lg-12 col-sm-12">
                        <div className=""><img src={NamazBG} alt="Daily Bangladesh :: ডেইলি বাংলাদেশ" title='Daily Bangladesh :: ডেইলি বাংলাদেশ' className='img-fluid img100' /></div>
                    </div>
                </div>
            </div>
        </header>
    )
}
