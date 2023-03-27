
const ProjectBox = (props) => {
    return(
        <div className="projectsBox shadowBorder">
            <h3>{props.project.title}</h3>
            <div className="descriptionContainer">
                <p>{props.project.description}</p>
            </div>
        </div>
    )
}

export default ProjectBox