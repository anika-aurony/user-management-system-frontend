import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import usersSlice from "../features/users/usersSlice";


const store = configureStore({
    reducer: {
        users : usersSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store;