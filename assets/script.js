// var userInput = document.querySelector('#location')

// userInput.addEventListener('submit', () => getCurrentWeatherConditions)

// var getCurrentWeatherConditions = function (user) {
//     var apiUrl = "api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=ecf7f3e6bec1200756438570f7b731af";

//     // make a get request to url
//     fetch(apiUrl)
//         .then(function (response) {
//             // request was successful
//             if (response.ok) {
//                 console.log(response);
//                 response.json().then(function (data) {
//                     console.log(data);
//                 });
//             } else {
//                 alert("Error: " + response.statusText);
//             }
//         })
//         .catch(function (error) {
//             alert("Unable to connect to Weather Service");
//         });
// };

var getWeatherBtn = document.querySelector("#getWeatherBtn")
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

let weather = {
    apikey: "ecf7f3e6bec1200756438570f7b731af",
    fetchWeather: function (userInput) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&units=imperial&appid=ecf7f3e6bec1200756438570f7b731af").then((response) => response.json()).then((data) => this.displayWeather(data));
    },

    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed, today)
        document.querySelector("#city-date-current-weather").innerText = name + "           " + today;
        document.querySelector("#tempDiv").innerText = "Temp:" + temp + "F";
        document.querySelector("#windDiv").innerText = "Wind :" + speed + "MPH";
        document.querySelector("#humidityDiv").innerText = "Humididty: " + humidity + "%";
        document.querySelector("#descriptionDiv").innerText = "It's " + description;
        document.querySelector("#iconDiv").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
    }
};


var getWeatherBtn = document.querySelector("#getWeatherBtn")

getWeatherBtn.addEventListener("click", (e) => {
    e.preventDefault();
    var userInput = document.querySelector('#location').value;
    weather.fetchWeather(userInput);
    weatherForecast.fetchWeatherForecast(userInput);
})


let weatherForecast = {
    apikey: "ecf7f3e6bec1200756438570f7b731af",
    fetchWeatherForecast: function (userInput) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&units=imperial&appid=ecf7f3e6bec1200756438570f7b731af").then((response) => response.json()).then((data) => console.log(data));
    }
}
