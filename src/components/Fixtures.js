import useFetch from "../useFetch";
import SideNav from "./SideNav";
import FixtureList from "./FixtureList";


const Fixtures = () => {
    
    const {data: fixtures, isPending, error} = useFetch('http://localhost:8000/data');

    return ( 
        <div className="home">
            <div className="content-left">
                <SideNav />             
            </div>
            <div className="content-right">
                <h2>Fixtures</h2>
                {error && <div className="LoaderError">{error}</div>}
                {isPending && <div className="LoaderError">Loading...</div>}
                {fixtures && <FixtureList fixtures={fixtures.filter((fixture) => fixture.date === "Sun 2nd July")} title="Sun 2nd July" />}             
                {fixtures && <FixtureList fixtures={fixtures.filter((fixture) => fixture.date === "Mon 3rd July")} title="Mon 3rd July" />} 
            </div>
        </div>
     );
}
 
export default Fixtures;