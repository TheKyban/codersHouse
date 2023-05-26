import React, { useState } from 'react'

import Button from '../../../../components/shared/Button/Button'
import Card from '../../../../components/shared/Card/Card'
import mail from '../../../../images/mailc.png'
import TextInput from '../../../../components/shared/TextInput/TextInput'

import styles from '../StepPhoneEmail.module.css'

const Email = ({ onNext }) => {
  const [email, setEmail] = useState("")
  return (
    <Card img={mail} heading={"Enter Your Email ID"}>
      <div className='number'>
        <TextInput
          placeholder={"youremail@mail.com"}
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

export default Email