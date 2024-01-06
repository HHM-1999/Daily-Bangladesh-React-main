import React from 'react'

export default function ConverterFooter() {
    return (
        <footer>
            <div className="col-12 text-center mt-5 mb-4 pt-4">
                <p className='mb-2'>সোশ্যাল মিডিয়াতে আমরা</p>
                <div className="SocialIcon">
                    <ul>
                        <li className="fb-icon"><a href="https://www.facebook.com/DailyBangladeshOnline/" target="blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                        <li className="fb-icon2"><a href="https://www.facebook.com/groups/DailyBangladeshGroup/" target="blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                        <li className="yt-icon"><a href="https://www.youtube.com/channel/UCb5cnskOB5d1mEFwcQe2H7Q" target="blank" rel="noreferrer"><i className="fab fa-youtube"></i></a></li>
                        <li className="tw-icon"><a href="https://twitter.com/DB_News_portal" target="blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
                        <li className="li-icon"><a href="https://www.linkedin.com/in/daily-bangladesh" target="blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
                        <li className="insta-icon"><a href="https://www.instagram.com/dailybangladesh/" target="blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
                        <li className="rss-icon" style={{ background: '#d95b29' }}><a href="https://www.daily-bangladesh.com/rss/rss.xml" target="blank" rel="noreferrer"><i className="fas fa-rss"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
