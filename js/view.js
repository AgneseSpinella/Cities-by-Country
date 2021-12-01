import { render, API } from "./utils.js";

const View = (id = 0) => {
    console.log(id)
  fetch(`${API}`)
    .then((response) => response.json())
    .then((countries) => {
      const container = document.querySelector("#showCard");
      console.log(countries)
      render(
        container,
        `
        <h2>${countries.name}</h2>
        <a class="pulsante" href="#" id="back">Torna alla home</a>`
      );
    });
};

export { View };