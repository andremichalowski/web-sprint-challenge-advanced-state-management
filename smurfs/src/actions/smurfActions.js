import axios from "axios";

export const FETCH_SMURFS = "FETCH_SMURFS";

export const fetchSmurfs = () => dispatch => {
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("fetchSmurf action", res.data)
      dispatch({
        type: FETCH_SMURFS,
        payload: res.data,
      })
    })
    .catch(err => console.log(err.message))
}