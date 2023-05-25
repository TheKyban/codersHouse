import React from 'react'
import arrow from '../../../images/forewardArrow.png'
import styles from './Button.module.css'

const Button = ({ text ,onClick}) => {
    return (
        <button onClick={onClick} className={styles.btn}>
            <span className={styles.text}>{text}</span>
            <img src={arrow} alt="arrow" />
        </button>
    )
}

export default Button