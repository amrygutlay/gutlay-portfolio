import React from 'react';
import photo from '../img/ID_Gutlay.jpeg';
import '../style.css';

function Homepage() {
  const handleViewWork = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container" id="home">
      <div className="home-left">
        <img src={photo} className="profile-photo" alt="Amry Judith T. Gutlay" />
      </div>

      <div className="home-right">
        <h1 className="intro-heading">Hi, I'm Amry!</h1>
        <p className="intro-sub">
          <b><i>Cybersecurity Specialist</i></b>
        </p>
        <p className="intro-tagline">
          Passionate about innovation, security, and building solutions that matter.
        </p>

        <button className="cta-button" onClick={handleViewWork}>
          View My Work
        </button>
      </div>
    </div>
  );
}

export default Homepage;
