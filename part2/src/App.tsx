import React from 'react';

// Import Sections
import Navbar from './components/Navbar';
import Articles from './sections/Articles';
import CTA from './sections/CTA';
import Companies from './sections/Companies';
import Hero from './sections/Hero';
import Mission from './sections/Mission';
import Quote from './sections/Quote';
import Services from './sections/Services';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Quote />
      <Mission />
      <Services />
      <Articles />
      <Companies />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
