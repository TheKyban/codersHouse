import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
    user: {
        activated: false
    },
    otp: {
        phone: '',
        hash: ''
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            const { user } = action.payload
            state.user = user
            state.isAuth = true

        },
        setHashOtp: (state, action) => {
            const { phone, hash } = action.payload
            state.otp.phone = phone
            state.otp.hash = hash
        }
    }
})

export const { setAuth, setHashOtp } = authSlice.actions
export default authSlice.reducer