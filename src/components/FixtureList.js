const FixtureList = ({fixtures, title}) => {

    return ( 
        <div className="fixtureList">            
            <h3> { title } </h3>
            {
                fixtures.map((fixture) => (
                    <div className="fixtureBlock" key={fixture.id}>
                        <h4>
                            {fixture.homeTeamScore !== "" ? ( fixture.homeTeam  +" ( "+ fixture.homeTeamScore +" )" +" v "+ "( "+ fixture.awayTeamScore +" ) "+ fixture.awayTeam) : (fixture.homeTeam +" v "+ fixture.awayTeam)}
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

