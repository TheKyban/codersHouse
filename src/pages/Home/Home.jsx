import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Card from '../../components/shared/Card/Card'
import Button from '../../components/shared/Button/Button'
import icon from '../../images/handWave.png'

import styles from './Home.module.css'


const Home = () => {

    const navigate = useNavigate()

    const redirectToRegistration = (e) => {
        navigate("/authenticate")
    }

    const options = {
        icon: icon,
        heading: "Welcome to Codershouse",
        btn: "Let's Go"
    }

    const isInvite = {
        fontSize: '18px',
        color: '#0077FF'
    }

    const signinStyle = {
        fontSize: '18px',
        color: '#0077FF',
        fontWeight: 'bold',
        marginLeft: '5px',
        textDecoration: 'none'
    }

    return (
        <div className={styles.cardWrapper}>
            <Card img={options.icon} heading={options.heading}>

                <p className={styles.text}>
                    We’re working hard to get Coderhouse ready for everyone! While we wrap up the finishing touches. we’re adding people gradually to make sure nothing breaks
                </p>

                <div>
                    <Button onClick={redirectToRegistration} text={options.btn} />
                </div>

                <div className={styles.signinWrapper}>
                    {/* <span style={isInvite}>Have an invite text?</span> */}
                    {/* <Link style={signinStyle} to={'/login'}>Sign in</Link> */}
                </div>

            </Card>
        </div>
    )
}

export default Home