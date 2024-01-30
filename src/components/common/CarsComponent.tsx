import { Pagination } from "antd";
import useToggle from "../../hooks/useToggle";
import useWindowSize from "../../hooks/useWindowSize";
import { devices } from "../../utils/devices";
import CarCard from "../car/CarCard";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Car } from "../../utils/sharedTypes";
import { Button } from "../../styles/styledComponents/Button.styled";

interface CarsComponentProps {
  products: Car[];
}

const CarsComponent: React.FC<CarsComponentProps> = ({ products }) => {
  const { MOBILE_PORTRAIT, TABLET_PORTRAIT, TABLET_LANDSCAPE, DESKTOP } =
    devices;
  const [isDesktop, toggleDesktop] = useToggle(false);
  const [isVerticalCard, toggleVerticalCard] = useToggle(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { width } = useWindowSize();
  const { pathname } = useLocation();

  const handleWindowSizeChange = () => {
    toggleVerticalCard(
      (width >= MOBILE_PORTRAIT && width < TABLET_PORTRAIT) ||
        width >= TABLET_LANDSCAPE
        ? true
        : false
    );
    toggleDesktop(width >= DESKTOP ? true : false);
  };

  useEffect(() => {
    handleWindowSizeChange();
  }, [width]);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  const getPageSize = (): number => {
    if (width < MOBILE_PORTRAIT) return 6;
    else if (width < TABLET_PORTRAIT) return 8;
    else return 12;
  };
  const pageSize = getPageSize();
  const totalItems = 16; // replace it with the lenght of the products array when you fetch the data

  return (
    <>
      <div className="cars">
        {products
          ?.slice((currentPage - 1) * pageSize, currentPage * pageSize)
          .map((carItem, i) => (
            <CarCard
              key={i}
              desktop={isDesktop}
              verticalcard={isVerticalCard}
              carInfo={carItem}
            />
          ))}
      </div>
      {pathname != "/" ? (
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={totalItems}
          onChange={handlePageChange}
          style={{ marginTop: "16px", textAlign: "center" }}
        />
      ) : (
        <div className="browse__btn">
          <Link to="/cars">
            <Button fs="16px" p="15px 25px">
              Browse All Cars
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default CarsComponent;
