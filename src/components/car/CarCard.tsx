import { AiOutlineHeart, AiFillSetting } from "react-icons/ai";
import { BsFuelPumpFill } from "react-icons/bs";
import { IoPeopleSharp } from "react-icons/io5";
import styled from "styled-components";
import { Car } from "../../utils/sharedTypes";
import { Button } from "../../styles/styledComponents/Button.styled";
import { useNavigate } from "react-router-dom";

const StyledCard = styled.div<{ isVerticalCard: boolean; isDesktop: boolean }>`
  padding: ${({ isDesktop }) => (isDesktop ? "24px" : "16px")};
  min-width: ${({ isDesktop, isVerticalCard }) => {
    if (isDesktop && isVerticalCard) return "304px";
    if (isDesktop == false && isVerticalCard == true) return "240px";
    if (isDesktop == true && isVerticalCard == false) return "380px";
    if (isDesktop == false && isVerticalCard == false) return "327px";
  }};
  .header {
    .title {
      .car__name {
        font-weight: ${({ isDesktop }) => (isDesktop ? "700" : "600")};
        font-size: ${({ isDesktop }) => (isDesktop ? "18px" : "16px")};
      }
      .car__category {
        font-weight: ${({ isDesktop }) => (isDesktop ? "700" : "600x")};
        font-size: ${({ isDesktop }) => (isDesktop ? "14px" : "12px")};
      }
    }
  }
  .main {
    flex-direction: ${({ isVerticalCard }) =>
      isVerticalCard ? "column" : "row"};
    .car__info {
      flex-direction: ${({ isVerticalCard }) =>
        isVerticalCard ? "row" : "column"};
      font-size: ${({ isDesktop }) => (isDesktop ? "14px" : "12px")};
    }
  }
  .footer {
    .price {
      font-size: ${({ isDesktop }) => (isDesktop ? "18px" : "16px")};
      .per__day {
        font-size: ${({ isDesktop }) => (isDesktop ? "14px" : "12px")};
      }
      .old__price {
        font-size: $md ${({ isDesktop }) => (isDesktop ? "14px" : "12px")};
      }
    }
  }
  .button {
    font-size: ${({ isDesktop }) => (isDesktop ? "16px" : "14px")};
  }
`;

interface CarCardProps {
  desktop: boolean;
  verticalcard: boolean;
  carInfo: Car;
}

const CarCard: React.FC<CarCardProps> = ({
  desktop,
  verticalcard,
  carInfo: {
    CarID,
    CarName,
    Price,
    Capacity,
    Image,
    CategoryName,
    FuelType,
    TransmitionType,
  },
}) => {
  const navigate = useNavigate();
  const navigateToCarDetail = (CarID: number) => {
    navigate(`/car-details/${CarID}`);
  };
  return (
    <StyledCard
      isDesktop={desktop}
      isVerticalCard={verticalcard}
      className="car__card"
    >
      <header className="header">
        <div className="title">
          <h4 className="car__name">{CarName}</h4>
          <h5 className="car__category">{CategoryName}</h5>
        </div>
        <span className="fill__wishlist">
          <AiOutlineHeart className="heart__icon" />
        </span>
      </header>
      <main className="main">
        <div className="car__image" onClick={() => navigateToCarDetail(CarID)}>
          <img src={`/cars-images/${Image}`} alt={CarName} />
        </div>
        <div className="car__info">
          <div className="fuel__type">
            <BsFuelPumpFill /> <span>{FuelType}</span>
          </div>
          <div className="transmision__type">
            <AiFillSetting /> <span>{TransmitionType}</span>
          </div>
          <div className="capacity">
            <IoPeopleSharp /> <span>{Capacity}</span>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="price">
          <span className="new__pice">${Price}</span>
          <span className="per__day">/ day</span>
          <span className="old__price">$80.00</span>
        </div>
        <Button className="rental__now">Rental Now</Button>
      </footer>
    </StyledCard>
  );
};

export default CarCard;
