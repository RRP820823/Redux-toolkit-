import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { Provider } from "react-redux"
import reportWebVitals from "./reportWebVitals"
import store from "./Store/store"
const root = ReactDOM.createRoot(document.getElementById("root"))

store.dispatch({
  type: "SHOW_ERROR",
  payload: {
    error: "user not found",
  },
})
const render = () => {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  )
}

//Pull test

render()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
store.subscribe(render)
