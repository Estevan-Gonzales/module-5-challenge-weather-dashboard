//Clear local storage
localStorage.clear();

//Hide main content element
var mainContentEl = document.getElementById('main-content');
mainContentEl.style.display = "none";

//New city variables
var cityInputEl = document.getElementById('city-input');
var cityListEl = document.getElementById('city-list');
var addCityButton = document.getElementById('btn-add-city');
addCityButton.addEventListener('click', addCity)

//Current weather information
var currentCityEl = document.getElementById('current-city');
var currentIconEl = document.getElementById('current-icon');
var currentTempEl = document.getElementById('current-temp');
var currentWindEl = document.getElementById('current-wind');
var currentHumiEl = document.getElementById('current-humi');

//Forecast information for +1 day
var forecastOneDateEl = document.getElementById('forecast-one-date');
var forecastOneIconEl = document.getElementById('forecast-one-icon');
var forecastOneTempEl = document.getElementById('forecast-one-temp');
var forecastOneWindEl = document.getElementById('forecast-one-wind');
var forecastOneHumiEl = document.getElementById('forecast-one-humi');

//Forecast information for +2 day
var forecastTwoDateEl = document.getElementById('forecast-two-date');
var forecastTwoIconEl = document.getElementById('forecast-two-icon');
var forecastTwoTempEl = document.getElementById('forecast-two-temp');
var forecastTwoWindEl = document.getElementById('forecast-two-wind');
var forecastTwoHumiEl = document.getElementById('forecast-two-humi');

//Forecast information for +3 day
var forecastThreeDateEl = document.getElementById('forecast-three-date');
var forecastThreeIconEl = document.getElementById('forecast-three-icon');
var forecastThreeTempEl = document.getElementById('forecast-three-temp');
var forecastThreeWindEl = document.getElementById('forecast-three-wind');
var forecastThreeHumiEl = document.getElementById('forecast-three-humi');

//Forecast information for +4 day
var forecastFourDateEl = document.getElementById('forecast-four-date');
var forecastFourIconEl = document.getElementById('forecast-four-icon');
var forecastFourTempEl = document.getElementById('forecast-four-temp');
var forecastFourWindEl = document.getElementById('forecast-four-wind');
var forecastFourHumiEl = document.getElementById('forecast-four-humi');

//Forecast information for +5 day
var forecastFiveDateEl = document.getElementById('forecast-five-date');
var forecastFiveIconEl = document.getElementById('forecast-five-icon');
var forecastFiveTempEl = document.getElementById('forecast-five-temp');
var forecastFiveWindEl = document.getElementById('forecast-five-wind');
var forecastFiveHumiEl = document.getElementById('forecast-five-humi');


//-----------------------------------------------------------------Functions

//Takes one event argument adds city to list
function addCity(event) {
    event.preventDefault();
    var newCityEl = document.createElement('li');
    newCityEl.textContent = cityInputEl.value;
    newCityEl.setAttribute('id', cityInputEl.value);
    newCityEl.setAttribute('style', 'text-align: center; border-radius: 5px; list-style-type: none; background-color: grey; color: white; grey; padding: 5px; margin: 5px;');
    getInfo(cityInputEl.value);
    newCityEl.addEventListener('click', showCityDetails);
    cityListEl.append(newCityEl);
    cityInputEl.value = "";
}

//Takes one event argument and displays selected city details
function showCityDetails(event) {
    event.preventDefault();
    var today = dayjs().format("dddd, MMMM DD, YYYY")

    currentCityEl.textContent = event.srcElement.id + " (" + today + ")";
    var iconCode = localStorage.getItem(event.srcElement.id + 'icon')
    currentIconEl.setAttribute('src', 'http://openweathermap.org/img/w/' + iconCode + '.png');
    currentTempEl.textContent = 'Temperature: ' + convertTemp(localStorage.getItem(event.srcElement.id + 'temp')) + "°F";
    currentWindEl.textContent = 'Wind Speed: ' + localStorage.getItem(event.srcElement.id + 'wind') + " MPH";
    currentHumiEl.textContent = 'Humidity: ' + localStorage.getItem(event.srcElement.id + 'humi') + '%';

    forecastOneDateEl.textContent = dayjs().add(1, 'day').format('MM-DD-YYYY');
    var iconOneCode = localStorage.getItem(event.srcElement.id + 'icon' + 0)
    forecastOneIconEl.setAttribute('src', 'http://openweathermap.org/img/w/' + iconOneCode + '.png');
    forecastOneTempEl.textContent = convertTemp(localStorage.getItem(event.srcElement.id + 'temp' + 0)) + "°F";
    forecastOneWindEl.textContent = localStorage.getItem(event.srcElement.id + 'wind' + 0) + " MPH";
    forecastOneHumiEl.textContent = localStorage.getItem(event.srcElement.id + 'humi' + 0) + '%';

    forecastTwoDateEl.textContent = dayjs().add(2, 'day').format('MM-DD-YYYY');
    var iconTwoCode = localStorage.getItem(event.srcElement.id + 'icon' + 1)
    forecastTwoIconEl.setAttribute('src', 'http://openweathermap.org/img/w/' + iconTwoCode + '.png');
    forecastTwoTempEl.textContent = convertTemp(localStorage.getItem(event.srcElement.id + 'temp' + 1)) + "°F";
    forecastTwoWindEl.textContent = localStorage.getItem(event.srcElement.id + 'wind' + 1) + " MPH";
    forecastTwoHumiEl.textContent = localStorage.getItem(event.srcElement.id + 'humi' + 1) + '%';

    forecastThreeDateEl.textContent = dayjs().add(3, 'day').format('MM-DD-YYYY');
    var iconThreeCode = localStorage.getItem(event.srcElement.id + 'icon' + 2)
    forecastThreeIconEl.setAttribute('src', 'http://openweathermap.org/img/w/' + iconThreeCode + '.png');
    forecastThreeTempEl.textContent = convertTemp(localStorage.getItem(event.srcElement.id + 'temp' + 2)) + "°F";
    forecastThreeWindEl.textContent = localStorage.getItem(event.srcElement.id + 'wind' + 2) + " MPH";
    forecastThreeHumiEl.textContent = localStorage.getItem(event.srcElement.id + 'humi' + 2) + '%';

    forecastFourDateEl.textContent = dayjs().add(4, 'day').format('MM-DD-YYYY');
    var iconFourCode = localStorage.getItem(event.srcElement.id + 'icon' + 3)
    forecastFourIconEl.setAttribute('src', 'http://openweathermap.org/img/w/' + iconFourCode + '.png');
    forecastFourTempEl.textContent = convertTemp(localStorage.getItem(event.srcElement.id + 'temp' + 3)) + "°F";
    forecastFourWindEl.textContent = localStorage.getItem(event.srcElement.id + 'wind' + 3) + " MPH";
    forecastFourHumiEl.textContent = localStorage.getItem(event.srcElement.id + 'humi' + 3) + '%';

    forecastFiveDateEl.textContent = dayjs().add(5, 'day').format('MM-DD-YYYY');
    var iconFiveCode = localStorage.getItem(event.srcElement.id + 'icon' + 4)
    forecastFiveIconEl.setAttribute('src', 'http://openweathermap.org/img/w/' + iconFiveCode + '.png');
    forecastFiveTempEl.textContent = convertTemp(localStorage.getItem(event.srcElement.id + 'temp' + 4)) + "°F";
    forecastFiveWindEl.textContent = localStorage.getItem(event.srcElement.id + 'wind' + 4) + " MPH";
    forecastFiveHumiEl.textContent = localStorage.getItem(event.srcElement.id + 'humi' + 4) + '%';

    mainContentEl.style.display = "";
}

//Takes one argument and retrieves lat/long information.
function getInfo(city) {
    requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=5&appid=61b0e28df45740de971760b1d1fef5c5'

    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        console.log(data);

        var latitude = data[0].lat;
        var longitude = data[0].lon;

        getInfoFromCoords(latitude, longitude, city)
    });
}

//Takes three arguments and returns weather information for a city
function getInfoFromCoords(lat, lon, city) {
    requestUrl = 'http://api.openweathermap.org/data/3.0/onecall?lat=' + lat + '&lon=' + lon + '&appid=61b0e28df45740de971760b1d1fef5c5';
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        localStorage.setItem(city + 'icon', data.current.weather[0].icon);
        localStorage.setItem(city + 'temp', data.current.temp);
        localStorage.setItem(city + 'wind', data.current.wind_speed);
        localStorage.setItem(city + 'humi', data.current.humidity);

        for (i = 0; i < 5; i++) {
            localStorage.setItem(city + 'icon' + i, data.daily[i].weather[0].icon);
            localStorage.setItem(city + 'temp' + i, data.daily[i].temp.day);
            localStorage.setItem(city + 'wind' + i, data.daily[i].wind_speed);
            localStorage.setItem(city + 'humi' + i, data.daily[i].humidity);
        }
        
        currentTemp = data.current.temp;
    });
}

//Takes one string argument and returns temperature as Fahrenheit
function convertTemp(kelvin) {
    var Fahrenheit = 1.8 * (kelvin - 273) + 32;
    return Fahrenheit.toFixed(2);
}

//---------------------------------------------------------------------------Add Default City

//Takes one string argument and adds default city
function addDefaultCity(city) {
    var newCityEl = document.createElement('li');
    newCityEl.textContent = city;
    newCityEl.setAttribute('id', city);
    newCityEl.setAttribute('style', 'text-align: center; border-radius: 5px; list-style-type: none; background-color: grey; color: white; grey; padding: 5px; margin: 5px;');
    getInfo(city);
    newCityEl.addEventListener('click', showCityDetails);
    cityListEl.append(newCityEl);
    cityInputEl.value = "";
}

//Takes one string argument and displays city weather information
function showDefaultCityDetails(city) {

    var today = dayjs().format("dddd, MMMM DD, YYYY")

    currentCityEl.textContent = city + " (" + today + ")";
    var iconCode = localStorage.getItem(city + 'icon')
    currentIconEl.setAttribute('src', 'http://openweathermap.org/img/w/' + iconCode + '.png');
    currentTempEl.textContent = 'Temperature: ' + convertTemp(localStorage.getItem(city + 'temp')) + "°F";
    currentWindEl.textContent = 'Wind Speed: ' + localStorage.getItem(city + 'wind') + " MPH";
    currentHumiEl.textContent = 'Humidity: ' + localStorage.getItem(city + 'humi') + '%';

    forecastOneDateEl.textContent = dayjs().add(1, 'day').format('MM-DD-YYYY');
    var iconOneCode = localStorage.getItem(city + 'icon' + 0)
    forecastOneIconEl.setAttribute('src', 'http://openweathermap.org/img/w/' + iconOneCode + '.png');
    forecastOneTempEl.textContent = convertTemp(localStorage.getItem(city + 'temp' + 0)) + "°F";
    forecastOneWindEl.textContent = localStorage.getItem(city + 'wind' + 0) + " MPH";
    forecastOneHumiEl.textContent = localStorage.getItem(city + 'humi' + 0) + '%';

    forecastTwoDateEl.textContent = dayjs().add(2, 'day').format('MM-DD-YYYY');
    var iconTwoCode = localStorage.getItem(city + 'icon' + 1)
    forecastTwoIconEl.setAttribute('src', 'http://openweathermap.org/img/w/' + iconTwoCode + '.png');
    forecastTwoTempEl.textContent = convertTemp(localStorage.getItem(city + 'temp' + 1)) + "°F";
    forecastTwoWindEl.textContent = localStorage.getItem(city + 'wind' + 1) + " MPH";
    forecastTwoHumiEl.textContent = localStorage.getItem(city + 'humi' + 1) + '%';

    forecastThreeDateEl.textContent = dayjs().add(3, 'day').format('MM-DD-YYYY');
    var iconThreeCode = localStorage.getItem(city + 'icon' + 2)
    forecastThreeIconEl.setAttribute('src', 'http://openweathermap.org/img/w/' + iconThreeCode + '.png');
    forecastThreeTempEl.textContent = convertTemp(localStorage.getItem(city + 'temp' + 2)) + "°F";
    forecastThreeWindEl.textContent = localStorage.getItem(city + 'wind' + 2) + " MPH";
    forecastThreeHumiEl.textContent = localStorage.getItem(city + 'humi' + 2) + '%';

    forecastFourDateEl.textContent = dayjs().add(4, 'day').format('MM-DD-YYYY');
    var iconFourCode = localStorage.getItem(city + 'icon' + 3)
    forecastFourIconEl.setAttribute('src', 'http://openweathermap.org/img/w/' + iconFourCode + '.png');
    forecastFourTempEl.textContent = convertTemp(localStorage.getItem(city + 'temp' + 3)) + "°F";
    forecastFourWindEl.textContent = localStorage.getItem(city + 'wind' + 3) + " MPH";
    forecastFourHumiEl.textContent = localStorage.getItem(city + 'humi' + 3) + '%';

    forecastFiveDateEl.textContent = dayjs().add(5, 'day').format('MM-DD-YYYY');
    var iconFiveCode = localStorage.getItem(city + 'icon' + 4)
    forecastFiveIconEl.setAttribute('src', 'http://openweathermap.org/img/w/' + iconFiveCode + '.png');
    forecastFiveTempEl.textContent = convertTemp(localStorage.getItem(city + 'temp' + 4)) + "°F";
    forecastFiveWindEl.textContent = localStorage.getItem(city + 'wind' + 4) + " MPH";
    forecastFiveHumiEl.textContent = localStorage.getItem(city + 'humi' + 4) + '%';

    mainContentEl.style.display = "";

}

//Takes zero arguments and launches default city functions on page load
function launchDefaultCity() {
    //executes immediately
    addDefaultCity('Austin');
    setTimeout(function () {
        //executes after time is up
        console.log('b')
        showDefaultCityDetails('Austin');
    }, 1500);
}

launchDefaultCity();
