import HamburgerIcon from "../../assets/shared/tablet/icon-hamburger.svg"
import Logo from "../../assets/shared/desktop/logo.svg"
import ShoppingCartIcon from "../../assets/shared/desktop/icon-cart.svg"
import { useContext, useState } from "react"
import { Link, NavLink } from 'react-router-dom';
import ShopLinks from "../ShopLinks/ShopLinks"
import navigationStyle from "../Navigation/Navigation.module.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart.js"
import { ShoppingContext } from "../../index"


function Navigation({classNameNav}) {
    const {showCart, setShowCart} = useContext(ShoppingContext)
    const [mobileNavigation, setMobileNavigation] = useState(false)

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

    const classNameFunc = ({ isActive }) => (isActive ? navigationStyle["navigation__link--active"] : "")

    return (
        <div className={`${navigationStyle["navigation__container--mobile"]} ${classNameNav ? navigationStyle["navigation__container--home"] : "" }`}>
            <div className={`side-margins ${navigationStyle.navigation__container} ${classNameNav ? navigationStyle["navigation__container--home"] : "" } `}>
                <img src={HamburgerIcon} alt="hamburger icon" className={navigationStyle["hamburger-icon"]} onClick={toggleMenuClick}></img>
                <Link to="/" className={navigationStyle["navigation__logo"]}><img src={Logo} alt="logo"></img></Link>
                <ul className={navigationStyle.links}>
                    <li className={navigationStyle.link}><NavLink to="/" end={true} className={classNameFunc}>HOME</NavLink></li>
                    <li className={navigationStyle.link}><NavLink to="/Headphones" className={classNameFunc}>HEADPHONES</NavLink></li>
                    <li className={navigationStyle.link}><NavLink to="/Speakers" className={classNameFunc}>SPEAKERS</NavLink></li>
                    <li className={navigationStyle.link}><NavLink to="/Earphones" className={classNameFunc}>EARPHONES</NavLink></li>
                </ul>
                <svg onClick={toggleCartClick} className={navigationStyle["shopping-cart-icon"]} width="25" height="25" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
            </div>
            <MobileNavigation />
            <ShoppingCart />
        </div>
    )
}

export default Navigation