import Navigation from "../../../components/Navigation/Navigation"
import ProductPage from "../../../components/ProductPage/ProductPage"
import ShopLinks from "../../../components/ShopLinks/ShopLinks"
import AboutUs from "../../../components/AboutUs/AboutUs"
import Footer from "../../../components/Footer/Footer"
import Data from "../../../assets/data.json"


function XX59() {
    return (
        <>
            <Navigation />
            <ProductPage Data={Data[1]}/>
            <ShopLinks />
            <AboutUs />
            <Footer />
        </>
    )
}

export default XX59