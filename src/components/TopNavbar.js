import { Link } from 'react-router-dom'
import logo from '../images/tipperary-crest.png';
import munsterLogo from '../images/munster-gaa.png';
import gaaLogo from '../images/gaa-white.png';

const TopNavbar = () => {
    return (    

        <nav className="navbar">
            <div className="content">
                <img src={logo} className="tippLogo" alt="Tipperary GAA" title="Tipperary GAA"/>
                <Link to="/">Home</Link>
                <Link to="/results">Results</Link>
                <Link to="/fixtures">Fixtures</Link>
                <div className="associationLogos">                 
                <a href="https://munster.gaa.ie" target="_blank"><img src={munsterLogo} className="munsterLogo" alt="Tipperary GAA" title="Tipperary GAA"/></a>
                <a href="https://gaa.ie" target="_blank"><img src={gaaLogo} className="gaaLogo" alt="Tipperary GAA" title="Tipperary GAA"/></a>
                </div>
            </div>
        </nav> 
     );
}
 
export default TopNavbar;