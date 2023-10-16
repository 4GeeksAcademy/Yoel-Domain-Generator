/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function allDomains() {
  let final = "";
  let pronoun = ["the", "our", "my"];
  let adj = ["great", "awesome", "amazing"];
  let noun = ["site", "space", "place"];
  let domain = [".com", ".es", ".org"];
  pronoun.forEach(word => {
    adj.forEach(word2 => {
      noun.forEach(word3 => {
        domain.forEach(word4 => {
          final += `<li>${word}${word2}${word3}${word4}</li>`;
        });
      });
    });
  });
  return final;
}
let myTag = document.querySelector("#lista");
myTag.innerHTML += allDomains();
