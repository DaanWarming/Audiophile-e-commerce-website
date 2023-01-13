import ConfirmationStyle from "./Confirmation.module.css"
import orderIcon from "../../assets/checkout/icon-order-confirmation.svg"
import { ShoppingContext } from "../../index"
import{ useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Confirmation({setShowThanks}) {
    const {shoppingCart, setShoppingCart} = useContext(ShoppingContext)
    const [totalPrice, setTotalPrice] = useState(0)

    function totalCost() { // calculates the total price of shopping cart
        var total = 0
        shoppingCart.map(item => {
            total = total + item.quantity * item.price
        })
        setTotalPrice(total)
    }

    function closeConfirmation(event) {  // close the shopping cart when clicked next to it
        event.preventDefault()
        if (event.target === event.currentTarget) {
            setShowThanks(false)
        }
    }

    useEffect(() => {
        totalCost()
    }, [shoppingCart]) 

    return (
        <div id="confirmation" className={ConfirmationStyle["confirmation--container"]} onClick={closeConfirmation}>
            <div className={ConfirmationStyle["confirmation"]}>
                <img src={orderIcon} className={ConfirmationStyle["confirmation__icon"]}></img>
                <h4 className={ConfirmationStyle["confirmation__title"]}>THANK YOU <br/>FOR YOUR ORDER</h4>
                <p className={ConfirmationStyle["confirmation__text"]}>Thank you for checking out my portfolio project!</p>
                <div className={ConfirmationStyle["confirmation-item-total--container"]}>
                    <ul className={ConfirmationStyle["confirmation-item--container"]}>
                        {shoppingCart.map(item => {
                            return (
                            <li className={ConfirmationStyle["confirmation-item"]} key={item.id}>
                                <img src={item.thumbnail} className={ConfirmationStyle["confirmation-item__thumb"]} />
                                <div className={ConfirmationStyle["confirmation-item__text"]}>
                                    <p className={ConfirmationStyle["confirmation-item__name"]}>{item.name}</p>
                                    <p className={ConfirmationStyle["confirmation-item__price"]}>${item.price}</p>
                                </div>
                                <p className={ConfirmationStyle["confirmation-item__count"]}>x{item.quantity}</p>
                            </li>
                            )
                        })}
                    </ul>
                    <div className={ConfirmationStyle["confirmation__total"]}>
                        <p className={ConfirmationStyle["confirmation__total-text"]}>GRAND TOTAL</p>
                        <p className={ConfirmationStyle["confirmation__total-price"]}>$ {totalPrice + 50}</p>
                    </div>
                </div>
                <Link to="/" className={ConfirmationStyle["checkout-link"]}>
                    <button className={ConfirmationStyle["back-home--btn"]}>BACK TO HOME</button> 
                </Link>
            </div>
        </div>
    )
}

export default Confirmation