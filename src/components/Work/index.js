import React from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import bigWorkImg from "../../assets/bg-work-img.png";
import work2 from "../../assets/work2.png";
import work3 from "../../assets/work3.png";
import PlayBtn from "@/assets/svg/PlayBtn";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const Work = () => {
  return (
    <>
      <div className="our__work">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto text-center">
              <div className="work__title">
                <h3 className={montserrat.className}>
                  How it <span>Work</span>{" "}
                </h3>
              </div>
              <div className="work__desc">
                <p className={montserrat.className}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered.
                </p>
              </div>
            </div>
          </div>
          <div className="work__container">
            <div className="row">
              <div className="col-lg-7">
                <div className="work__big__img">
                  <Image
                    src={bigWorkImg}
                    width={300}
                    height={300}
                    loading="lazy"
                    alt="big work image"
                  />
                  <div className="play__btn">
                    <PlayBtn />
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="work__right__content">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="work__right__content__title">
                        <h4 className={montserrat.className}>
                          What provide to <span>our clint</span>
                        </h4>
                        <p className={montserrat.className}>
                          There are many variations of passages of Lorem Ipsum
                          availabl , but the majority have suffered alteration
                          in some for by.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="work__right__sm__img">
                        <Image
                          src={work2}
                          width={100}
                          height={100}
                          loading="lazy"
                          alt="Work image"
                        />
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="work__right__sm__img">
                        <Image
                          src={work3}
                          width={100}
                          height={100}
                          loading="lazy"
                          alt="Work image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
