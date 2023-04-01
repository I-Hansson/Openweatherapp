import React, { useEffect, useState } from 'react';
import './App.css';
import CurrentWeather from './CurrentWeather';
import DefaultCity from './DefaultCity';
function Dashboard(props) {
    
    const selectedData = props.data
    const defaultCityArray= props.defaultData
    return (
      <div className="overview">

          {props.data.main ? 
          <CurrentWeather data = {selectedData} />
          :
          <div className='defaultScreen'>  
          
            {defaultCityArray.map(element => {
               return <DefaultCity data={element} />
            })
            }
         </div>
          }
      </div>
    );
  }
  
  export default Dashboard;
  

  