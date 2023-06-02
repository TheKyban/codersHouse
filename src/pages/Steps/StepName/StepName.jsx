import React, { useState } from 'react'
import logo from '../../../images/name.png'
import Button from '../../../components/shared/Button/Button'
import Card from '../../../components/shared/Card/Card'
import TextInput from '../../../components/shared/TextInput/TextInput'

import styles from './StepName.module.css'

import { useDispatch, useSelector } from 'react-redux'
import { setName } from '../../../store/activateSlice'

const StepName = ({ onNext }) => {

  const name = useSelector(state => state.activate.name)
  const dispatch = useDispatch()
  const [fullName, setFullName] = useState(name)

  const submitName = () => {
    if (!fullName) {
      return;
    }

    dispatch(setName(fullName))
    onNext()
  }

  return (
    <div className={styles.cardWrapper}>
      <Card img={logo} heading={"What's your full name?"}>
        <TextInput placeholder={"Your name"} value={fullName} onChange={e => setFullName(e.target.value)} />
        <div>

          <p className={styles.bottomParagraph}>
            People use real name at codersHouse
          </p>
          <div className={styles.actionButtonWrap}>
            <Button onClick={submitName} text={"Next"} />
          </div>
        </div>
      </Card>
    </div>
  )
}

export default StepName