import { useState } from "react";
import Tooltip from "../../../utilities/tooltip";
 
const Navbar = (items) => {
    let navItems = items.items

    const [hash, setHash] = useState(window.location.hash)

    function reloadNavbar(clicked) {
        setHash(clicked)
    }



    return(
        <div className="navBar">
            {navItems.map(s => {
                return (
                    // <a key={s.view} href={s.id} className={hash === s.id?'navBarCircle tooltipContainer': 'navBarCircleInactive tooltipContainer'} onClick={() => reloadNavbar(s.id)}>
                    //     <Tooltip text={[s, {url: hash, i: s.id}]}></Tooltip>
                    // </a>
                    <a href={s.id}>
                        {s.view}
                    </a>
                )
            })}
        </div>
    )
}

export default Navbar