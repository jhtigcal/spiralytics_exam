import React from 'react';
import Service from './Service';

const serviceList = [
  { text: 'Search Engine Optimization', imgSrc: 'gear-1.jpg' },
  { text: 'Online Advertising', imgSrc: 'gear-2.jpg' },
  { text: 'Content Marketing', imgSrc: 'gear-3.jpg' },
  { text: 'Analytics and Conversion', imgSrc: 'gear-4.jpg' },
  { text: 'Lead Generation', imgSrc: 'gear-5.jpg' },
  { text: 'E-Commerce', imgSrc: 'gear-6.jpg' },
  { text: 'Mobile Marketing', imgSrc: 'gear-7.jpg' },
  { text: 'Design Studio and Corporate Branding', imgSrc: 'gear-8.jpg' },
  { text: 'Social Media', imgSrc: 'gear-9.jpg' },
];

export default function Services() {
  return (
    <section id="services-section">
      <div className="service header">
        <h4>Our Services</h4>
      </div>
      {serviceList.map((service, index) => (
        <Service
          key={index}
          text={service.text}
          imgSrc={service.imgSrc}
          className={`content content-${index + 1}`}
        />
      ))}
    </section>
  );
}
