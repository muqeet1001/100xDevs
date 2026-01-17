import React from 'react'
import Navigation from './components/Navigation'
import Body from './components/Body'
import StatsBar from './components/StatsBar'
import SkillsSection from './components/SkillsSection'
import Mentorship from './components/Mentorship'
import Why100x from './components/Why100x'
import Cohorts from './components/Cohorts'
import Podcast from './components/Podcast'
import Community from './components/Community'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-secondary selection:text-primary">
      <Navigation />
      <main>
        <Body />
        <StatsBar />
        <SkillsSection />
        <Mentorship />
        <Why100x />
        <Cohorts />
        <Podcast />
        <Community />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App