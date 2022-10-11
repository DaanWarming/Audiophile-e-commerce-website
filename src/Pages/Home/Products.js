import SpeakerImageMobile from "../../assets/home/mobile/image-speaker-zx9.png"
import SpeakerImageTablet from "../../assets/home/tablet/image-speaker-zx9.png"
import SpeakerImageDesktop from "../../assets/home/desktop/image-speaker-zx9.png"
import EarphonesImage from "../../assets/home/mobile/image-earphones-yx1.jpg"
import homeProducts from "../Home/Products.module.css"
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react"


function HomePageProducts() {
    const [SpeakerImage, setSpeakerImage] = useState(SpeakerImageMobile)

    const [windowSize, setWindowSize] = useState(getWindowSize())

    function changeImage() {
        if (windowSize.innerWidth < 700) {
            setSpeakerImage(SpeakerImageMobile)
        } else if (windowSize.innerWidth < 1000) {
            setSpeakerImage(SpeakerImageTablet)
        } else {
            setSpeakerImage(SpeakerImageDesktop)
        }
    }

    function getWindowSize() {
        const {innerWidth} = window;
        return {innerWidth};
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


    return (
        <section className={`side-margins ${homeProducts["home__product"]}`}>
            <div className={homeProducts["product__white-speaker"]}>
                <img src={SpeakerImage} alt="black speaker" className={homeProducts["white__image"]}></img>
                <div className={homeProducts["white__text-container"]}>
                    <h3 className={homeProducts["white__title"]}>ZX9 SPEAKER</h3>
                    <p className={homeProducts["white__text"]}>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <Link to="/zx9-speaker" className={`${homeProducts["white__button"]}`}>SEE PRODUCT</Link>
                </div>
            </div>
            <div className={homeProducts["product__black-speaker"]}>
                <h4 className={homeProducts["black-speaker__title"]}>ZX7 SPEAKER</h4>
                <Link to="/zx7-speaker" className={homeProducts["black-speaker__button"]}>SEE PRODUCT</Link>
            </div>
            <div className={homeProducts["product__earphones"]}>
                <div alt="black earphones" className={homeProducts["earphones__image"]}></div>
                <div className={homeProducts["earphones__text--container"]}>
                    <h5 className={homeProducts["earphones__title"]}>YX1 EARPHONES</h5>
                    <Link to="/yx1-earphones" className={homeProducts["earphones__button"]}>SEE PRODUCT</Link>
                </div>
            </div>
        </section>
    )
}

export default HomePageProducts