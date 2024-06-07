import React from 'react'
import NavBar from './Components/Navbar'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './Components/About';
import NoteState from './context/notes/NoteState';

function App() {
    return (
        <>
            <NoteState>
                <BrowserRouter>
                    <NavBar />
                    <div className="container">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/about' element={<About />} />
                        </Routes >
                    </div>
                </BrowserRouter>
            </NoteState>
        </>
    )
}

export default App
