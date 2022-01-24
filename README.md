 MUST-HAVE
In the home page the user can enter the city of his/her choice (think of the right HTML elements here)
On clicking the SUBMIT button or pressing ENTER the application will display the weather for the next 5 days
The application must be responsive and mobile friendly
💡 Not sure where to start? Split this features into multiple smaller todos (in your code, sketch, ...)

NICE TO HAVE

Display a line graph of temperature over time using a library such as Chart.js
Remember the user choice on subsequent visits
Allow the user to compare the weather in two cities
Use the API of https://unsplash.com/ to show a photo of the city they entered in the form.


You call an api using a URL:

api.openweathermap.org/data/2.5/weather?q=Brussels&appid=cbc16f0f5aa36c366d6f598260b41240;

You can query it further using a structure like & _ =

api.openweathermap.org/data/2.5/weather?q=Brussels &time=14h51 &appid=insertkeyhere;


You now have .json data; i.e. a bunch of data set into an array.