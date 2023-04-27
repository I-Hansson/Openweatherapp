import React,{useEffect, useState}  from 'react';

import CurrentWeather from './CurrentWeather';
import DefaultCity from './DefaultCity';

function Dashboard(props) {
    const selectedData = props.data
    const [defaultCity ,SetDefaultCity] = useState([]);

    useEffect(() => {
      SetDefaultCity(props.defaultCities)
    }, [props.defaultCities]);

    return ( // return either the selected data from the input or default weather
      <div className="dashboard">
          {props.data.main ? 
          <CurrentWeather data = {selectedData} />
          :
          <div className='defaultScreen'>  
          {defaultCity.map((element, index) => { 
              return <DefaultCity key={index} data={element} />
          })}
          </div>
          }
      </div>
    );
  }
  
  export default Dashboard;
  

  