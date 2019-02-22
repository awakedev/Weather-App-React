import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY =  "b4810559bdb5e195b5bb6d3bfd7d8da5";
class App extends React.Component {
  getWeather = async () => {
    const api_call = await fetch(`api.openweathermap.org/data/2.5/weather?q=Belfast,Uk&appid=${API_KEY}&units=metric`);

    const data = await api_call.json();
  
    
  }

  render() {
    return (
      <div>
        <Titles/>
        <Form />
        <Weather/>
      </div>
    );
  }
}

export default App;