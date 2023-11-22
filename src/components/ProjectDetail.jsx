import { useParams, useSearchParams } from "react-router-dom";

function ProjectDetail() {

  let params = useParams();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <h3>Project Detail {params.projectId}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui harum esse culpa libero ratione, labore odit molestias. Nisi eveniet fuga recusandae veniam pariatur quaerat necessitatibus quam id at. Ea, labore.</p>
    </>
  )
}

export default ProjectDetail