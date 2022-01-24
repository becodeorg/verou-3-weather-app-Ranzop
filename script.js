

/*  You fetch or "axios" the API in a url. This often has a key to access. It will go to this link and see if there is information. 
Then you have the ability to store that information -> .then (response => response.json) = change that response in .json format.
Afterwards you store the information into a variable. 

axios ("url")
.then (response => response.json)
.then (data => console.log(data)); */

const { default: axios } = require("axios");


axios.get("https://pokeapi.co/api/v2/ability").then (response => console.log (response));



/* You have to replace parts of your API url, or if you want to access a specific location,
you will want to store that also in the API url, in its appropriate place {city name} for example. */

// TODO: search bar for city name
// TODO: create weather display
// TODO: submit or enter clickevent -> make weather appear
// TODO: responsiveness

const config = require("./config")

// API + config.key