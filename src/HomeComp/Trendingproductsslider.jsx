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
function Trendingproductsslider() {
  const [loading, setloading] = useState(true);

  const imageloaded = () => {
    setloading(false);
  };
  return (
    <>
      <section className="container home">
        <div className="swiper trending-product-slider">
          <h2 className="heading-trending-products">Trending Products</h2>
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
            className="mySwiper"
          >
            <SwiperSlide>
              <div style={{ display: loading ? "block" : "none" }}>
                <Skeleton height={250} width={200} />
                <Skeleton height={30} width={200} />
              </div>

              <div
                className="swiper-slide tpbox"
                style={{ display: loading ? "none" : "block" }}
              >
                <img
                  src="/assets/images/products/tp1.webp"
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
                className="swiper-slide tpbox"
                style={{ display: loading ? "none" : "block" }}
              >
                <img
                  src="/assets/images/products/tp2.webp"
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
                className="swiper-slide tpbox"
                style={{ display: loading ? "none" : "block" }}
              >
                <img
                  src="/assets/images/products/tp5.webp"
                  alt=""
                  onLoad={imageloaded}
                />

                <Link to="">Nebula</Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ display: loading ? "block" : "none" }}>
                <Skeleton height={250} width={200} />
                <Skeleton height={30} width={200} />
              </div>
              <div
                className="swiper-slide tpbox"
                style={{ display: loading ? "none" : "block" }}
              >
                <img
                  src="/assets/images/products/tp4.webp"
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
                className="swiper-slide tpbox"
                style={{ display: loading ? "none" : "block" }}
              >
                <img
                  src="/assets/images/products/tp13.webp"
                  alt=""
                  onLoad={imageloaded}
                />

                <Link to="">Planet</Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ display: loading ? "block" : "none" }}>
                <Skeleton height={250} width={200} />
                <Skeleton height={30} width={200} />
              </div>
              <div
                className="swiper-slide tpbox"
                style={{ display: loading ? "none" : "block" }}
              >
                <img
                  src="/assets/images/products/tp14.webp"
                  alt=""
                  onLoad={imageloaded}
                />

                <Link to="">Swiss</Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ display: loading ? "block" : "none" }}>
                <Skeleton height={250} width={200} />
                <Skeleton height={30} width={200} />
              </div>
              <div
                className="swiper-slide tpbox"
                style={{ display: loading ? "none" : "block" }}
              >
                <img
                  src="/assets/images/products/tp7.webp"
                  alt=""
                  onLoad={imageloaded}
                />

                <Link to="">Korc</Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ display: loading ? "block" : "none" }}>
                <Skeleton height={250} width={200} />
                <Skeleton height={30} width={200} />
              </div>
              <div
                className="swiper-slide tpbox"
                style={{ display: loading ? "none" : "block" }}
              >
                <img
                  src="/assets/images/products/tp8.webp"
                  alt=""
                  onLoad={imageloaded}
                />

                <Link to="">Banger</Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ display: loading ? "block" : "none" }}>
                <Skeleton height={250} width={200} />
                <Skeleton height={30} width={200} />
              </div>
              <div
                className="swiper-slide tpbox"
                style={{ display: loading ? "none" : "block" }}
              >
                <img
                  src="/assets/images/products/tp9.webp"
                  alt=""
                  onLoad={imageloaded}
                />

                <Link to="">Edge</Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Trendingproductsslider;
