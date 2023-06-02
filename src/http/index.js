import axios from 'axios'

export const url = 'http://localhost:7575'
const api = axios.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    withCredentials: true
})

/**
 * List of all the endpoints
 */

export const sendOtp = (data) => api.post('/api/send-otp', data)
export const verifyOtp = (data) => api.post('/api/verify-otp', data)
export const activate = (data) => api.post('/api/activate', data)
export const logout = () => api.post('/api/logout')
export const createRoom = (data) => api.post('/api/rooms', data)
export const getAllRooms = (data) => api.get('/api/rooms',data)


// Interceptors
api.interceptors.response.use(
    (config) => {
        return config
    },
    async (error) => {
        const originalRequest = error.config
        if (error.response.status === 401 &&
            originalRequest &&
            !originalRequest._isRetry) {
            originalRequest.isRetry = true
            try {
                const response = await axios.get(`${url}/api/refresh`, {
                    withCredentials: true
                })

                return api.request(originalRequest)
            } catch (error) {
                console.log(error.message)
            }
        }

        throw error
    })
export default api