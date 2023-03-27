import ProjectBox from "./projectBox"

let projectItemsArray = [
    {
        title: 'Proyecto',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perspiciatis quis tenetur harum a maiores obcaecati illo in, eius nisi similique. Asperiores expedita illo aspernatur veniam doloremque facere id fugiat?'
    },
    {
        title: 'Aerodinámica de una vaca',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perspiciatis quis tenetur harum a maiores obcaecati illo in, eius nisi similique. Asperiores expedita illo aspernatur veniam doloremque facere id fugiat?'
    },
    {
        title: 'Cabras razonables',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perspiciatis quis tenetur harum a maiores obcaecati illo in, eius nisi similique. Asperiores expedita illo aspernatur veniam doloremque facere id fugiat?'
    },
]

const ProjectsGrid = () => {
    return(
        <div className="projectsGrid">
            {
                projectItemsArray.map(s =>
                    <ProjectBox project={s}></ProjectBox>
                )
            }
        </div>
    )
}

export default ProjectsGrid