import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from '../useFetch';

const FixtureDetails = () => {
{/* MAY BE ABLE TO REMOVE. NOT SURE THIS COMPONENT IS BEING USED ANYMORE */}
    const { id } = useParams();
    const { data: fixture, error, isPending } = useFetch('http://localhost:8000/data' + id);

    return ( 
        <div className="fixture-details">
            FIXTURE DETAILS PAGE YOU NEED TO KEEP ME SIRRRRR
            { isPending && <div>Loading...</div> }
            { error && <div>{error}</div> }
            { fixture && 
                <article>
                    <h2>{fixture.homeTeam}</h2>
                    <p> v {fixture.awayTeam}</p>
                    <div>
                        {fixture.competition}
                    </div>
                </article>
            }
        </div>
    );
}
 
export default FixtureDetails;