import useFetch from "../useFetch";
import React, { useState, useEffect } from 'react'
import axios from "axios";

export default function GAAPI() {
    const apiKey = "Z4tEl9GjbL0IRvMUIfFW5UlJPNF9pcmk"; 
    const cors = "https://cors-anywhere.herokuapp.com/";
    //const url = cors + 'https://people.gaa.ie/api/fixtures/jsonp?owner=2149&countyBoardId=27';
    const url3 = "https://people.gaa.ie/api/fixtures/jsonp?wrap=null&owner=2149&countyBoardId=27";
    const url2 = "https://prod.emea.api.fiservapps.com/sandbox/exp/v1/transactions?limit=20&offset=0";
    const endpoint = "api/fixtures/jsonp?owner=2149&countyBoardId=27";
    const endpoint2 = "sandbox/exp/v1/transactions?limit=20&offset=0";
    
    const options = {headers: {'Accept': 'application/json'}};
    const options2 = {headers: {'Accept': 'application/json', 'Api-Key': apiKey}};

    
   // const {data: fixtures, isPending, error} = useFetch(url);
    //const data = fetch(url2, options2)

  /*  useEffect(() => {
        console.log(fixtures)
      }, [fixtures])
   */
    
    fetch(endpoint2, options2)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err)); 

    /*axios.get(
        "/sandbox/exp/v1/transactions?limit=20&offset=0", {
            headers: {
                "Accept": "application/json",
                "Api-Key": apiKey,
            },
        }
    )
    .then(response => console.log(response))
    .catch(err => console.error(err));
*/
    return ( 
        <div className="home">
        </div>
    );
}
 