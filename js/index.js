/* Import function */

import { API, render  } from "./utils.js";
import { displayCountries } from "./display.js";
import { View } from "./view.js";



const loadList = () =>
  fetch(API)
    .then((response) => response.json())
    .then((data) => displayCountries(data))


document.addEventListener("DOMContentLoaded", loadList);

const getId = () => parseInt(location.hash.split("-")[1]);

 
window.addEventListener("hashchange", () => {
       
       const destination = location.hash.split("-")[0];
       
       console.log(destination);
       
       switch (destination) {
        case "#view":
            View(getId());
            break;
        case "":
            loadList();
            break;
            } 

    })
     

