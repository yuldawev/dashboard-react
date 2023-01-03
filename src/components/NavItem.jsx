import {NavLink} from "react-router-dom";

const NavItem = ({to, icon, title, count = 0}) => {
    const Icon = icon
    return (
        <NavLink to={to}>
            <Icon/>
            <h3>{title}</h3>
            {count > 0 ? (<div className="message-count">{count}</div>) : ""}
        </NavLink>
    )
}

export default NavItem;