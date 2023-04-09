import ProjectBox from "./projectBox"

import LaptopImg from "../../assets/img/projects/laptop.jpg"

/**
 * Contiene la información de los proyectos
 */
let projectItemsArray = [
    {
        title: 'Proyecto',
        id: 1,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perspiciatis quis tenetur harum a maiores obcaecati illo in, eius nisi similique. Asperiores expedita illo aspernatur veniam doloremque facere id fugiat?',
        img: LaptopImg
    },
    {
        title: 'Aerodinámica de una vaca',
        id: 2,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perspiciatis quis tenetur harum a maiores obcaecati illo in, eius nisi similique. Asperiores expedita illo aspernatur veniam doloremque facere id fugiat?',
        img: LaptopImg
    },
    {
        title: 'Cabras razonables',
        id: 3,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perspiciatis quis tenetur harum a maiores obcaecati illo in, eius nisi similique. Asperiores expedita illo aspernatur veniam doloremque facere id fugiat?',
        img: LaptopImg
    },
]



const ProjectsGrid = () => {
    return(
        <div className="grid gap-12 mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {
                projectItemsArray.map(s =>
                    <ProjectBox key={s.id} project={s}></ProjectBox>
                )
            }
        </div>
    )
}

export default ProjectsGrid