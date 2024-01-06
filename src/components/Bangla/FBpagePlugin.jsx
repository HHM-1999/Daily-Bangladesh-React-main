import React from 'react'
// import Skeleton from 'react-loading-skeleton'

export default function FBpagePlugin() {
    // const [isSkeletonLoading, setIsSkeletonLoading] = useState(true)
    setTimeout(function () {
        // setIsSkeletonLoading(false)
        window.FB.init({
            appId: '416387992241868',
            pages: "433659713676324",
            xfbml: true,
            version: 'v12.0'
        });
        window.FB.XFBML.parse();
    }, 50);
    return (
        <>
            {/* {isSkeletonLoading ?
                <div style={{ height: '146px', width: '364px' }}>
                    <Skeleton height={146} width={284} />
                </div>
                : */}
            <div className="fb-page" data-href="https://www.facebook.com/DailyBangladeshOnline/" data-tabs="" data-width="280px" data-height="180px" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="false">
                <blockquote cite="https://www.facebook.com/DailyBangladeshOnline/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/DailyBangladeshOnline/">Daily Bangladesh</a></blockquote>
            </div>
        </>
    )
}
