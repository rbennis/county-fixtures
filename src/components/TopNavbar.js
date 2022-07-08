import { Link } from 'react-router-dom'

const TopNavbar = () => {
    return (    

        <nav className="navbar">
            <h1>Fixtures &amp; Results</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/results">Results</Link>
                <Link to="/fixtures">Fixtures</Link>
            </div>
        </nav> 
     );
}
 
export default TopNavbar;