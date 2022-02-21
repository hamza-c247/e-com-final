import React from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

function Shopforslider() {
  const [loading, setloading] = useState(true);

  const imageloaded = () => {
    setloading(false);
  };
  return (
    <>
      <section className="container home">
        <div className="swiper shop-for-slider">
          <h2>SHOP FOR</h2>
          <div className="swiper-wrapper shopbox-wrapper">
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              loop={true}
              autoplay={{ delay: 4000 }}
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
                  <Skeleton height={200} width={200} />
                </div>
                <div className="swiper-slide shopbox ">
                  <div style={{ display: loading ? "none" : "block" }}>
                    <img
                      src="/assets/images/products/smrtwtch.webp"
                      alt=""
                      onLoad={imageloaded}
                    />
                  </div>

                  <div style={{ display: loading ? "block" : "none" }}>
                    <Skeleton height={30} width={200} />
                  </div>
                  <div style={{ display: loading ? "none" : "block" }}>
                    <Link>Smart watches</Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div style={{ display: loading ? "block" : "none" }}>
                  <Skeleton height={200} width={200} />
                </div>
                <div className="swiper-slide shopbox">
                  <div style={{ display: loading ? "none" : "block" }}>
                    <img
                      src="/assets/images/products/perf.webp"
                      alt=""
                      onLoad={imageloaded}
                    />
                  </div>
                  <div style={{ display: loading ? "block" : "none" }}>
                    <Skeleton height={30} width={200} />
                  </div>
                  <div style={{ display: loading ? "none" : "block" }}>
                    <Link>Gear</Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div style={{ display: loading ? "block" : "none" }}>
                  <Skeleton height={200} width={200} />
                </div>
                <div className="swiper-slide shopbox">
                  <div style={{ display: loading ? "none" : "block" }}>
                    <img
                      src="/assets/images/products/pair.webp"
                      alt=""
                      onLoad={imageloaded}
                    />
                  </div>
                  <div style={{ display: loading ? "block" : "none" }}>
                    <Skeleton height={30} width={200} />
                  </div>
                  <div style={{ display: loading ? "none" : "block" }}>
                    <Link>Couple's</Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ display: loading ? "block" : "none" }}>
                  <Skeleton height={200} width={200} />
                </div>
                <div className="swiper-slide shopbox">
                  <div style={{ display: loading ? "none" : "block" }}>
                    <img
                      src="/assets/images/products/essentials_titan-Women.webp"
                      alt=""
                      onLoad={imageloaded}
                    />
                  </div>
                  <div style={{ display: loading ? "block" : "none" }}>
                    <Skeleton height={30} width={200} />
                  </div>
                  <div style={{ display: loading ? "none" : "block" }}>
                    <Link>Women's</Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ display: loading ? "block" : "none" }}>
                  <Skeleton height={200} width={200} />
                </div>
                <div className="swiper-slide shopbox">
                  <div style={{ display: loading ? "none" : "block" }}>
                    <img
                      src="/assets/images/products/essentials_titan-Men.webp"
                      alt=""
                      onLoad={imageloaded}
                    />
                  </div>
                  <div style={{ display: loading ? "block" : "none" }}>
                    <Skeleton height={30} width={200} />
                  </div>
                  <div style={{ display: loading ? "none" : "block" }}>
                    <Link>Men's</Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ display: loading ? "block" : "none" }}>
                  <Skeleton height={200} width={200} />
                </div>
                <div className="swiper-slide shopbox">
                  <div style={{ display: loading ? "none" : "block" }}>
                    <img
                      src="/assets/images/products/essentials_titan-kids.webp"
                      alt=""
                      onLoad={imageloaded}
                    />
                  </div>
                  <div style={{ display: loading ? "block" : "none" }}>
                    <Skeleton height={30} width={200} />
                  </div>
                  <div style={{ display: loading ? "none" : "block" }}>
                    <Link>kid's</Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ display: loading ? "block" : "none" }}>
                  <Skeleton height={200} width={200} />
                </div>
                <div className="swiper-slide shopbox">
                  <div style={{ display: loading ? "none" : "block" }}>
                    <img
                      src="/assets/images/products/essentials_titan-belt.webp"
                      alt=""
                      onLoad={imageloaded}
                    />
                  </div>
                  <div style={{ display: loading ? "block" : "none" }}>
                    <Skeleton height={30} width={200} />
                  </div>
                  <div style={{ display: loading ? "none" : "block" }}>
                    <Link>Belt's</Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ display: loading ? "block" : "none" }}>
                  <Skeleton height={200} width={200} />
                </div>
                <div className="swiper-slide shopbox">
                  <div style={{ display: loading ? "none" : "block" }}>
                    <img
                      src="/assets/images/products/essentials_titan-wallClock.webp"
                      alt=""
                      onLoad={imageloaded}
                    />
                  </div>
                  <div style={{ display: loading ? "block" : "none" }}>
                    <Skeleton height={30} width={200} />
                  </div>
                  <div style={{ display: loading ? "none" : "block" }}>
                    <Link>Wallet's</Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ display: loading ? "block" : "none" }}>
                  <Skeleton height={200} width={200} />
                </div>
                <div className="swiper-slide shopbox">
                  <div style={{ display: loading ? "none" : "block" }}>
                    <img
                      src="/assets/images/products/essentials_titan-wallet.webp"
                      alt=""
                      onLoad={imageloaded}
                    />
                  </div>
                  <div style={{ display: loading ? "block" : "none" }}>
                    <Skeleton height={30} width={200} />
                  </div>
                  <div style={{ display: loading ? "none" : "block" }}>
                    <Link>Clock's</Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div> 
        </div>
      </section>
    </>
  );
}

export default Shopforslider;
