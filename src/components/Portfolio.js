import React, { useRef } from 'react';
import '../Portfolio.css';

// Import images
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
  const projectScrollRef = useRef(null);
  const certScrollRef = useRef(null);

  const scroll = (ref, direction) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="portfolio-container">

      {/* Academic Projects */}
      <section className="portfolio-section">
        <h3>Academic Projects</h3>
        <div className="scroll-wrapper">
          <button className="scroll-arrow left" onClick={() => scroll(projectScrollRef, 'left')}>&#10094;</button>

          <div className="scroll-container" ref={projectScrollRef}>
            {[{
              img: imgCommUnity, title: "CommUnity Venture", link: "https://drive.google.com/drive/folders/1dJDj3hAuDVnkH0FizrVCrfh_Zgv2AOVJ"
            }, {
              img: imgJMBakedGoodies, title: "J&M Baked Goodies Website", link: "https://tipedu-my.sharepoint.com/:w:/g/personal/majgutlay_tip_edu_ph/EZqdTkeR9P5Ii8pivs73eNUBI3uvG-JP90yoQb7-i6kopA"
            }, {
              img: imgDCFan, title: "DC Fan Voltage Regulated Power Supply", link: "https://docs.google.com/document/d/10-0XD7OeTzgzZEeJXC2Zh20MI7PYIChX1zPQUpoGvDY/edit?usp=sharing"
            }, {
              img: imgClapSwitch, title: "Simple Clap Switch Using 555 Timer", link: "https://docs.google.com/document/d/1fNvD3t3CuMeq2v95DKwQBAvU3gY1ebCv8Tpcn4PM4HA/edit?usp=sharing"
            }, {
              img: imgPnoyDishcovery, title: "Pnoy Dishcovery Website", link: "https://docs.google.com/document/d/1XBfq_pjlngrNVsYLy_JVRrkxdDM_OzpilIm-cptGlVE/edit?usp=sharing"
            }, {
              img: img3bitUpDownCounter, title: "3-Bit Up and Down Counter with Switch Control and Decoder", link: "https://docs.google.com/document/d/18DBG3pDClxdyTlW12LXGu9BT6q7XH6HDA4mNhb2Ihdg/edit?usp=sharing"
            }, {
              img: imgMazeSolvingRobot, title: "Maze Solving Robot", link: "https://drive.google.com/file/d/1nbHOGPrPlW73x6FtFtRy5150LLN4MsSy/view?usp=sharing"
            }, {
              img: img8bitRAM, title: "8-bit Random Memory Address", link: "https://example.com/projects/react-portfolio"
            }, {
              img: imgECOBin, title: "E.C.O. Bin - Efficient Classification and Organization Bin", link: "https://docs.google.com/document/d/1bR-xec68N6BxvjOg3dzGlQ0Mb57_Q1ceO2ObkfTT3m4/edit?tab=t.mua8q95sqibd"
            }].map((item, i) => (
              <div className="portfolio-card" key={i}>
                <img src={item.img} alt={item.title} className="project-image" />
                <h4>{item.title}</h4>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-cert-btn"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>

          <button className="scroll-arrow right" onClick={() => scroll(projectScrollRef, 'right')}>&#10095;</button>
        </div>

        {/* Certifications */}
        <h3>Certifications</h3>
        <div className="scroll-wrapper">
          <button className="scroll-arrow left" onClick={() => scroll(certScrollRef, 'left')}>&#10094;</button>

          <div className="scroll-container" ref={certScrollRef}>
            {[
              {
                title: "Cybersecurity Essentials",
                date: "Completed: May 2024",
                link: "https://drive.google.com/file/d/1Xmq9c_hTOt6wV60V3vpVlYTtfu3L4BCM/view?usp=sharing"
              },
              {
                title: "CCNA: Introduction to Networks",
                date: "Completed: May 2024",
                link: "https://drive.google.com/file/d/1eahLFRXBkiondIpYkL-kRd_ELpLsQ_LY/view?usp=sharing"
              },
              {
                title: "CCNA: Switching, Routing, and Wireless Essentials",
                date: "Completed: December 2024",
                link: "https://drive.google.com/file/d/1XnN3WqjcIWCtNrewU6Q68SVj2ZnT6bX9/view?usp=sharing"
              },
              {
                title: "CCNA: Enterprise Networking, Security, and Automation",
                date: "Completed: May 2025",
                link: "https://example.com/certificates/ccna-enterprise.pdf"
              }
            ].map((cert, i) => (
              <div className="portfolio-card" key={i}>
                <h4>{cert.title}</h4>
                <p className="cert-date">{cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-cert-btn"
                >
                  View Certificate
                </a>
              </div>
            ))}
          </div>

          <button className="scroll-arrow right" onClick={() => scroll(certScrollRef, 'right')}>&#10095;</button>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
