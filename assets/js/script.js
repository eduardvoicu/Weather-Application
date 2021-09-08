moment().format('L');

// Function for current city search
function searchCity(cityname) {

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&units=imperial&appid=ecc0be5fd92206da3aa90cc41c13ca56";
    var queryURLforcast = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityname + "&units=imperial&appid=ecc0be5fd92206da3aa90cc41c13ca56";
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        console.log(queryURL);
        // content will be put in empty divs with respective IDs
        $("#current").empty();
        var mainDate = moment().format('L');

        var cityNameEl = $("<h2>").text(response.name);
        var displayMainDate = cityNameEl.append(" " + mainDate);
        var tempEL = $("<p>").text("Temperature: " + response.main.temp);
        var humEl = $("<p>").text("Humidity: " + response.main.humidity);
        var windEl = $("<p>").text("Wind Speed: " + response.wind.speed);
        var currentweather = response.weather[0].main;

        // Rain
        if (currentweather === "Rain") {
            var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/09d.png");
            currentIcon.attr("style", "height: 60px; width: 60px");
            // Clouds
        } else if (currentweather === "Clouds") {
            var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/03d.png");
            currentIcon.attr("style", "height: 60px; width: 60px");
            // Clear
        } else if (currentweather === "Clear") {
            var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/01d.png");
            currentIcon.attr("style", "height: 60px; width: 60px");
        }
        // Drizzle
        else if (currentweather === "Drizzle") {
            var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/10d.png");
            currentIcon.attr("style", "height: 60px; width: 60px");
        }
        // Snow
        else if (currentweather === "Snow") {
            var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/13d.png");
            currentIcon.attr("style", "height: 60px; width: 60px");
        }
        // newDiv variable will create an HTML <div> to append new el to page
        var newDiv = $('<div>');

        newDiv.append(displayMainDate, currentIcon, tempEL, humEl, windEl);

        $("#current").html(newDiv);

        // 5 Day Forecast
        $.ajax({
            url: queryURLforcast,
            method: 'GET'
        }).then(function (response) {
            // Results variable is storing an array of the results.
            var results = response.list;
            // creating the 5 day div spaces below will
            $("#5day").empty();
            // HTML for the 5 day Forecast below
            for (var i = 0; i < results.length; i += 8) {
                var fiveDayDiv = $("<div class='card shadow-lg text-white bg-primary mx-auto mb-10 p-2' style='width: 8.5rem; height: 11rem;'>");

                // variables below will store the responses for the info it called earlier
                var date = results[i].dt_txt;
                var setD = date.substr(0, 10)
                var temp = results[i].main.temp;
                var hum = results[i].main.humidity;
                // variable that create tags with results from retrieved information from earlier
                var h5date = $("<h5 class='card-title'>").text(setD);
                var pTemp = $("<p class='card-text'>").text("Temp: " + temp);;
                var pHum = $("<p class='card-text'>").text("Humidity " + hum);;

                var weather = results[i].weather[0].main
                // 
                if (weather === "Rain") {
                    var icon = $('<img>').attr("src", "http://openweathermap.org/img/wn/09d.png");
                    icon.attr("style", "height: 40px; width: 40px");
                } else if (weather === "Clouds") {
                    var icon = $('<img>').attr("src", "http://openweathermap.org/img/wn/03d.png");
                    icon.attr("style", "height: 40px; width: 40px");
                }
                else if (weather === "Clear") {
                    var icon = $('<img>').attr("src", "http://openweathermap.org/img/wn/01d.png");
                    icon.attr("style", "height: 40px; width: 40px");
                }
                else if (weather === "Drizzle") {
                    var icon = $('<img>').attr("src", "http://openweathermap.org/img/wn/10d.png");
                    icon.attr("style", "height: 40px; width: 40px");
                }
                else if (weather === "Snow") {
                    var icon = $('<img>').attr("src", "http://openweathermap.org/img/wn/13d.png");
                    icon.attr("style", "height: 40px; width: 40px");
                }
                // appending below
                fiveDayDiv.append(h5date);
                fiveDayDiv.append(icon);
                fiveDayDiv.append(pTemp);
                fiveDayDiv.append(pHum);
                $("#5day").append(fiveDayDiv);
            }

        });




















// AXIOS alternate way I plan on doing this at a later date. Disregard for now.
// Function for initiliazing the page with const variables
// function initPage() {
//     const inputEl = document.getElementById("city-input");
//     const searchEl = document.getElementById("search-button");
//     const clearEl = document.getElementById("clear-history");
//     const nameEl = document.getElementById("city-name");
//     const currentPicEl = document.getElementById("current-pic");
//     const currentTempEl = document.getElementById("temperature");
//     const currentHumidityEl = document.getElementById("humidity");4
//     const currentWindEl = document.getElementById("wind-speed");
//     const currentUVEl = document.getElementById("UV-index");
//     const historyEl = document.getElementById("history");
//     let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
//     console.log(searchHistory);

//     // API KEY variable
//     var key = "213cba83ade6abe9c240474e66a3a22f";

//     // When user enters city name and clicks search, function will start
//     // It is using the saved CITY name to execute the CURRENT conditions from the OpenWeaterAPI
//     function getWeather(cityName) {
//         let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
//         axios.get(queryURL)
//         .then(function(response){
//             console.log(response);
//     // Parse response so it displays current conditions
//     // Used https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date as reference
//     // to use the "date" objects.
//         const currentDate = new Date(response.data.dt*1000);
//         console.log(currentDate);
//         const day = currentDate.getDate();
//         const month = currentDate.getMonth() + 1;
//         const year = currentDate.getFullYear();
//         nameEl.innerHTML = response.data.name + " (" + month + "/" + day + "/" + year + ") ";
//         let weatherPic = response.data.weather[0].icon;
//         currentPicEl.setAttribute("src","https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
//         currentPicEl.setAttribute("alt",response.data.weather[0].description);
//         currentTempEl.innerHTML = "Temperature: " + k2f(response.data.main.temp) + " &#176F"; // will convert to Fahrenheit temp
//         currentHumidityEl.innerHTML = "Humidity: " + response.data.main.humidity + "%"; // humidity in %
//         currentWindEl.innerHTML = "Wind Speed: " + response.data.wind.speed + " MPH"; // wind speed in miles per hour
//     // variables for latitude and longitude
//     let lat = response.data.coord.lat;
//     let lon = response.data.coord.lon;
//     // UV Index for requested location
//     let UVQueryURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey + "&cnt=1";
//     axios.get(UVQueryURL)
//     .then(function(response){
//         let UVIndex = document.createElement("span");
//         UVIndex.setAttribute("class","badge badge-danger");
//         UVIndex.innerHTML = response.data[0].value;
//         currentUVEl.innerHTML = "UV Index: ";
//         currentUVEl.append(UVIndex);
//     });











// // Variables that will be used in the scripts below including API keys
// var key = "213cba83ade6abe9c240474e66a3a22f";





// // // $("className).remove()
// // $("#searchButton").click(function() {
// //     city = $("#searchInput").val();
// //     // fetchAPI();

// //     var checkArray = searchHistory.includes(city);

// //     if (checkArray == true) {
// //         return;
// //     } else {
// //         searchHistory.push(city);
// //         localStorage.setItem("searchHistory", JSON.stringify(searchHistory));

// //         var historyButton = $("<a>").attr({
// //             class: "list-group-item list-group-item-action",
// //             href: "#",

// //         });
// //         historyButton.text(city);
// //         $("#searchList").append(historyButton);
// //     };
// //   });
// //   $(".list-group-item").click(function() {
// //     city = $(this).text();
// //     // fetchAPI();
// //   });


// //   var searchHistory = [];

// //   function getItems() {
// //       var storedHistory = JSON.parse(localStorage.getItem("searchHistory"));
// //       if (storedHistory !== null) {
// //           searchHistory = storedHistory;
// //       };

// //       for (i = 0; i < searchHistory.length; i++) {
// //           if (i == 8) {
// //               break;
// //             }

// //             historyButton = $("<a>").attr({
// //               class: "list-group-item list-group-item-action",
// //               href: "#"
// //           });

// //           historyButton.text(searchHistory[i]);
// //           $("#searchList").append(historyButton);
// //       }
// //   };

// //   getItems();
