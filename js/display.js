import { render, API } from "./utils.js";



const wrapperCountries = document.querySelector(".wrapper_countries");
const wrapperCard = document.querySelector(".wrapper_card");
const divFra = document.querySelector("#fra");
const p = document.querySelector("#fra")[2]
const divIta = document.querySelector("#ita");
const divSpa = document.querySelector("#spa");
const divPort = document.querySelector("#port");
const divGre = document.querySelector("#gre");
const divGer = document.querySelector("#ger");


const displayCountries = (card) => {
    const itemFra = card.map((card) => {
        if (card.country.name == "Francia") {
            return `
      <div class="card">
        <img class="imgCard" src="${card.cover_image_url}"></img>
        <h2 href="view-${card.id}">${card.name}</h2>
        <p>${card.content}</p>
        <div >
        <a class="button" href="#view" id="read">Leggi tutto</a>
        </div>
      </div>`;
        }

    })
        .join("");
    divFra.innerHTML = itemFra;



    const itemIta = card.map((card) => {
        if (card.country.name == "Italia") {
            return `
            <div class="card">
              <img class="imgCard" src="${card.cover_image_url}"></img>
              <h2>${card.name}</h2>
              <p>${card.content}</p>
            </div>`;
        }
    })

        .join("");
    divIta.innerHTML = itemIta;


    const itemSpa = card.map((card) => {
        if (card.country.name == "Spagna") {
            return `
            <div class="card">
              <img class="imgCard" src="${card.cover_image_url}"></img>
              <h2>${card.name}</h2>
              <p>${card.content}</p>
            </div>`;
        }
    })
        .join("");
    divSpa.innerHTML = itemSpa;


    const itemPort = card.map((card) => {
        if (card.country.name == "Portogallo") {
            return `
            <div class="card">
              <img class="imgCard" src="${card.cover_image_url}"></img>
              <h2>${card.name}</h2>
              <p>${card.content}</p>
            </div>`;
        }
    })
        .join("");
    divPort.innerHTML = itemPort;

    const itemGre = card.map((card) => {
        if (card.country.name == "Grecia") {
            return `
            <div class="card">
              <img class="imgCard" src="${card.cover_image_url}"></img>
              <h2>${card.name}</h2>
              <p>${card.content}</p>
            </div>`;
        }
    })
        .join("");
    divGre.innerHTML = itemGre;

    const itemGer = card.map((card) => {
        if (card.country.name == "Germania") {
            return `
            <div class="card">
              <img class="imgCard" src="${card.cover_image_url}"></img>
              <h2>${card.name}</h2>
              <p>${card.content}</p>
            </div>`;
        }
        

        const wrapperModal = document.querySelector(".wrapper_modal")
        const modal = document.querySelector("#showCard")
     /*    function x() {
            if (card.country.name === "Francia") {
                let newtext = document.createTextNode(card.meta_description)
                wrapperModal.appendChild(newtext)
                console.log(wrapperModal)
            }

                };*/ 
    
        
        
         const btn = document.querySelectorAll(".button")
         btn.forEach(function (btn) {
             btn.addEventListener("click", () => {
                if (card.name === "Parigi") {
                    let newtext = document.createTextNode(`Latitude:${card.latitude}  Longitude:${card.longitude} Time zone:${card.time_zone} `)
                    let button = document.createElement("button")
                    button.textContent = "Chiudi"
                    button.setAttribute("id","boh")
                    button.classList.add("button")
                    wrapperModal.append(newtext,button)
                    wrapperModal.classList.add("display")
                      const boh = document.querySelector("#boh")
                             boh.addEventListener("click", () => {
                                wrapperModal.classList.remove("display")
                                wrapperModal.classList.add("disappear")
                                wrapperModal.classList.remove(...wrapperModal.classList); 
                                wrapperModal.innerHTML = ""
                             })}
                     ;
             }
             )
         })
    })
        .join("");
    divGer.innerHTML = itemGer;


}



export { displayCountries }
