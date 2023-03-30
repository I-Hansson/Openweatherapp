import React, { useState } from 'react';
import './App.css';

function CurrentWeather(props) {
    const data = props.data
    return (
      <div className="widget">
        <div className="name"> 
            {data.main ? <h1>{data.name}</h1> : null}
        </div>
            <div className="temp"> 
              {data.main ? <h1>{Math.round((data.main.temp-273.15) * 10)/10}°C</h1> : null}
            </div>
            <div className="tempmax"> 
              {data.main ? <h3>H:{Math.round((data.main.temp_max-273.15) * 10)/10}°C</h3> : null}
            </div>
            <div className="tempmin"> 
              {data.main ? <h3>L:{Math.round((data.main.temp_min-273.15) * 10)/10}°C</h3> : null}
            </div>

      </div>
    );
  }
  
  export default CurrentWeather;