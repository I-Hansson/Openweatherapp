import React, { useEffect, useState } from 'react';
import './App.css';
import CurrentWeather from './CurrentWeather';
import DefaultCity from './DefaultCity';
function Dashboard(props) {
    
    const selectedData = props.data
    const defaultCityArray = props.defaultData
    const [result, setResult] = useState()
  


 function displayCities() {
  

  return (

    <div className='defaultScreen'> 
    <p>{defaultCityArray.length}</p>
    {defaultCityArray.map((city) => {
      console.log("I was here")
      return <DefaultCity data={city} />
    })} 
    </div>
  )
 }

    
    return (
      <div className="overview">

          {props.data.main ? 
          <CurrentWeather data = {selectedData} />
          :
          displayCities()
          }
      </div>
    );
  }
  
  export default Dashboard;
  

  