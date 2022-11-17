import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import News from './News'
export default function App(){
    var [language, setlanguage] = useState("hi")
    var [pageSize, setpageSize] = useState(8)
    var [search, setsearch] = useState("")

    const changeLanguage = (data) => {
        setlanguage(data)
    }
    const changePageSize = (data) => {
        setpageSize(data)
    }
    const searchNews = (data) => {
        setsearch(data)
    }
    return (
        <BrowserRouter>
            <Navbar changeLanguage={changeLanguage} changePageSize={changePageSize} searchNews={searchNews} />
            <Routes>
                <Route path='/' element={<News search={search} pageSize={pageSize} language={language} q="All" />} />
                <Route path='/politics' element={<News search={search} pageSize={pageSize} language={language} q="Politics" />} />
                <Route path='/science' element={<News search={search} pageSize={pageSize} language={language} q="Science" />} />
                <Route path='/covid' element={<News search={search} pageSize={pageSize} language={language} q="Covid" />} />
                <Route path='/technology' element={<News search={search} pageSize={pageSize} language={language} q="Technology" />} />
                <Route path='/education' element={<News search={search} pageSize={pageSize} language={language} q="Education" />} />
                <Route path='/entertainment' element={<News search={search} pageSize={pageSize} language={language} q="Entertainment" />} />
                <Route path='/crime' element={<News search={search} pageSize={pageSize} language={language} q="Crime" />} />
                <Route path='/sports' element={<News search={search} pageSize={pageSize} language={language} q="Sports" />} />
                <Route path='/business' element={<News search={search} pageSize={pageSize} language={language} q="Business" />} />
                <Route path='/cricket' element={<News search={search} pageSize={pageSize} language={language} q="Cricket" />} />
                <Route path='/jokes' element={<News search={search} pageSize={pageSize} language={language} q="Jokes" />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
