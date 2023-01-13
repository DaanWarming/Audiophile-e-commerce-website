import { Link } from 'react-router-dom';



function Product() {
    return (
        <main className="product">
            <div className="side-margins product__container">
                <div className="product__image product__mark11"></div>
                <div className="product__text--container">
                    <p className="product__new">NEW PRODUCT</p>
                    <h3 className="product__title">XX99 Mark II Headphones</h3>
                    <p className="product__description">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                    <Link to="/xx99-mark-two-headphones" className="see-product-btn">SEE PRODUCT</Link>
                </div>
            </div>
            <div className="side-margins product__container">
                <div className="product__image product__xx99"></div>
                <div className="product__text--container">
                    <h3 className="product__title">XX99 Mark I Headphones</h3>
                    <p className="product__description">As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
                    <Link to="/xx99-mark-one-headphones" className="see-product-btn">SEE PRODUCT</Link>
                </div>
            </div>
            <div className="side-margins product__container">
                <div className="product__image product__xx59"></div>
                <div className="product__text--container">
                    <h3 className="product__title">XX59 Headphones</h3>
                    <p className="product__description">Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
                    <Link to="/xx59-headphones" className="see-product-btn">SEE PRODUCT</Link>
                </div>
            </div>
        </main>
    )
}


export default Product