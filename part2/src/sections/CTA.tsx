import React from 'react';
import locationIcon from '../assets/location-icon.png';

const nl2br = require('react-nl2br');

function Address({
  title,
  description,
  isLocation,
}: {
  title: string;
  description: string;
  isLocation: boolean;
}) {
  return (
    <div className="address">
      <h4 className="title">{title}</h4>
      <p className="description">{nl2br(description)}</p>
      {isLocation ? (
        <div className="google-maps">
          <img src={locationIcon} alt="Location" />
          <span>View on google maps</span>
        </div>
      ) : null}
    </div>
  );
}

export default function CTA() {
  const addressList = [
    {
      title: 'Philippines',
      description:
        'Fourth Flr Zeta Building II\n191 Salcedo St.\nMakati City 1229,\nPhilippines',
      isLocation: true,
    },
    {
      title: 'United Kingdom',
      description:
        '2nd Floor\n12 Farrington Way\nEastwood, Nottingham\nNG16 3BF',
      isLocation: true,
    },
    {
      title: 'Talk to us',
      description: 'info@spiralytics.com',
      isLocation: false,
    },
  ];
  return (
    <section id="cta-section">
      <div className="container">
        <h3>Want to work with us?</h3>
        <p>
          We'd love to hear from you. Drop us a line and find out what we can do
          for you, and what we can achieve together. Even if you just want to
          have an informal, no-commitment conversation about how our data-driven
          marketing works, we're all ears. Give us a jingle, anytime.
        </p>

        <button className="btn">Get in touch now!</button>

        <div className="addresses">
          {addressList.map((address, i) => (
            <Address
              key={i}
              title={address.title}
              description={address.description}
              isLocation={address.isLocation}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
