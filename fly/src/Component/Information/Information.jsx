import React from 'react';

import { Mail, Phone, Globe, MapPin } from 'lucide-react';

const Information = () => {
  return (
    <section className="info-section">
      <div className="info-container">
        <h2 className="info-title">Contact Information</h2>
        <div className="info-grid">
          <div className="info-item">
            <Phone className="info-icon" />
            
            <div>
              <h4>Phone</h4>
              <p>+94 11 777 1 979</p>
              <p>+94 11 234 5678</p>
            </div>
          </div>

          <div className="info-item">
            <Mail className="info-icon" />
            <div>
              <h4>Email</h4>
              <p>support@srilankan.com</p>
              <p>bookings@srilankan.com.</p>
            </div>
          </div>

          <div className="info-item">
            <Globe className="info-icon" />
            <div>
              <h4>Website</h4>
              <p><a href="https://www.srilankan.com/en_uk/lk" target="_blank" rel="noopener noreferrer">www.srilankan.lk</a></p>
            </div>
          </div>

          <div className="info-item">
            <MapPin className="info-icon" />
            <div>
              <h4>Address</h4>
              <p>"Airline Centre", Bandaranaike International Centre, Katunayake 11450, Sri Lanka</p>
            </div>
          </div>

          <div className="info-item">
            <MapPin className="info-icon" />
            <div>
              <h4>24 Hour Contact Center (Colombo)</h4>
              <p>
                  Telephone	:	+94117 77 1979 (Within Sri Lanka : 1979)
                  WhatsApp	:	+94744 44 1979 (Chat only)
                  Fax	:	+94197 33 3999
                  Email	:	reservations@srilankan.com
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Information;