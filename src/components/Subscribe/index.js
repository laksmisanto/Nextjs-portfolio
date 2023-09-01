import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Montserrat } from "next/font/google";
import { DM_Sans } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

const Subscribe = () => {
  return (
    <>
      <div className="container">
        <div className="subscribe__container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6 col-lg-6">
              <div className="subscribe__heading">
                <h3 className={montserrat.className}>
                  Subscribe to Our Newsletter
                </h3>
              </div>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="subscribe__form">
                <input
                  type="email"
                  placeholder="Email"
                  className={montserrat.className}
                />
                <button>
                  <BsArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
