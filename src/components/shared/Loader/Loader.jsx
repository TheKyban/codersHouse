import React from 'react'
import Card from '../Card/Card'
import styles from './Loader.module.css';

const Loader = ({ message }) => {
    return (
        <div className={styles.cardWrapper}>
            <Card>
                <svg className={styles.spinner} xmlns="http://www.w3.org/2000/svg" width="83" height="83" fill="none">
                    <circle cx="41.5" cy="41.5" r="39.5" stroke="#C4C5C5" strokeWidth="4" />
                    <mask id="a" fill="#fff">
                        <path d="M41.5 0A41.5 41.5 0 1 1 0 41.5h4.621A36.88 36.88 0 1 0 41.5 4.621V0Z" />
                    </mask>
                    <path stroke="#07F" strokeWidth="8" d="M41.5 0A41.5 41.5 0 1 1 0 41.5h4.621A36.88 36.88 0 1 0 41.5 4.621V0Z" mask="url(#a)" />
                </svg>
                <span className={styles.message}>{message}</span>
            </Card>
        </div>
    )
}

export default Loader