import styles from './../styles/Hero.module.css';

function Hero() {
    return (
        <div className={styles.container}>
            <section className={styles.description}>
                <h1>Maximize skill, minimize budget</h1>
                <p>Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.</p>
                <button>Get Started</button>
            </section>
            <section className={styles.image}>
                <img alt="course-hours-and-members" src="./../../images/image-hero-desktop@2x.webp"/>
            </section>
        </div>
    );
}

export default Hero;