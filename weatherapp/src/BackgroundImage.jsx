import React, { useState } from 'react';


function BackgroundImage(props) {
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








  /*  const images = {
        background : 'url("background.jpg")'
    }
    
    return (
        <div className = "backgroundImage">
            <img src={images.background}/>
        </div>
    )
  }*/
  

  