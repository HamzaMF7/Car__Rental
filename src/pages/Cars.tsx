import { useEffect } from "react";
import FindCarForm from "../components/car/FindCarForm";
import CarsComponent from "../components/common/CarsComponent";
import FilterBar from "../components/filters/FilterBar";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../services/state/store";
import { applyFilters, getProducts } from "../services/state/CarSlice";

const CustomStyleFindCarForm = styled.div`
  .info {
    width: 100%;
  }
  @media only screen and (min-width: 992px) {
    .find__car {
      flex-direction: column;
      .second {
        top: -25px;
      }
    }
  }
`;

const Cars = () => {
  const { filtredProducts,  sortedValue, brandFilters , categoryFilters , selectedPrice } = useSelector((state: RootState) => state.car);
  const {choosedPrice} = selectedPrice;
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(()=> {
   dispatch(applyFilters());
  },[sortedValue , brandFilters , categoryFilters , choosedPrice])

  return (
    <main id="cars__page">
      <div className="container">
        <div className="filtred__cars">
          <aside className="filter__aside">
            <FilterBar />
          </aside>
          <section className="cars__wrapper">
            <CustomStyleFindCarForm>
              <FindCarForm />
            </CustomStyleFindCarForm>
            <CarsComponent products={filtredProducts}/>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Cars;
