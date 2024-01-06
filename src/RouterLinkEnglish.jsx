import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './components/English/Home';
import Header from './components/English/Header';
import Footer from './components/English/Footer'
import TagPage from './components/English/Tags/TagPage';
import AllTagList from './components/English/Tags/AllTagList';
import WritersPage from './components/English/Writers/WritersPage';
import AllWriters from './components/English/Writers/AllWriters';
import Archives from './components/English/Archives';
import Category from './components/English/Category/Category';
import DivisionSlug from './components/English/Country/DivisionSlug';
import DistrictSlug from './components/English/Country/DistrictSlug';
import Details from './components/English/Details';
import SearchResult from './components/English/SearchResult';
import ErrorPageEn from './components/English/ErrorPageEn';
import SubcategorySlug from './components/English/SubCategory/SubcategorySlug';

export default function RouterLinkEnglish() {
    return (
        <div className='page-english'>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tags/:TagTitle" element={<TagPage />} />
                <Route path="/all_tags" element={<AllTagList />} />
                <Route path="/writers/:WriterSlug" element={<WritersPage />} />
                <Route path="/all_writers" element={<AllWriters />} />
                <Route path="/archives" element={<Archives />} />
                <Route path="/:catSlugEn/:idEn" element={<Details />} />
                <Route path="/:catSlugEn" element={<Category />} />
                <Route path="/divisions/:divisionSlugEn" element={<DivisionSlug />} />
                <Route path="/divisions/:divisionSlugEn/:dristrictSlugEn" element={<DistrictSlug />} />
                <Route path="/search/:searchSlug" element={<SearchResult />} />
                <Route path="/search/" element={<SearchResult />} />
                <Route path="/sub/:subCatSlug" element={<SubcategorySlug />} />
                <Route path="/*" element={<ErrorPageEn />} />
            </Routes>
            <Footer />
        </div>
    )
}