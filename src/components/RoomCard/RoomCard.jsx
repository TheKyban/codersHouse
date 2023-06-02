import React from 'react'
import styles from './RoomCard.module.css'
import chatIcon from '../../images/chat.png'
import peopleIcon from '../../images/people.png'
import { useNavigate } from 'react-router-dom'

const RoomCard = ({ room }) => {

  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/room/${room.id}`)} className={styles.card}>
      <h3 className={styles.topic}>{room.topic}</h3>
      <div className={`${styles.speakers} ${room.speakers.length === 1 ? styles.singleSpeaker : ''}`}>
        <div className={styles.avatars}>
          {
            room.speakers.map(speakers => (
              <img key={speakers.id} className={styles.avatar} src={speakers.avatar} alt="avatar" />
            ))
          }
        </div>
        <div className={styles.names}>
          {
            room.speakers.map(speakers => (

              <div className={styles.nameWrapper} key={speakers.id}>
                <span>{speakers.name}</span>
                <img src={chatIcon} alt="" />
              </div>
            ))
          }
        </div>
      </div>
      <div className={styles.peopleCount}>
        <span>{room.totalPeople}</span>
        <img src={peopleIcon} alt="" />
      </div>
    </div>
  )
}

export default RoomCard