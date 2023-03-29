
import './App.css';
import React, {useState} from 'react';
import BackgroundImage from './BackgroundImage';
import backgroundImage from './assets/sun.jpg';
import newBackgroundImage from './assets/rain.webp';
import Overview from './Overview';
function App() {
  const [background, setBackground] = useState(backgroundImage);
  const changeBackground = () => {
    setBackground(newBackgroundImage);
  };
  return (
    <div className="App">
      
      <BackgroundImage image={background} newImage={newBackgroundImage} changeBackground={changeBackground} />
      <Overview />
    
    </div>
  );
}

export default App;