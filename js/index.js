/* Import function */

import { API,  } from "./utils.js";
import { displayCountries } from "./display.js";

/* Query selector */

const loadCountries= async () => {
    const res = await fetch(API);
    const countries = await res.json();
    
     displayCountries(countries) 
    }

/* Chiamata funzioni */
loadCountries();
