import { useState, useEffect } from 'react';
import styles from './../styles/Features.module.css';
const {features} = require ('./../data/data-features.js');

function Features() {

    const [data, setData] = useState();

    useEffect(() => {
        const tempFeatures = features.map(feature => 
        <div className={styles.feature} key={feature.key}>
            <img className={styles.img} alt={`${feature.image}`} src={`./../../images/${feature.image}`} />
            <h1 className={styles.title}>{feature.title}</h1>
            <p className={styles.paragraph}>{feature.paragraph}</p>
            <a className={styles.action} href="/">{feature.action}</a>
        </div>
        )
        setData(tempFeatures);
    },[])

    return (
        <div className={styles.container}>
            <div className={styles.firstfeature}>
                <p>Check out our most popular courses!</p>
            </div>
            {data}
        </div>
    );
}

export default Features;