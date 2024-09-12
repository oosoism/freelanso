import React from 'react'
import HeroSection from '../components/Home/HeroSection';
import ServiceSection from '../components/Home/ServiceSection';
import PortfolioSection from '../components/Home/PortfolioSection';
import VideoArea from '../components/Home/VideoArea';
import BrandsArea from '../components/Home/BrandsArea';
import TestimonialArea from '../components/Home/TestimonialArea';
import BlogArea from '../components/Home/BlogArea';
import BigTextArea from '../components/Home/BigTextArea';
import ClientsArea from '../components/Home/ClientsArea';

function Home() {
  return (
    <div>
      <HeroSection />
      <div className='site-inner'>
        <div className='site-right'>
          <ServiceSection />
          <PortfolioSection />
          <BrandsArea />
          <VideoArea />
          <TestimonialArea />
          <BlogArea />
          <ClientsArea />
        </div>
        <BigTextArea />
      </div>
    </div>
  )
}

export default Home
