import { useState } from 'react'
import axios from "axios";
import './App.css'

export default function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const apiKey = "ac209dae1f283fb332a5bb7f50b0f468";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showResponse);
  }

  function showResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed * 3.6,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      {weatherData && (
        <div>
          <ul>
            <li>Temperature: {Math.round(weatherData.temperature)}°C</li>
            <li>Description: {weatherData.description}</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {Math.round(weatherData.wind)}km/h</li>
          </ul>
        </div>
      )}
    </div>
  );
}
