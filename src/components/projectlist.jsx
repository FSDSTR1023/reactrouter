import {Link, Outlet} from "react-router-dom";

function ProjectList() {
    return (
        <>
            <h1>Project List</h1>
            <ul>
                <li><Link to="project/1?paramA=1&paramB=2">Project 1</Link></li>
                <li><Link to="project/2">Project 2</Link></li>
                <li><Link to="project/3">Project 3</Link></li>
            </ul>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default ProjectList