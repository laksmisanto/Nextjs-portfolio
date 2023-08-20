import Image from "next/image";
import React from "react";
import Logo from "../../assets/logo.svg";
import Link from "next/link";
import { footerResourceData, footerServiceData } from "@/data/commonData";
import { BsSend } from "react-icons/bs";
import Facebook from "@/assets/svg/Facebook";
import Instagram from "@/assets/svg/Instagram";
import Twitter from "@/assets/svg/Twitter";
import Pintarest from "@/assets/svg/Pintarest";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const Footer = () => {
  return (
    <>
      <footer className="footer__section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="short__info__footer">
                <Link href="/">
                  <Image src={Logo} loading="lazy" alt="Footer-Logo" />
                </Link>
                <div className="footer__info__text">
                  <p className={montserrat.className}>
                    There are many variations of passages of available, but the
                    majority have suffered.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer__service">
                <div className="footer__service__title">
                  <h3 className={montserrat.className}>Services</h3>
                </div>
                <div className="footer__service__menu">
                  {footerServiceData.map((item, i) => (
                    <Link
                      className={montserrat.className}
                      href={item.link}
                      key={i}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer__resource">
                <div className="footer__resource__title">
                  <h3 className={montserrat.className}>Resources</h3>
                </div>
                <div className="footer__resource__menu">
                  {footerResourceData.map((item, i) => (
                    <Link
                      className={montserrat.className}
                      href={item.link}
                      key={i}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer__newslatter">
                <div className="footer__newslatter__title">
                  <h3 className={montserrat.className}>Newsletter</h3>
                </div>
                <div className="footer__newslatter__text">
                  <p className={montserrat.className}>
                    Subscribe for our upcoming latest address and resources
                  </p>
                </div>
                <div className="footer__newslatter__form">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={montserrat.className}
                  />
                  <button>
                    <BsSend />
                  </button>
                </div>
                <div className="footer__social__link">
                  <div className="social__icon">
                    <Facebook />
                  </div>
                  <div className="social__icon">
                    <Instagram />
                  </div>
                  <div className="social__icon">
                    <Twitter />
                  </div>
                  <div className="social__icon">
                    <Pintarest />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright__section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto text-center">
              <div className="copyright__text">
                <p className={montserrat.className}>
                  &copy;copyright 2023 || laksmi santo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
