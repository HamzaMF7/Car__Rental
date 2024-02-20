import { Checkbox, DatePicker, Radio, Select, TimePicker } from "antd";
import CustomInput from "../common/CustomInput";
import { Form, Field, Formik, FieldProps } from "formik";
import { IoIosArrowDown } from "react-icons/io";
import dayjs from "dayjs";
import { Button } from "../../styles/styledComponents/Button.styled";
import useWindowSize from "../../hooks/useWindowSize";
interface MyFormValues {
  userName: string;
  phoneNumber: string;
  address: string;
  city: string;
  location: string[];
  date: string;
  time: string;
  creditCard: {
    status: boolean;
    cardNumber: string;
    expirationDate: string;
    cardHolder: string;
    cvc: string;
  };
  paypal: boolean;
  newsletter: boolean;
  termsCondition: boolean;
}

const FormsPayement = () => {
  const initialValues: MyFormValues = {
    userName: "",
    phoneNumber: "",
    address: "",
    city: "",
    location: [""],
    date: "",
    time: "",
    creditCard: {
      status: false,
      cardNumber: "",
      expirationDate: "",
      cardHolder: "",
      cvc: "",
    },
    paypal: false,
    newsletter: false,
    termsCondition: false,
  };
  const { width } = useWindowSize();

  const onSubmit = (values: MyFormValues) => {
    console.log(values);
  };
  // const onchange = () => {
  //   console.log("hello");
  // };

  return (
    <div className="forms__payement">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <div className="billing__info">
            <div className="title">
              <div className="desc">
                <h4 className="mb-4px">Billing Info</h4>
                <p className="txt">Please enter your billing info</p>
              </div>
              <span className="steps">Step 1 of 4</span>
            </div>
            <div className="forms">
              <div className="name">
                <label htmlFor="name">
                  <h5>Name</h5>
                </label>
                <Field name="userName">
                  {({ field, meta }: FieldProps<any>) => (
                    <>
                      <CustomInput
                        // id="name"
                        type="text"
                        {...field}
                        size="middle"
                        placeholder="Name"
                        inputClassName="payement-inputs-style"
                      />
                      {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                      )}
                    </>
                  )}
                </Field>
              </div>
              <div className="phone">
                <label htmlFor="phone">
                  <h5>Phone Number</h5>
                </label>
                <Field name="phoneNumber">
                  {({ field, meta }: FieldProps<any>) => (
                    <>
                      <CustomInput
                        type="text"
                        {...field}
                        size="middle"
                        placeholder="Phone Number"
                        inputClassName="payement-inputs-style"
                      />
                      {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                      )}
                    </>
                  )}
                </Field>
              </div>
              <div className="address">
                <label htmlFor="address">
                  <h5>Address</h5>
                </label>
                <Field name="address">
                  {({ field, meta }: FieldProps<any>) => (
                    <>
                      <CustomInput
                        type="text"
                        {...field}
                        size="middle"
                        placeholder="Address"
                        inputClassName="payement-inputs-style"
                      />
                      {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                      )}
                    </>
                  )}
                </Field>
              </div>
              <div className="city">
                <label htmlFor="city">
                  <h5>City</h5>
                </label>
                <Field name="city">
                  {({ field, meta }: FieldProps<any>) => (
                    <>
                      <CustomInput
                        type="text"
                        {...field}
                        size="middle"
                        placeholder="City"
                        inputClassName="payement-inputs-style"
                      />
                      {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                      )}
                    </>
                  )}
                </Field>
              </div>
            </div>
          </div>
          <div className="rental__info">
            <div className="title">
              <div className="desc">
                <h4 className="mb-4px">Rental Info</h4>
                <p className="txt">Please select your rental date</p>
              </div>
              <span className="steps">Step 2 of 4</span>
            </div>
            <Radio className="pick__up">Pick - Up</Radio>
            <div className="forms">
              <div className="location">
                <label htmlFor="citySelector">
                  <h5>Locations</h5>
                </label>
                <Select
                  id="citySelector"
                  showSearch
                  placeholder="Select city"
                  // defaultValue="Select a city"
                  optionFilterProp="children"
                  // style={{ width: 120 }}
                  bordered={false}
                  // filterOption={filterOption}
                  // onChange={cityOnChange}
                  // onSearch={onSearch}
                  options={[
                    { value: "casablanca", label: "Casablanca" },
                    { value: "settat", label: "Settat" },
                    { value: "tanger", label: "Tanger" },
                    { value: "agadir", label: "Agadir" },
                  ]}
                  suffixIcon={<IoIosArrowDown className="arrow__icon" />}
                  className="city__selector"
                />
              </div>
              <div className="date">
                <label htmlFor="">
                  <h5>Date</h5>
                </label>
                <DatePicker
                  // onChange={dateOnChange}
                  bordered={false}
                  suffixIcon={<IoIosArrowDown className="arrow__icon" />}
                />
              </div>
              <div className="time">
                <label htmlFor="">
                  <h5>Time</h5>
                </label>
                <TimePicker
                  // onChange={timeOnChange}
                  defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                  suffixIcon={<IoIosArrowDown className="arrow__icon" />}
                  bordered={false}
                  className="time__picker"
                />
              </div>
            </div>
            <Radio className="drop__off">Drop - Off</Radio>
            <div className="forms">
              <div className="location">
                <label htmlFor="citySelector">
                  <h5>Locations</h5>
                </label>
                <Select
                  id="citySelector"
                  showSearch
                  placeholder="Select city"
                  // defaultValue="Select a city"
                  optionFilterProp="children"
                  // style={{ width: 120 }}
                  bordered={false}
                  // filterOption={filterOption}
                  // onChange={cityOnChange}
                  // onSearch={onSearch}
                  options={[
                    { value: "casablanca", label: "Casablanca" },
                    { value: "settat", label: "Settat" },
                    { value: "tanger", label: "Tanger" },
                    { value: "agadir", label: "Agadir" },
                  ]}
                  suffixIcon={<IoIosArrowDown className="arrow__icon" />}
                  className="city__selector"
                />
              </div>
              <div className="date">
                <label htmlFor="">
                  <h5>Date</h5>
                </label>
                <DatePicker
                  // onChange={dateOnChange}
                  bordered={false}
                  suffixIcon={<IoIosArrowDown className="arrow__icon" />}
                />
              </div>
              <div className="time">
                <label htmlFor="">
                  <h5>Time</h5>
                </label>
                <TimePicker
                  // onChange={timeOnChange}
                  defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                  suffixIcon={<IoIosArrowDown className="arrow__icon" />}
                  bordered={false}
                  className="time__picker"
                />
              </div>
            </div>
          </div>
          <div className="payement__method">
            <div className="title">
              <div className="desc">
                <h4 className="mb-4px">Payement Method</h4>
                <p className="txt">Please enter your payement method</p>
              </div>
              <span className="steps">Step 3 of 4</span>
            </div>
            <div className="credit__card">
              <div className="card__type">
                <Radio className="card">Credit Card</Radio>
                <div className="payement__img">
                  <img src="/payement-method-images/visaCard.png" alt="" />
                  <img src="/payement-method-images/masterCard.png" alt="" />
                </div>
              </div>
              <div className="forms">
                <div className="card__number">
                  <label htmlFor="cardNumber">
                    <h5>Card Number</h5>
                  </label>
                  <Field
                    name="cardNumber"
                    style={{ "background-color": "#ffffff" }}
                  >
                    {({ field, meta }: FieldProps<any>) => (
                      <>
                        <CustomInput
                          type="text"
                          {...field}
                          size="middle"
                          placeholder="Card Number"
                          inputClassName="payement-inputs-style"
                        />
                        {meta.touched && meta.error && (
                          <div className="error">{meta.error}</div>
                        )}
                      </>
                    )}
                  </Field>
                </div>
                <div className="card__holder">
                  <label htmlFor="cardHolder">
                    <h5>Card Holder</h5>
                  </label>
                  <Field
                    name="cardHolder"
                    style={{ "background-color": "#ffffff" }}
                  >
                    {({ field, meta }: FieldProps<any>) => (
                      <>
                        <CustomInput
                          type="text"
                          {...field}
                          size="middle"
                          placeholder="Card holder"
                          inputClassName="payement-inputs-style"
                        />
                        {meta.touched && meta.error && (
                          <div className="error">{meta.error}</div>
                        )}
                      </>
                    )}
                  </Field>
                </div>
                <div className="expirtaion__date">
                  <label htmlFor="expirationDate">
                    <h5>Expiration Date</h5>
                  </label>
                  <Field
                    name="expirationDate"
                    style={{ "background-color": "#ffffff" }}
                  >
                    {({ field, meta }: FieldProps<any>) => (
                      <>
                        <CustomInput
                          type="text"
                          {...field}
                          size="middle"
                          placeholder="DD /MMYY"
                          inputClassName="payement-inputs-style"
                        />
                        {meta.touched && meta.error && (
                          <div className="error">{meta.error}</div>
                        )}
                      </>
                    )}
                  </Field>
                </div>
                <div className="cvc">
                  <label htmlFor="cvc">
                    <h5>CVC</h5>
                  </label>
                  <Field name="cvc" style={{ "background-color": "#ffffff" }}>
                    {({ field, meta }: FieldProps<any>) => (
                      <>
                        <CustomInput
                          type="text"
                          {...field}
                          size="middle"
                          placeholder="CVC"
                          inputClassName="payement-inputs-style"
                        />
                        {meta.touched && meta.error && (
                          <div className="error">{meta.error}</div>
                        )}
                      </>
                    )}
                  </Field>
                </div>
              </div>
            </div>
            <div className="payement__type">
              <Radio className="card">PayPal</Radio>
              <div className="payement__img">
                <img src="/payement-method-images/paypal1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="confirmation">
            <div className="title">
              <div className="desc">
                <h4 className="mb-4px">Confirmation</h4>
                <p className="txt">
                  We are getting to the end. Just few clicks and your rental is
                  ready!
                </p>
              </div>
              <span className="steps">Step 4 of 4</span>
            </div>
            <div className="terms">
              <Field name="newsletter">
                {({ field }: FieldProps<any>) => (
                  <Checkbox {...field} className="checkbox">
                    I agree with sending an Marketing and newsletter emails. No
                    spam, promissed!
                  </Checkbox>
                )}
              </Field>
              <Field name="termsCondition">
                {({ field }: FieldProps<any>) => (
                  <Checkbox {...field} className="checkbox">
                    I agree with our terms and conditions and privacy policy.
                  </Checkbox>
                )}
              </Field>
            </div>
            <Button
              p={width && width >= 992 ? "16px 32px" : "10px 16px"}
              fs={width && width >= 992 ? "16px" : "12px"}
              type="submit"
            >
              Rent Now
            </Button>
            <div className="safety">
              <img src="/images/security-safety.png" alt="security-safety" />
              <p>All your data are safe</p>
              <p className="txt">
                We are using the most advanced security to provide you the best
                experience ever.
              </p>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FormsPayement;
