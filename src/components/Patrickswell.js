import FixtureList from "./FixtureList";
import SideNav from "./SideNav";
import useFetch from "../useFetch";

const Patrickswell = () => {
    const {data: fixtures, isPending, error} = useFetch('http://localhost:8000/data');

    return ( 
        <div className="home">
            <div className="content-left">
                <SideNav />                
            </div>
            <div className="content-right">
                <h1>Patrickswell fixtures &amp; results</h1>    
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {fixtures && <FixtureList fixtures={fixtures.filter((fixture) => fixture.homeTeam === "Patrickswell" || fixture.awayTeam === "Patrickswell")} title="" />}   
            </div>
        </div>
    );
}
 
export default Patrickswell;