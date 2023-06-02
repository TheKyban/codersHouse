import React, { useState } from 'react'
import styles from './AddRoomModel.module.css'
import TextInput from '../shared/TextInput/TextInput'
import globeIcon from '../../images/globe.png'
import socialIcon from '../../images/social.png'
import lockIcon from '../../images/lock.png'
import celebration from '../../images/party.png'
import exit from '../../images/exit.png'
import { createRoom as create } from '../../http'
import {useNavigate} from 'react-router-dom'


const AddRoomModel = ({ onClose }) => {
    const [roomType, setRoomType] = useState('open')
    const [topic, setTopic] = useState("")
    const navigate = useNavigate()

    const createRoom = async () => {
        // server calling
        try {
            if (!topic) return;
            const { data } = await create({ topic, roomType })
            console.log(data)

            navigate(`/room/${data.id}`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.modelMask}>
            <div className={styles.modelBody}>
                <button className={styles.exit} onClick={onClose}>
                    <img src={exit} alt="exit" />
                </button>
                <div className={styles.modelHeader}>

                    <h3 className={styles.modelHeading}>
                        Enter the topic to be disscussed
                    </h3>

                    <TextInput
                        fullwidth="true"
                        placeholder="Enter Room Name"
                        value={topic}
                        onChange={e => setTopic(e.target.value)}
                    />

                    <h2 className={styles.roomTypeHeading}>
                        Room Types
                    </h2>
                    <div className={styles.roomtypes}>

                        <div
                            className={`${styles.typeBox} ${roomType === 'open' && styles.active}`}
                            onClick={() => setRoomType('open')}
                        >
                            <img src={globeIcon} alt="globe" />
                            <span>Open</span>
                        </div>

                        <div
                            className={`${styles.typeBox} ${roomType === 'social' && styles.active}`}
                            onClick={() => setRoomType('social')}
                        >
                            <img src={socialIcon} alt="social" />
                            <span>Social</span>
                        </div>

                        <div
                            className={`${styles.typeBox} ${roomType === 'close' && styles.active}`}
                            onClick={() => setRoomType('close')}
                        >
                            <img src={lockIcon} alt="globe" />
                            <span>Closed</span>
                        </div>
                    </div>
                </div>

                <div className={styles.modelFooter}>
                    <h2>
                        Start a room, open to everyone
                    </h2>
                    <button className={styles.footerBotton} onClick={createRoom}>
                        <img src={celebration} alt="Celebration" />
                        Let's Go
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddRoomModel