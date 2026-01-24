import FeaturesSection from '@/components/Home/FeaturesSection';
import HomeHero from '@/components/Home/HomeHero';
import HowToPlay from '@/components/Home/HowToPlay';
import Insight from '@/components/Home/Insight';
import JoinNow from '@/components/Home/JoinNow';
import WhyLoveUs from '@/components/Home/WhyLoveUs';
import React from 'react'

const Home = () => {
  return (
    <main>
      <HomeHero />
      <HowToPlay />
     
      <Insight />
      <FeaturesSection />
      <WhyLoveUs />
      <JoinNow />
     
    </main>
  );
}

export default Home

