import React from 'react'
import { Helmet } from "react-helmet";

export default function SubCatLdjsonEn({ CatNames, CatNameSlug, SubCatNames, SubCatNameSlug }) {
    return (
        <Helmet>
            <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org/",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "${process.env.REACT_APP_FONT_DOMAIN_URL}english"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "${CatNames}",
                                "item": "${process.env.REACT_APP_FONT_DOMAIN_URL + "english/" + CatNameSlug}"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "${SubCatNames}",
                                "item": "${process.env.REACT_APP_FONT_DOMAIN_URL + "english/" + CatNameSlug + "/" + SubCatNameSlug}"
                            }
                        ]
                    }
                `}
            </script>
        </Helmet>
    )
}
