import React, { useState } from 'react';
import Homepage from './Homepage';
import ContactInformation from './ContactInformation';
import Portfolio from './Portfolio';
import AboutMe from './Aboutme';

function Tabs() {
  const [activeTab, setActiveTab] = useState('home');

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
        <nav style={{ 
          display: 'flex', 
          justifyContent: 'space-between',  
          alignItems: 'center',             
          cursor: 'pointer' 
        }}>
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
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '10px 20px',
                    borderBottom: activeTab === tab ? '3px solid #007bff' : '3px solid transparent',
                    fontWeight: activeTab === tab ? 'bold' : 'normal',
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

      <main style={{ padding: '20px' }}>
        {activeTab === 'home' && <Homepage setActiveTab={setActiveTab} />}
        {activeTab === 'about' && <AboutMe />}
        {activeTab === 'portfolio' && <Portfolio />}
        {activeTab === 'contact' && <ContactInformation />}
      </main>
    </>
  );
}

export default Tabs;
