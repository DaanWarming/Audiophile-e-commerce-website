import ZX9 from "../../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"
import ZX7 from "../../assets/product-zx7-speaker/mobile/image-category-page-preview.jpg"

import { Link } from 'react-router-dom';



function Product() {
    return (
        <main className="product">
            <div className="side-margins product__container">
                <div className="product__image product__zx9"></div>
                <div className="product__text--container">
                    <p className="product__new">NEW PRODUCT</p>
                    <h3 className="product__title">ZX9 <br></br>speaker</h3>
                    <p className="product__description">Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
                    <Link to="/zx9-speaker" className="see-product-btn">SEE PRODUCT</Link>
                </div>
            </div>
            <div className="side-margins product__container">
                <div className="product__image product__zx7"></div>
                <div className="product__text--container">
                    <h3 className="product__title">ZX7 <br></br>SPEAKER</h3>
                    <p className="product__description">Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
                    <Link to="/zx7-speaker" className="see-product-btn">SEE PRODUCT</Link>
                </div>
            </div>
        </main>
    )
}

export default Product