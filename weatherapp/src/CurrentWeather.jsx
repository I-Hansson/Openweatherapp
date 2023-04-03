import React, { useState } from 'react';
import './App.css';
import './currentData.css'
function CurrentWeather(props) {
    const data = props.data
    return (
      <div className="widget">
      <div className="top"> 
          <div className="location">
            <p>{data.name}</p>
            <div className="temp"> 
            {data.main ? <h1>{Math.round((data.main.temp-273.15) * 10)/10}°C</h1> : null}
            </div>
            <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>

        </div>
        
        <div className="max">
            <p>Max {data.weather ? <p className="bold" >{Math.round((data.main.temp_max-273.15) * 10)/10}°C</p> : null}
           </p>
             </div> 
        <div className="min">
            <p>Min {data.weather ? <p className="bold" >{Math.round((data.main.temp_min-273.15) * 10)/10}°C</p> : null}
           </p>
             </div> 

        <div className="feels">
            <p>Feels like</p>
           {data.weather ? <p className="bold" >{Math.round((data.main.feels_like-273.15) * 10)/10}°C</p> : null}
             </div> 
        <div className="humidity">
          <p>Humidity</p>
            {data.weather ? <p className="bold" >{data.main.humidity}%</p> : null}
            
        </div>
        <div className="wind">
            <p>Wind</p>
            {data.weather ? <p className="bold" >{(Math.round(data.wind.speed*1.609*10)/10)} kmh</p> : null} 
           
            </div>
     </div>
           
  
          
      
        

    
      
    );
  }
  
  export default CurrentWeather;