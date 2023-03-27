import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"    
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"    


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

const ProjectsCarousel = () => {

    //Indica si se oculta el texto
    const [hideText, setHideText] = useState(false)

    //El sentido en que se mueve el carrusel
    const [way, setWay] = useState(false)

    //Posición o index del array de proyecto
    const [position, setPosition] = useState(0)

    //Contiene la información del proyecto
    const [projectItems, setProjectItems] = useState(projectItemsArray[position])

    //Índice del item en el que estamos parados
    // let index = projectItemsArray.map(obj => obj.title).indexOf(projectItems.title)

    //Inicia el proceso de animar el carousel
    function carouselMove(waySet) {
        //Animaciones a la izquierda
        setHideText(true)
        setWay(waySet)
        changeItem(waySet)
        setTimeout(() => {
            setHideText(false)
        }, 1000);
    }


    //Cambia el objeto que contiene la información del proyecto
    function changeItem(waySet) {
        setPosition(
            // console.log(position),
            waySet?
            (((position - 1) < 0)? projectItemsArray.length - 1: position - 1):
            ((position +1) < projectItemsArray.length? position + 1: 0)
        )
        setProjectItems(projectItemsArray[position])
    }

    return (
        <div className="carousel">
            <div id="carouselBoxBefore" className={hideText? way?'carouselBoxBefore animate0Left': 'carouselBoxBefore animate0Right': "carouselBoxBefore"} onClick={() =>carouselMove(true)}>
                <FontAwesomeIcon className={hideText? 'invisible': 'arrows'} icon={faChevronLeft} />
            </div>
            <div id="carouselBox" className={hideText? way? 'carouselBox animateLeft': 'carouselBox animateRight': "carouselBox"}>
                <h3 className="carouselItemTitle">{hideText? '':projectItems.title}</h3>
                <div className="descriptionContainer">
                    <p>{ hideText? '': projectItems.description}</p>
                </div>
            </div>
            <div id="carouselBoxAfter" className={hideText? way? 'carouselBoxAfter animate2Left': 'carouselBoxAfter animate2Right': "carouselBoxAfter"} onClick={() =>carouselMove(false)}>
                <FontAwesomeIcon className={hideText? 'invisible': 'arrows'} icon={faChevronRight} />
            </div>
        </div>
    )
}

export default ProjectsCarousel