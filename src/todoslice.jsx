import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    value: {},
}

const todoslice = createSlice({
        name: "todo",
    initialState,
    reducers: {
        addtask: (state, action) => {
            state.value[Date.now()] = action.payload
        },

        deltask: (state, action) => {
            delete state.value[action.payload]
        },
        updatetask:(state,action)=>{
            state.value[action.payload.updkey]=action.payload.updtask
        }
    }
})

export const { addtask, deltask, updatetask } = todoslice.actions
export default todoslice