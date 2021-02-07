import React, { useState } from "react";
import "./Search.css"
import axios from "axios";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [information, setInformation] = useState({});
  const [loaded, setLoaded] = useState(false);

  function updateCity(event) {
    console.log(event.target.value);
    setCity(event.target.value);
  }

  function displayInfo(response) {
    console.log(response);
    setInformation({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
    setLoaded(true);
  }

  function submitSearch(event) {
    event.preventDefault();
    if (city.length > 0) {
      let apiKey = "1b88d0740b7a27a249ebb4be51a2bdac";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      axios
        .get(url)
        .then(displayInfo)
        .catch((error) => {
          setLoaded(false);
          alert("Please type a valid city");
          console.log(error.response);
        });
    } else {
      alert("Please type a city");
      setLoaded(false);
    }
  }

  let list;
  if (loaded) {
    list = (
      <ul className="list">
        <li>Temperature: {Math.round(information.temperature)}</li>
        <li>Description: {information.description}</li>
        <li>Humidity: {information.humidity}</li>
        <li>Wind: {information.wind}</li>
        <li>
          <img src={information.iconUrl} alt={information.description} />
        </li>
      </ul>
    );
  }

  return (
    <div className="SearchEngine">
      <form onSubmit={submitSearch}>
        <input type="search" placeholder="Type a city" onChange={updateCity} />
        <button type="submit"><div className="search"></div><span></span></button>
      </form>
      {list}
    </div>
  );
}
