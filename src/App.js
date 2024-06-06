import React from 'react'
import NavBar from './Components/Navbar'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './Components/About';

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                </Routes >
            </BrowserRouter>
        </>
    )
}

export default App

{/* <Router>
<Navbar />
<LoadingBar color='#f11946' height={3} progress={progress} />
<Routes>
  <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} country='in' category='general' />} />
  <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={pageSize} country='in' category='business' />} />
  <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={pageSize} country='in' category='entertainment' />} />
  <Route exact path='/general' element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} country='in' category='general' />} />
  <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={pageSize} country='in' category='health' />} />
  <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={pageSize} country='in' category='science' />} />
  <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={pageSize} country='in' category='sports' />} />
  <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={pageSize} country='in' category='technology' />} />
</Routes>
</Router> */}