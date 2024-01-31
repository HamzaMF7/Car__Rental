import RentalSummary from "../components/car/RentalSummary"
import BillingInfo from "../components/forms/BillingInfo"

const Payement = () => {
  return (
    <main className="payement">
        <div className="container">
            <RentalSummary/>
            <BillingInfo/>
        </div>
    </main>
  )
}

export default Payement