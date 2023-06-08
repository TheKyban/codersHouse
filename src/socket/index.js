import { io } from 'socket.io-client'

export const socketInit = () => {
    const options = {
        reconnectionAttempts: 'Infinity',
        timeout: 10000,
        transports: ['WebSocket']
    }

    return io('http://localhost:7575')
}

