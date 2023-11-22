# React Router 

Con este ejemplo vamos a ver cómo utilizar las URLS para navegar por nuestro contenido.

La idea es tener una aplicación con tres páginas que se accederán con los siguientes paths:
- Home: <code>/</code>
- Projects: <code>/projects</code>
- About: <code>/about</code>

Para ello utilizaremos el módulo [react router](https://reactrouter.com/en/main)

<code>npm install react-router-dom</code>

Entonces, en nuestra aplicación importaremos los siguientes componentes:

<code>import {BrowserRouter, Link, Routes, Route} from "react-router-dom";</code>

Los enlaces los haremos mediante la siguiente síntaxis:

<code><Link to="/projects">Projects</Link></code>

La parte que queremos que cambie, utilizaremos el módulo Routes. En nuestro caso, la parte dinámica se ejecutará dentro del tag <code><main></code>

<code>
<main>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<ProjectList />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
    </Routes>
</main>
</code>

El tag <code><Routes></code> nos delimitará la definición de las distintas rutas.

El tag <code><Route></code> es el que va a decidir qué elemento mostrar según el path