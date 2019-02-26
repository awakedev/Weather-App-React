import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "b4810559bdb5e195b5bb6d3bfd7d8da5";
class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined

  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.element.city.value;
    const country = e.target.element.country.value;

    const api_call = await fetch(`api.openweathermap.org/data/2.5/weather?q={city},{country}&appid=${API_KEY}&units=metric`);

    const data = await api_call.json();

    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error
    });


  }

  render() {
    return ( 
    < div >
      < Titles / >
      < Form getWeather = {
        this.getWeather
      } /> < Weather / >
      </div>
    );
  }
}

export default App;