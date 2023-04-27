import React from 'react';

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
            <p>Max {data.weather ? <span className="bold" >{Math.round((data.main.temp_max-273.15) * 10)/10}°C</span> : null}
           </p>
             </div> 
        <div className="min">
            <p>Min {data.weather ? <span className="bold" >{Math.round((data.main.temp_min-273.15) * 10)/10}°C</span> : null}
           </p>
             </div> 

        <div className="feels">
            <p>Feels like</p>
           {data.weather ? <span className="bold" >{Math.round((data.main.feels_like-273.15) * 10)/10}°C</span> : null}
             </div> 
        <div className="humidity">
          <p>Humidity</p>
            {data.weather ? <span className="bold" >{data.main.humidity}%</span> : null}
            
        </div>
        <div className="wind">
            <p>Wind</p>
            {data.weather ? <span className="bold" >{(Math.round(data.wind.speed*1.609*10)/10)} kmh</span> : null} 
           
            </div>
     </div>
           
  
          
      
        

    
      
    );
  }
  
  export default CurrentWeather;