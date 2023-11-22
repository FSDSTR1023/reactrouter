import Home from "./components/Home";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import NotFound from "./components/NotFound";
import ProjectDetail from "./components/ProjectDetail";
import {BrowserRouter, Link, Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <header>
          <h1>React Router</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<ProjectList />}>
              <Route path="projects/:projectId" element={<ProjectDetail />}></Route>
            </Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </main>
      </BrowserRouter>      
    </>
  )
}

export default App
