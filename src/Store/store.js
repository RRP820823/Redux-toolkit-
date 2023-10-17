import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import log from "../middleware/log"
import counterReducer from "../Store/counterSlice"
import todoReducer from "./todoSlice"
import logger from "redux-logger"
import error from "../middleware/error"
let store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    logger,
    error,
  ],
})
// New comment added
export default store
