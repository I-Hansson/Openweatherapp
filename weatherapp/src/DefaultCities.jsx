import React, { useState } from 'react';
import './App.css';

function DefaultCities(props) {
    var city = props.city
    var temp = props.temp

    return (
      <div className="widget">
            <h2>{city} </h2> 
            <h3>{temp}</h3>
      </div>
    );
  }
  
  export default DefaultCities;