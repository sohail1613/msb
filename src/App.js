import React, { Suspense, useState } from "react";
import "./App.css";
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
  const [language, setLanguage] = useState("tr");

  // this function use query to change language
  // const handleLanguage = (e) => {
  //   setLanguage(e.target.value);
  //   let local = "http://localhost:3000";
  //   window.location.replace(local + "?lang=" + e.target.value);
  // };

  return (
    <>
      {/* <div className="App">
        <h1>{t("welcome")}</h1>
        <label>{t("choose")}</label>
        <select value={language} onChange={handleLanguage}>
          {languages.map((item) => {
            return (
              <>
                <Header />
                <Router>
                  <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<AllProducts />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/annoucement" element={<Announcement />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </Router>
                <Footer />
                <option key={item.value} value={item.value}>
                  {item.text}
                </option>
              </>
            );
          })}
        </select>
      </div> */}
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
