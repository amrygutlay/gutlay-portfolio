// Homepage.js
import React from 'react';
import photo from './img/ID_Gutlay.jpeg';
import './style.css';

function Homepage() { 
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Get to know about me...</h1> <br></br>
      </header>
      <img src={photo} className="photo" alt='myphoto' />

      <div className='home-content'>
        <h1>Amry Judith T. Gutlay </h1>
        <p> <b>
          <i>
            Bachelor of Science in Computer Engineering Major in Cybersecurity <br></br>
            </i>
            </b> </p>
      </div>
              
      
              

    </div>

  );
}

export default Homepage;
