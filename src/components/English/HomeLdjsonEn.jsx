import React from 'react'
import { Helmet } from "react-helmet";

export default function HomeLdjsonEn() {
    return (
        <Helmet>
            <script type="application/ld+json">
                {`
                    {
                        "name":"daily-bangladesh.com",
                        "url":"${process.env.REACT_APP_FONT_DOMAIN_URL}english",
                        "logo":{
                            "@context":"http://schema.org",
                            "@type":"ImageObject",
                            "author":"Daily Bangladesh",
                            "contentUrl":"${process.env.REACT_APP_FONT_DOMAIN_URL}media/common/logoEn.png",
                            "url":"${process.env.REACT_APP_FONT_DOMAIN_URL}media/common/logoEn.png",
                            "name":"logo",
                            "width":"300",
                            "height":"99"
                        },
                        "sameAs":[
                            "https://www.facebook.com/DailyBangladeshEnglish/",
                            "https://www.facebook.com/groups/DailyBangladeshGroup/",
                            "https://www.youtube.com/channel/UCb5cnskOB5d1mEFwcQe2H7Q",
                            "https://twitter.com/DB_English_News",
                            "https://www.linkedin.com/in/daily-bangladesh",
                            "https://www.instagram.com/dailybangladesh/"
                        ],
                        "@type":"Organization",
                        "@context":"http://schema.org"
                    }  
                `}
            </script>
            <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "${process.env.REACT_APP_FONT_DOMAIN_URL}english"
                            }
                        ]
                    }
                       
                `}
            </script>
            <script type="application/ld+json">
                {`
                    {
                        "@context":"http://schema.org",
                        "@type":"Website",
                        "url":"${process.env.REACT_APP_FONT_DOMAIN_URL}english",
                        "interactivityType":"mixed",
                        "name":"daily-bangladesh.com",
                        "headline":"Daily Bangladesh is an online news portal of Bangladesh. It was established in 2017 with the commitment to publish objective and information-based news. Our slogan is 'Sky is our dream'.",
                        "keywords":"daily bangladesh, bangla news, current news, bangla newspaper, bangladesh ewspaper, online paper, bangladeshi newspaper, bangla news paper, bangladesh ewspapers, newspaper, all bangla news paper, bd news paper, news paper, bangladesh news paper, daily, bangla newspaper, daily news paper, bangladeshi news paper, bangla paper,bijoy to unicode,online bijoy unicode converter, bangla web tools,bangla converter, bijoy to Unicode, unicode to bijoy,all bangla newspaper, bangladesh news, daily newspaper",
                        "copyrightHolder":{
                            "@type":"Organization",
                            "name":"daily-bangladesh.com"
                        },
                        "potentialAction":{
                            "@type":"SearchAction",
                            "target":"${process.env.REACT_APP_FONT_DOMAIN_URL}english/search/{query}",
                            "query-input":"required name=query"
                        },
                        "mainEntityOfPage":{
                            "@type":"WebPage",
                            "@id":"${process.env.REACT_APP_FONT_DOMAIN_URL}english"
                        }
                    }
                       
                `}
            </script>
        </Helmet>
    )
}
