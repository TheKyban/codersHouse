import React, { useState } from 'react'

import Button from '../../../components/shared/Button/Button'
import Card from '../../../components/shared/Card/Card'

import lock from "../../../images/lock.png"
import styles from './StepOtp.module.css'
import TextInput from '../../../components/shared/TextInput/TextInput'
import { verifyOtp } from '../../../http'

import { setAuth } from '../../../store/authSlice'
import { useSelector, useDispatch } from 'react-redux'



const StepOtp = ({ onNext }) => {
  const dispatch = useDispatch()
  const { phone, hash } = useSelector((state) => state.auth.otp)
  const [otp, setOtp] = useState("")


  const submitOtp = async () => {
    if (!otp || !phone || !hash) return;
    const { data } = await verifyOtp({ phone, hash, otp })
    dispatch(setAuth(data))
    // onNext()
  }
  return (
    <div className={styles.cardWrapper}>
      <Card img={lock} heading={"Enter the code we just sent you"}>
        <TextInput placeholder={"1234"} value={otp} onChange={e => setOtp(e.target.value)} />
        <div>

          <div className={styles.actionButtonWrap}>
            <Button onClick={submitOtp} text={"Next"} />
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