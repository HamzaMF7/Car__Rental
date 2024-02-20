import { Rate } from "antd";
import CustomInput from "../common/CustomInput";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../services/state/store";
import { getProductDetails } from "../../services/state/CarSlice";
import { useParams } from "react-router-dom";

const RentalSummary = () => {
  const {id } = useParams()
  const onChange = () => {
    console.log("hi");
  };
  console.log(id);
  const { productDetails  } = useSelector((state: RootState) => state.car);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProductDetails({ id: id }));
  },[id])
  
   
  return (
    <div className="rental__summary">
      <div className="first">
        <h4>Rental Summary</h4>
        <p className="txt">
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </p>
        <div className="car__info">
          <img src={`/cars-images/${productDetails[0]?.Image}`} alt="" />
          <div className="name__review">
            <h3>{productDetails[0]?.CarName}</h3>
            <div className="review">
              <Rate
                className="rate"
                allowHalf
                  defaultValue={productDetails[0]?.RateCount}
              />
              <span>440+ Reviewer</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border"></div>
      <div className="second">
        <div className="subtotal">
          <h6>Subtotal</h6>
          <span>{productDetails[0]?.Price}</span>
        </div>
        <div className="tax">
          <h6>Tax</h6>
          <span>$0</span>
        </div>
        <CustomInput
          inputClassName="promo__code payement-inputs-style"
          buttonClassName="apply"
          value=""
          placeholder="Apply promo code"
          onChange={onChange}
          type="text"
          size="middle"
          btn={true}
          btnTxt="Apply now"
        />
        <div className="total__price">
          <div className="desc">
            <h4>Total Rental Price</h4>
            <p className="txt">Overall price and includes rental discount</p>
          </div>
          <span className="price">${productDetails[0]?.Price}</span>
        </div>
      </div>
    </div>
  );
};

export default RentalSummary;
