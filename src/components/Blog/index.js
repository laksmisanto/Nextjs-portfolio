import React from "react";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const Blog = () => {
  return (
    <>
      <div className="blog__container">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto text-center">
              <div className="blog__heading">
                <h3 className={montserrat.className}>
                  Our Popular Project <span>And Blog</span>
                </h3>
                <p className={montserrat.className}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
