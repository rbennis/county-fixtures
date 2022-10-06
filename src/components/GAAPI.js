import SideNav from "./SideNav";

export default function GAAPI() {
    const apiKey = "Z4tEl9GjbL0IRvMUIfFW5UlJPNF9pcmk";
    const url = "https://people.gaa.ie/api/fixtures/jsonp?owner=2149&countyBoard=27";
    const url2 = "https://prod.emea.api.fiservapps.com/sandbox/exp/v1/transactions?limit=20&offset=0";
    
    const options = {method: 'GET', headers: {Accept: 'application/json', 'Access-Control-Allow-Origin': '*'}};
    const options2 = {method: 'GET', headers: {Accept: 'application/json', 'Api-Key': apiKey}};
    
    fetch(url, options)
    /*fetch(url2, options2)*/
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    return ( 
        <div className="home">
            <div className="content-left">
                <SideNav />                
            </div>
            <div className="content-right">
                <h1>fixtures &amp; results</h1> 
            </div>
        </div>
    );
}
 