
const ProjectBox = (props) => {
    return(
        <div className=" w-64 h-64 sm:w-80 sm:h-80 darkBoxColor rounded-xl flex flex-col p-4 shadowBorder">
            <h3>{props.project.title}</h3>
            <div className="descriptionContainer">
                <p>{props.project.description}</p>
            </div>
        </div>
    )
}

export default ProjectBox