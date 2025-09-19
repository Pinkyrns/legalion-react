import React from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import About from '../About/About'
import Services from '../Services/Services'
import Contact from '../Contact/Contact'
import WhatsAppButton from '../../components/WhatsAppButton'
import Testimonial from '../../components/Testimonial';
import Achievement from '../../components/Achievement'
import Team from '../Team/Team'

function Home() {
  return (
    <div>
      <Hero/>
      <WhatsAppButton />
      <Achievement/>
      <About/>
      <Services/>
      <Team/>
      <Contact/>
      <Testimonial/>

    </div>
  )
}

export default Home
