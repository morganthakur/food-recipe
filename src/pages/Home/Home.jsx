import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import HeroSection from '../../Sections/HeroSection'
import AboutSection from '../../Sections/AboutSection'
import CuratedCollections from '../../Sections/CuratedCollections'
import FreshRecipes from '../../Sections/FreshRecipes'

const Home = () => {
  return (
    <div className='homeWrapper'>
    <main>
      <HeroSection />
      <AboutSection />
      <CuratedCollections />
      <FreshRecipes />
    </main>
    </div>
  )
}

export default Home