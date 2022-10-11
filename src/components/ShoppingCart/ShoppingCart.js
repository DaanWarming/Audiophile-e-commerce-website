import React, { useContext, useEffect, useState } from "react"
import { ShoppingContext } from "../../index"
import ShoppingCartStyles from "./ShoppingCart.module.css"
import { Link } from 'react-router-dom';




function ShoppingCart({showCart, setShowCart}) {
    const {shoppingCart, setShoppingCart} = useContext(ShoppingContext)
    const [totalPrice, setTotalPrice] = useState(0)
    function clearShoppingCart() {
        setShoppingCart([])
    }

    function closeShoppingCart(event) {  // close the shopping cart when clicked next to it
        event.preventDefault()
        if (event.target === event.currentTarget) {
            setShowCart(false)
        }
    }

    function checkQuantity() {  // removes items from cart that have a quantity of 0
        setShoppingCart(prevCart => 
            prevCart.filter(shoppingCart => {
                return shoppingCart.quantity > 0
            }))
    }

    function plusItem(id) { // add one to the quantity of item
        const newShoppingCart = shoppingCart.map(oldItem => { 
            if (oldItem.id === id) {
                return {
                    ...oldItem,
                    quantity: oldItem.quantity + 1
                }
            } else return  oldItem
        })
        setShoppingCart(newShoppingCart)
        checkQuantity()
    }

    function minusItem(id) { // add one to the quantity of item
        const newShoppingCart = shoppingCart.map(oldItem => { 
            if (oldItem.id === id) {
                return {
                    ...oldItem,
                    quantity: oldItem.quantity - 1
                }
            } else return  oldItem
        })
        setShoppingCart(newShoppingCart)
        checkQuantity()
    }

    function totalCost() { // calculates the total price of shopping cart
        var total = 0
        shoppingCart.map(item => {
            total = total + item.quantity * item.price
        })
        setTotalPrice(total)
    }

    useEffect(() => {
        totalCost()
    }, [shoppingCart]) 

// className={ShoppingCartStyles["checkout-link"]}

    if (showCart) {
        return (
            <div className={ShoppingCartStyles["shopping-cart--container"]} onClick={closeShoppingCart}>
                <div className={ShoppingCartStyles["shopping-cart"]}>
                    <div className={ShoppingCartStyles["cart__header"]}>
                        <p className={ShoppingCartStyles["cart__title"]}>CART ({shoppingCart.length})</p>
                        <p className={ShoppingCartStyles["cart__remove"]} onClick={clearShoppingCart}>Remove all</p>
                    </div>
                    
                    {shoppingCart.length === 0 ? // display when shopping cart is empty
                        <div className={ShoppingCartStyles["cart-content--empty"]}>
                            <p className={ShoppingCartStyles["cart--empty"]}>Your cart is empty.</p>
                        </div>
                        : // display when there are items in shopping cart
                        <div className={ShoppingCartStyles["cart-content"]}>
                            <ul>
                                {shoppingCart.map(item => {
                                    return (
                                    <li className={ShoppingCartStyles["cart-item"]} key={item.id}>
                                        <img src={item.thumbnail} className={ShoppingCartStyles["cart-item__thumb"]} />
                                        <div className={ShoppingCartStyles["cart-item__text"]}>
                                            <p className={ShoppingCartStyles["cart-item__name"]}>{item.name}</p>
                                            <p className={ShoppingCartStyles["cart-item__price"]}>${item.price}</p>
                                        </div>
                                        <div className={ShoppingCartStyles["cart-item__count"]}>
                                            <span className={ShoppingCartStyles["count__minus"]} onClick={() => minusItem(item.id)}>&#8722;</span>
                                            <input className={ShoppingCartStyles["count__input"]} value={item.quantity} disabled="disabled"></input>
                                            <span className={ShoppingCartStyles["count__plus"]} onClick={() => plusItem(item.id)}>&#43;</span>
                                        </div>
                                    </li>
                                    )
                                })}
                            </ul>
                            <div className={ShoppingCartStyles["cart__total"]}>
                                <p className={ShoppingCartStyles["cart__total-text"]}>TOTAL</p>
                                <p className={ShoppingCartStyles["cart__total-price"]}>$ {totalPrice}</p>
                            </div>
                            <Link to="/Checkout" className={ShoppingCartStyles["checkout-link"]}>
                                <button className={ShoppingCartStyles["checkout-btn"]}>Checkout</button> 
                            </Link>
                        </div>
                    }
                </div>
            </div>   
        )
        
        
    } else {
        return (
            <div>
            </div>
        )
    }
}


export default ShoppingCart