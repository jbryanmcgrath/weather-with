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

let weather = {
    apikey: "ecf7f3e6bec1200756438570f7b731af",
    fetchWeather: function () {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Chattanooga&appid=ecf7f3e6bec1200756438570f7b731af").then((response) => response.json()).then((data) => console.log(data));
    },
};