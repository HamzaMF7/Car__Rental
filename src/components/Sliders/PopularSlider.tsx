import { EffectCoverflow, A11y, FreeMode, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";

import "swiper/scss";

import CarCard from "../car/CarCard";
import useToggle from "../../hooks/useToggle";
import useWindowSize from "../../hooks/useWindowSize";
import { devices } from "../../utils/devices";
import { Car } from "../../utils/sharedTypes";

interface PopularSliderProps {
  popularCar: Car[];
}

const PopularSlider: React.FC<PopularSliderProps> = ({popularCar}) => {
  const { TABLET_LANDSCAPE, DESKTOP } = devices;
  const [isDesktop, toggleDesktop] = useToggle(false);
  const [isVerticalCard, toggleVerticalCard] = useToggle(false);

  const windowSize = useWindowSize();

  const handleWindowSizeChange = () => {
    toggleDesktop(windowSize.width > DESKTOP);
    toggleVerticalCard(windowSize.width <= TABLET_LANDSCAPE);
  };

  useEffect(() => {
    handleWindowSizeChange();
  }, [windowSize]);

  return (
    <Swiper
      modules={[FreeMode, EffectCoverflow, A11y, Autoplay]}
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={60}
      effect={"coverflow"}
      loop={true}
      speed={400}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 140,
        modifier: 3,
        slideShadows: false,
        scale: 1,
      }}
      breakpoints={{
        992: {
          spaceBetween: 100,
        },
      }}
      freeMode={true}
      // noSwiping={true}
      className="popular__swiper"
    >
      {popularCar?.map((carItem, i) => (
        <SwiperSlide key={i} className="popular__slides">
          <CarCard desktop={isDesktop} verticalcard={isVerticalCard} carInfo={carItem}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PopularSlider;
