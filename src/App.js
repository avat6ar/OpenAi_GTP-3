import React, { useEffect, useState } from "react";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
import "./App.css";
import { HashLoader } from "react-spinners";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div
      className="App"
      style={
        loading ? { height: "100vh", overflow: "hidden" } : { height: "auto" }
      }
    >
      <div className={loading ? "loading" : "loading animate__fadeOut"}>
        <HashLoader color="#ff5e00" size="70px" />
      </div>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
