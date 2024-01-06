import './Emythmakers.css';
import './SolaimanLipi.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouterLinkBangla from './RouterLinkBangla';
import RouterLinkEnglish from './RouterLinkEnglish';
import Converter from './components/Converters/Converter';
import NamazTimeList from './components/Namaz/NamazTimeList';
import PrivacyPolicy from './components/PrivacyTerms/Privacy-policy';
import Terms from './components/PrivacyTerms/Terms';

export default function RouterLink() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/english/*" element={<RouterLinkEnglish />} />
                <Route path="/*" element={<RouterLinkBangla />} />
                <Route path="/converter" element={<Converter />} />
                <Route path="/namaz" element={<NamazTimeList />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-conditions" element={<Terms />} />
            </Routes>
        </BrowserRouter>
    )
}