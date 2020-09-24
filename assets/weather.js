$(document).ready(function (){ 

    var dateEl = document.querySelector("showDate");
    var currentWeatherEl = $("#currentWeather");
    var document.getElementById('textbox_id').value
    


    // var currentDate = moment().format("dddd, MMM Do");
    // $("currentDay").texttext(currentDate);
    // to be place in five day forecast boxes
    // var forecastDay1 = moment().add(1, 'd').format("dddd, MMMM Do" );
    // var forecastDay2 = moment().add(2, 'd').format("dddd, MMMM Do" );
    // var forecastDay3 = moment().add(3, 'd').format("dddd, MMMM Do" );
    // var forecastDay4 = moment().add(4, 'd').format("dddd, MMMM Do" );
    // var forecastDay5 = moment().add(5, 'd').format("dddd, MMMM Do" );
    let cityInput = document.querySelector(".weather-input");

    $('body').on('submit', '.weather-input', function(e){
         e.preventDefault();
    
         cityInput = $(".weather-input").val();
        // cityInput = $("#weather-input").val().trim();
        console.log($(".weather-input").val());
        currentWeather()
    });
    
    function currentWeather() {
    
    $.ajax({
           
    Url:"https//:api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=39eae95405dc00263b6e3f3f0815b6b4&unit=imperial",
    method: "GET"
    
    }).then(function (data) {
    
         Console.log (data )

    })
    }
})

    $.ajax({
           method: "GET"

//     Url:"https//:api.openweathermap.org/data/2.5/weather?q=" +{---} + "&appid=39eae95405dc00263b6e3f3f0815b6b4&unit=imperial)),
    
//     }).then(function (data) {

//          Console.log data); 
//     }

    function init() {    
    if (JSON.parse(localStorage.getItem("city-name")) !== null) 
    {        storedCities = JSON.parse(localStorage.getItem("city-name"));   
 }    renderHistory();  }

//     // gettin temperture to farenht...

    $(".high-" + i).text("High: " + 
    Math.floor((response.daily[i].temp.max - 
    273.15) * 9/5 + 32) + "\xB0");
    response.daily[i].temp.max - 273.15) * 9/5 + 32) + "\xB0");
    "\xB0"
    // get latitude and longitude/ set key as variable
// City
// enterCity
// submit
// btn
// weather-button
// fas 
// fa-search
// btn btn-secondary
// form-group has-search
// jumbotron
// container
// formInline
// formGroup
// email
// formControl
// weatherInput
// emailHelp

//Import css and JS above title
//Script src in body

//Sources
//CDN JQuery
//Minified and copy and place under JS in bottom 
// search endpoint 
// get a wrapper
// Input typeof
// form div


        // get latitude and

    }