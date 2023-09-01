"use client";

import React from "react";
import { Montserrat } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { PartnerData } from "@/data/commonData";
import Slider from "react-slick";
import PrevArrow from "../Arrow/PrevArrow";
import NextArrow from "../Arrow/NextArrow";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="partners__section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto text-center">
              <div className="partners__title">
                <h3 className={dmSans.className}>
                  Reputed <span>Partners</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="partners__container">
            <div className="row align-items-center">
              <Slider {...settings}>
                {PartnerData.map((item, i) => (
                  <div className="partner__item__wrapper" key={i}>
                    <div className="partner__list__item">
                      <div className="partner__logo">{item.logo}</div>
                      <div className="partner__headline">
                        <h4 className={dmSans.className}>{item.tag}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="partners__description">
            <div className="row">
              <div className="col-lg-6 mx-auto text-center">
                <div className="partners__desc__info">
                  <p className={montserrat.className}>
                    including thousands other brokers and prop firms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
