import React from 'react'
import { Link } from 'react-router-dom'


import styles from './Card.module.css'

const Card = ({ img, heading, children }) => {
    return (
        <div className={styles.card}>

            <div className={styles.headingWrapper}>
                {
                    img && <img src={img} alt="img" />
                }
                {
                    heading && <h1 className={styles.heading}>{heading}</h1>
                }
            </div>

            {children}

        </div>
    )
}

export default Card