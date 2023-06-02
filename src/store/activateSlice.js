import { createSlice } from "@reduxjs/toolkit";
import avatar from '../images/karna.png'

const initialState = {
    name: "",
    avatar: ''
}

export const activateSlice = createSlice({
    name: "activate",
    initialState,
    reducers: {
        setName: (state, action) => {
            const name = action.payload
            state.name = name;

            console.log(name)
        },
        setAvatar: (state, action) => {
            const avatar = action.payload
            state.avatar = avatar
        }
    }
})

export const { setName, setAvatar } = activateSlice.actions
export default activateSlice.reducer