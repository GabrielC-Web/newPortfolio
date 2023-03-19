import ProjectsCarousel from "./projectsCarousel"

const Proyectos = () => {
    return (
        <div id="projects" className="proyectos container">
            <h2>Proyectos</h2>
            <div className="projectsContainer">
                <ProjectsCarousel></ProjectsCarousel>
            </div>
        </div>
    )
}

export default Proyectos