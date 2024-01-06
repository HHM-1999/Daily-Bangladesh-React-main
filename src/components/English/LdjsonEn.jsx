import React from 'react'
import { Helmet } from "react-helmet";

export default function LdjsonEn({ contentID, catName, pageURL }) {
    var oldHeader = `${contentID.ContentHeading}`
    var newHeader = oldHeader.replaceAll('"', '');
    pageURL = pageURL.toString().replace(/\/+$/, '')
    var KeyWord = `${contentID.ContentHeading}`;
    KeyWord = KeyWord.split(" ");
    KeyWord = KeyWord.toString();
    var Details = `${contentID.ContentDetails}`
    Details = Details.replace(/<\/?[^>]+(>|$)/g, "") // removed all HTML-TAGS
    Details = Details.replaceAll("\\", ""); // removed all backslash
    Details = Details.replaceAll('"', '\\"'); // replace all double-quotes to string
    return (
        <Helmet>
            <script type="application/ld+json">
                {`
                    {
                        "headline":"${newHeader}",
                        "image":{
                            "@type":"ImageObject",
                            "url":"${process.env.REACT_APP_IMG_Path + contentID.ImageBgPath}",
                            "width":"800",
                            "height":"450"
                        },
                        "url":"${pageURL}",
                        "datePublished":"${contentID.create_date}",
                        "mainEntityOfPage":{
                            "@type":"WebPage",
                            "@id":"${pageURL}"
                        },
                        "publisher":{
                            "@type":"Organization",
                            "@context":"http://schema.org",
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
                            "id":"${process.env.REACT_APP_FONT_DOMAIN_URL}english"
                        },
                        "author":[
                            {
                                "@type":"Person",
                                "givenName":"${contentID.WriterName}",
                                "name":"${contentID.WriterName}"
                            }
                        ],
                        "keywords":"${KeyWord}",
                        "thumbnailUrl":"${process.env.REACT_APP_IMG_Path + contentID.ImageBgPath}",
                        "articleBody":"${Details}",
                        "dateCreated":"${contentID.create_date}",
                        "dateModified":"${contentID.updated_date}",
                        "name":"${newHeader}",
                        "isAccessibleForFree":true,
                        "isPartOf":{
                            "@type":"WebPage",
                            "url":"${pageURL}",
                            "primaryImageOfPage":{
                                "@type":"ImageObject",
                                "url":"${process.env.REACT_APP_IMG_Path + contentID.ImageBgPath}",
                                "width":"800",
                                "height":"450"
                            }
                        },
                        "articleSection":"${catName.CategoryName}",
                        "@type":"Article",
                        "@context":"http://schema.org"
                    }
                `}
            </script>
            <script type="application/ld+json">
                {`
                    {
                        "@context": "http://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement":[
                            {
                                "@type": "ListItem",
                                "position":1,
                                "item":{
                                    "@id":"${process.env.REACT_APP_FONT_DOMAIN_URL}english",
                                    "name":"Home"
                                }
                            },
                            {
                                "@type": "ListItem",
                                "position":2,
                                "item":{
                                    "@id":"${process.env.REACT_APP_FONT_DOMAIN_URL}${catName.Slug}",
                                    "name":"${catName.CategoryName}"
                                }
                            },
                            {
                                "@type": "ListItem",
                                "position":3,
                                "item":{
                                    "name" : "${newHeader}",
                                    "@id":"${pageURL}"
                                }
                            }
                        ]
                    }
                `}
            </script>
            <script type="application/ld+json">
                {`
                    {
                        "headline":"${newHeader}",
                        "image":{
                            "@type":"ImageObject",
                            "url":"${process.env.REACT_APP_IMG_Path + contentID.ImageBgPath}",
                            "width":"800",
                            "height":"450"
                        },
                        "url":"${pageURL}",
                        "datePublished":"${contentID.create_date}",
                        "mainEntityOfPage":{
                            "@type":"WebPage",
                            "@id":"${pageURL}"
                        },
                        "publisher":{
                            "@type":"Organization",
                            "@context":"http://schema.org",
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
                            "id":"${process.env.REACT_APP_FONT_DOMAIN_URL}english"
                        },
                        "author":[
                            {
                                "@type":"Person",
                                "givenName":"${contentID.WriterName}",
                                "name":"${contentID.WriterName}"
                            }
                        ],
                        "keywords":"${KeyWord}",
                        "thumbnailUrl":"${process.env.REACT_APP_IMG_Path + contentID.ImageBgPath}",
                        "articleBody":"${Details}",
                        "dateCreated":"${contentID.create_date}",
                        "dateModified":"${contentID.updated_date}",
                        "name":"${newHeader}",
                        "isAccessibleForFree":true,
                        "isPartOf":{
                            "@type":"WebPage",
                            "url":"${pageURL}",
                            "primaryImageOfPage":{
                                "@type":"ImageObject",
                                "url":"${process.env.REACT_APP_IMG_Path + contentID.ImageBgPath}",
                                "width":"800",
                                "height":"450"
                            }
                        },
                        "articleSection":"${catName.CategoryName}",
                        "alternativeHeadline":"",
                        "description":null,
                        "@type":"NewsArticle",
                        "@context":"http://schema.org"
                    }
                `}
            </script>
        </Helmet>
    )
}
