const log = (store) => (next) => (action) => {
  console.log("coming fromm middlerwARE ")
  console.log(action)
  next(action)
}

// export default log

// let fetchById = () => {
//   return async (dispatch, getdata) => {
//     let res = fetch("url")
//   }
// }
