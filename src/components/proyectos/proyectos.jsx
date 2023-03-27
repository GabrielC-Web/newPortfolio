// import ProjectsCarousel from "./projectsCarousel"
import ProjectsGrid from "./projectsGrid"

const Proyectos = () => {
    return (
        <div id="projects" className="proyectos container">
            <h2>Proyectos</h2>
            <div className="projectsContainer">
                {/* <ProjectsCarousel></ProjectsCarousel> */}
                <ProjectsGrid></ProjectsGrid>
            </div>
        </div>
    )
}

export default Proyectos