import { Link } from 'react-router-dom';


function Product() {
    return (
        <main className="product">
            <div className="side-margins product__container">
                <div className="product__image product__yx1"></div>
                <div className="product__text--container">
                    <p className="product__new">NEW PRODUCT</p>
                    <h3 className="product__title">YX1 WIRELESS EARPHONES</h3>
                    <p className="product__description">Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
                    <Link to="/yx1-earphones" className="see-product-btn">SEE PRODUCT</Link>
                </div>
            </div>
        </main>
    )
}


export default Product
