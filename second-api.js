const weather = {
    apiKey: "cbc16f0f5aa36c366d6f598260b41240",
    getWeather = () => {
        fetch(
            "api.openweathermap.org/data/2.5/forecast?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather = () => {
        const {name} = data;
        const {main, description} = data.weather;
        const {humidity} = data.main;
        console.log(name, main, description, humidity);
    }
    
}

createDiv = () => {
    document.createElement("div");
}