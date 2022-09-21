import FixtureList from "./FixtureList";
import SideNav from "./SideNav";
import useFetch from "../useFetch";

const Team = () => {
    const {data: fixtures, isPending, error} = useFetch('http://localhost:8000/data');
    const queryParams = new URLSearchParams(window.location.search);
    const clubName = queryParams.get("club");
    const club = clubName.charAt(0).toUpperCase() + clubName.slice(1).toString();
    
    return ( 
        <div className="home">
            <div className="content-left">
                <SideNav />                
            </div>
            <div className="content-right">
                <h1>{club} fixtures &amp; results</h1>    
                {error && <div className="LoaderError">{error}</div>}
                {isPending && <div className="LoaderError">Loading...</div>}
                {fixtures && <FixtureList fixtures={fixtures.filter((fixture) => fixture.homeTeam === club || fixture.awayTeam === club)} title={club + " Fixtures and Results"} />}   
            </div>
        </div>
    );
}
 
export default Team;