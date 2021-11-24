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


let weather = {
    apikey: "ecf7f3e6bec1200756438570f7b731af",
    fetchWeather: function (userInput) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&units=metric&appid=ecf7f3e6bec1200756438570f7b731af").then((response) => response.json()).then((data) => console.log(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
    }
};


// var getWeatherBtn = document.querySelector("#getWeatherBtn")

getWeatherBtn.addEventListener("click", (e) => {
    e.preventDefault();
    var userInput = document.querySelector('#location').value;
    weather.fetchWeather(userInput);

})
