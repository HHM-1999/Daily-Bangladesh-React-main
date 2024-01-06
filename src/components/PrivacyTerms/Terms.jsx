import React from 'react'
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router-dom'
import { scrollTop } from '../AllFunctions'
import Header from '../Bangla/Header'
import Footer from '../Bangla/Footer'


export default function PrivacyPolicy() {
    return (
        <div className='page-bangla'>
            <Header />
            <main>
                <div className="container">
                    <div className="TopHomeSection"></div>
                    <DocumentTitle title='Daily Bangladesh :: ডেইলি বাংলাদেশ - Terms of Use' />
                    <h2 class="mvp-feat1-pop-head DTitle En"><Link to="/terms-conditions" onClick={scrollTop}><span class="mvp-feat1-pop-head">Terms of Use</span></Link></h2>
                    <div className='row mt-5 policy-details'>
                        <div className='col-lg-12'>
                            <p className='terms-title'>We welcome readers and visitors to our <Link className='links' to='/terms-conditions' onClick={scrollTop}> "Terms of Use"</Link> of Daily Bangladesh and its associated websites, its contents, services, and applications. Individuals may access the content in several ways using multiple channels including but not limited to www, digital, social platforms, SMS, and RSS feeds using multiple devices including but not limited to computers, mobile phones, and PDAs. By using our content and services, that is, by reading or using any content, picture, or information whatsoever, the reader/visitor accepts our <Link className='links' to='/terms-conditions' onClick={scrollTop}> "Terms of Use"</Link> including Daily Bangladesh's <Link className='links' to="/privacy-policy" onClick={scrollTop}>Privacy Policy</Link>. If anyone has any objection or reservation to any clause in this <Link className='links' to='/terms-conditions' onClick={scrollTop}> "Terms of Use"</Link> or the <Link className='links' to='/privacy-policy' onClick={scrollTop}>Privacy Policy</Link>, she or he may raise the issue with Daily Bangladesh by sending an email at <a className='mail-link' href='mailto:newsroom@daily-bangladesh.com'>newsroom@daily-bangladesh.com</a> However, Daily Bangladesh reserves all right to reject or accept any such objection or reservation. All users of Daily Bangladesh are required to abide by these <Link className='links' to='/terms-conditions' onClick={scrollTop}> "Terms of Use"</Link>. Failure to comply with the terms may lead to, among others, suspension of account or prohibition from access to the website. By entering the website of Daily Bangladesh or using applications of Daily Bangladesh, readers/visitors are deemed to have received services from Daily Bangladesh. These services include text, audio, video, images, software, etc.</p>
                            {/*Intellectual Property Rights */}
                            <div className='mt-3'>
                                <h2 class="heading">Intellectual Property Rights</h2>
                                <div className='mt-3'>
                                    <p>Daily Bangladesh's content, logos, copyright, trademarks, patents, images, text, graphics, logos, domain names, audio, video, and other related intellectual property rights or other features of Daily Bangladesh brand and name belong to Daily Bangladesh or to its licensors. Users cannot claim any rights in and/or our licensor's intellectual property whether for commercial or non-commercial use. Users are also prevented from making any derivative work from the content of Daily Bangladesh. Infringement of copyright or any other intellectual property of Daily Bangladesh may be sent at <a className='mail-link' href='mailto:newsroom@daily-bangladesh.com' >newsroom@daily-bangladesh.com</a></p>
                                </div>
                            </div>
                            {/* Your use of our services */}
                            <div className='mt-3'>
                                <h2 class="heading">Your use of our services</h2>
                                <div className='mt-3'>
                                    <p>Site readers/visitors are required to use Daily Bangladesh services only for lawful means and for read-only purposes. The audio and visual elements of the website or application can only be listened to and viewed and nothing beyond. Daily Bangladesh encourages its readers to share its content(s) in their social media profiles, groups, and related communities. However, the contents of our services must not be shared with anyone or with any other digital platforms with any modification or alteration. Readers/Visitors are prohibited from hacking the website or trying to get around our content security setup. </p>
                                    <p>The users must use the services only for non-commercial purposes, regardless of whether the person or entity is a commercial entity or not. We grant our users only a license to access and use our services and intellectual property rights subject to the following usage restrictions: users may use available services for personal, private, and non-commercial purposes only, the users must not exploit, sell or use any content appearing on our services for any kind of commercial purposes (this does not apply to any user content posted by an individual and in which a visitor/user retains ownership rights), the users must not use provocative or offensive language, pictures or comments targeting the contents of Daily Bangladesh.</p>
                                </div>
                            </div>
                            {/* Taking down contents*/}
                            <div className='mt-3'>
                                <h2 class="heading">Taking down contents</h2>
                                <div className='mt-3'>
                                    <p>Daily Bangladesh can take down contents at any time at its sole discretion from its website or application. Readers/Visitors cannot refuse to remove content, games, or apps from their respective devices if asked by Daily Bangladesh. This might happen when Daily Bangladesh or its services are taken down.</p>
                                </div>
                            </div>
                            {/* Unauthorized and prohibited activities */}
                            <div className='mt-3'>
                                <h2 class="heading">Unauthorized and prohibited activities</h2>
                                <div className='mt-3'>
                                    <p>We shall hold visitor's/readers' personal information if your account exists with Daily Bangladesh. Notwithstanding, Daily Bangladesh may retain data for a further period as per its own internal data retention policy. Visitor's/reader's personal information shall be deleted upon expiry of your Daily Bangladesh account. Please note that there may be events when the erasing/deleting of information may take more time than usual, and Daily Bangladesh shall not hold any responsibility for such events.</p>
                                </div>
                            </div>
                            {/* Advertisement */}
                            <div className='mt-3'>
                                <h2 class="heading">Advertisement</h2>
                                <div className='mt-3'>
                                    <p>The user is specifically required not to associate Daily Bangladesh with any political party, racism, sexism, or otherwise damage its reputation. The user is also prohibited from defaming Daily Bangladesh or defaming any other person or entity, or commenting on any court proceedings that may amount to a contempt of court. Harassing, bullying, or upsetting people or any other user is strongly prohibited. The user must not post or upload any image or comment which is offensive or obscure or immoral. Personal attack by way of comment or image is likewise prohibited.</p>
                                </div>
                            </div>
                            {/* Protection of Users Device */}
                            <div className='mt-3'>
                                <h2 class="heading">Protection of Users Device</h2>
                                <div className='mt-3'>
                                    <p>Readers/Visitors are required to take their own precautions and protections in this respect as Daily Bangladesh does not accept any responsibility for any attacks by virus or malware or any other contamination or by anything which has destructive properties. Daily Bangladesh strictly does not hold any responsibility for infection of virus or contamination of your machine or device through your access to any third-party contents. Third-party content may include but is not limited to Google ads. Any content which is not generated by Daily Bangladesh itself is third-party content, regardless of whether the content appears on the website of Daily Bangladesh or not.</p>
                                </div>
                            </div>
                            {/* Prohibition on sharing marks, contents, images, etc. */}
                            <div className='mt-3'>
                                <h2 class="heading">Prohibition on sharing marks, contents, images, etc.</h2>
                                <div className='mt-3'>
                                    <p>Daily Bangladesh prohibits the users from sharing marks, contents, or images for whatever purpose, be it commercial or not. When sharing of contents, images or marks are permitted or authorized, then such sharing must be done by attributing the credit and name to Daily Bangladesh in such manner that the attribution is clearly visible when the image or content is generated by Daily Bangladesh. All users are prohibited from taking credit for the contents or images shared, published, or generated by Daily Bangladesh.</p>
                                </div>
                            </div>
                            {/* Redirecting to other Websites*/}
                            <div className='mt-3'>
                                <h2 class="heading">Redirecting to other Websites</h2>
                                <div className='mt-3'>
                                    <p>Daily Bangladesh will not accept any kind of liability if the user is redirected to any other website including unwanted websites from Daily Bangladesh.</p>
                                </div>
                            </div>
                            {/* Third-Party Contents */}
                            <div className='mt-3'>
                                <h2 class="heading">Third-Party Contents</h2>
                                <div className='mt-3'>
                                    <p>Daily Bangladesh does not bear any responsibility or liability whatsoever for any third-party contents. Third-party contents include such contents which are not generated or produced by Daily Bangladesh. It includes contents, images, and texts which are uploaded or displayed by Daily Bangladesh but which are created or generated, or produced by someone or entity other than Daily Bangladesh.</p>
                                </div>
                            </div>
                            {/* Privacy Policy */}
                            <div className='mt-3'>
                                <h2 class="heading"> Privacy Policy</h2>
                                <div className='mt-3'>
                                    <p>The entire Privacy Policy of Daily Bangladesh is an integral part of the <Link className='links' to='/terms-conditions' onClick={scrollTop}> "Terms of Use"</Link>. All clauses in the <Link className='links' to='/privacy-policy' onClick={scrollTop}>Privacy Policy</Link>. are hereby incorporated by reference, except for the clauses which are similar or have the same meaning.</p>
                                </div>
                            </div>
                            {/* Advertisement */}
                            <div className='mt-3'>
                                <h2 class="heading">Advertisement</h2>
                                <div className='mt-3'>
                                    <p>The advertisements included in the Daily Bangladesh website and mobile apps are by third-party companies, which may collect information about users for which Daily Bangladesh shall bear no responsibility that may arise as a result of collecting and/or sharing the information with any other party. Daily Bangladesh shall not accept any liability that may arise as a result of any content of any advertisement that may appear on the Daily Bangladesh website.</p>
                                </div>
                            </div>
                            {/* Modification of Terms of Use */}
                            <div className='mt-3'>
                                <h2 class="heading">Modification of Terms of Use</h2>
                                <div className='mt-3'>
                                    <p>Daily Bangladesh reserves the right to amend, modify, alter, or omit any terms in the <Link className='links' to='/terms-conditions' onClick={scrollTop}> "Terms of Use"</Link> at any time but the changed policy shall be immediately uploaded or updated on the website. By continuing to use our services after any changes are made, you accept those changes and will be bound by them. We encourage readers/visitors to periodically check back and review this policy to always know what information we collect, how we use it, and with whom we share it.</p>
                                </div>
                            </div>
                            {/* Use of Cookies */}
                            <div className='mt-3'>
                                <h2 class="heading">Use of Cookies</h2>
                                <div className='mt-3'>
                                    <p>Daily Bangladesh does not collect any user data based on cookies, nor does it store any sort of user information that may be personal to the user. If a third party associated with the Daily Bangladesh website collects user cookies upon your visit to the Daily Bangladesh website, Daily Bangladesh does not control the use of these cookies. Therefore, visitors/users should check the relevant third-party websites. </p>
                                    <p>When users register with Daily Bangladesh, personally identifiable information is collected for authentication. The information Daily Bangladesh collects is not shared with any third party. However, Daily Bangladesh may use the information to send messages, information from Daily Bangladesh or any of its associated companies.</p>
                                </div>
                            </div>
                            {/*Communication by Daily Bangladesh */}
                            <div className='mt-3'>
                                <h2 class="heading">Communication by Daily Bangladesh</h2>
                                <div className='mt-3'>
                                    <p>From time to time, Daily Bangladesh may contact its users via e-mail, phone, or SMS for invitations for participation in events, campaigns/competitions, feedback, surveys, etc. organized by Daily Bangladesh.</p>

                                </div>
                            </div>
                            {/*User-Generated Content */}
                            <div className='mt-3'>
                                <h2 class="heading">User-Generated Content</h2>
                                <div className='mt-3'>
                                    <p>Users of Daily Bangladesh may submit posts and/or upload content (including comments, pictures, videos). In posting content, users confirm that they are the owner or have consent from the owner to post the content and that the content is not obscene, harassing, deceptive, threatening, libelous, invasive of another's privacy, offensive, fraudulent, defamatory of any person or illegal.</p>
                                    <p>Daily Bangladesh does not endorse any user-generated content nor does it guarantee the accuracy or authority of any user-generated content. Furthermore, while using the Daily Bangladesh website readers/visitors agree not to (i) post content which is deliberately intended to upset or harm other users; (ii) use the Daily Bangladesh website to post or otherwise transmit content that victimizes, harasses, degrades, or intimidates an individual or group of individuals on the basis of any impermissible classification, including, without limitation, religion, gender, sexual orientation, race, color, creed, ethnicity, national origin, citizenship, age, marital status, military status or disability; (iii) post or otherwise transmit any content that contains software viruses or any other computer code, files, or programs designed to interrupt, destroy, or limit the functionality of the Daily Bangladesh website or any computer software or hardware or telecommunications equipment; (iv) upload or otherwise transmit any content, or take any other actions with respect to use of the Daily Bangladesh website, that would constitute, or would otherwise encourage, criminal conduct or give rise to civil liability. </p>
                                    <p>Daily Bangladesh reserves the right to remove any user's content, suspend or discontinue one's opportunity to submit post and/or upload content, at any time and for any reason at its sole discretion without any notice and without further recourse to users.</p>
                                    <p>Daily Bangladesh usually filters the content of the website and in the event that any offensive, unpleasant or distasteful comment and/or picture is published regardless of the filtration process Daily Bangladesh shall not accept any liability arising out of it.</p>
                                    <p>In the event that users post any comment that may be regarded as offensive, degrading, inappropriate or objectionable by any reasonable person or Daily Bangladesh, Daily Bangladesh may use the personal information of the concerned to prevent such behavior.</p>
                                </div>
                            </div>
                            {/*Accessing the website from outside Bangladesh*/}
                            <div className='mt-3'>
                                <h2 class="heading">Accessing the website from outside Bangladesh</h2>
                                <div className='mt-3'>
                                    <p>All personal information submitted by users outside Bangladesh will be processed in accordance with these <Link className='links' to='/terms-conditions' onClick={scrollTop}> "Terms of Use"</Link> and <Link className='links' to='/privacy-policy' onClick={scrollTop}>Privacy Policy</Link> .</p>
                                </div>
                            </div>
                            {/*Disclaimer*/}
                            <div className='mt-3'>
                                <h2 class="heading">Disclaimer</h2>
                                <div className='mt-3'>
                                    <p>Daily Bangladesh aims to provide its users with the best service. However, it does not and cannot promise that all the information provided within its service including multimedia content like images & videos will always be accurate. The contents provided by Daily Bangladesh are for information purposes only and do not constitute advice. All Daily Bangladesh's services are provided without any warranties or guarantees.</p>
                                </div>
                            </div>
                            {/*Posting and Viewing Contents*/}
                            <div className='mt-3'>
                                <h2 class="heading">Posting and Viewing Contents</h2>
                                <div className='mt-3'>
                                    <p>Readers/visitors acknowledge and agree that when they post content on Daily Bangladesh website or view content provided by others, they are doing so at their own discretion and risk, including any reliance they place on the accuracy, completeness, of that content. Some of the information provided by Daily Bangladesh is supplied by Third Parties. Daily Bangladesh has no control over third-party content and Daily Bangladesh is unable to guarantee the accuracy of such third-party content. Before relying on any information, whether it is from us or from any third-party partner, Daily Bangladesh advises you to verify the accuracy of such information.</p>
                                </div>
                            </div>
                            {/*Interruption, cross-connection, or unavailability of website or application*/}
                            <div className='mt-3'>
                                <h2 class="heading">Interruption, cross-connection, or unavailability of website or application</h2>
                                <div className='mt-3'>
                                    <p>Whilst Daily Bangladesh will do its best to ensure that its service is fully operational at all times, it is not responsible for and shall not be liable to users for any problems or temporary interruptions in using our services arising from factors outside of its control (e.g. technical problems from traffic congestion on the internet) or for any problems arising from participating in or from downloading third-party content. To the extent permissible by law, Daily Bangladesh is not responsible for any loss or damage resulting from the use of its services or from any content posted on its website.</p>
                                </div>
                            </div>
                            {/* Governing Law*/}
                            <div className='mt-3'>
                                <h2 class="heading">Governing Law</h2>
                                <div className='mt-3'>
                                    <p>Whilst Daily Bangladesh will do its best to ensure that its service is fully operational at all times, it is not responsible for and shall not be liable to users for any problems or temporary interruptions in using our services arising from factors outside of its control (e.g. technical problems from traffic congestion on the internet) or for any problems arising from participating in or from downloading third-party content. To the extent permissible by law, Daily Bangladesh is not responsible for any loss or damage resulting from the use of its services or from any content posted on its website.</p>
                                </div>
                            </div>
                            {/* Opt-out*/}
                            <div className='mt-3'>
                                <h2 class="heading">Opt-out</h2>
                                <div className='mt-3'>
                                    <p>If at any time, the users prefer not to receive emails containing marketing information from us, then the user can simply follow the unsubscribe options at the bottom of each email. If the users no longer wish to have a registered account, the user may terminate the account by sending an email to <a href='mailto:newsroom@daily-bangladesh.com' className='mail-link'>newsroom@daily-bangladesh.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
