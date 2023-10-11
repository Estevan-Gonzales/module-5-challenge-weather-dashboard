localStorage.clear();

var cityInputEl = document.getElementById('city-input');
var cityListEl = document.getElementById('city-list');
var addCityButton = document.getElementById('btn-add-city');
var currentCityEl = document.getElementById('current-city');
var currentTempEl = document.getElementById('current-temp');
var currentWindEl = document.getElementById('current-wind');
var currentHumiEl = document.getElementById('current-humi');


function addCity(event) {
    event.preventDefault();
    var newCityEl = document.createElement('li');
    newCityEl.textContent = cityInputEl.value;
    newCityEl.setAttribute('id', cityInputEl.value);
    getInfo(cityInputEl.value);
    newCityEl.addEventListener('click', showCityDetails);

    cityListEl.append(newCityEl);
}

function showCityDetails(event) {
    event.preventDefault();
    currentCityEl.textContent = event.srcElement.id;
    currentTempEl.textContent = localStorage.getItem(event.srcElement.id + 'temp');
    currentWindEl.textContent = localStorage.getItem(event.srcElement.id + 'wind');
    currentHumiEl.textContent = localStorage.getItem(event.srcElement.id + 'humi');

}


addCityButton.addEventListener('click', addCity)

var currentTemp = 10;

function getInfo(city) {
  // replace `octocat` with anyone else's GitHub username
    requestUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=5&appid=61b0e28df45740de971760b1d1fef5c5'

    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        var latitude = data[0].lat;
        var longitude = data[0].lon;

        getInfoFromCoords(latitude, longitude, city)
    });
}

function getInfoFromCoords(lat, lon, city) {
    requestUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat=' + lat + '&lon=' + lon + '&appid=61b0e28df45740de971760b1d1fef5c5';
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        localStorage.setItem(city + 'temp', data.current.temp);
        localStorage.setItem(city + 'wind', data.current.wind_speed);
        localStorage.setItem(city + 'humi', data.current.humidity);

        currentTemp = data.current.temp;
    });


}
