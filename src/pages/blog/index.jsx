import React from "react";
// import Header from "./components/Header";
import BlogHerosection from  "../../components/BlogHeroSection";
import BlogContentGrid from "../../components/BlogContentGrid";
import BlogThemeSection from "../../components/blogThemeSection";
import BlogFooter from "../../components/BlogFooter";



function index() {


  return (
    <>

         <Header />
         <BlogHerosection />
         <BlogContentGrid />
         <BlogThemeSection />
         <BlogFooter /> 


    </>
  )
}

export default index