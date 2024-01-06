import React from 'react'
import DocumentTitle from 'react-document-title'

export default function ErrorPageBn() {
    return (
        <main>
            <div className="container">
                <div className="TopHomeSection"></div>
                <DocumentTitle title="এ পৃষ্ঠাটি পাওয়া যায়নি" />
                <div className="row my-5">
                    <div className="ErrorBody col-8 offset-2">
                        <div className='Errors'>
                            4<span>0</span>4
                        </div>
                        <h1 className='ErrorHeader'>এ পৃষ্ঠাটি পাওয়া যায়নি</h1>
                        <p className='ErrorText'>আপনার প্রয়োজনীয় পৃষ্ঠাটি পাওয়া যায়নি। আমরা আন্তরিক ভাবে দু:খিত।আমরা আপনাকে আপাতত প্রচ্ছদে ফিরিয়ে নিচ্ছি। ডেইলি বাংলাদেশের সাথে থাকার জন্যে আপনাকে ধন্যবাদ।
                            <br />
                            আপনার যে কোন মতামত আমাদের সমৃদ্ধ করবে। আপনার মতামত জানাতে আমাদের ইমেইল করুন: <a href="mailto:newsroom@daily-bangladesh.com"><span>newsroom@daily-bangladesh.com.</span></a></p>
                        <button className='ErrorsBtn mt-4'>
                            <a href="/">প্রচ্ছদে ফিরে যান</a>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}
