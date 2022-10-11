import Navigation from "../../../components/Navigation/Navigation"
import ProductPage from "../../../components/ProductPage/ProductPage"
import ShopLinks from "../../../components/ShopLinks/ShopLinks"
import AboutUs from "../../../components/AboutUs/AboutUs"
import Footer from "../../../components/Footer/Footer"

import Data from "../../../starter-code/data.json"


function YX1() {
    return (
        <>
            <Navigation />
            <ProductPage Data={Data[0]}/>
            <ShopLinks />
            <AboutUs />
            <Footer />
        </>
    )
}

export default YX1