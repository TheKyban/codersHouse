import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../http'
import { useDispatch } from 'react-redux'
import { setAuth } from '../store/authSlice'

export const LoadingWithRefresh = () => {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`${url}/api/refresh`, {
                    withCredentials: true
                })

                dispatch(setAuth(data))
                setLoading(false)

            } catch (error) {
                setLoading(false)
            }
        })()
    }, [])
    return { loading }
}