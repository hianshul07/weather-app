let data;

const inputBox = document.getElementById("inputBox");
const country = document.getElementById("countryName");
const state = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temprature = document.getElementById("temprature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");

const getData = async (event) => {
	event.preventDefault();
	if (!inputBox.value) {
		alert("Please enter a city name");
		return;
	}

	const city = inputBox.value;

	const fetchData =
		await fetch(`http://api.weatherapi.com/v1/current.json?key=9bd1b79a557f45adb4671215232206&q=${city}
  `);

	const orgData = await fetchData.json();
	data = orgData;
	console.log(data);

	// state.innerHTML = data.location.region;
	country.innerHTML = data.location.country;
	state.innerHTML = data.location.region;
	cityName.innerHTML = data.location.name;
	humidity.innerHTML = data.current.humidity;
	windSpeed.innerHTML = data.current.wind_kph;
	temprature.innerHTML = data.current.temp_c;
	logoImage.src = data.current.condition.icon;
	weatherStatus.innerHTML = data.current.condition.text;
};
