import FeaturesSection from '@/components/Home/FeaturesSection';
import HomeHero from '@/components/Home/HomeHero';
import HowToPlay from '@/components/Home/HowToPlay';
import Insight from '@/components/Home/Insight';
import WhyLoveUs from '@/components/Home/WhyLoveUs';
import React from 'react'

const Home = () => {
  return (
    <main>
      <HomeHero />
      <HowToPlay />
     
      <Insight />
      <WhyLoveUs />
      <FeaturesSection />
    </main>
  );
}

export default Home

