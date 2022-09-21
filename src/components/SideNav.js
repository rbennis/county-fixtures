import { Link } from "react-router-dom";

const SideNav = () => {

    return ( 
        <nav className="sideNav">
            <div className="sideNavLists">
                <ul>         
                    <li className="filter-title">Team</li>         
                    <li><Link to="/Team?club=Patrickswell">Patrickswell</Link></li>
                    <li><Link to="/Team?club=Nenagh">Nenagh</Link></li>
                    <li><Link to="/Team?club=Thurles">Thurles</Link></li>
                    <li className="bottom"><Link to="/Team?club=Doon">Doon</Link></li>
                </ul>
            </div>
            <div className="sideNavLists">
                <ul>  
                    <li className="filter-title">Code</li>
                    <li><Link to="/code?code=hurling">Hurling</Link></li>
                    <li><Link to="/code?code=football">Football</Link></li>
                    <li><Link to="/code?code=camogie">Camogie</Link></li>
                    <li className="bottom"><Link to="/code?code=ladies-football">Ladies Football</Link></li>
                </ul>
            </div>
        </nav> 
     );
}
 
export default SideNav;