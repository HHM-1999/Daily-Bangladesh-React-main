import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './components/Bangla/Home';
import Header from './components/Bangla/Header';
import Footer from './components/Bangla/Footer'
import TagPage from './components/Bangla/Tags/TagPage';
import AllTagList from './components/Bangla/Tags/AllTagList';
import WritersPage from './components/Bangla/Writers/WritersPage';
import AllWriters from './components/Bangla/Writers/AllWriters';
import Archives from './components/Bangla/Archives';
import VideoGallery from './components/Bangla/Video/VideoGallery';
import VideoDetails from './components/Bangla/Video/VideoDetails';
import Category from './components/Bangla/Category/Category';
import SubCategorySlug from './components/Bangla/SubCategory/SubCategorySlug';
import DivisionSlug from './components/Bangla/Country/DivisionSlug';
import DistrictSlug from './components/Bangla/Country/DistrictSlug';
import Details from './components/Bangla/Details';
import SearchResult from './components/Bangla/SearchResult';
import ErrorPageBn from './components/Bangla/ErrorPageBn';

export default function RouterLinkBangla() {
    return (
        <div className='page-bangla'>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tags/:TagTitle" element={<TagPage />} />
                <Route path="/all_tags" element={<AllTagList />} />
                <Route path="/writers/:WriterSlug" element={<WritersPage />} />
                <Route path="/all_writers" element={<AllWriters />} />
                <Route path="/archives" element={<Archives />} />
                <Route path="/video-gallery" element={<VideoGallery />} />
                <Route path="/video/show/:vid" element={<VideoDetails />} />
                <Route path="/sub/:subCatSlug" element={<SubCategorySlug />} />
                <Route path="/:catSlug/:id" element={<Details />} />
                <Route path="/:catSlug" element={<Category />} />
                <Route path="/divisions/:divisionSlug" element={<DivisionSlug />} />
                <Route path="/divisions/:divisionSlug/:dristrictSlug" element={<DistrictSlug />} />
                <Route path="/search/:searchSlug" element={<SearchResult />} />
                <Route path="/search/" element={<SearchResult />} />
                <Route path="/*" element={<ErrorPageBn />} />
            </Routes>
            <Footer />
        </div>
    )
}