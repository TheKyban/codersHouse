import React, { useState } from 'react'

import Button from '../../../components/shared/Button/Button'
import Card from '../../../components/shared/Card/Card'

import lock from "../../../images/lock.png"
import styles from './StepOtp.module.css'
import TextInput from '../../../components/shared/TextInput/TextInput'


const StepOtp = ({ onNext }) => {

  const [otp, setOtp] = useState("")

  return (
    <div className={styles.cardWrapper}>
      <Card img={lock} heading={"Enter the code we just sent you"}>
        <TextInput placeholder={"1234"} value={otp} onchange={e=>setOtp(e.target.value)}/>
        <div>

          <div className={styles.actionButtonWrap}>
            <Button onClick={onNext} text={"Next"} />
          </div>
          <p className={styles.bottomParagraph}>
            By entering your details. you’re agreeing to our Terms of Service and Privacy Policy. Thanks!
          </p>
        </div>
      </Card>
    </div>
  )
}

export default StepOtp