
import './App.css';
import React, {useState, useEffect,useRef, useMemo} from 'react';
import Dashboard from './Dashboard';
import BackgroundImage from './BackgroundImage';
import backgroundImage from './assets/blue.png';


import axios from "axios";

function App() {
const [location, setLocation] = useState('');
const apiKey = 'Insert API KEY'
const [polData, setPolData] = useState('');
const [background, setBackground] = useState(backgroundImage);

    const onEnter = (event) =>{
      if (event.key === 'Enter') {
        setLocation("")
        getData(location).then((data) => {
          setPolData(data);
          
        });
        
    }
  }
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




const initCities = () =>{
  let result = []
  const cities= ["London", "Stockholm", "Madrid", "copenhagen"]
    for(let i = 0; i < 4;i++){ //ändra till dot map
      getData(cities.at(i)).then((data) => {
        result.push(data)
      });
    }
    return result
}

const [defaultCities,setDefaultCities] = useState([])
useEffect(() => {
  
    setDefaultCities(initCities())
  
},[])

const handleClick = () => {
  setPolData("")
}


  return (
    <div className="App">
      <input 
        className='search'
        value = {location}
        onChange={event => {setLocation(event.target.value)}}
        onKeyDown = {onEnter}
        placeholder='City' 
        type ="text" />
      <BackgroundImage image={background} />
      
     <Dashboard data = {polData} defaultData = {defaultCities}/>
     <div className ="button">
       <button onClick = {handleClick}>Back</button>
     </div>
    
    </div>
  );
}

export default App;