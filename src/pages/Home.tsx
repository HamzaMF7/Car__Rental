import { useSelector, useDispatch } from "react-redux";
import HeroSlider from "../components/Sliders/HeroSlider";
import PopularSlider from "../components/Sliders/PopularSlider";
import FindCarForm from "../components/car/FindCarForm";
import CarsComponent from "../components/common/CarsComponent";
import Heading from "../components/common/Heading";
import { applyFilters, getProducts, setSortedValue } from "../services/state/CarSlice";
import { AppDispatch, RootState } from "../services/state/store";
import { useEffect } from "react";
const Home = () => {
  const { products, filtredProducts } = useSelector(
    (state: RootState) => state.car
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  useEffect(() => {
    dispatch(setSortedValue({newValue: "Popular Car"}));
    dispatch(applyFilters());
  }, [products]);



  return (
    <main>
      <section id="hero">
        <HeroSlider />
      </section>
      <section id="findCar">
        <div className="container">
          <div className="findCar__wrraper">
            <FindCarForm />
          </div>
        </div>
      </section>
      <section id="popular__car">
        <div className="container">
          <Heading title="Popular Car" />
          <PopularSlider popularCar={filtredProducts} />
        </div>
      </section>
      <section id="all__car">
        <div className="container">
          <Heading title="All Car" />
          <CarsComponent products={products} />
        </div>
      </section>
    </main>
  );
};

export default Home;
