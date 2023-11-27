
import './App.css'

import {BrowserRouter, Link, Routes, Route} from "react-router-dom";
import Projects from './components/projects';
import Home from './components/home';
import About from './components/about';
import NotFound from './components/notfound';
import ProjectDetail from './components/projectDetail';

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
        <main>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/projects" element={<Projects />}></Route>
                <Route path="project/:projectId" element={<ProjectDetail />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
