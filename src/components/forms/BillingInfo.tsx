import CustomInput from "../common/CustomInput";
import { Form, Field, ErrorMessage, Formik } from "formik";

interface MyFormValues {
  name: string;
  phoneNumber: number;
  address: string;
  city: string;
  location: string[];
  date: string;
  time: string;
  creditCard: {
    status: boolean;
    cardNumber: number;
    expirationDate: string;
    cardHolder: number;
    cvc: number;
  };
  paypal: boolean;
  newsletter: boolean;
  termsCondition: boolean;
}

const BillingInfo = () => {
  const initialValues: MyFormValues = {
    name: "",
    phoneNumber: 0,
    address: "",
    city: "",
    location: [""],
    date: "",
    time: "",
    creditCard: {
      status: false,
      cardNumber: 0,
      expirationDate: "",
      cardHolder: 0,
      cvc: 0,
    },
    paypal: false,
    newsletter: false,
    termsCondition: false,
  };

  const onSubmit = (values: MyFormValues, actions: any) => {
    console.log(values);
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
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              component={CustomInput}
            />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
        </div>
        {/* Add other form sections as needed */}
      </Form>
    </Formik>
  );
};

export default BillingInfo;
