import React from 'react';
import '../style.css';

function AboutMe() {
  return (
    <div className="aboutme-wrapper">
      {/* About Me Card */}
      <div className="aboutme-card">
        <h2>About Me</h2>
        <p>
          I am a 4th year college student pursuing a Bachelor of Science in Computer Engineering at the
          Technological Institute of the Philippines Manila. I'm building a strong foundation to become
          a future Computer Engineer. Outside of academics, I enjoy discovering new hobbies in music,
          art, and more. I'm always eager to learn and grow.
        </p>
      </div>

      {/* Educational Attainment Card */}
      <div className="aboutme-card">
        <h2>Educational Attainment</h2>
        <div>
          <h4>Elementary</h4>
          <b>Bagong Barangay Elementary School</b> <br />
          <i>2010–2016</i>

          <h4>Junior High School</h4>
          <b>Carlos P. Garcia High School</b> <br />
          <i>2016–2020</i>

          <h4>Senior High School</h4>
          <b>Arellano University Juan Sumulong Campus</b> <br />
          <i>2020–2022</i>

          <h4>College</h4>
          <b>Technological Institute of the Philippines Manila</b> <br />
          <i>2022–2026</i>
        </div>
      </div>

      {/* Skills Card */}
      <div className="aboutme-card">
        <h2>Skills</h2>
        <ul>
          <li>React, HTML, CSS</li>
          <li>Python Programming</li>
          <li>Basic Networking</li>
          <li>Arduino Projects</li>
          <li>UI/UX Design (Figma, Canva)</li>
          <li>Git & GitHub</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
