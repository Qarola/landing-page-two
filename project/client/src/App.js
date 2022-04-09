import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import SmoothScroll from 'smooth-scroll';
import JsonData from './data/data.json';
import "./stylesheets/App.scss";
import 'bootstrap/dist/css/bootstrap.css';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery />
      <br />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
