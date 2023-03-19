import { useState } from "react"


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

    //Contiene la información del proyecto
    const [projectItems, setProjectItems] = useState(projectItemsArray[0])

    //Índice del item en el que estamos parados
    let index = projectItemsArray.map(obj => obj.title).indexOf(projectItems.title)


    //Inicia el proceso de animar el carousel
    function carouselMove(way) {
        //Animaciones a la izquierda
        if(way){
            setHideText(true)
            setWay(true)
            changeItem()
            setTimeout(() => {
                setHideText(false)
            }, 1000);
            return
        }
        //Animaciones a la derecha
        setHideText(true)
        setWay(false)
        changeItem()
        setTimeout(() => {
            setHideText(false)
        }, 1000);
    }


    //Cambia el objeto que contiene la información del proyecto
    function changeItem() {
        console.log(index);
        //Voy al item anterior en la lista
        if(way){
            setProjectItems(projectItemsArray[(index - 1) >= 0? index - 1: projectItemsArray.length - 1])
            index = projectItemsArray.map(obj => obj.title).indexOf(projectItems.title)
            console.log(index);
            return
        }

        //Voy al item siguiente en la lista
        setProjectItems(projectItemsArray[(index + 1) < projectItemsArray.length? index + 1: 0])
        index = projectItemsArray.map(obj => obj.title).indexOf(projectItems.title)
        console.log(index);
    }

    return (
        <div className="carousel">
            <div id="carouselBoxBefore" className={hideText? way?'carouselBoxBefore animate0Left': 'carouselBoxBefore animate0Right': "carouselBoxBefore"} onClick={() =>carouselMove(true)}></div>
            <div id="carouselBox" className={hideText? way? 'carouselBox animateLeft': 'carouselBox animateRight': "carouselBox"}>
                <h3 className="carouselItemTitle">{hideText? '':projectItems.title}</h3>
                <div className="descriptionContainer">
                    <p>{ hideText? '': projectItems.description}</p>
                </div>
            </div>
            <div id="carouselBoxAfter" className={hideText? way? 'carouselBoxAfter animate2Left': 'carouselBoxAfter animate2Right': "carouselBoxAfter"} onClick={() =>carouselMove(false)}></div>
        </div>
    )
}

export default ProjectsCarousel