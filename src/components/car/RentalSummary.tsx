import { Rate } from "antd";
import CustomInput from "../common/CustomInput";

const RentalSummary = () => {
  const onChange = () => {
    console.log("hi");
  };
  return (
    <div className="rental__summary">
      <div className="first">
        <h4>Rental Summary</h4>
        <p className="txt">
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </p>
        <div className="car__info">
          <img src="/cars-images/bmw1.png" alt="" />
          <div className="name__review">
            <h3>Golf7</h3>
            <div className="review">
              <Rate
                className="rate"
                allowHalf
                //   defaultValue={products[id].RateCount}
              />
              <span>440+ Reviewer</span>
            </div>
          </div>
        </div>
      </div>
      <div className="second">
        <div className="subtotal">
          <h6>Subtotal</h6>
          <span>$80.00</span>
        </div>
        <div className="tax">
          <h6>Tax</h6>
          <span>$0</span>
        </div>
        <CustomInput
          inputClassName="promo__code payement-inputs"
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
          <span className="price">$80.00</span>
        </div>
      </div>
    </div>
  );
};

export default RentalSummary;
