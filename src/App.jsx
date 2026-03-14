import { useState ,useEffect } from 'react'
import Search from './components/Search'
import './App.css'
import axios from 'axios';
import Result from './components/Result'
function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null); // Array ki jagah null rakhein

  const changeSearch = (value) => {
    setSearch(value);
  };

  const searchWeatherHandler = () => {
  if (search === "") return;

  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=7bfdfda5b2de778ee892db3a7d27d2b7&units=metric`)
  
    .then((response) => {
      setWeather(response.data);
    })
    .catch((error) => {
      console.log("Error aa gaya bhai:", error.response?.data?.message || error.message);
      setWeather(null);
    });
};

  return (
    <div className='max-w-[1240px] mx-auto mt-4 p-5'>
  
      <Search 
        searchData={search} 
        eventHandler={changeSearch} 
        searchWeather={searchWeatherHandler}
      />
      
      {/* Result tabhi dikhao jab weather data ho */}
      {weather && <Result weatherData={weather} />}
    </div>
  );
}

export default App
