import React from 'react';
import './App.css';
import CurrentWeather from './CurrentWeather';
import DefaultCity from './DefaultCity';
function Dashboard(props) {
    const selectedData = props.data
    const defaultCityArray= props.defaultData
    return ( // return either the selected data from the input or default weather
      <div className="overview">
          {props.data.main ? 
          <CurrentWeather data = {selectedData} />
          :
          <div className='defaultScreen'>  
            {defaultCityArray.map(element => { // default weather from api
               return <DefaultCity data={element} />
            })
            }
         </div>
          }
      </div>
    );
  }
  
  export default Dashboard;
  

  