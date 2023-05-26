import React, { useState } from 'react'

import Phone from './Phone/Phone'
import Email from './Email/Email'

import styles from './StepPhoneEmail.module.css'

import phoneIcon from '../../../images/phone.png'
import mailIcon from '../../../images/mail.png'

const PhoneEmail = {
    phone: Phone,
    email: Email
}
const StepPhoneEmail = ({ onNext }) => {

    const [type, setType] = useState("phone")
    const Component = PhoneEmail[type]

    return (
        <>
            <div className={styles.cardWrapper}>
                <div>
                    <div className={styles.buttonWrap}>
                        <button
                            className={`${styles.tabButton} ${type === "phone" && styles.active}`}
                            onClick={() => setType("phone")}
                        >
                            <img src={phoneIcon} alt="Phone" />
                        </button>
                        
                        <button
                            className={`${styles.tabButton} ${type === "email" && styles.active}`}
                            onClick={() => setType("email")}
                        >
                            <img src={mailIcon} alt="Mail" />
                        </button>
                    </div>
                    <Component onNext={onNext} />
                </div>

            </div>
        </>
    )
}

export default StepPhoneEmail