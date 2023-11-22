# React Router 

Con este ejemplo vamos a ver cómo utilizar las URLS para navegar por nuestro contenido.

La idea es tener una aplicación con tres páginas que se accederán con los siguientes paths:
- Home: `/`
- Projects: `/projects`
- About: `/about`

Para ello utilizaremos el módulo [react router](https://reactrouter.com/en/main)

`npm install react-router-dom`

Entonces, en nuestra aplicación importaremos los siguientes componentes:

`import {BrowserRouter, Link, Routes, Route} from "react-router-dom";`

Los enlaces los haremos mediante la siguiente síntaxis:

`<Link to="/projects">Projects</Link>`

La parte que queremos que cambie, utilizaremos el módulo Routes. En nuestro caso, la parte dinámica se ejecutará dentro del tag `<main>`

```
<main>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<ProjectList />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
    </Routes>
</main>
```

El tag `<Routes>` nos delimitará la definición de las distintas rutas.

El tag `<Route>` es el que va a decidir qué elemento mostrar según el path

## Subroutes

Si queremos incluir subfragmentos que deben cambiar según la ruta, podemos utilizar el componente `<Outlet />`

Entonces en la definición de las rutas deberemos especificar las subrutas:

```
<Route path="/projects" element={<ProjectList />}>
    <Route path="project/:projectId" element={<ProjectDetail />}></Route>
</Route>
```

## Params y Search params

Para obtener los parámetros de la ruta, react router nos facilita dos hooks: `useParams` y `useSearchParams`

`useParams` lo utilizaremos para obtener los parámetros dentro de la ruta, por ejemplo `project/:projectId`

```
let params = useParams();
```

Para obtener los parámetros, debemos usarlo como un objeto:

```
params.projectId
```

`useSearchParams` lo utilizaremos para obtener los parámetros que van después del interrogante, por ejemplo `projects/?paramA=1&paramB=2`

```
let [searchParams, setSearchParams] = useSearchParams();
```

funciona como un useState y para obtener los parámetros solamente debemos indicar la siguiente síntaxis:

```
searchParams.get("paramA")
```

