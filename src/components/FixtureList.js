const FixtureList = ({fixtures, title}) => {
    return ( 
        <div className="fixture-list">            
            <h2 className="main-title"> { title } </h2>
            {
                fixtures.map((fixture) => (
                    <div className="fixture-block">
                        <h2>{ fixture.homeTeam } { fixture.homeTeamScore } v { fixture.awayTeamScore } { fixture.awayTeam } </h2>
                        <p>{ fixture.competition }</p>
                        <p>Venue &amp; Time: { fixture.referee } {fixture.gameTime}</p>
                        <p>Referee: { fixture.referee }</p>
                    </div>
                ))
            }  
        </div>
     );
}
 
export default FixtureList;

