import React, { useState } from 'react';
function BackgroundImage(props) {
    // full component to easy extend the program with dynamic backgroundimages. 
    const [background, setBackground] = useState(props.image);
  
    const changeBackground = () => {
      setBackground(props.newImage);
    };
  
    const backgroundStyles = {
      backgroundImage: `url(${background})`,
      height : '100vh',
      with : '100%',
      backgroundSize: 'cover',
    };
  
    return (
      <div className="background-image" style={backgroundStyles}>
             
      </div>
    );
  }
  
  export default BackgroundImage;
  