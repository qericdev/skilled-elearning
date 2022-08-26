import styles from './../styles/Hero.module.css';

function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <h1>Maximize skill, minimize budget</h1>
                <p>Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.</p>
                <button>Get Started</button>
            </div>
            <div className={styles.image}>
                <img className={styles.imgActiveDesktop} alt="course-hours-and-member" src="./../../images/image-hero-desktop@2x.webp"/>
                <img className={styles.imgActiveTablet} alt="course-hours-and-member" src="./../../images/image-hero-tablet@2x.webp"/>
                <img className={styles.imgActiveMobile} alt="course-hours-and-member" src="./../../images/image-hero-mobile@2x.webp"/>
            </div>
        </div>
    );
}

export default Hero;