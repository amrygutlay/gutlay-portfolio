import React from 'react';
import '../Portfolio.css';

// ✅ Import images properly
import img8bitRAM from '../img/8bitram.JPG';
import imgCommUnity from '../img/CommUnity.png';
import imgJMBakedGoodies from '../img/J&MBakedGoodies.png';
import imgDCFan from '../img/DCFanVRPS.jpg';
import imgClapSwitch from '../img/ClapSwitch.jpg';
import imgPnoyDishcovery from '../img/PnoyDishcovery.png';
import img3bitUpDownCounter from '../img/3bitUpDownCounter.png';
import imgMazeSolvingRobot from '../img/MazeSolvingRobot.png';
import imgECOBin from '../img/ECOBin.png';


function Portfolio() {
  return (
    <div className="portfolio-container">
      <h2>Portfolio</h2>

      <section className="portfolio-section">
        <h3>Academic Projects</h3>
        <div className="scroll-container">
          <div className="portfolio-card">
            <img src={imgCommUnity} alt="CommUnity Venture" className="project-image" />
            <h4>CommUnity Venture</h4>
            <a
              href="https://drive.google.com/drive/folders/1dJDj3hAuDVnkH0FizrVCrfh_Zgv2AOVJ"
              target="_blank"
              rel="noopener noreferrer"
              className="view-cert-btn"
            >
              View Project
            </a>
          </div>

          <div className="portfolio-card">
            <img src={imgJMBakedGoodies} alt="J&M Baked Goodies Website" className="project-image" />
            <h4>J&M Baked Goodies Website</h4>
            <a
              href="https://tipedu-my.sharepoint.com/:w:/g/personal/majgutlay_tip_edu_ph/EZqdTkeR9P5Ii8pivs73eNUBI3uvG-JP90yoQb7-i6kopA?rtime=Nq1rHMe03Ug"
              target="_blank"
              rel="noopener noreferrer"
              className="view-cert-btn"
            >
              View Project
            </a>
          </div>

          <div className="portfolio-card">
            <img src={imgDCFan} alt="DC Fan Voltage Regulated Power Supply" className="project-image" />
            <h4>DC Fan Voltage Regulated Power Supply</h4>
            <a
              href="https://docs.google.com/document/d/10-0XD7OeTzgzZEeJXC2Zh20MI7PYIChX1zPQUpoGvDY/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="view-cert-btn"
            >
              View Project
            </a>
          </div>

          <div className="portfolio-card">
            <img src={imgClapSwitch} alt="Simple Clap Switch Using 555 Timer" className="project-image" />
            <h4>Simple Clap Switch Using 555 Timer</h4>
            <a
              href="https://docs.google.com/document/d/1fNvD3t3CuMeq2v95DKwQBAvU3gY1ebCv8Tpcn4PM4HA/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="view-cert-btn"
            >
              View Project
            </a>
          </div>

          <div className="portfolio-card">
            <img src={imgPnoyDishcovery} alt="Pnoy Dishcovery Website" className="project-image" />
            <h4>Pnoy Dishcovery Website</h4>
            <a
              href="https://docs.google.com/document/d/1XBfq_pjlngrNVsYLy_JVRrkxdDM_OzpilIm-cptGlVE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="view-cert-btn"
            >
              View Project
            </a>
          </div>

          <div className="portfolio-card">
            <img src={img3bitUpDownCounter} alt="3-Bit Up and Down Counter with Switch Control and Decoder" className="project-image" />
            <h4>3-Bit Up and Down Counter <br></br>with Switch Control and Decoder</h4>
            <a
              href="https://docs.google.com/document/d/18DBG3pDClxdyTlW12LXGu9BT6q7XH6HDA4mNhb2Ihdg/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="view-cert-btn"
            >
              View Project
            </a>
          </div>

          <div className="portfolio-card">
            <img src={imgMazeSolvingRobot} alt="Maze Solving Robot" className="project-image" />
            <h4>Maze Solving Robot</h4>
            <a
              href="https://drive.google.com/file/d/1nbHOGPrPlW73x6FtFtRy5150LLN4MsSy/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="view-cert-btn"
            >
              View Project
            </a>
          </div>

          <div className="portfolio-card">
            <img src={img8bitRAM} alt="8-bit Random Memory Address" className="project-image" />
            <h4>8-bit Random Memory Address</h4>
            <a
              href="https://example.com/projects/react-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="view-cert-btn"
            >
              View Project
            </a>
          </div>

          <div className="portfolio-card">
            <img src={imgECOBin} alt="E.C.O. Bin - Efficient Classification and Organization Bin" className="project-image" />
            <h4>E.C.O. Bin - <br></br>Efficient Classification and Organization Bin</h4>
            <a
              href="https://docs.google.com/document/d/1bR-xec68N6BxvjOg3dzGlQ0Mb57_Q1ceO2ObkfTT3m4/edit?tab=t.mua8q95sqibd"
              target="_blank"
              rel="noopener noreferrer"
              className="view-cert-btn"
            >
              View Project
            </a>
          </div>

          

        </div>

        <h3>Certifications</h3>
        <div className="scroll-container">
          <div className="portfolio-card">
            <h4>Cybersecurity Essentials</h4>
            <p className="cert-date">Completed: May 2024</p>
            <a
              href="https://drive.google.com/file/d/1Xmq9c_hTOt6wV60V3vpVlYTtfu3L4BCM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="view-cert-btn"
            >
              View Certificate
            </a>
          </div>

          <div className="portfolio-card">
            <h4>CCNA: Introduction to Networks</h4>
            <p className="cert-date">Completed: May 2024</p>
            <a
              href="https://drive.google.com/file/d/1eahLFRXBkiondIpYkL-kRd_ELpLsQ_LY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="view-cert-btn"
            >
              View Certificate
            </a>
          </div>

          <div className="portfolio-card">
            <h4>CCNA: Switching, Routing, and Wireless Essentials</h4>
            <p className="cert-date">Completed: December 2024</p>
            <a
              href="https://drive.google.com/file/d/1XnN3WqjcIWCtNrewU6Q68SVj2ZnT6bX9/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="view-cert-btn"
            >
              View Certificate
            </a>
          </div>

          <div className="portfolio-card">
            <h4>CCNA: Enterprise Networking, Security, and Automation</h4>
            <p className="cert-date">Completed: May 2025</p>
            <a
              href="https://example.com/certificates/ccna-enterprise.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="view-cert-btn"
            >
              View Certificate
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
