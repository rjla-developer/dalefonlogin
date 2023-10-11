"use client";
import React from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import 'swiper/css/pagination';

// import required modules
import { EffectCards, Navigation, Pagination, Autoplay } from "swiper/modules";

import cobertura from "../../img/home/cobertura.png";

function Carrusel() {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards, Navigation, Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide className="mb-5">
        <div className="b-radius-8 sombra4 p-4 bg-white text-center">
          <p className="fs-3 fw-bold">¿Sabías que?</p>
          <p className="fw-500 fs-5">
            ¡Tienes <span className="txt-color-rose">cobertura</span> en México,
            EE.UU y Canadá!
          </p>
          <Image
            src={cobertura}
            className="img-fluid p-3"
            alt="Mapa de Canadá, USA y México"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="mb-5">
        <div className="b-radius-8 sombra4 p-4 bg-white text-center">
          <p className="fs-3 fw-bold">¿Sabías que?</p>
          <p className="fw-500 fs-5">
            ¡Tienes <span className="txt-color-rose">cobertura</span> en México,
            EE.UU y Canadá!
          </p>
          <Image
            src={cobertura}
            className="img-fluid p-3"
            alt="Mapa de Canadá, USA y México"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Carrusel;
