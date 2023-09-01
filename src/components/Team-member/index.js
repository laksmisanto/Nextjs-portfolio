"use client";
import React from "react";
import teamimg from "../../assets/team-member.png";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import Chart from "@/assets/svg/Chart";

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});
const Teammembers = () => {
  return (
    <>
      <div className="team__member__section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto text-center">
              <h3 className={montserrat.className}>
                Run Agency Smartly with Our <span>Team Member.</span>
              </h3>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-md-5 col-lg-5">
              <div className="team__member__left__img">
                <Image
                  src={teamimg}
                  width={300}
                  height={300}
                  alt="members image"
                />
                <div className="chart__list">
                  <Chart />
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-6">
              <div className="team__member__content">
                <h4 className={montserrat.className}>
                  What provide to <span>our client</span>
                </h4>
                <p className={montserrat.className}>
                  There are many variations of passages of Lorem Ipsum availabl
                  , but the majority have suffered alteration in some for by
                  injected humour, or randomised words which dont look.There are
                  many variations of passages.
                </p>
                <h4 className={montserrat.className}>
                  Optimize for quickly <span>display.</span>
                </h4>
                <p className={montserrat.className}>
                  There are many variations of passages of Lorem Ipsum availabl
                  but the major.There are many variations of passages of.
                </p>
                <div className="team__member__btn">
                  <motion.button
                    className={montserrat.className}
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
      </div>
    </>
  );
};

export default Teammembers;
