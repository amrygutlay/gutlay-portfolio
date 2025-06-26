import React from 'react';
import '../style.css';

function ContactInformation() {
  return (
    <div className="ContactInformation">
      <h1 className="contact-title">Let's Connect</h1>
      <p className="contact-subtitle">I'd love to collaborate or answer any questions!</p>

      <div className="contact-card-container">
        <div className="contact-card">
          <h3>📞 Contact Number</h3>
          <a href="tel:+639550548948">(0955) 054 8948</a>
        </div>

        <div className="contact-card">
          <h3>✉️ Email</h3>
          <a href="mailto:majgutlay@tip.edu.ph">majgutlay@tip.edu.ph</a>
        </div>

        <div className="contact-card">
          <h3>📘 Facebook</h3>
          <a href="https://www.facebook.com/amwyyyyy" target="_blank" rel="noreferrer">Amry Gutlay</a>
        </div>

        <div className="contact-card">
          <h3>📷 Instagram</h3>
          <a href="https://www.instagram.com/amwyyy_/" target="_blank" rel="noreferrer">@amwyyy_</a>
        </div>
      </div>
    </div>
  );
}

export default ContactInformation;
