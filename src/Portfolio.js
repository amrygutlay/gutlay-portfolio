import React from 'react';
import './style.css';
import bitram from './img/8bitram.JPG';

function Portfolio() {
  return (
    <div className="Portfolio">
      <h1>Portfolio</h1>
      <ul>
        <img src={bitram} className="eytbitram" alt="ram" />
        <br></br><b>8-bit Computer (Random Access Memory) </b><br></br> <i>In partial fulfillment of the course CPE 310-Computer Architecture and Organization</i>
      </ul>
    </div>
  );
}

export default Portfolio;
