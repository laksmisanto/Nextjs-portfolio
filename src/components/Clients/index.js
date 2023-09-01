"use client";
import React from "react";
import { Montserrat } from "next/font/google";
import clientimg from "../../assets/client.png";
import Image from "next/image";
import { clientData } from "@/data/commonData";
import Link from "next/link";
import CountUp from "react-countup";
import { AiOutlineRight } from "react-icons/ai";

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});
const Clients = () => {
  return (
    <>
      <div className="clients__section">
        <div className="container">
          <div className="row justify-content-between align-items-end">
            <div className="col-lg-5 col-xl-5">
              <div className="left__client">
                <div className="client__heading">
                  <h3 className={montserrat.className}>
                    What we provide to <span>our Client</span>
                  </h3>
                  <p className={montserrat.className}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have.
                  </p>
                </div>
                <div className="client__left__img">
                  <Image
                    src={clientimg}
                    width={200}
                    height={300}
                    alt="client image"
                    loading="lazy"
                  />
                  <div className="experience">
                    <h4 className={montserrat.className}>
                      <CountUp start={0} end={8} />+
                    </h4>
                    <p className={montserrat.className}>Years of experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-xl-6">
              <div className="right__client">
                <div className="row row-gap-4">
                  {clientData.map((item, i) => (
                    <div className="col-sm-6 col-md-6 col-lg-6" key={i}>
                      <div className="right__client__item">
                        <i>{item.icon}</i>
                        <h4 className={montserrat.className}>{item.title}</h4>
                        <p className={montserrat.className}>{item.desc}</p>
                        <Link className={montserrat.className} href="/">
                          {item.link} <AiOutlineRight />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
