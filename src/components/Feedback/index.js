import React from "react";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const Feedback = () => {
  return (
    <>
      <div className="feedback__container">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto text-center">
              <div className="feedback__heading">
                <h3 className={montserrat.className}>
                  What People Say <span>About Us</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
