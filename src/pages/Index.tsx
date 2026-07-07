import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FeaturedProjects from '@/components/FeaturedProjects';
import ClientWork from '@/components/ClientWork';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { 
        if (e.isIntersecting) { 
          e.target.classList.add('in'); 
          io.unobserve(e.target); 
        } 
      });
    }, { threshold: 0.15 });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => io.observe(el));

    return () => {
      elements.forEach(el => io.unobserve(el));
      io.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedProjects />
        <ClientWork />
        <Skills />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
