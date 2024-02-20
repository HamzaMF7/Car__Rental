import { useSelector } from "react-redux";
import CarsComponent from "../components/common/CarsComponent";
import Heading from "../components/common/Heading";
import { RootState } from "../services/state/store";

const Wishlist = () => {
  const { wishlistData } = useSelector((state: RootState) => state.car);
  console.log(wishlistData);
  return (
    <div className="wishlist">
      <div className="container">
        <Heading title="Wishlist" />
        <CarsComponent products={wishlistData} />
      </div>
    </div>
  );
};

export default Wishlist;
