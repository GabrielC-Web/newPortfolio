import html5 from "../../assets/img/technologies/html-5-svgrepo-com.svg"
import css from "../../assets/img/technologies/css-3-svgrepo-com.svg"
import js from "../../assets/img/technologies/javascript-svgrepo-com.svg"
import bootstrap from "../../assets/img/technologies/bootstrap-svgrepo-com.svg"
import angular from "../../assets/img/technologies/angular-svgrepo-com.svg"
import git from "../../assets/img/technologies/git-svgrepo-com.svg"
import tailwind from "../../assets/img/technologies/tailwind-svgrepo-com.svg"
import react from "../../assets/img/technologies/react-svgrepo-com.svg"
import typescript from "../../assets/img/technologies/typescript-svgrepo-com.svg"
import SkillItem from "./skillItem"

let skillList = [
    {
        name: 'Html', 
        url: html5,
        position: 1
    },
    {
        name: 'Css', 
        url: css,
        position: 2
    },
    {
        name: 'Bootstrap', 
        url: bootstrap,
        position: 0
    },
    {
        name: 'Tailwind', 
        url: tailwind,
        position: 3
    },
    {
        name: 'Javascript', 
        url: js,
        position: -1
    },
    {
        name: 'Typescript', 
        url: typescript,
        position: 4
    },
    {
        name: 'React', 
        url: react,
        position: -2
    },
    {
        name: 'Angular', 
        url: angular,
        position: 5
    },
    {
        name: 'Git', 
        url: git,
        position: -3
    },
]

export default function Skills() {
    return (
        <div id="skills" className="flex justify-start flex-col items-center container">
            <h2>Tecnologías</h2>
            <div className="itemsBox">
                {skillList.map(s=> 
                <div key={s.name} className="flex justify-center relative">
                    {<SkillItem  item={s}></SkillItem>}
                </div>)
                }
            </div>
        </div>
    )
}

// export default Skills()