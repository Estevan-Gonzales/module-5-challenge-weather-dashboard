var cityInputEl = document.getElementById('city-input');
var cityListEl = document.getElementById('city-list');
var addCityButton = document.getElementById('btn-add-city');

function addCity(event) {
    event.preventDefault();
    var newCityEl = document.createElement('li');
    newCityEl.textContent = cityInputEl.value;
    cityListEl.append(newCityEl);
}

addCityButton.addEventListener('click', addCity)
