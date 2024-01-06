const InArticleDetails03 = () => {
    window.setTimeout(() => {
        let contentDetails = document.querySelectorAll('#contentDetails p')[0]
        let contentDetails2 = document.querySelectorAll('#contentDetails p')[0].children.length
        let innerPeraLength = contentDetails2 + 1
        for (let j = innerPeraLength; j >= 0; j--) {
            if ((j) % 1 === 0 && j > 0 && j < innerPeraLength - 1) {
                // const node = document.createElement("li");
                // const textnode = document.createTextNode("Water");
                // node.appendChild(textnode);
                // contentDetails.children[j].appendChild(node);
                // console.log(j);
                const innerAD01MainDiv = document.createElement('div');
                innerAD01MainDiv.className = 'row my-3';
                let innerAd_HTML = ''
                // innerAd_HTML += `hello`;
                innerAd_HTML += `<ins class="adsbygoogle"
                                    style="display:block; text-align:center;"
                                    data-ad-slot="2023858459"
                                    data-ad-format="auto"
                                    data-full-width-responsive="true">
                                </ins>`;
                innerAD01MainDiv.innerHTML = innerAd_HTML
                // contentDetails.children[j].appendChild(innerAD01MainDiv);
                var innerDetails2ndPera = document.querySelectorAll('#contentDetails p')[0].children[j];
                contentDetails.insertBefore(innerAD01MainDiv, innerDetails2ndPera);
            }
        }
    }, 400);
}

const InArticleDetails01 = () => {
    window.setTimeout(() => {
        let contentDetails = document.querySelectorAll('#contentDetails p')[0]
        const innerAD01MainDiv = document.createElement('div');
        innerAD01MainDiv.className = 'row my-3';
        var innerDetails2ndPera = document.querySelectorAll('#contentDetails p')[0].children[2];
        let innerAd_HTML = ''
        if (innerDetails2ndPera !== null) {
            innerAd_HTML += `<div className="col-12">
                                <ins class="adsbygoogle"
                                style="display:block; text-align:center;"
                                data-ad-layout="in-article"
                                data-ad-format="fluid"
                                data-ad-slot="9000970973"></ins>
                            </div>`;
            innerAD01MainDiv.innerHTML = innerAd_HTML
            contentDetails.insertBefore(innerAD01MainDiv, innerDetails2ndPera);
        }
    }, 400);
}

const InArticleDetails02 = () => {
    window.setTimeout(() => {
        let contentDetails = document.querySelectorAll('#contentDetails p')[0]
        let contentDetails2 = document.querySelectorAll('#contentDetails')[0]
        const innerAD02MainDiv = document.createElement('div');
        innerAD02MainDiv.className = 'row my-3';

        var innerDetails5thPera = document.querySelectorAll('#contentDetails p')[0].children[5];
        let innerAd_HTML02 = ''
        if (innerDetails5thPera !== null) {
            innerAd_HTML02 += `<div className="col-12">
                                <ins class="adsbygoogle"
                                style="display:block"
                                data-ad-slot="6723674886"
                                data-ad-format="auto"
                                data-full-width-responsive="true"></ins>
                            </div>`;
            innerAD02MainDiv.innerHTML = innerAd_HTML02
            if (contentDetails.children[5] !== null) {
                contentDetails.insertBefore(innerAD02MainDiv, innerDetails5thPera);
            } else contentDetails2.insertBefore(innerAD02MainDiv, contentDetails2.children[1]);
        }
    }, 400);
}


export {
    InArticleDetails01,
    InArticleDetails02,
    InArticleDetails03
}
