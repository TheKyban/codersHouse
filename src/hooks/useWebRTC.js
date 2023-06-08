import { useCallback, useEffect, useRef } from "react"
import { UseStateWithCallback } from "./useStateWithCallback"
import { socketInit } from '../socket/index'
import { ACTIONS } from "../action"
import freeIce from 'freeice'

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
export const UseWebRTC = (roomId, user) => {

    const [clients, setClients] = UseStateWithCallback([])
    const audioElements = useRef({})
    const connections = useRef({})
    const localMediaStream = useRef(null)
    const Socket = useRef(null)


    useEffect(() => {
        Socket.current = socketInit()
    }, [])



    const addNewClient = useCallback(
        (newClient, cb) => {
            const lookingFor = clients.find((client) => client._id === newClient._id);
            if (lookingFor === undefined) {
                setClients((existingClients) => [...existingClients, newClient], cb)
            }
        },
        [clients, setClients]
    )

    // capture media
    useEffect(() => {
        const startCapture = async () => {
            localMediaStream.current =
                await navigator.mediaDevices.getUserMedia({
                    audio: true
                })
        }

        startCapture().then(() => {
            addNewClient(user, () => {
                const localElement = audioElements.current[user._id];
                if (localElement) {
                    localElement.volume = 0;
                    localElement.srcObject = localMediaStream.current
                }

                // socket emit Join socket io

                Socket.current.emit(ACTIONS.JOIN, { roomId, user })
            })
        })
    }, [])


    useEffect(() => {
        const handleNewPeer = async ({ peerId, createOffer, user: remoteUser }) => {
            // if already connected then give warning
            if (peerId in connections.current) {
                return console.warn(`You are already connected with ${peerId}(${user.name})`)
            }
            connections.current[peerId] = new RTCPeerConnection({
                iceServers: freeIce()
            })

            // Handle new ice candidate
            connections.current[peerId].onicecandidate = (event) => {
                Socket.current.emit(ACTIONS.RELAY_ICE, {
                    peerId,
                    icecandidate: event.candidate
                })
            }

            // handle on track on this connection
            connections.current[peerId].ontrack = ({
                streams: [remoteStream]
            }) => {
                addNewClient(remoteUser, () => {
                    if (audioElements.current[remoteUser.id]) {
                        audioElements.current[remoteUser.id].srcObject = remoteStream
                    } else {
                        let settled = false;
                        const interval = setInterval(() => {
                            if (audioElements.current[remoteUser.id]) {
                                audioElements.current[remoteUser.id].srcObject = remoteStream
                                settled = true
                            }

                            if (settled) {
                                clearInterval(interval)
                            }
                        }, 1000)
                    }
                })
            }

            // Add local track to remote connections
            localMediaStream.current.getTracks().forEach(track => {
                connections.current[peerId].addTrack(track, localMediaStream.current)
            });

            // Create Offer
            if (createOffer) {
                const offer = await connections.current[peerId].createOffer()

                //send offer to another client
                Socket.current.emit(ACTIONS.RELAY_SDP, { peerId, sessionDescription: offer })
            }
        }

        Socket.current.on(ACTIONS.ADD_PEER, handleNewPeer)

        return () => {
            Socket.current.off(ACTIONS.ADD_PEER)
        }
    }, [])

    const provideRef = (instance, userId) => {
        audioElements.current[userId] = instance
    }

    return { clients, provideRef }
}