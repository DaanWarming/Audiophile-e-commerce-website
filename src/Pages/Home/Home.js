import Navigation from "../../components/Navigation/Navigation"
import ShopLinks from "../../components/ShopLinks/ShopLinks"
import AboutUs from "../../components/AboutUs/AboutUs"
import Footer from "../../components/Footer/Footer"
import Header from "./Header"
import Products from "./Products"



function HomePage() {
    return (
        <>
            <Navigation classNameNav={true}/>
            <main>
                <Header />
                <ShopLinks /> 
                <Products /> 
                <AboutUs /> 
            </main>
            <Footer />
        </>
    );
}

export default HomePage