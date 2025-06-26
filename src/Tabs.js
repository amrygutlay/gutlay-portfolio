import React from 'react';
import Homepage from './components/Homepage';
import ContactInformation from './components/ContactInformation';
import Portfolio from './components/Portfolio';
import AboutMe from './components/Aboutme';

function Tabs() {
  return (
    <>
      <header
        style={{
          backgroundColor: '#2f4156',
          color: 'white',
          padding: '10px 20px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          {/* Left side: Your name */}
          <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginLeft: '40px' }}>
            Amry Judith Gutlay
          </div>

          {/* Right side: Tabs */}
          <div style={{ display: 'flex', marginRight: '40px' }}>
            {['home', 'about', 'portfolio', 'contact'].map((tab) => {
              const labelMap = {
                home: 'Home',
                about: 'About Me',
                portfolio: 'Portfolio',
                contact: 'Contact',
              };
              return (
                <div
                  key={tab}
                  onClick={() => {
                    const section = document.getElementById(tab);
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    padding: '10px 20px',
                    borderBottom: '3px solid transparent',
                    fontWeight: 'normal',
                    color: 'white',
                  }}
                >
                  {labelMap[tab]}
                </div>
              );
            })}
          </div>
        </nav>
      </header>

      {/* All Sections with alternating background color classes */}
      <main style={{ padding: '0' }}>
        <section id="home" className="section-dark">
          <Homepage />
        </section>
        <section id="about" className="section-light">
          <AboutMe />
        </section>
        <section id="portfolio" className="section-dark">
          <Portfolio />
        </section>
        <section id="contact" className="section-light">
          <ContactInformation />
        </section>
      </main>
    </>
  );
}

export default Tabs;
