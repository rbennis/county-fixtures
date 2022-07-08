import FixtureList from "./FixtureList";
import SideNav from "./SideNav";
import useFetch from "../useFetch";

const Home = () => {
    
    const {data: fixtures, isPending, error} = useFetch('http://localhost:8000/data');

    return ( 
        <div className="home">
            <div className="content-left">
                <SideNav />                
            </div>
            <div className="content-right">
                <h1>Fixtures &amp; Results</h1>    
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {fixtures && <FixtureList fixtures={fixtures.filter((fixture) => fixture.date === "Fri 30th June")} title="Fri 30th June" />}   
                {fixtures && <FixtureList fixtures={fixtures.filter((fixture) => fixture.date === "Sat 1st July")} title="Sat 1st July" />}     
                {fixtures && <FixtureList fixtures={fixtures.filter((fixture) => fixture.date === "Sun 2nd July")} title="Sun 2nd July" />}             
                {fixtures && <FixtureList fixtures={fixtures.filter((fixture) => fixture.date === "Mon 3rd July")} title="Mon 3rd July" />}             
       
           </div>
        </div>
    );
}
 
export default Home;