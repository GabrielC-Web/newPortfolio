import { useState } from "react"

const ProjectBox = (props) => {
    return(
        <div className={`w-64 h-64 sm:w-72 sm:h-72 darkBoxColor relative hover:scale-105 rounded-xl flex flex-col justify-between shadowBorder effectTrigger hover:border hover:border-cyan-600`}>
            <div className="absolute w-full h-full flex flex-col gap-y-6 p-4 start-[50%] translate-x-[-50%]">
                <h3 className="h-3/6">{props.project.title}</h3>
                {/* <div className="h-3/6 w-full hidden displayTriggered opacity-100">
                    <div title="Voltea" className="flex w-full overflow-hidden flex-col">
                        <p className="text-center text-cyan-600">{props.project.description}</p>
                    </div>
                </div> */}
                <button className="projectBoxButton rounded-md absolute start-[50%] px-16 whitespace-nowrap translate-x-[-50%] top-[50%] displayTriggered cursor-pointer darkBoxColor border border-cyan-600">Ver más</button>
            </div>
            <div title="Voltea" className="flex h-full opacityTriggered rounded-xl" style={{background: `linear-gradient(rgb(51, 51, 51, 0.5), rgb(51, 51, 51, 0.5)), url(${props.project.img}) center center no-repeat`, backgroundSize: 'fit'}}>
             </div>
        </div>
    )
}

export default ProjectBox