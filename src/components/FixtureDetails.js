import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from '../useFetch';

const FixtureDetails = () => {
    const { id } = useParams();
    const { data: fixture, error, isPending } = useFetch('http://localhost:8000/data' + id);

    return ( 
        <div className="fixture-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{error}</div> }
            { fixture && 
                <article>
                    <h2>{fixture.homeTeam}</h2>
                    <p>written by {fixture.awayTeam}</p>
                    <div>
                        {fixture.competition}
                    </div>
                </article>
            }
        </div>
    );
}
 
export default FixtureDetails;