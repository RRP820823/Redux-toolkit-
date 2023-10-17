import logo from "./logo.svg"
import "./App.css"
import { addTodo, removeTodo, getTask, getUserThunk } from "./Store/todoSlice"
import { useDispatch, useSelector } from "react-redux"
import { add, sub, addBy } from "./Store/counterSlice"
import React, { useEffect } from "react"
import axios from "axios"
import log from "./middleware/log"
import store from "./Store/store"
import { fetchTask } from "./Store/todoSlice"
function App() {
  const [input, setinput] = React.useState("")
  // const counter = useSelector((state) => state.counter)

  const todos = useSelector((state) => state.todos.tasks)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTask())
  }, [])

  console.log("todos", todos)
  // to use async thunk api

  // useEffect(() => {
  //   dispatch(getUserThunk())
  // }, [])

  //to get the single user using core thunk
  // useEffect(() => {
  //   dispatch(fetchTask())
  // }, [])

  // const fetchTask = () => {
  //   return (dispatch) => {
  //     fetch("https://jsonplaceholder.typicode.com/todos/1")
  //       .then((response) => response.json())
  //       .then((json) => dispatch(getUserThunk(json)))
  //   }
  // }

  // to get the initail Tasks using function

  // useEffect(() => {
  //   getTasks()
  // }, [])
  // const getTasks = async () => {
  //   try {
  //     let response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/todos"
  //     )

  //     console.log(response)

  //     dispatch(getTask(response))
  //   } catch (error) {
  //     dispatch({
  //       type: "SWOW_ERROR",
  //       payload: {
  //         error: error.message,
  //       },
  //     })
  //   }
  // }

  function handelAdd(params) {
    dispatch(add())
  }

  function handelAddBy() {
    dispatch(addBy(Number(input)))
    setinput("")
  }

  function handelInputChnage(e) {
    setinput(e.target.value)
  }

  function handelAddTodo() {
    dispatch(addTodo(input))
    setinput("")
  }

  function handelRemoveTodo(id) {
    dispatch(removeTodo({ id }))
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>input {input}</h1>
          <input type="text" value={input} onChange={handelInputChnage} />
          <button onClick={handelAddTodo}>Add Task</button>
        </div>
        {/* <h1>counter {counter} </h1> */}

        {/* <div>
          <button onClick={handelAddBy}>add by value </button>
          <button onClick={handelAdd}>Add</button>
          <button onClick={() => dispatch(sub())}> Sub</button>
        </div> */}
        <ul>
          {todos.map((t) => (
            <>
              <li key={t.title}>{t.title}</li>
              <button onClick={() => handelRemoveTodo(t.id)}>Remove</button>
            </>
          ))}
        </ul>
      </header>
    </div>
  )
}

export default App
