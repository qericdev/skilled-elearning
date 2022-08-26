import React from 'react';
import styles from './../styles/Navbar.module.css';


function Navbar() {
    return (
        <div className={styles.container}>
            <img alt="logo-dark"src="./../../images/logo-dark.svg"/>
            <button className={styles.button}>Get Started</button>
        </div>
    );
}

export default Navbar;