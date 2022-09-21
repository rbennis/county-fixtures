import useFetch from "../useFetch";
import SideNav from "./SideNav";
import FixtureList from "./FixtureList";

const Results = () => {
    
    const {data: fixtures, isPending, error} = useFetch('http://localhost:8000/data');

    return ( 


        <div className="home">
            <div className="content-left">
                <SideNav />                
            </div>
            <div className="content-right">
                <h2>Results</h2>
                {error && <div className="LoaderError">{error}</div>}
                {isPending && <div className="LoaderError">Loading...</div>}
                {fixtures && <FixtureList fixtures={fixtures.filter((fixture) => fixture.date === "Fri 30th June")} title="Fri 30th June" />}   
                {fixtures && <FixtureList fixtures={fixtures.filter((fixture) => fixture.date === "Sat 1st July")} title="Sat 1st July" />}     
            </div>
        </div>

     );
}
 
export default Results;