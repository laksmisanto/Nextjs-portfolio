"use client";
import React from "react";
import { Montserrat } from "next/font/google";
import { DM_Sans } from "next/font/google";
import Image from "next/image";
import bannerimage from "../../assets/banner-img.png";
import { motion } from "framer-motion";

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="banner__content text-center">
                <h1 className={montserrat.className}>
                  <span>Builds</span> your great portfolio <span>Website</span>
                </h1>
                <p className={dmSans.className}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised.
                </p>
                <div className="banner__btn">
                  <motion.button
                    className={dmSans.className}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    Contact Now
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner__img">
                <Image
                  src={bannerimage}
                  width={300}
                  height={300}
                  loading="lazy"
                  alt="banner image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
