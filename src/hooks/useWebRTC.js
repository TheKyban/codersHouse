import { useState } from "react"
import { UseStateWithCallback } from "./useStateWithCallback"

const users = [
    {
        id: 1,
        name: "Aditya K"
    },
    {
        id: 2,
        name: "John Doe"
    }
]
export const UseWebRTC = () => {
    const [clients, setClients] = UseStateWithCallback(users)
    // setClients(pre => { [...pre] }, () => { })
    return { clients }
}