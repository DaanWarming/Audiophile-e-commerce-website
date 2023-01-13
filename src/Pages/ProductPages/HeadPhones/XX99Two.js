import Navigation from "../../../components/Navigation/Navigation"
import ProductPage from "../../../components/ProductPage/ProductPage"
import ShopLinks from "../../../components/ShopLinks/ShopLinks"
import AboutUs from "../../../components/AboutUs/AboutUs"
import Footer from "../../../components/Footer/Footer"
import Data from "../../../assets/data.json"


function XX99Two() {
    return (
        <>
            <Navigation />
            <ProductPage Data={Data[3]}/>
            <ShopLinks />
            <AboutUs />
            <Footer />
        </>
    )
}

export default XX99Two