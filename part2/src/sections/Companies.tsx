import React from 'react';

import company1 from '../assets/company-1.jpg';
import company2 from '../assets/company-2.png';
import company3 from '../assets/company-3.jpg';

export default function Companies() {
  return (
    <section id="company-section">
      <div className="container">
        <div className="companies">
          <div className="company company-1">
            <img src={company1} alt="SEMCON Logo" />
          </div>
          <div className="company company-2">
            <img src={company2} alt="SEMCON Logo" />
          </div>
          <div className="company company-3">
            <img src={company3} alt="SEMCON Logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
