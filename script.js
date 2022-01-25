

/*  You fetch or "axios" the API in a url. This often has a key to access. It will go to this link and see if there is information. 
Then you have the ability to store that information -> .then (response => response.json) = change that response in .json format.
Afterwards you store the information into a variable. 

axios ("url")
.then (response => response.json)
.then (data => console.log(data)); */


import Key from "./config.js";


  // Retrieving data from JSON

/* getTemp = (data) => {
  let x =  data.main;
  console.log (x);
} */

/* console.log ('yo');
const test = Data.key;
console.log (test); */

let submitButton = document.createElement("input");
submitButton.setAttribute("type", "button");
submitButton.setAttribute("id", "submit");
document.body.appendChild(submitButton);


let locationInputValue = document.createElement("input");
locationInputValue.setAttribute("type", "text");
locationInputValue.setAttribute("id", "location");
document.body.appendChild(locationInputValue);

console.log(locationInputValue);

let tempOutput = document.createElement("div");
tempOutput.setAttribute("id", "temp");
document.body.appendChild(tempOutput);
tempOutput.classList.add("temp");

const api_url = "https://api.openweathermap.org/data/2.5/weather?q="

const callWeather = (event) => {
    event.preventDefault();
    const location = locationInputValue.value;
    console.log(location);
    
    const getWeather = async () => {
    const result = await fetch (api_url + location + "&units=metric&appid=" + Key.key);
    const data = await result.json();
        console.log(data);
    }
    getWeather ();
}

console.log(api_url + "Brussels" + "&units=metric&appid=" + Key.key);


/* getWeather (); */

submitButton.addEventListener('click', callWeather); 


console.log(location);

 //   http://api.openweathermap.org/data/2.5/weather?q=
console.log (api_url + location + "s&units=metric&appid=" + Key.key);



//async function getWeather () {fetch(api_url + `${location}&units=metric&appid=` + Key.key)












// .catch method can 'catch' errors that go wrong in the whole fetching process.

// you can use async and await, they only function together.





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



