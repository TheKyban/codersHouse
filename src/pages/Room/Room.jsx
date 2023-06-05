import React, { useState } from 'react'
import { UseWebRTC } from '../../hooks/useWebRTC'
import styles from './Room.module.css';

const Room = () => {
    const { clients } = UseWebRTC()
    return (
        <div>
            <h1>All connected clients</h1>
            {
                clients.map(client => {
                    return <div key={client.id}>
                        <audio controls autoPlay></audio>
                        <h4>{client.name}</h4>
                    </div>
                })
            }
        </div>
    )
}

export default Room