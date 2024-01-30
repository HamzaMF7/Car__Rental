import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/autoplay";

const HeroSlider = () => {
  return (
    <Swiper
      modules={[ A11y, Autoplay]}
      loop={true}
      speed={500}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
    >
      {[...Array(3)].map((_, i) => (
        <SwiperSlide key={i}>
          <div className={`item__${i + 1}`}>
            <div className={`item__content container`}>
              <h1>Your Journey</h1>
              <h2>
                Your <span>Car</span>
              </h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
