import Logo from "../../assets/shared/desktop/logo.svg"
import FacebookIcon from "../../assets/shared/desktop/icon-facebook.svg"
import TwitterIcon from "../../assets/shared/desktop/icon-twitter.svg"
import InstagramIcon from "../../assets/shared/desktop/icon-instagram.svg"
import footerStyles from "../Footer/Footer.module.css"
import { Link } from 'react-router-dom';



function Footer() {
    return (
        <footer className={`side-padding ${footerStyles.footer}`}>
            <div className={footerStyles["footer__logo-links--container"]}>
                <img src={Logo} alt="Logo" className={footerStyles.footer__logo}></img>
                <ul className={footerStyles.footer__links}>
                    <li className={footerStyles.footer__link}><Link to="/">HOME</Link></li>
                    <li className={footerStyles.footer__link}><Link to="/Headphones">HEADPHONES</Link></li>
                    <li className={footerStyles.footer__link}><Link to="/Speakers">SPEAKERS</Link></li>
                    <li className={footerStyles.footer__link}><Link to="/Earphones">EARPHONES</Link></li>
                </ul>
            </div>
            
            <p className={footerStyles.footer__info}>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            <div className={footerStyles["footer__text--icons"]}>
                <p className={footerStyles.footer__copyright}>Copyright 2021. All Rights Reserved</p>
                <a className={footerStyles.footer__icons} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                    <img src={FacebookIcon} alt="facebook icon" className={footerStyles["footer__icon"]}></img>
                    <img src={TwitterIcon} alt="twitter icon" className={footerStyles["footer__icon"]}></img>
                    <img src={InstagramIcon} alt="instagram icon" className={footerStyles["footer__icon"]}></img>
                </a>
            </div>
        </footer>
    )
}

export default Footer