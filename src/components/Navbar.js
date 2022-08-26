import styles from './../styles/Navbar.module.css';

function Navbar({background}) {

    return (
        <div className={background === "dark" ? `${styles.container} ${styles.backgrounddark}` : styles.container}>
            <img alt={background === "dark" ? "logo-dark" : "logo-light"} src={background === "dark" ? "./../../images/logo-light.svg" : "./../../images/logo-dark.svg"}/>
            <button className={background === "dark" ? styles.buttonlight : styles.button}>Get Started</button>
        </div>
    );
}

export default Navbar;