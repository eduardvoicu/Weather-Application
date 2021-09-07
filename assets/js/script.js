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
