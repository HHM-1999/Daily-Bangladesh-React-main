import React from 'react'

export default function FBpagePlugin() {
    setTimeout(function () {
        window.FB.init({
            appId: '416387992241868',
            pages: "385406508922803",
            xfbml: true,
            version: 'v12.0'
        });
        window.FB.XFBML.parse();
    }, 50);
    return (
        <div className="fb-page" data-href="https://www.facebook.com/DailyBangladeshEnglish/" data-tabs="" data-width="280px" data-height="180px" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="false">
            <blockquote cite="https://www.facebook.com/DailyBangladeshEnglish/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/DailyBangladeshEnglish/">Daily Bangladesh</a></blockquote>
        </div>
    )
}
