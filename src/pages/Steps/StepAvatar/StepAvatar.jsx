import React, { useState } from 'react'
import Button from '../../../components/shared/Button/Button'
import Card from '../../../components/shared/Card/Card'
import styles from './StepAvatar.module.css'
import logo from '../../../images/profile.png'
import { useSelector, useDispatch } from 'react-redux'
import { setAvatar } from '../../../store/activateSlice'
import { activate } from '../../../http'
import { setAuth } from '../../../store/authSlice'
import karna from '../../../images/karna.png'
import Loader from '../../../components/shared/Loader/Loader'


const StepAvatar = ({ onNext }) => {

  const dispatch = useDispatch()
  let { name, avatar } = useSelector(state => state.activate)
  const [image, setImage] = useState(karna)
  const [loading, setLoading] = useState(false)
  const [unMount, setUnMount] = useState(false)

  const sumbitProfile = async () => {
    if (!avatar || !name) return;
    setLoading(true)

    try {
      const { data } = await activate({ name, avatar })
      if (data.auth) {
        if (!unMount) {
          dispatch(setAuth(data))
        }
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const captureImage = (e) => {
    const file = e.target.files[0]
    console.log(file)
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onloadend = () => {
      setImage(reader.result)
      dispatch(setAvatar(reader.result))
    }
  }
  name = name[0].toUpperCase() + name.substr(1)

  useEffect(() => {
    return () => {
      setUnMount(true)
    }
  }, [])

  return loading ? <Loader message={"Activation in progress"} /> : (
    <div className={styles.cardWrapper}>
      <Card img={logo} heading={`Okay, ${name}!`}>

        <p className={styles.bottomParagraph}>
          How's this photo
        </p>

        <div className={styles.avatarWrapper}>
          <img className={styles.avatar} src={image} alt="" />
        </div>

        <div>
          <label htmlFor="avatar" className={styles.avatarLabel}>chose a different photo</label>
          <input type="file" className={styles.avatarInput} name="avatar" id="avatar" onChange={captureImage} />
        </div>

        <div className={styles.actionButtonWrap}>
          <Button onClick={sumbitProfile} text={"Next"} />
        </div>

      </Card>
    </div>
  )
}

export default StepAvatar