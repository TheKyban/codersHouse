import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../images/handWave.png'
import styles from "./Navigation.module.css";

const Navigation = () => {
    
    /**
     * Styles to Link
     */
    
    const brandStyle = {
        color: '#fff',
        textDecoration: "none",
        fontWeight:"bold",
        fontSize:"22px",
        display:"flex",
        alignItems:"center",
        gap:'10px'
    }
    
    return (
        <nav className={`container ${styles.navbar}`}>
            <Link style={brandStyle} to={"/"}>
                <img src={logo} alt="Logo" />
                <span>Codershouse</span>
            </Link>
        </nav>
    )
}

export default Navigation