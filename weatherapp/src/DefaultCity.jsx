import React from 'react';

import './defaultcity.css'

function DefaultCity(props) {
    
        let data = props.data
    
    
    
    return (
        <div className="defaultcityies">
            <div className="name">
            <p>{data.name}</p>
                <div className="temp">
                <h2>17.0°C</h2>
                </div>
              
             </div> 
         
        </div>

    );
  }
  
  export default DefaultCity;