import React from 'react'

// import Header from "./components/Header";
import AboutHerosection from  "../../components/AboutHeroSection";
import AboutContentGrid from "../../components/AboutContentGrid";
import AboutThemeSection from "../../components/AboutThemeSection";
import AboutFooter from "../../components/AboutFooter";



function index() {

  return (
    <>

         <Header />
         <AboutHerosection />
         <AboutContentGrid />
         <AboutThemeSection />
         <AboutFooter /> 

    </>
  )
}

export default index