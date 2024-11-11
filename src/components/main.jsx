import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Head } from './Head';
import { NavBar } from './NavBar';
import { ProductNav } from './ProductNav';
import { ImagenSwitcher } from './ImagenSwitcher';
import { Gallery } from './Gallery';
import { IntroductionBanner } from './IntroductionBanner';
import { ImageCarousel } from './ImageCarrusel';
import { NewsLetter } from './NewsLetter';
import { Footer } from './Footer';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Head />
    <NavBar />
    <ProductNav />
    <ImagenSwitcher />
    <Gallery />
    <IntroductionBanner />
    <ImageCarousel />
    <NewsLetter />
    <Footer />
  </StrictMode>,
);
