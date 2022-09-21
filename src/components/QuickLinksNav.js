import { Link } from 'react-router-dom'

const QuickLinksNav = () => {
    return (    

        <nav className="quickLinksNav">
            <div className="content">
                <div className="links">
                    <span>Quicklinks: </span>
                    <Link to="https://tipperary.gaa.ie/">Tipperary GAA</Link>
                    <Link to="https://tipperary.gaa.ie/contact/">Contact</Link>
                    <Link to="https://tipperary.gaa.ie/county-board-units/county-directory/">County Directory</Link>
                    <Link to="https://page.inplayer.com/TipperaryGAA/">Watch Live</Link>
                </div>
            </div>
        </nav> 
     );
}
 
export default QuickLinksNav;