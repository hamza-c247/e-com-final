import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/pagination";

// import Swiper core and required modules

// install Swiper modules

function Topsellerslider() {
  const [loading, setloading] = useState(true);

  const imageloaded = () => {
    setloading(false);
  };
  return (
    <>
      <section className="container home">
        <div className="swiper top-seller-slider">
          <h2 className="heading-top-seller">Top Sellers</h2>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            breakpoints={{
              450: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              991: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            classNameName="mySwiper"
          >
            <SwiperSlide>
              <div style={{ display: loading ? "block" : "none" }}>
                <Skeleton height={250} width={200} />
                <Skeleton height={30} width={200} />
              </div>
              <div
                className="swiper-slide tsbox"
                style={{ display: loading ? "none" : "block" }}
              >
                <img
                  src="/assets/images/products/ts7.webp"
                  alt=""
                  onLoad={imageloaded}
                />

                <Link to="">Lusture</Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ display: loading ? "block" : "none" }}>
                <Skeleton height={250} width={200} />
                <Skeleton height={30} width={200} />
              </div>
              <div
                className="swiper-slide tsbox"
                style={{ display: loading ? "none" : "block" }}
              >
                <img
                  src="/assets/images/products/ts8.webp"
                  alt=""
                  onLoad={imageloaded}
                />

                <Link to="">Gear</Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ display: loading ? "block" : "none" }}>
                <Skeleton height={250} width={200} />
                <Skeleton height={30} width={200} />
              </div>
              <div
                className="swiper-slide tsbox"
                style={{ display: loading ? "none" : "block" }}
              >
                <img
                  src="/assets/images/products/ts10.webp"
                  alt=""
                  onLoad={imageloaded}
                />

                <Link to="">Nebula </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ display: loading ? "block" : "none" }}>
                <Skeleton height={250} width={200} />
                <Skeleton height={30} width={200} />
              </div>
              <div
                className="swiper-slide tsbox"
                style={{ display: loading ? "none" : "block" }}
              >
                <img
                  src="/assets/images/products/ts2.webp"
                  alt=""
                  onLoad={imageloaded}
                />

                <Link to="">Titan</Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ display: loading ? "block" : "none" }}>
                <Skeleton height={250} width={200} />
                <Skeleton height={30} width={200} />
              </div>
              <div
                className="swiper-slide tsbox"
                style={{ display: loading ? "none" : "block" }}
              >
                <img
                  src="/assets/images/products/ts9.webp"
                  alt=""
                  onLoad={imageloaded}
                />

                <Link to="">Edge</Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ display: loading ? "block" : "none" }}>
                <Skeleton height={250} width={200} />
                <Skeleton height={30} width={200} />
              </div>
              <div
                className="swiper-slide tsbox"
                style={{ display: loading ? "none" : "block" }}
              >
                <img
                  src="/assets/images/products/ts10.webp"
                  alt=""
                  onLoad={imageloaded}
                />

                <Link to="">Stride</Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ display: loading ? "block" : "none" }}>
                <Skeleton height={250} width={200} />
                <Skeleton height={30} width={200} />
              </div>
              <div
                className="swiper-slide tsbox"
                style={{ display: loading ? "none" : "block" }}
              >
                <img
                  src="/assets/images/products/ts12.webp"
                  alt=""
                  onLoad={imageloaded}
                />

                <Link to="">Workwear</Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ display: loading ? "block" : "none" }}>
                <Skeleton height={250} width={200} />
                <Skeleton height={30} width={200} />
              </div>
              <div
                className="swiper-slide tsbox"
                style={{ display: loading ? "none" : "block" }}
              >
                <img
                  src="/assets/images/products/ts4.webp"
                  alt=""
                  onLoad={imageloaded}
                />

                <Link to="">Metallic</Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ display: loading ? "block" : "none" }}>
                <Skeleton height={250} width={200} />
                <Skeleton height={30} width={200} />
              </div>
              <div
                className="swiper-slide tsbox"
                style={{ display: loading ? "none" : "block" }}
              >
                <img
                  src="/assets/images/products/ts13.webp"
                  alt=""
                  onLoad={imageloaded}
                />

                <Link to="">Workwear</Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Topsellerslider;
