import React, { Suspense, useState } from "react";
import "./App.css";
import i18n from "i18next";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import AllProducts from "./components/products/AllProducts";
import Services from "./components/services/Services";
import Announcement from "./components/upcoming/Announcement";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Electric from "./components/services/electric/Electric";
import Makina from "./components/services/makina/Makina";
import Nakliye from "./components/services/nakliye/Nakliye";

// Contains the value and text for the options
const languages = [
  { value: "", text: "Options" },
  { value: "tr", text: "Turkish" },
  { value: "en", text: "English" },
];

function App() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = lang => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };


  return (
    <>
     
      <Suspense fallback={<div>Loading....</div>}>

    
      <Header />
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/services" element={<Services />} />
          <Route path="/makina" element={<Makina />} />
          <Route path="/electric" element={<Electric />} />
          <Route path="/nakliya" element={<Nakliye />} />
          <Route path="/annoucement" element={<Announcement />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
      </Suspense>
    </>
  );
}

export default App;
