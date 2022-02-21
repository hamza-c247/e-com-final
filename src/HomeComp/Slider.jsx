import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import Swiper core and required modules
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";

// install Swiper modules
SwiperCore.use([EffectFade, Autoplay, Navigation, Pagination]);

function Slider() {
  const [loading, setloading] = useState(true);

  const imageloaded = () => {
    setloading(false);
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        className="Bannerswiper"
      >
        <SwiperSlide>
          <div style={{ display: loading ? "block" : "none" }}>
            <Skeleton className="skeleton-slider" />
          </div>
          <div style={{ display: loading ? "none" : "block" }}>
            <img
              className="slide1"
              onLoad={imageloaded}
              src="/assets/images/banner/titanbanner1.webp"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ display: loading ? "block" : "none" }}>
            <Skeleton className="skeleton-slider" />
          </div>
          <div style={{ display: loading ? "none" : "block" }}>
            <img
              className="slide2"
              onLoad={imageloaded}
              src="/assets/images/banner/titanbanner2.webp"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ display: loading ? "block" : "none" }}>
            <Skeleton className="skeleton-slider" />
          </div>
          <div style={{ display: loading ? "none" : "block" }}>
            <img
              className="slide3"
              onLoad={imageloaded}
              src="/assets/images/banner/titanbanner4.webp"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
