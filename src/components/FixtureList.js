import { Link } from "react-router-dom";

const FixtureList = ({fixtures, title}) => {

    return ( 
        <div className="fixtureList">            
            <h3> { title } </h3>
            {
                fixtures.map((fixture) => (
                    <div className="fixtureBlock" key={fixture.id}>
                        <h4>                            
                            {/* Link to Home team */}                                
                            <Link to={{
                                pathname: '/Team',
                                search: 'club=' + fixture.homeTeam,
                            }}>
                                {fixture.homeTeam}
                            </Link>
                            {/* Only display score if the game is over by checking if there is a home team score */}
                            {fixture.homeTeamScore !== "" ? ( 
                                " ( "+ fixture.homeTeamScore +" )" +" v "+ "( "+ fixture.awayTeamScore +" ) ") : ( " v " )
                            }
                              
                            {/* Link to Away team */}                                               
                            <Link to={{
                                pathname: '/Team',
                                search: 'club=' + fixture.awayTeam,
                            }}>
                                {fixture.awayTeam}
                            </Link>
                            
                        </h4>
                        <p><span className="fixtureBlockTitle">Competition: </span> { fixture.competition }</p>
                        <p><span className="fixtureBlockTitle">Venue: </span> {fixture.venue}</p>
                        <p><span className="fixtureBlockTitle">Time: </span> {fixture.gameTime}</p>
                        <p><span className="fixtureBlockTitle">Referee: </span> { fixture.referee }</p>
                    </div>
                ))
            }  
        </div>
     );
}
 
export default FixtureList;

