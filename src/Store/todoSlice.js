import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchTask = createAsyncThunk(
  "fetchTask",
  async (a, { rejectedWithValue }) => {
    //add this when
    // try {
    // } catch (error) {
    //   return rejectedWithValue({
    //     error: error.message,
    //   })
    // }

    let response = await axios.get("https://jsonplaceholder.typicode.com/todos")
    return {
      tasks: response.data,
    }
  }
)

let id = Math.floor(Math.random() * 1000)

let initialState = {
  tasks: [],
  loading: false,
  error: "",
}
const todo = {
  name: "todo",
  initialState,
  reducers: {
    getTask: (state, action) => {
      state.task = action.payload.data.slice(0, 10)
    },
    addTodo: (state, action) => {
      state.tasks.push({
        id: ++id,
        title: action.payload,
        completed: false,
      })
    },

    removeTodo: (state, action) => {
      let index = state.tasks.findIndex((t) => t.id === action.payload.id)
      state.tasks.splice(index, 1)
    },

    // getUserThunk: (state, action) => {
    //   console.log("initial user fetched by thunk ", action.payload)
    // },
  },

  extraReducers: {
    [fetchTask.fulfilled]: (state, action) => {
      state.tasks = action.payload.tasks.slice(0, 10)
      state.loading = false
    },
    [fetchTask.pending]: (state, action) => {
      state.loading = true
    },
  },
}

let todoSlice = createSlice(todo)
export const { addTodo, removeTodo, getUserThunk, getTask } = todoSlice.actions
export default todoSlice.reducer
