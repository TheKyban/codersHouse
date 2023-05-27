import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:7575',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
})

/**
 * List of all the endpoints
 */

export const sendOtp = (data) => api.post('/api/send-otp', data)
export const verifyOtp = (data) => api.post('/api/verify-otp', data)

export default api