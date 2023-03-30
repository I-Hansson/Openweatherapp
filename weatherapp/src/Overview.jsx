import React, { useState } from 'react';
import './App.css';
import CurrentWeather from './CurrentWeather';
function Overview(props) {
    
    const indata = props.data
    
    return (
      <div className="overview">
            <CurrentWeather data = {indata} />
        
        
        
      </div>
    );
  }
  
  export default Overview;
  

  