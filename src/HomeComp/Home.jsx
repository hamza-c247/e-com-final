import React from "react";
import Navbar from "../headerComp/Navbar";
import Slider from "./Slider";
import Strip from "./Strip";
import Shopforslider from "./Shopforslider";
import Offer from "./Offer";
import Banner from "./Banner";
import Collectiontabs from "./Collectiontabs";
import Topsellerslider from "./Topsellerslider";
import Trendingproductsslider from "./Trendingproductsslider";
import Appointmentbanner from "./Appointmentbanner";
import Findstore from "./Findstore";
import { motion } from "framer-motion";
import Footer from "../FooterComp/Footer";


function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navbar></Navbar>

        {/* Home-banner-slider */}
        <Slider />
        <Strip />
        <Shopforslider />
        <Offer />
        <Banner />
        <Collectiontabs />
        <Topsellerslider />
        <Trendingproductsslider />
        <Appointmentbanner />
        <Findstore />
        <Footer />
      </motion.div>
    </>
  );
}

export default Home;
