"use client";
import React from "react";
import { Montserrat } from "next/font/google";
import Slider from "react-slick";
import { FeedbackDataList } from "@/data/commonData";
import Image from "next/image";
import Left from "@/assets/svg/Left";
import Right from "@/assets/svg/Right";
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const Feedback = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

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
          <div className="row">
            <div className="feedback__slider">
              <Slider {...settings}>
                {FeedbackDataList.map((item, i) => (
                  <div className="feedback__slider__item" key={i}>
                    <div className="feedback__item__content">
                      <div className="feedback__img">{item.icon}</div>
                      <p>{item.description}</p>
                      <div className="feedback__item__footer">
                        <div className="advice__img">
                          <Image
                            src={item.img}
                            width={40}
                            height={40}
                            alt="Feedback image"
                          />
                        </div>
                        <div className="advice__info">
                          <h4>{item.name}</h4>
                          <p>{item.designation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
