import React from 'react'
import { Helmet } from "react-helmet";

export default function HomeLdjsonBn() {
    return (
        <Helmet>
            <script type="application/ld+json">
                {`
                    {
                        "name":"daily-bangladesh.com",
                        "url":"${process.env.REACT_APP_FONT_DOMAIN_URL}",
                        "logo":{
                            "@context":"http://schema.org",
                            "@type":"ImageObject",
                            "author":"Daily Bangladesh :: ডেইলি বাংলাদেশ",
                            "contentUrl":"${process.env.REACT_APP_FONT_DOMAIN_URL}media/common/logo.png",
                            "url":"${process.env.REACT_APP_FONT_DOMAIN_URL}media/common/logo.png",
                            "name":"logo",
                            "width":"250",
                            "height":"99"
                        },
                        "sameAs":[
                            "https://www.facebook.com/DailyBangladeshOnline/",
                            "https://www.facebook.com/groups/DailyBangladeshGroup/",
                            "https://www.youtube.com/channel/UCb5cnskOB5d1mEFwcQe2H7Q",
                            "https://twitter.com/DB_News_portal",
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
                                "item": "${process.env.REACT_APP_FONT_DOMAIN_URL}"
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
                        "url":"${process.env.REACT_APP_FONT_DOMAIN_URL}",
                        "interactivityType":"mixed",
                        "name":"daily-bangladesh.com",
                        "headline":"Daily Bangladesh is an online news portal of Bangladesh. It was established in 2017 with the commitment to publish objective and information-based news. Our slogan is 'Sky is our dream'.",
                        "keywords":"ডেইলি বাংলাদেশ,অনলাইন, পত্রিকা, বাংলাদেশ, আজকের পত্রিকা, জাতীয়, সারাদেশ, বরিশাল, চট্টগ্রাম, ঢাকা,খুলনা, রাজশাহী, সিলেট, রংপুর, ময়মনসিংহ, রাজধানী, আন্তর্জাতিক, রাজনীতি, বিনোদন , দেশি, বিদেশি, খেলা, ক্রিকেট, বিশ্বকাপ ক্রিকেট, বিশেষ কলাম, অর্থনীতি, ধর্ম, লাইফস্টাইল, ফ্যাশন, রেসিপি, সাত রঙ, সাতরঙ,  দূরবীন, প্রথম প্রহর, বইমেলা, তথ্যপ্রযুক্তি, শিক্ষাঙ্গন, আইন-আদালত, আইন আদালত, শিল্প ও সাহিত্, শিল্প সাহিত্, স্বাস্থ্য ও চিকিৎসা, স্বাস্থ্য চিকিৎসা, ফিচার, বিজ্ঞান, ভ্রমণ, মুক্তকথা, মুখোমুখি, প্রবাস জীবন, জব কর্নার, জব, মজার খবর, কার্টুন, সোশ্যাল মিডিয়া, সাইবার স্পেস, আর্কাইভ, সাহিত্য, কম্পিউটার, মোবাইল ফোন, গেমস, সরকার, অপরাধ, আইন ও বিচার, পরিবেশ, দুর্ঘটনা, সংসদ, রাজধানী, শেয়ার বাজার, বাণিজ্য, পোশাক শিল্প, ফুটবল, সকাল, বিকাল",
                        "copyrightHolder":{
                            "@type":"Organization",
                            "name":"daily-bangladesh.com"
                        },
                        "potentialAction":{
                            "@type":"SearchAction",
                            "target":"${process.env.REACT_APP_FONT_DOMAIN_URL}search/{query}",
                            "query-input":"required name=query"
                        },
                        "mainEntityOfPage":{
                            "@type":"WebPage",
                            "@id":"${process.env.REACT_APP_FONT_DOMAIN_URL}"
                        }
                    }
                       
                `}
            </script>
        </Helmet>
    )
}
