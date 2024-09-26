import React from 'react'

// import Header from "./components/Header";
import TagHerosection from  "../../components/TagHeroSection";
import TagContentGrid from "../../components/TagContentGrid";
import TagThemeSection from "../../components/TagThemeSection";
import TagFooter from "../../components/TagFooter";



function index() {


  return (
    <>
         <Header />
       <TagHerosection />
       <TagContentGrid />
       <TagThemeSection />
       <TagFooter /> 


    </>
  )
}

export default index