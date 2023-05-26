import React, { useState } from 'react'
import Button from '../../../../components/shared/Button/Button'
import Card from '../../../../components/shared/Card/Card'
import phoneIcon from '../../../../images/telephone.png'
import indiaIcon from '../../../../images/india.png'
import TextInput from '../../../../components/shared/TextInput/TextInput'

import styles from '../StepPhoneEmail.module.css'


const Phone = ({ onNext }) => {
    const [phoneNumber, setPhoneNumber] = useState("")
    return (
        <Card img={phoneIcon} heading={"Enter Your Phone Number"}>
            <div className='number'>
                <TextInput
                    placeholder={"+91 1234567890"}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>
            <div>

                <div className={styles.actionButtonWrap}>
                    <Button onClick={onNext} text={"Next"} />
                </div>
                <p className={styles.bottomParagraph}>
                By entering your details. you’re agreeing to our Terms of Service and Privacy Policy. Thanks!
                </p>
            </div>


        </Card>
    )
}

export default Phone