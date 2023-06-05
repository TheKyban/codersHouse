import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../../images/handWave.png'
import styles from "./Navigation.module.css";
import { logout } from '../../../http';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../../store/authSlice';
import logoutIcon from '../../../images/logout.png'

const Navigation = () => {

    /**
     * Styles to Link
     */

    const brandStyle = {
        color: '#fff',
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "22px",
        display: "flex",
        alignItems: "center",
        gap: '10px'
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isAuth, user } = useSelector((state) => state.auth)

    const logoutUser = async () => {
        try {
            const { data } = await logout()
            dispatch(setAuth(data))
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <nav className={`container ${styles.navbar}`}>
            <Link style={brandStyle} to={"/"}>
                <img src={logo} alt="Logo" />
                <span>Codershouse</span>
            </Link>
            {
                isAuth && (
                    <div className={styles.navRight}>
                        <h3 className={styles.name}>{user.name}</h3>
                        <Link to={'/'}>
                            {
                                user.avatar && <img className={styles.avatar} src={user.avatar} alt="avatar" />
                            }
                        </Link>
                        <button className={styles.logoutButton} onClick={logoutUser}>
                            <img src={logoutIcon} width='60' alt="" />
                        </button>
                    </div>
                )
            }

        </nav>
    )
}

export default Navigation