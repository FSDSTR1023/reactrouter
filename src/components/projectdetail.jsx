import {useParams, useSearchParams} from "react-router-dom";

function ProjectDetail() {

    let params = useParams();
    let [searchParams, setSearchParams] = useSearchParams();

    return (
        <>
            <h1>Project Detail {params.projectId}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, rerum repellat odit aliquid nisi quod labore ad eaque, voluptates fugit numquam necessitatibus, corrupti iste? Delectus repudiandae vel assumenda numquam tenetur!</p>
            <p>
                {searchParams.get("paramA") ? "paramA: "+searchParams.get("paramA") : null}
                 {searchParams.get("paramB") ? "paramB: "+searchParams.get("paramB") : null}
            </p>
        </>
    )
}

export default ProjectDetail