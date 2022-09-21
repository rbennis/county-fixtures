import { Link } from 'react-router-dom'
import logoDornan from '../images/dornan.png';
import logoFBD from '../images/fbd-logo-white.png';
import logoRenault from '../images/renault-white.png';
import logoThurlesMilk from '../images/thurles-milk-white.png';
import logoTippCC from '../images/tipp-county-council.png';
import logoSkoda from '../images/skoda.png';

const SponsorsBlock = () => {
    return (    
        <div className="sponsorsBlock">
            <div className="content">
                <a href="https://www.dornan.ie/" target="blank" title=""><img src={logoDornan} className="sponsorsLogo" alt="Tipperary GAA" title="Tipperary GAA"/></a>
                <a href="https://www.fbd.ie/" target="blank" title=""><img src={logoFBD} className="sponsorsLogo" alt="Tipperary GAA" title="Tipperary GAA"/></a>
                <a href="https://www.renault.ie/" target="blank" title=""><img src={logoRenault} className="sponsorsLogo" alt="Tipperary GAA" title="Tipperary GAA"/></a>
                <a href="https://ryanmotorpowerskoda.ie/" target="blank" title=""><img src={logoSkoda} className="sponsorsLogo" alt="Tipperary GAA" title="Tipperary GAA"/></a>
                <a href="https://www.tipperarycoco.ie/" target="blank" title=""><img src={logoTippCC} className="sponsorsLogo" alt="Tipperary GAA" title="Tipperary GAA"/></a>
                <a href="http://www.centenarythurles.com/dairy/thurles-fresh-milk/" target="blank" title=""><img src={logoThurlesMilk} className="sponsorsLogo" alt="Tipperary GAA" title="Tipperary GAA"/></a>
            </div>
        </div>
     );
}
 
export default SponsorsBlock;