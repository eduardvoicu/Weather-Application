// Function for initiliazing the page with const variables
function initPage() {
    const inputEl = document.getElementById("city-input");
    const searchEl = document.getElementById("search-button");
    const clearEl = document.getElementById("clear-history");
    const nameEl = document.getElementById("city-name");
    const currentPicEl = document.getElementById("current-pic");
    const currentTempEl = document.getElementById("temperature");
    const currentHumidityEl = document.getElementById("humidity");4
    const currentWindEl = document.getElementById("wind-speed");











// Variables that will be used in the scripts below including API keys
var key = "213cba83ade6abe9c240474e66a3a22f";





// // $("className).remove()
// $("#searchButton").click(function() {
//     city = $("#searchInput").val();
//     // fetchAPI();
  
//     var checkArray = searchHistory.includes(city);
  
//     if (checkArray == true) {
//         return;
//     } else {
//         searchHistory.push(city);
//         localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  
//         var historyButton = $("<a>").attr({
//             class: "list-group-item list-group-item-action",
//             href: "#",
  
//         });
//         historyButton.text(city);
//         $("#searchList").append(historyButton);
//     };
//   });
//   $(".list-group-item").click(function() {
//     city = $(this).text();
//     // fetchAPI();
//   });
  
  
//   var searchHistory = [];
  
//   function getItems() {
//       var storedHistory = JSON.parse(localStorage.getItem("searchHistory"));
//       if (storedHistory !== null) {
//           searchHistory = storedHistory;
//       };
  
//       for (i = 0; i < searchHistory.length; i++) {
//           if (i == 8) {
//               break;
//             }
  
//             historyButton = $("<a>").attr({
//               class: "list-group-item list-group-item-action",
//               href: "#"
//           });
  
//           historyButton.text(searchHistory[i]);
//           $("#searchList").append(historyButton);
//       }
//   };
  
//   getItems();
