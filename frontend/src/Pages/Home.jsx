import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/Navbar";
import MailList from "../components/MailList";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
function Home() {
  return (
    <div className="home">
      {/* <Navbar/> */}
      <Hero/>
      <section>
          <MailList/>
        </section>
        <Footer/>
    </div>
  );
}

export default Home;
