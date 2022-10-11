import aboutUsStyles from "../AboutUs/AboutUs.module.css"


function AboutUs() {
    return (
        <section className={`side-margins ${aboutUsStyles["about-us--container"]}`}>
            <div title="a person with headphones on his head" className={aboutUsStyles["about-us__image"]}></div>
            <div className={aboutUsStyles["about-us__text--container"]}>
                <h5 className={aboutUsStyles["about-us__title"]}>BRINGING YOU THE <span className={aboutUsStyles["about-us__title--best"]}>BEST</span> AUDIO GEAR</h5>
                <p className={aboutUsStyles["about-us__text"]}>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
        </section>
    )
}

export default AboutUs