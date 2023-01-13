import HeaderStyles from "../../Pages/Home/Header.module.css"
import { Link } from 'react-router-dom';




function HomePageHeader() {
    return (
        <header className={HeaderStyles["home__header"]}>
            <div className={HeaderStyles["header__text"]}>
                <p className={HeaderStyles["header__new-product"]}>NEW PRODUCT</p>
                <h2 className={HeaderStyles["header__title"]}>XX99 MARK II HEADPHONES</h2>
                <p className={HeaderStyles["header__product-text"]}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <Link to="/xx99-mark-two-headphones" className={`see-product-btn ${HeaderStyles["header__button"]}`}>SEE PRODUCT</Link>
            </div>
        </header>
    )
}

export default HomePageHeader