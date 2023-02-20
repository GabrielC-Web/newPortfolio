import Tooltip from "../../../utilities/tooltip";
 
const Navbar = (items) => {
    let navItems = items.items
    return(
        <div className="navBar">
            {navItems.map(s => {
                return (
                    <a key={s.view} href={s.id} className={window.location.pathname === s.id?'navBarCircle tooltipContainer': 'navBarCircleInactive tooltipContainer'}>
                        <Tooltip text={s}></Tooltip>
                    </a>
                )
            })}
        </div>
    )
}

export default Navbar