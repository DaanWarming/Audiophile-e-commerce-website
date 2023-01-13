import Navigation from "../../../components/Navigation/Navigation"
import ProductPage from "../../../components/ProductPage/ProductPage"
import ShopLinks from "../../../components/ShopLinks/ShopLinks"
import AboutUs from "../../../components/AboutUs/AboutUs"
import Footer from "../../../components/Footer/Footer"
import Data from "../../../assets/data.json"


function ZX9() {
    return (
        <>
            <Navigation />
            <ProductPage Data={Data[5]}/>
            <ShopLinks />
            <AboutUs />
            <Footer />
        </>
    )
}

export default ZX9