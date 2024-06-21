import React, { useRef } from "react";
// Swiper - компонент обёртка слайдера, в него будем вкладывать слайды
// SwiperSlide - компонент-обёртка для слайда,
// каждый слайд нужно оборачивать в этот компонент
import { SwiperSlide } from "swiper/react";
import "swiper/swiper.css"; //стили для слайдера
// SwiperCore - ядро слайдера.
// С его помощью к слайдеру можно подключать различные модули,
// например, модуль навигации
import SwiperCore, { Navigation } from "swiper";
import { Img } from "/src/tags";
import { SliderWrapper, SliderButton, Slides } from "./styled";

export default function Slider({ className, images }) {
  SwiperCore.use([Navigation]);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  console.log(navigationPrevRef.current);
  console.log(navigationNextRef.current);

  return (
    <SliderWrapper>
      {/* чтобы кнокпи работали их код обязательно должен распологаться выше кода Swiper'а с их инициализацией*/}
      <SliderButton left ref={navigationPrevRef} title="Назад">
        &lt;
      </SliderButton>
      <SliderButton right ref={navigationNextRef} title="Вперёд">
        &gt;
      </SliderButton>
      <Slides
        className={className}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        freeMode
        watchSlidesProgress
        loop
        slidesPerView={1}
        spaceBetween={30}
      >
        {Boolean(images && images?.length) &&
          images.map((image) => (
            <SwiperSlide key={image}>
              <Img
                src={image}
                width="200"
                maxWidth="200"
                height="257"
                alt="Изображение продукта"
              />
            </SwiperSlide>
          ))}
      </Slides>
    </SliderWrapper>
  );
}
