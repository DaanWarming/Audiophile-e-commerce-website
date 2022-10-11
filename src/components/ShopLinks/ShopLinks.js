import HeadphonesImage from "../../assets/shared/desktop/image-category-thumbnail-headphones.png"
import SpeakerImage from "../../assets/shared/desktop/image-category-thumbnail-speakers.png"
import EarphonesImage from "../../assets/shared/desktop/image-category-thumbnail-earphones.png"
import IconArrowRight from "../../assets/shared/desktop/icon-arrow-right.svg"
import shopLinksStyles from "./ShopLinks.module.css"
import { Link } from 'react-router-dom';



function ShopLinks() {
    return (
        <section className={` side-margins ${shopLinksStyles["shop-links"]}`}>
            <div className={shopLinksStyles["shop-links__item"]}>
                <img src={HeadphonesImage} alt="Headphones image" className={`${shopLinksStyles["shop-links__headphones--image"]} ${shopLinksStyles["shop-links__item--image"]}`}></img>
                <p className={`${shopLinksStyles["shop-links__text"]} ${shopLinksStyles["shop-links__text--headphones"]}`}>HEADPHONES</p>
                <Link to="/Headphones" className={`${shopLinksStyles["shop-links__button"]}`}>SHOP <img src={IconArrowRight} alt="Icon arrow to the right"></img></Link>
            </div>
            <div className={shopLinksStyles["shop-links__item"]}>
                <img src={SpeakerImage} alt="Speaker image" className={`${shopLinksStyles["shop-links__speakers--image"]} ${shopLinksStyles["shop-links__item--image"]}`}></img>
                <p className={`${shopLinksStyles["shop-links__text"]} ${shopLinksStyles["shop-links__text--speakers"]}`}>SPEAKERS</p>
                <Link to="/Speakers" className={`${shopLinksStyles["shop-links__button"]}`}>SHOP <img src={IconArrowRight} alt="Icon arrow to the right"></img></Link>
            </div>
            <div className={shopLinksStyles["shop-links__item"]}>
                <img src={EarphonesImage} alt="Earphones image" className={`${shopLinksStyles["shop-links__earphones--image"]} ${shopLinksStyles["shop-links__item--image"]}`}></img>
                <p className={`${shopLinksStyles["shop-links__text"]} ${shopLinksStyles["shop-links__text--earphones"]}`}>EARPHONES</p>
                <Link to="/Earphones" className={`${shopLinksStyles["shop-links__button"]}`}>SHOP <img src={IconArrowRight} alt="Icon arrow to the right"></img></Link>
            </div>
        </section>
    )
}

export default ShopLinks