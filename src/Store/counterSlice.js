import { createSlice } from "@reduxjs/toolkit"

const options = {
  name: "counter",
  initialState: 1, //Initial state of slice
  reducers: {
    add: (state, action) => state + 1,
    sub: (state, action) => state - 1,
    addBy: (state, action) => (state += action.payload),
  },
}

const counterSlice = createSlice(options)

console.log("todosSlice", counterSlice)

export const { add, sub, addBy } = counterSlice.actions

export default counterSlice.reducer
