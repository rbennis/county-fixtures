import { Link } from 'react-router-dom'

const QuickLinksNav = () => {
    return (    

        <nav className="quickLinksNav">
            <div className="content">
                <div className="links">
                    <span>Quicklinks: </span>
                    <a target="_blank" href="https://tipperary.gaa.ie/">Tipperary GAA</a>
                    <a target="_blank"  href="https://tipperary.gaa.ie/contact/">Contact</a>
                    <a target="_blank"  href="https://tipperary.gaa.ie/county-board-units/county-directory/">County Directory</a>
                    <a target="_blank"  href="https://page.inplayer.com/TipperaryGAA/">Watch Live</a>
                </div>
            </div>
        </nav> 
     );
}
 
export default QuickLinksNav;