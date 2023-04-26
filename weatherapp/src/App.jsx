
import './App.css';
import React, {useState, useEffect} from 'react';
import Dashboard from './dashboard/Dashboard';
import BackgroundImage from './BackgroundImage';
import backgroundImage from './assets/blue.png';
import axios from "axios";

function App() {
const [location, setLocation] = useState(''); 
const apiKey = '8258e2d6f1b0ef4fa041da86c4c5b8e1'
const [currentData, setCurrentData] = useState('');
const [defaultCities,setDefaultCities] = useState([])
const [background, setBackground] = useState(backgroundImage);

    //calls on input, set current data of a specifc city
    const onEnter = (event) =>{
      if (event.key === 'Enter') {
        setLocation("")
        getData(location).then((data) => {
          setCurrentData(data);
        });  
    }
  }
  // using axios to sent and recive https requests
  // translate the city to geo coordinates and return the data
  const getData = (loc) => {
    return axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${loc}&limit=1&appid=${apiKey}`)
      .then((response) => {
        const lat = response.data[0].lat;
        const lon = response.data[0].lon;
        
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
          .then((response) => {
            return response.data;
          });
      });
  }
  //init the default cities, get data from the api and store it in an array.
  const initCities = () => {
    const cities = ["London", "Stockholm", "Tenhult", "Copenhagen"];
    const promises = cities.map(city => getData(city));
    return Promise.all(promises);
  };

  useEffect(() => {
    initCities().then(data => setDefaultCities(data));
  }, []);

const handleClick = () => {
  setCurrentData("")
}
  return (
    <div className="App">
      <div className ="title">
      <p className='selectCity'>Input city to see weather</p>
      </div>
      
      <input 
        className='search'
        value = {location}
        onChange={event => {setLocation(event.target.value)}}
        onKeyDown = {onEnter}
        placeholder='City' 
        type ="text" />
      <BackgroundImage image={background} />

      <Dashboard data = {currentData} defaultCities = {defaultCities}/>

      {currentData.main ?
      <div className ="button">
        <button onClick = {handleClick}>Back</button>
      </div>:
    null
    }
    </div>
  );
}
export default App;
