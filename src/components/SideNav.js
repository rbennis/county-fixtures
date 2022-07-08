import { Link } from "react-router-dom";

const SideNav = () => {
    return ( 
        <nav className="sideNav">
            <ul>
                <li className="filter-title">Code</li>
                <li><Link to="/hurling">Hurling</Link></li>
                <li><Link to="/football">Football</Link></li>
                <li><Link to="/camogie">Camogie</Link></li>
                <li><Link to="/ladies-football">Ladies Football</Link></li>
                <li className="filter-title">Team</li>
                <li><Link to="/patrickswell">Patrickswell</Link></li>
                <li><Link to="/nenagh">Nenagh</Link></li>
                <li><Link to="/thurles">Thurles</Link></li>
                <li><Link to="/doon">Doon</Link></li>
            </ul>
        </nav> 
     );
}
 
export default SideNav;