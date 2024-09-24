import React, { useState, useEffect } from 'react'
import HomeBanner from './HomeBanner'
import AboutSection from './AboutSection'
import WorkSection from './WorkSection'
import ProjectSection from './ProjectSection'
import ReviewSection from './ReviewSection'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const Homepage = () => {
  const [showSecondSection, setShowSecondSection] = useState(false);

  const handleScroll = () => {
    const firstSection = document.getElementById("first-section");
    const secondSection = document.getElementById("second-section");
    const thirdSection = document.getElementById("third-section");

    // When the second section is reached
    if (secondSection.getBoundingClientRect().top <= 0) {
      setShowSecondSection(true);
    }

    // When the third section is reached, remove the second section
    if (thirdSection.getBoundingClientRect().top <= 0) {
      setShowSecondSection(false);
    }

    // Reset to show the navbar again if scrolled back to the first section
    if (firstSection.getBoundingClientRect().bottom > 0) {
      setShowSecondSection(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='page'>
    <Navbar showSecondSection={showSecondSection}/>
    <HomeBanner/>
    <div id="first-section">
    <AboutSection/>

    </div>
    <div id="second-section">
    <WorkSection/>

    </div>
    <div id="third-section">
    <ProjectSection/>

    </div>
    {/* <ReviewSection/> */}
    <Footer/>
    </div>
  )
}

export default Homepage