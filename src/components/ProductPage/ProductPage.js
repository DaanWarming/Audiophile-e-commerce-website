import { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import ProductPageStyles from "./ProductPage.module.css"
import { ShoppingContext } from "../../index"




function ProductPage({Data}) {
    const {shoppingCart, setShoppingCart} = useContext(ShoppingContext)
    const {showCart, setShowCart} = useContext(ShoppingContext)

    const newProduct = Data.new
    const {id, thumbnail, name, description, price, features, includes, abbreviation, slug} = Data
    const alsoItemOne = Data.others[0].name
    const alsoLinkOne = "/" + Data.others[0].slug
    const alsoItemTwo = Data.others[1].name
    const alsoLinkTwo = "/" + Data.others[1].slug
    const alsoItemThree = Data.others[2].name
    const alsoLinkThree = "/" + Data.others[2].slug

    const [productImage, setProductImage] = useState(Data.image.mobile)
    const [galleryOne, setGalleryOne] = useState(Data.gallery.first.mobile)
    const [galleryTwo, setGalleryTwo] = useState(Data.gallery.second.mobile)
    const [galleryThree, setGalleryThree] = useState(Data.gallery.third.mobile)
    const [alsoImageOne, setAlsoImageOne] = useState(Data.others[0].image.mobile)
    const [alsoImageTwo, setAlsoImageTwo] = useState(Data.others[1].image.mobile)
    const [alsoImageThree, setAlsoImageThree] = useState(Data.others[2].image.mobile)

    const [productCount, setProductCount] = useState(0)
    const [windowSize, setWindowSize] = useState(getWindowSize())

    function getWindowSize() {
        const {innerWidth} = window;
        return {innerWidth};
    }

    function changeImage() {
        if (windowSize.innerWidth < 700) {
            setProductImage(Data.image.mobile)
            setGalleryOne(Data.gallery.first.mobile)
            setGalleryTwo(Data.gallery.second.mobile)
            setGalleryThree(Data.gallery.third.mobile)
            setAlsoImageOne(Data.others[0].image.mobile)
            setAlsoImageTwo(Data.others[1].image.mobile)
            setAlsoImageThree(Data.others[2].image.mobile)
        } else if (windowSize.innerWidth < 1000) {
            setProductImage(Data.image.tablet)
            setGalleryOne(Data.gallery.first.tablet)
            setGalleryTwo(Data.gallery.second.tablet)
            setGalleryThree(Data.gallery.third.tablet)
            setAlsoImageOne(Data.others[0].image.tablet)
            setAlsoImageTwo(Data.others[1].image.tablet)
            setAlsoImageThree(Data.others[2].image.tablet)
        } else {
            setProductImage(Data.image.desktop)
            setGalleryOne(Data.gallery.first.desktop)
            setGalleryTwo(Data.gallery.second.desktop)
            setGalleryThree(Data.gallery.third.desktop)
            setAlsoImageOne(Data.others[0].image.desktop)
            setAlsoImageTwo(Data.others[1].image.desktop)
            setAlsoImageThree(Data.others[2].image.desktop)
        }
    }

    useEffect(() => {  // gets the width of the window
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);    
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    useEffect(() => {
        changeImage()
    }, [windowSize])

    function minusProductCount() {
        if (productCount > 0) {
            setProductCount(productCount - 1)
        }
    }

    function plusProductCount() {
        setProductCount(productCount + 1)
    }

    const isInCart = shoppingCart.some(item => { // checks if item is already in cart 
        if (item.id === id) {
            return true;
        }
    
        return false;
    });

    function checkQuantity() {  // removes items from cart that have a quantity of 0
        setShoppingCart(prevCart => 
            prevCart.filter(shoppingCart => {
                return shoppingCart.quantity > 0
            }))
    }

    function addToCart() {
        if (shoppingCart.length === 0) {
                setShoppingCart([ 
                    {
                        id: id,
                        thumbnail: thumbnail,
                        name: abbreviation,
                        price: price,
                        quantity: productCount
                    }
                ])
                checkQuantity()
                setShowCart(true)

        } else if (isInCart) {
            const newShoppingCart = shoppingCart.map(item => { // if item is in cart already change the quantity
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity + productCount
                    }
                } else return  item
            })
            setShoppingCart(newShoppingCart)
            setShowCart(true)
            checkQuantity()

        } else { // add product to the end of the cart
            setShoppingCart([ 
                ...shoppingCart,
                {
                    id: id,
                    thumbnail: thumbnail,
                    name: abbreviation,
                    price: price,
                    quantity: productCount
                }
            ])
            checkQuantity()
            setShowCart(true)
        }
    }



    // className={ProductPageStyles["header__text--container"]}

    return (
        <div className={`side-margins ${ProductPageStyles["item__container"]}`}>
            <Link to={-1} className="back-btn">Go Back</Link>
            {/* Info */}
            <div className={ProductPageStyles["item__header"]}>
                <img src={productImage} alt={Data.category} className={ProductPageStyles["item__image"]}></img>
                <div className={ProductPageStyles["header__text--container"]}>
                    {newProduct ? <p className="product__new">NEW PRODUCT</p> : null }
                    <h1 className="product__title">{name}</h1>
                    <p>{description}</p>
                    <p className={ProductPageStyles["item__price"]}>$ {price}</p>
                    <div className={ProductPageStyles["item__count--add"]}>
                        <div className={ProductPageStyles["item__count"]}>
                            <span className={ProductPageStyles["count__minus"]} onClick={minusProductCount}>&#8722;</span>
                            <input className={ProductPageStyles["count__input"]} value={productCount} disabled="disabled"></input>
                            <span className={ProductPageStyles["count__plus"]} onClick={plusProductCount}>&#43;</span>
                        </div>
                        <button className="see-product-btn" onClick={addToCart}>ADD TO CART</button>
                    </div>
                </div>
            </div>
            

            {/* Description */}
            <div className={ProductPageStyles["item__info"]}>
                <div className={ProductPageStyles["item__features"]}>
                    <h2 className={ProductPageStyles["features--title"]}>FEATURES</h2>
                    <p className={ProductPageStyles["features--text"]}>{features}</p>
                </div>
                <div className={ProductPageStyles["item__contains"]}>
                    <h3 className={ProductPageStyles["contains__title"]}>IN THE BOX</h3>
                    <ul className={ProductPageStyles["contains__list"]}>
                        {includes.map((accessoire) => (
                            <li className={ProductPageStyles["contains__list--item"]} key={accessoire.item}><p className={ProductPageStyles["list__count"]}>{accessoire.quantity}x</p><p className={ProductPageStyles["list__item"]}>{accessoire.item}</p></li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Gallery */}
            <div className={ProductPageStyles["product__gallery--container"]}>
                <div className={ProductPageStyles["gallery__small-images"]}>
                    <img src={galleryOne} alt="gallery image" className={ProductPageStyles["gallery__small-image"]}></img>
                    <img src={galleryTwo} alt="gallery image" className={`${ProductPageStyles["gallery__small-image"]} ${ProductPageStyles["small-image-two"]}`}></img>
                </div>
                <img src={galleryThree} alt="gallery image" className={ProductPageStyles["gallery__big-image"]}></img>
            </div>

            {/* You may also Like */}
            <section className={ProductPageStyles["may-like--container"]}>
                <h4 className={ProductPageStyles["may-like__title"]}>YOU MAY ALSO LIKE</h4>
                <div className={ProductPageStyles["may-like--items"]}>
                    <div className={ProductPageStyles["may-like__item"]}>
                        <img src={alsoImageOne} alt={Data.others[0].slug} className={ProductPageStyles["may-like__item--image"]}></img>
                        <h5 className={ProductPageStyles["may-like__item--name"]}>{alsoItemOne}</h5>
                        <Link to={alsoLinkOne} className="see-product-btn">SEE PRODUCT</Link>
                    </div>
                    <div className={ProductPageStyles["may-like__item"]}>
                        <img src={alsoImageTwo} alt={Data.others[1].slug} className={ProductPageStyles["may-like__item--image"]}></img>
                        <h5 className={ProductPageStyles["may-like__item--name"]}>{alsoItemTwo}</h5>
                        <Link to={alsoLinkTwo} className="see-product-btn">SEE PRODUCT</Link>
                    </div>
                    <div className={ProductPageStyles["may-like__item"]}>
                        <img src={alsoImageThree} alt={Data.others[2].slug} className={ProductPageStyles["may-like__item--image"]}></img>
                        <h5 className={ProductPageStyles["may-like__item--name"]}>{alsoItemThree}</h5>
                        <Link to={alsoLinkThree} className="see-product-btn">SEE PRODUCT</Link>
                    </div>
                </div>
                
            </section>
        </div>
    )
}

export default ProductPage