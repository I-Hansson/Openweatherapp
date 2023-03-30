
import './App.css';
import React, {useState} from 'react';
import BackgroundImage from './BackgroundImage';
import backgroundImage from './assets/sun.jpg';
import newBackgroundImage from './assets/rain.webp';
import Overview from './Overview';
import axios from "axios";

function App() {
   const [location, setLocation] = useState('');
    const apiKey = '6af6993cb7c44b41c3681babc26c543d'
const [polData, setPolData] = useState({});
    let lat = ""
    let lon = ""
    const cityToLatLon = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${apiKey}`
    
 
   
    const getData = (event) => {
      if (event.key === 'Enter') {
          console.log(location)
          setLocation('')

      
      axios.get(cityToLatLon).then((response) => {
      lat = response.data[0].lat
      lon = response.data[0].lon
      
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`).then((response) => {
      setPolData(response.data)
      console.log(response.data)
      })
      })
      }
    } 
      
    
    


  const [background, setBackground] = useState(backgroundImage);
  const changeBackground = () => {
    setBackground(newBackgroundImage);
  };
  return (
    <div className="App">
      <input 
        value = {location}
        onChange={event => {setLocation(event.target.value)}}
        onKeyDown = {getData}
        placeholder='City'
        type ="text" />
      <BackgroundImage image={background} newImage={newBackgroundImage} changeBackground={changeBackground} />
      <Overview data = {polData} />
    
    </div>
  );
}

export default App;