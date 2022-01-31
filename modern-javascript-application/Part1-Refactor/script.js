import Data from "./config.js";

const searchBar = document.querySelector('#searchBar');
const container = document.querySelector(".container");
const cityNameContainer = document.querySelector('.city-name');

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let x;
const createElement = (element, cssClass, parent) => {
    x = document.createElement(element);
    x.classList.add(cssClass);
    parent.appendChild(x);
    return (x);
}


let y;
const createImg = (element, cssClass, src, alt, parent) => {
    y = document.createElement(element);
    y.classList.add(cssClass);
    y.src = src;
    y.alt = alt;
    parent.appendChild(y);
    return (y);
}


console.log('"http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"');

const createDay = (result, i) => {
    // Use the remainder operator (%) to switch from saturday (last in array) back to sunday (first in array)
    const date = new Date();
    let dayOfTheWeek = weekdays[(date.getDay() + i) % 7];
    const data = result.daily[i];

    // Create the elements with Data
    const card = createElement('div', 'card', container);

    const imageBox = createElement('div', 'imgBx', card);
    // TODO: fix the fetch into this function so that it can reach the required data to call the image
    const cardImg = createImg('img', 'first-image', '"http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"', 'first picture', imageBox);

    const contentBox = createElement("div", "contentBx", card);

    const cardHeader = createElement("h2", "card-header", contentBox);
    cardHeader.innerHTML = dayOfTheWeek;


    const weatherDescription = data.weather[0].description;
    console.log(weatherDescription);

    // This is broken, the error message leads me to believe that there is an issue with fetching the data from the API and getting it into data.weather[0].description

    const tempDescription = createElement("h4", "temperature-description", contentBox);
    tempDescription.innerHTML = weatherDescription;

    const currentTempBox = createElement("div", "color", contentBox);


    const currentTempHeader = document.createElement("h3");
    currentTempHeader.innerHTML = "Temp:"
    currentTempBox.appendChild(currentTempHeader);

    const currentTemp = createElement("span", "current-temp", currentTempBox);
    currentTemp.innerHTML = data.temp.day + "°C";


    const minMaxTemperatures = createElement("div", "details", contentBox);


    const minMaxTempHeader = document.createElement("h3", "header-for-min-max-temp", minMaxTemperatures);
    minMaxTempHeader.innerHTML = "More:"

    const minTemp = document.createElement("span", "min-temp", minMaxTemperatures);
    minTemp.innerHTML = data.temp.min + "°C";

    const maxTemp = document.createElement("span", "max-temp", minMaxTemperatures);
    maxTemp.innerHTML = data.temp.max + "°C";
}

// Event will start on a keyup action
searchBar.addEventListener('keyup', (event) => {

    // checking the action for specific key (Enter)
    if (event.key === "Enter") {
        // Store target in variable
        const thisCity = event.currentTarget.value.toLowerCase();
        const apiUrl = "https://api.openweathermap.org/data/2.5/forecast/?q=" + thisCity + "&appid=" + Data.key;
        event.currentTarget.value = '';
        // Fetching first api to get the City coordinates
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const lon = data.city.coord.lon;
                const lat = data.city.coord.lat;

                cityNameContainer.innerHTML = data.city.name;

                // Fetching final data according to the coordinates
                fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&cnt=5&units=metric&exclude=minutely,hourly,alerts&appid=" + Data.key)
                    .then(response => response.json())
                    .then(result => {
                        console.log('Welcome to this basic weather app. this is not a product but the product of an academic exercise.')

                        // Removing all child elements from Container before creating new set of elements
                        while (container.firstChild) {
                            container.removeChild(container.firstChild);
                        };

                        // Looping through 5 days of weather data
                        for (let i = 0; i < 5; i++) {
                            createDay(result, i);

                        };
                    });
            })
            .catch((error) => {
                // If there are errors, send out an error message
                console.error('Error:', "not a place!");
                while (container.firstChild) {
                    container.removeChild(container.firstChild);
                };
                return alert("Are you sure you aren't holding your map upside down?");
            });
    };
});