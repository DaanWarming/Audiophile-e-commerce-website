import Navigation from "../../components/Navigation/Navigation"
import Header from "./Header"
import Product from "./Products"
import ShopLinks from "../../components/ShopLinks/ShopLinks"
import AboutUs from "../../components/AboutUs/AboutUs"
import Footer from "../../components/Footer/Footer"




function HeadPhones() {
    return (
        <>
            <Navigation />
            <Header />
            <Product />
            <ShopLinks /> 
            <AboutUs /> 
            <Footer />
        </>
    )
}

export default HeadPhones