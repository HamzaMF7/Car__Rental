import CustomInput from "../common/CustomInput";
import { Form, Field, ErrorMessage, Formik } from "formik";

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

  const onSubmit = (values: MyFormValues, actions: any) => {
    console.log(values);
  };
  const onchange = () => {
    console.log("hello");
  };

  return (
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
                {({ field, meta }) => (
                  <>
                    <CustomInput
                      id="name"
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
                {({ field, meta }) => (
                  <>
                    <CustomInput
                      id="phone"
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
                {({ field, meta }) => (
                  <>
                    <CustomInput
                      id="address"
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
            <div className="phone">
              <label htmlFor="phone">
                <h5>Phone Number</h5>
              </label>
              <Field name="phoneNumber">
                {({ field, meta }) => (
                  <>
                    <CustomInput
                      id="phone"
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
          <div className="forms">
            <div className="name">
              <label htmlFor="name">
                <h5>Name</h5>
              </label>
              <Field name="userName">
                {({ field, meta }) => (
                  <>
                    <CustomInput
                      id="name"
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
                {({ field, meta }) => (
                  <>
                    <CustomInput
                      id="phone"
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
                {({ field, meta }) => (
                  <>
                    <CustomInput
                      id="address"
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
            <div className="phone">
              <label htmlFor="phone">
                <h5>Phone Number</h5>
              </label>
              <Field name="phoneNumber">
                {({ field, meta }) => (
                  <>
                    <CustomInput
                      id="phone"
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
          </div>
        </div>
        <button type="submit">submit</button>
      </Form>
    </Formik>
  );
};

export default FormsPayement;
