import SummaryStyles from "./Summary.module.css"
import { useContext, useState, useEffect } from "react"
import { ShoppingContext } from "../../index"
import {Link} from "react-router-dom"

function Summary({showTanks, setShowThanks}) {
    const {shoppingCart, setShoppingCart} = useContext(ShoppingContext)
    const [totalPrice, setTotalPrice] = useState(0)

    function totalCost() { // calculates the total price of shopping cart
        var total = 0
        shoppingCart.map(item => {
            total = total + item.quantity * item.price
        })
        setTotalPrice(total)
    }

    function toggleTanks() {
        setShowThanks(!showTanks)
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    useEffect(() => {
        totalCost()
    }, [shoppingCart]) 



    return (
        <div className={`side-padding ${SummaryStyles["summary--container"]}`}>
            <section className={SummaryStyles["summary"]}>
                <h3 className={SummaryStyles["summary__title"]}>SUMMARY</h3>

                {shoppingCart.length === 0 ? // display when shopping cart is empty
                    <div className={SummaryStyles["summary-content--empty"]}>
                        <p className={SummaryStyles["summary--empty"]}>Your cart is empty.</p>
                    </div>
                    : // display when there are items in shopping cart
                    <div className={SummaryStyles["summary-content"]}>
                        <ul className={SummaryStyles["summary-item--container"]}>
                            {shoppingCart.map(item => {
                                return (
                                <li className={SummaryStyles["summary-item"]} key={item.id}>
                                    <img src={item.thumbnail} alt={item.name} className={SummaryStyles["summary-item__thumb"]} />
                                    <div className={SummaryStyles["summary-item__text"]}>
                                        <p className={SummaryStyles["summary-item__name"]}>{item.name}</p>
                                        <p className={SummaryStyles["summary-item__price"]}>${item.price}</p>
                                    </div>
                                    <p className={SummaryStyles["summary-item__count"]}>x{item.quantity}</p>
                                </li>
                                )
                            })}
                        </ul>
                        <div className={SummaryStyles["summary__total"]}>
                            <p className={SummaryStyles["summary__total-text"]}>TOTAL</p>
                            <p className={SummaryStyles["summary__total-price"]}>$ {totalPrice}</p>
                        </div>
                        <div className={SummaryStyles["summary__total"]}>
                            <p className={SummaryStyles["summary__total-text"]}>SHIPPING</p>
                            <p className={SummaryStyles["summary__total-price"]}>$ 50</p>
                        </div>
                        <div className={SummaryStyles["summary__grand-total"]}>
                            <p className={SummaryStyles["summary__total-text"]}>GRAND TOTAL</p>
                            <p className={SummaryStyles["summary__grand-total-price"]}>$ {totalPrice + 50}</p>
                        </div>
                        <a href="#confirmation" className={SummaryStyles["checkout-link"]} onClick={toggleTanks}>
                            <button className={SummaryStyles["checkout-btn"]}>CONTINUE & PAY</button> 
                        </a>
                    </div>
                }
            </section>
        </div>
    )
}

export default Summary