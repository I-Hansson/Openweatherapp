import React from 'react';

import './defaultcity.css'
import rainy from './assets/rain.png'
import sunny from './assets/sunny.png'
import windy from './assets/windy.png'
import cloudy from './assets/cloudy.png'
import test from './App'
function DefaultCity(props) {
        let data = props.data
        function setImg(){
            var current = sunny
            console.log(data.weather[0].main)
            if (data.weather[0].main === 'Clouds'){
                current = cloudy
            }
            else if(data.weather[0].main === 'Rain'){
                current = rainy
            }
            else if(data.weather[0].main === 'Wind'){
                current = windy
            }
            return(
                current
            )
        }


        
    return (
        <div className="defaultcityies">
            <div className="name">
            <p>{data.name}</p>
                <div className="temp">
                <h2>{Math.round((data.main.temp_min-273.15) * 10)/10}°C</h2>
                </div>
                <div className="img">
                <img src={setImg()} alt="" />
                </div>
             </div> 
             
        </div>

    );
  }
  
  export default DefaultCity;