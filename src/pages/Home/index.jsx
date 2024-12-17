import React from "react";

import Navbar from "../../container/Navbar/Navbar";
import Header from "./Header/Header";
import Experience from "./Experience/Experience";
import Expertise from "./Expertise/Expertise";
import Testimonals from "./Testimonals/Testimonals";
import Projects from "../Projects/Projects";
import Footer from "../../container/Footer/Footer";
import GlobalContainer from "../../components/GlobalContainer/GlobalContainer";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <GlobalContainer>
        <Expertise />
        <Experience />
        <Projects />
        <Testimonals />
      </GlobalContainer>
      <Footer />
    </>
  );
}

export default Home;
