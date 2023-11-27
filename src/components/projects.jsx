import {Link, Outlet} from "react-router-dom";



function Projects() {
    return (
        <>
            <h1>Projects</h1>
            <ul>
                <li><Link to="project/1"></Link>Project 1</li>
                <li><Link to="project/2"></Link>Project 2</li>
                <li><Link to="project/3"></Link>Project 3</li>
            </ul>

            <section>
                <Outlet />
            </section>
        </>
    )
}

export default Projects