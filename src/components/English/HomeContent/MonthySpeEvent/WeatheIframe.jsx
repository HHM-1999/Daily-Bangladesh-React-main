import React from 'react'

export default function WeatheIframe() {
    return (
        <div className="DFirstColumn" style={{ marginTop: '20px' }}>
            <h2 className='weatherTitle'>Track of Cyclone Mokha</h2>
            <iframe width="100%" height="342" title='Track of Cyclone Mokha'
                src="https://embed.windy.com/embed2.html?lat=20.818&lon=91.230&detailLat=20.818&detailLon=91.230&width=304&height=382&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
                frameborder="0"></iframe>
        </div>
    )
}
