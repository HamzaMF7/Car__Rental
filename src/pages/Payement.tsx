import RentalSummary from "../components/car/RentalSummary"
import FormsPayement from "../components/forms/FormsPayement"

const Payement = () => {
  return (
    <main className="payement">
        <div className="container">
          <div className="layout">
            <RentalSummary/>
            <FormsPayement/>
          </div>
        </div>
    </main>
  )
}

export default Payement