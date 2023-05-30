import "./Weather1.css";
import React, { useState } from "react";

function Weather1() {
	const [city, setCity] = useState("");
	const [currentWeather, setCurrentWeather] = useState(null);
	const [forecastWeather, setForecastWeather] = useState([]);

	const handleCityChange = (e) => {
		setCity(e.target.value);
	};

	const getWeather = async () => {
		const apiKey = "89727fd78420e93cc55a572c11542774";

		// Get current weather
		const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		const currentResponse = await fetch(currentUrl);
		const currentData = await currentResponse.json();

		console.log(currentData);

		const currentWeatherHTML = (
			<>
				<div className="card-header justify-content-center">
					<h3>Weather Information</h3>
				</div>
				<div className="card-header">
					<h3>{currentData.name}</h3>
				</div>
				<div className="current-weather">
					<h4>Current Weather</h4>
					<ul>
						<li>
							<strong>Condition:</strong> {currentData.weather[0].description}
						</li>
						<li>
							<strong>Temperature:</strong> {currentData.main.temp}°C
						</li>
						<li>
							<strong>Feels like:</strong> {currentData.main.feels_like}°C
						</li>
					</ul>
					<img
						className="weather-icon"
						src={`http://openweathermap.org/img/w/${currentData.weather[0].icon}.png`}
						alt={currentData.weather[0].main}
						title={currentData.weather[0].main}
					/>
				</div>
			</>
		);

		setCurrentWeather(currentWeatherHTML);

		// Get next daily weather forecast for 5 days
		const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
		const forecastResponse = await fetch(forecastUrl);
		const forecastData = await forecastResponse.json();

		console.log(forecastData);

		const forecastWeatherData = forecastData.list.filter((weather) =>
			weather.dt_txt.includes("12:00:00")
		);
		console.log(forecastWeatherData);

		const forecastItems = forecastWeatherData.map((weather) => (
			<li className="forecast-item">
				<h4>
					{new Date(weather.dt_txt).toLocaleDateString("en-US", {
						day: "numeric",
						month: "short",
					})}
				</h4>
				<div className="weather-details">
					<p className="temperature">{weather.main.temp}°C</p>
					<img
						className="forecast-icon"
						src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
						alt={weather.weather[0].main}
						title={weather.weather[0].main}
					/>
				</div>
			</li>
		));

		setForecastWeather(forecastItems);
	};

	return (
		<div className="card">
			<select value={city} onChange={handleCityChange}>
				<option value="Hyderabad">Hyderabad</option>
				<option value="Chennai">Chennai</option>
				<option value="Mumbai">Mumbai</option>
				<option value="Paris">Paris</option>
				<option value="Tokyo">Tokyo</option>
				<option value="Sydney">Sydney</option>
				<option value="Dubai">Dubai</option>
				<option value="Moscow">Moscow</option>
				<option value="Boston">Boston</option>
				<option value="Los Angeles">Los Angeles</option>
			</select>
			<button onClick={getWeather}>Get Weather</button>

			<div id="currentWeather">{currentWeather}</div>

			<ul id="forecastWeather">{forecastWeather}</ul>
		</div>
	);
}

export default Weather1;
