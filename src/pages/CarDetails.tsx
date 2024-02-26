import { Pagination, Rate } from "antd";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import FilterBar from "../components/filters/FilterBar";
import { Button } from "../styles/styledComponents/Button.styled";
import useToggle from "../hooks/useToggle";
import { useEffect, useState } from "react";
import Heading from "../components/common/Heading";
import CarCard from "../components/car/CarCard";
import { useSelector } from "react-redux";
import { RootState } from "../services/state/store";
import { useNavigate, useParams } from "react-router-dom";

import "swiper/scss";

import { getProductDetails } from "../services/state/CarSlice";
import { useAppDispatch } from "../hooks/hooks";

const CarDetails = () => {
  const { id } = useParams();
  const { productDetails, products } = useSelector(
    (state: RootState) => state.car
  );
  const [expand, toggleExpand] = useToggle(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const totalItems = 30;
  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  const dispatch = useAppDispatch();
  useEffect(() => {
    id && dispatch(getProductDetails(+id));
  }, [id]);

  const navigate = useNavigate();
  const navigateToCarPayement = (CarID: number) => {
    navigate(`/payement/${CarID}`);
  };



  return (
    <main id="carDetails__page">
      <div className="container">
        <div className="selected__car">
          <aside className="filter__aside">
            <FilterBar />
          </aside>
          <div className="car__details">
            <section className="details">
              <div className="image">
                <img
                  src={`/cars-images/${productDetails[0]?.Image}`}
                  alt="img"
                />
              </div>
              <div className="info">
                <header className="header">
                  <div className="left">
                    <h3 className="car__name">{productDetails[0]?.CarName}</h3>
                    <div className="review">
                      {productDetails[0]?.RateCount !== undefined && (
                        <Rate
                          className="rate"
                          allowHalf
                          defaultValue={productDetails[0]?.RateCount}
                        />
                      )}
                      <span>440+ Reviewer</span>
                    </div>
                  </div>
                  <div className="right">
                    <span className="fill__wishlist">
                      <AiOutlineHeart className="heart__icon" />
                    </span>
                  </div>
                </header>
                <main className="main">
                  <div className="extra__info">
                    <span>Type Car</span>
                    <span>{productDetails[0]?.CategoryName}</span>
                    <span>Capacity</span>
                    <span>{productDetails[0]?.Capacity}</span>
                    <span>Steering</span>
                    <span>{productDetails[0]?.TransmitionType}</span>
                    <span>Fuel Type</span>
                    <span>{productDetails[0]?.FuelType}</span>
                    <span>Hypbrid</span>
                    <span>No</span>
                    <span>AirConditioner</span>
                    <span>Yes</span>
                  </div>
                </main>
                <footer className="footer">
                  <div className="price">
                    <span className="new__pice">
                      {productDetails[0]?.Price}DH
                    </span>
                    <span className="per__day">/ day</span>
                    {/* <span className="old__price">$80.00</span> */}
                  </div>
                  <Button
                    className="rental__now"
                    fs="16px"
                    p="15px 25px"
                    onClick={() => id && navigateToCarPayement(+id)}
                  >
                    Rental Now
                  </Button>
                </footer>
              </div>
            </section>
            <section className="reviews">
              <div className="title">
                <h3>Reviews</h3>
                <span className="reviews__number">12</span>
              </div>
              {/* ************************ */}
              <div className={`reviews__box ${expand ? "expanded" : ""}`}>
                {[...Array(30)]
                  .slice((currentPage - 1) * pageSize, currentPage * pageSize)
                  .map((_, index) => (
                    <div key={index} className="review">
                      <img src={"/cars-images/avatar-05.webp"} alt="" />
                      <div className="info">
                        <div className="user__name">Alex Stanton</div>
                        <div className="date__rate">
                          <span className="date">21 july 2022</span>
                          <Rate className="rate" allowHalf defaultValue={2.5} />
                        </div>
                        <div className="avis">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Atque, exercitationem.
                        </div>
                      </div>
                    </div>
                  ))}
                <Pagination
                  current={currentPage}
                  pageSize={pageSize}
                  total={totalItems}
                  onChange={handlePageChange}
                  style={{ marginTop: "16px", textAlign: "center" }}
                />
              </div>
              {/* ******************************** */}
              <div className="show-btn" onClick={() => toggleExpand()}>
                Show{" "}
                {expand ? (
                  <>
                    Less <IoIosArrowUp />
                  </>
                ) : (
                  <>
                    All <IoIosArrowDown />
                  </>
                )}
              </div>
            </section>
            <section className="recent__car">
              <Heading title="Recent Car" />
              <div className="cars__wrapper">
                {products?.map((carItem, i) => (
                  <CarCard
                    key={i}
                    desktop={true}
                    verticalcard={true}
                    carInfo={carItem}
                  />
                ))}
              </div>
            </section>
            <section className="recomendation__car">
              <Heading title="Recomendation Car" />
              <div className="cars__wrapper">
                {products?.map((carItem, i) => (
                  <CarCard
                    key={i}
                    desktop={true}
                    verticalcard={true}
                    carInfo={carItem}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CarDetails;
