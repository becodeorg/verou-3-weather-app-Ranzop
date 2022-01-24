

/*  You fetch or "axios" the API in a url. This often has a key to access. It will go to this link and see if there is information. 
Then you have the ability to store that information -> .then (response => response.json) = change that response in .json format.
Afterwards you store the information into a variable. 

axios ("url")
.then (response => response.json)
.then (data => console.log(data)); */

import Data from "./config.js";

console.log(Data.key);  



/* console.log ('yo');
const test = Data.key;
console.log (test); */


fetch("http://api.openweathermap.org/data/2.5/weather?q=Brussels&units=metric&appid=" + Data.key)
.then(result => result.json())
.then(data => console.log (data))


let createTemp = document.createElement("div");
createTemp.setAttribute("id", "temp");
document.body.appendChild(createTemp);
createTemp.classList.add("temp");

/* const { default: axios } = require("axios");


axios.get("https://pokeapi.co/api/v2/ability").then (response => console.log (response)); */



/* You have to replace parts of your API url, or if you want to access a specific location,
you will want to store that also in the API url, in its appropriate place {city name} for example. */

// TODO: search bar for city name
// TODO: create weather display
// TODO: submit or enter clickevent -> make weather appear
// TODO: responsiveness

/* const config = import("./config"); */

// API + config.key

/* const createWeather = document.createElement("div");
createWeather.setAttribute("id", "getWeather");
document.body.appendChild(createWeather);

const getWeather = document.getElementById("getWeather");
 */
/* let weather;
/* const axios = require('axios').default; */

/* function setup () {
    createCanvas (400, 200);
    loadJSON("http://api.openweathermap.org/data/2.5/weather?q=Brussels&units=metric&appid=cbc16f0f5aa36c366d6f598260b41240", gotData);
}

function gotData(data) {
    println (data);
    weather = data;
}

function draw() {
    background(0);
    if (weather) {
        ellipse (100, 100, weather.main.temp, weather.main.temp)
        ellipse (300, 100, weather.main.humidity, weather.main.humidity)
    }
} */


/* fetch ("http://api.openweathermap.org/data/2.5/weather?q=Brussels&units=metric&appid="Data.key" + "Data.temp")
.then (response => response.json())
.then (result => console.log(result.results[0])); */

// result.results.forEach(pokemon => {
    //call a function here for example: createPokemon(pokemon);
// })



