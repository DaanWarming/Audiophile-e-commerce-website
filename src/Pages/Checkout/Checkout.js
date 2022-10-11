import Navigation from "../../components/Navigation/Navigation"
import Footer from "../../components/Footer/Footer"
import Form from "./Form.js"
import Summary from "./Summary.js"
import Confirmation from "./Confirmation"
import {useState} from "react"
import CheckoutStyle from "./Checkout.module.css"



function Checkout() {
    const [showTanks, setShowThanks] = useState(false)

    
    return (
        <>
            <Navigation classNameNav={false}/>
            {showTanks ? <Confirmation setShowThanks={setShowThanks}/> : <></>}
            <main className={CheckoutStyle["checkout--container"]}>
                <Form />
                <Summary showTanks={showTanks} setShowThanks={setShowThanks}/>
            </main>
            <Footer />
        </>
    );
}

export default Checkout