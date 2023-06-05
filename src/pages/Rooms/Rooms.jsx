import React, { useEffect, useState } from 'react'
import styles from './Rooms.module.css'
import searchIcon from '../../images/search.png'
import startRoomIcon from '../../images/startRoom.png'
import RoomCard from '../../components/RoomCard/RoomCard'
import AddRoomModel from '../../components/AddRoomModel/AddRoomModel'
import { getAllRooms } from '../../http'


// const roomList = [
//   {
//     id: 1,
//     topic: 'which framework best for frontend ?',
//     speakers: [
//       {
//         id: 1,
//         name: "John Doe",
//         avatar: karna
//       },
//       {
//         id: 2,
//         name: "Jane Doe",
//         avatar: karna
//       }
//     ],
//     totalPeople: 40,
//   },
//   {
//     id: 2,
//     topic: "What's new in machine learning ?",
//     speakers: [
//       {
//         id: 1,
//         name: "John Doe",
//         avatar: karna
//       },
//       {
//         id: 2,
//         name: "Jane Doe",
//         avatar: karna
//       }
//     ],
//     totalPeople: 30,
//   },
// ]


const Rooms = () => {
  const [showModel, setShowModel] = useState(false)
  const [roomList, setRoomList] = useState([])

  useEffect(() => {
    const fetchRooms = async () => {
      const { data } = await getAllRooms();
      console.log(data)
      setRoomList(data)
    }

    fetchRooms()
  }, [])
  return (
    <div className={'container'}>
      <div className={styles.roomHeaders}>
        <div className={styles.left}>
          <span className={styles.heading}>All Voice rooms</span>
          <div className={styles.searchBox}>
            <img src={searchIcon} className={styles.searchIcon} alt="Search" />
            <input type="text" className={styles.searchInput} />
          </div>
        </div>
        <div className={styles.right}>
          <button className={styles.startRoomButton} onClick={() => setShowModel(true)}>
            <img src={startRoomIcon} alt="" />
            <span className={styles.startRoomText}>Start a room</span>
          </button>
        </div>
      </div>

      <div className={styles.roomList}>
        {
          roomList && roomList.map(room => (
            <RoomCard room={room} key={room.id} />
          ))
        }
      </div>
      {
        showModel && <AddRoomModel onClose={() => setShowModel(false)} />
      }
    </div>

  )
}

export default Rooms