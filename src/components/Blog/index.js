"use client";
import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Montserrat } from "next/font/google";
import Slider from "react-slick";
import Link from "next/link";

import Image from "next/image";
import { BlogDataList } from "@/data/commonData";
import PrevArrow from "../Arrow/PrevArrow";
import NextArrow from "../Arrow/NextArrow";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const Blog = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
          <div className="row">
            <div className="blog__slider">
              <Slider {...settings}>
                {BlogDataList.map((item, i) => (
                  <div className="blog__slider__item" key={i}>
                    <div className="blog__item__content">
                      <div className="blog__img">
                        <Image
                          src={item.img}
                          width={300}
                          height={200}
                          alt="blog image"
                        />
                      </div>
                      <h4>{item.title}</h4>
                      <div className="blog__item__footer">
                        <Link href="/">{item.link}</Link>
                        <p>{item.date}</p>
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

export default Blog;
