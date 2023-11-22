import {Link, Outlet} from "react-router-dom";

function ProjectList() {
	return (
		<>
			<h1>Project List</h1>
			<ul>
				<li><Link to="projects/1">Project 1</Link></li>
				<li><Link to="projects/2">Project 2</Link></li>
				<li><Link to="projects/3">Project 3</Link></li>
			</ul>
			<section>
				<Outlet />
			</section>
		</>
	)
}

export default ProjectList