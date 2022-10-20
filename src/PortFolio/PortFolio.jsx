import React from "react";
import "./portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";

import Ecommerce from "../img/ecommerce.png";
import MusicApp from "../img/musicapp.png";
import Hoc from "../img/hoc.png";
import Sidebar from "../img/sidebar.png";
import "swiper/css";

function PortFolio() {
  return (
    <React.Fragment>
      <div className="portfolio" id="PortFolio">
        <span>Recent Project</span>
        <span>Portfolio</span>
      </div>
      <div className="Swiper-item">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          grabCursor={true}
          className="portfolio-slider"
        //   onSlideChange={() => console.log("slide change")}
        //   onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={Sidebar} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ecommerce} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Hoc} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MusicApp} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </React.Fragment>
  );
}

export default PortFolio;
