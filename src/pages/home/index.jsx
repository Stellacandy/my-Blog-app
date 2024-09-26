import React from "react";


import Header from "../../components/Header";
import Herosection from  "../../components/Hero-section";
import ContentGrid from "../../components/ContentGrid";
import ThemeSection from "../../components/ThemeSection";
import Footer from "../../components/Footer";




function index() {
  return (
    <>

         <Header />
         <Herosection />
         <ContentGrid />
         <ThemeSection />
         <Footer />  


    </>
  )
}

export default index