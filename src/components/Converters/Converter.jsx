import React from 'react'
import { useEffect } from 'react'
import DocumentTitle from 'react-document-title';
import ConverterFooter from './ConverterFooter';
import ConverterHeader from './ConverterHeader';
// import './bijoy2uni.js';
// import { InputLengthCheck } from './count';
// import { ConvertToTextArea, ConvertFromTextArea } from './js1';
// import { KeyBoardDown, KeyBoardPress } from './layout';
// import './uni2bijoy.js';
// import '../../../public/common/ConverterJS/49434536cd'
// import '../../../public/common/ConverterJS/bijoy2uni'
// import '../../../public/common/ConverterJS/count'
// import '../../../public/common/ConverterJS/js1'
// import '../../../public/common/ConverterJS/layout'
// import '../../../public/common/ConverterJS/uni2bijoy'


export default function Converter() {
    useEffect(() => {
        // setTimeout(() => {
        //     var parent = document.getElementById('LOGO')
        //     var child = parent.childNodes[0]
        //     var gcse = document.createElement('script');
        //     gcse.type = 'text/javascript';
        //     // gcse.src = '../../../public/common/ConverterJS/uni2bijoy.js';
        //     gcse.src = 'hello';
        //     console.log(parent);
        //     console.log(child);
        //     parent.child.appendChild(gcse, child);
        // }, 500);
    }, []);
    return (
        <>
            <DocumentTitle title='Bangla Bijoy to Unicode Converter web tool' />
            <div className="container">
                <ConverterHeader />
                <main>
                    <div className="col-12">
                        <form>
                            <div className="DM18">
                                <textarea rows="8" className="inpUnicode" onKeyPress="return KeyBoardPress(event);" id='EDT'
                                    onKeyDown="return KeyBoardDown(event);" name="textarea" onBlur="InputLengthCheck();"
                                    onKeyUp="InputLengthCheck();" autoFocus
                                    placeholder="ইউনিকোড কি-বোর্ডের লেখা এখানে পেস্ট করুন"></textarea>
                                {/* <textarea rows="8" className="inpUnicode" id='EDT' name="textarea"
                                    onKeyPress={(event) => KeyBoardPress(event)}
                                    onKeyDown={(event) => KeyBoardDown(event)}
                                    onBlur={InputLengthCheck}
                                    onKeyUp={InputLengthCheck}
                                    autoFocus
                                    placeholder="ইউনিকোড কি-বোর্ডের লেখা এখানে পেস্ট করুন"></textarea> */}
                            </div>
                            <div className="DConvertButton">
                                <button type="button" className="btnBijoy btn btn-primary"
                                    onClick="ConvertToTextArea('CONVERTEDT');"
                                    // onClick={ConvertToTextArea('CONVERTEDT')}
                                    alt="Unicode to Bijoy"
                                    name="btnConvertToAscii">
                                    <span><i className="fas fa-arrow-down"></i></span>
                                    ইউনিকোড টু বিজয়
                                </button>
                                <button type="button" className="btnUnicode btn btn-success"
                                    onClick="ConvertFromTextArea('CONVERTEDT');"
                                    // onClick={ConvertFromTextZArea('CONVERTEDT')}
                                    alt="Bijoy to Unicode"
                                    name="btnAsciiToConvert">
                                    <span><i className="fas fa-arrow-up"></i></span>
                                    বিজয় টু ইউনিকোড
                                </button>
                                <button type="reset" className="btnReset btn btn-danger"
                                    alt="Delete"
                                    name="btnClear">
                                    <span><i className="fas fa-sync-alt"></i></span>
                                    মুছে ফেলুন
                                </button>
                            </div>
                            <div className="DM18">
                                <textarea rows="8" className="inpBijoy" name="textarea" id="CONVERTEDT"
                                    placeholder="বিজয় কি-বোর্ডের লেখা এখানে পেস্ট করুন" autoFocus></textarea>
                            </div>
                        </form>
                    </div>
                </main>
                <ConverterFooter />
            </div>
        </>
    )
}
