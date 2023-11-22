import { useState } from 'react'
import './App.css'

import {BrowserRouter, Link, Routes, Route} from "react-router-dom";
import ProjectList from './components/projectlist';
import Home from './components/home';
import About from './components/about';
import NotFound from './components/notfound';

function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <main className="main">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/projects" element={<ProjectList />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
