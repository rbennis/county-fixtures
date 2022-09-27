import FixtureList from "./FixtureList";
import SideNav from "./SideNav";
import useFetch from "../useFetch";

const GAACode = () => {

    const {data: fixtures, isPending, error} = useFetch('http://localhost:8000/data');
    const queryParams = new URLSearchParams(window.location.search);
    const codeName = queryParams.get("GAACode");
    const code = codeName.charAt(0).toUpperCase() + codeName.slice(1).toString();
    const codeLower = codeName.charAt(0).toLowerCase() + codeName.slice(1).toString();

    return ( 
        <div className="home">
            <div className="content-left">
                <SideNav fixture={fixtures} />                
            </div>
            <div className="content-right">
                <h1>{code} Fixtures &amp; Results</h1>    
                {error && <div className="LoaderError">{error}</div>}
                {isPending && <div className="LoaderError">Loading...</div>}
                {fixtures && <FixtureList fixtures={fixtures.filter((fixture) => fixture.code === codeLower)} title="" />}   
            </div>
        </div>
    );
}
 
export default GAACode;