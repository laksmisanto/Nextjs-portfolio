import React from "react";
import logo1 from "@/assets/Happy-Mart.png";
import logo2 from "@/assets/Lori-Cracker.png";
import logo3 from "@/assets/Emad-Fashion.png";
import logo4 from "@/assets/Docco-Semims.png";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { PartnerData } from "@/data/commonData";
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

const Partners = () => {
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
              {PartnerData.map((item, i) => (
                <div className="col-lg-3" key={i}>
                  <div className="partner__list__item">
                    <div className="partner__logo">{item.logo}</div>
                    <div className="partner__headline">
                      <h4 className={dmSans.className}>{item.tag}</h4>
                    </div>
                  </div>
                </div>
              ))}
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
