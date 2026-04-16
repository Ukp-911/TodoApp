import { configureStore } from "@reduxjs/toolkit"
import lawda from './todoslice.jsx'
const store = configureStore({
    reducer: {
        todo:lawda.reducer,
    },
})

export default store