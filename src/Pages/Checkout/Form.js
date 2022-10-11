import { Link } from "react-router-dom"
import FormStyles from "./Form.module.css"


function Form() {
    return (
        <div className={`side-padding ${FormStyles["form--container"]}`}>
            <Link to={-1} className={`back-btn ${FormStyles["back-btn--form"]}`}>Go Back</Link>
            <form className={FormStyles["form"]}>
                <h1 className={FormStyles["form__title"]}>CHECKOUT</h1>
                <section className={FormStyles["form__section"]}>
                    <h2 className={FormStyles["section__title"]}>BILLING DETAILS</h2>
                    <div className={FormStyles["display--flex"]}>
                        <div className={FormStyles["input--label--container"]}>
                            <label htmlFor="name" className={FormStyles["label"]}>Name</label>
                            <input type="text" id="name" placeholder="Full Name" className={FormStyles["input__text"]} required/>
                        </div>
                        <div className={FormStyles["input--label--container"]}>
                            <label htmlFor="email" className={FormStyles["label"]}>Email Address</label>
                            <input type="email" id="email" placeholder="example@email.com" className={FormStyles["input__text"]} required/>
                        </div>
                    </div>
                    <div className={FormStyles["input--label--container"]}>
                        <label htmlFor="phone" className={FormStyles["label"]}>Phone Number</label>
                        <input type="tel" id="phone" placeholder="06 12345678" className={FormStyles["input__text"]} required/>
                    </div>
                </section>

                <section className={FormStyles["form__section"]}>
                    <h2 className={FormStyles["section__title"]}>SHIPPING INFO</h2>
                    <div className={FormStyles["input--label--container"]}>
                        <label htmlFor="street" className={FormStyles["label"]}>Your Address</label>
                        <input type="street" id="street" placeholder="Street Name 12" className={FormStyles["input__text"]} required/>
                    </div>
                    <div className={FormStyles["display--flex"]}>
                        <div className={FormStyles["input--label--container"]}>
                            <label htmlFor="postal" className={FormStyles["label"]}>ZIP Code</label>
                            <input type="postal" id="postal" placeholder="1234 AB" className={FormStyles["input__text"]} required/>
                        </div>
                        <div className={FormStyles["input--label--container"]}>
                            <label htmlFor="city" className={FormStyles["label"]}>City</label>
                            <input type="city" id="city" placeholder="City" className={FormStyles["input__text"]} required/>
                        </div>
                    </div>
                    <div className={FormStyles["input--label--container"]}>
                        <label htmlFor="country" className={FormStyles["label"]}>Country</label>
                        <input type="country" id="country" placeholder="Country" className={FormStyles["input__text"]} required/>
                    </div>
                </section>

                <section className={FormStyles["form__section"]}>
                    <h2 className={FormStyles["section__title"]}>PAYMENT DETAILS</h2>
                    <label className={`${FormStyles["label"]} ${FormStyles["payment-method__text"]} `}>Payment Method</label>
                    <div className={`${FormStyles["payment--container"]} ${FormStyles["input__text"]} `}>
                        <input type="checkbox" id="cash" />
                        <label htmlFor="cash" className={FormStyles["payment__text"]}>Cash on Delivery</label>
                    </div>
                </section>
                
            </form>
        </div>
    )
}

export default Form