import React from 'react';
import { Container } from 'react-bootstrap';
import HeroSection from '../components/HeroSection';
import OurGalleryText from '../components/OurGalleryText';
import Gallery from '../components/Gallery';

const Genki = () => (
  <Container fluid className="gx-0">
    <HeroSection />
    <OurGalleryText />
    <Gallery />
  </Container>
);

export default Genki;
