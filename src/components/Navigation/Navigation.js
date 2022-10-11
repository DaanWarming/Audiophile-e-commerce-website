import HamburgerIcon from "../../assets/shared/tablet/icon-hamburger.svg"
import Logo from "../../assets/shared/desktop/logo.svg"
import ShoppingCartIcon from "../../assets/shared/desktop/icon-cart.svg"
import { useState } from "react"
import { Link } from 'react-router-dom';
import ShopLinks from "../ShopLinks/ShopLinks"
import navigationStyle from "../Navigation/Navigation.module.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart.js"


function Navigation({classNameNav}) {
    const [mobileNavigation, setMobileNavigation] = useState(false)
    const [showCart, setShowCart] = useState(false)

    function toggleMenuClick() {
        setMobileNavigation(!mobileNavigation)
        setShowCart(false)        // prevents both cart en menu being open at the same time
    }

    function toggleCartClick() {
        setShowCart(!showCart)
        setMobileNavigation(false) // prevents both cart en menu being open at the same time
    }

    function closeMobileNavigation(event) {  // close the shopping cart when clicked next to it
        event.preventDefault()
        if (event.target === event.currentTarget) {
            setMobileNavigation(false)
        }
    }

    function MobileNavigation() {
        if (mobileNavigation) {
            return (
                <div className={navigationStyle["mobile-menu__opened"]} onClick={closeMobileNavigation}>
                    <nav className={navigationStyle["mobile-menu__content"]}>
                        <ShopLinks />  
                    </nav>
                </div>
            )
        }
    }

    return (
        <div className={`${navigationStyle["navigation__container--mobile"]} ${classNameNav ? navigationStyle["navigation__container--home"] : "" }`}>
            <div className={`side-margins ${navigationStyle.navigation__container} ${classNameNav ? navigationStyle["navigation__container--home"] : "" } `}>
                <img src={HamburgerIcon} alt="hamburger icon" className={navigationStyle["hamburger-icon"]} onClick={toggleMenuClick}></img>
                <Link to="/" className={navigationStyle["navigation__logo"]}><img src={Logo} alt="logo"></img></Link>
                <ul className={navigationStyle.links}>
                    <li className={navigationStyle.link}><Link to="/">HOME</Link></li>
                    <li className={navigationStyle.link}><Link to="/Headphones">HEADPHONES</Link></li>
                    <li className={navigationStyle.link}><Link to="/Speakers">SPEAKERS</Link></li>
                    <li className={navigationStyle.link}><Link to="/Earphones">EARPHONES</Link></li>
                </ul>
                <img src={ShoppingCartIcon} alt="Shopping cart icon" className={navigationStyle["shopping-cart-icon"]} onClick={toggleCartClick}></img>
            </div>
            <MobileNavigation />
            <ShoppingCart showCart={showCart} setShowCart={setShowCart} />
        </div>
    )
}

export default Navigation