import axios from "axios";

export const FETCH_SMURFS = "FETCH_SMURFS";
export const ADD_SMURF = "ADD_SMURF";

export const fetchSmurfs = () => (dispatch) => {
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log("fetchSmurf action", res.data);
      dispatch({
        type: FETCH_SMURFS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err.message));
};

export const postNewSmurf = (smurfData) => (dispatch) => {
  axios.post("http://localhost:3333/smurfs", smurfData).then((res) => {
    dispatch({
      type: ADD_SMURF,
      payload: res.data,
    });
  })
  .catch((err) => console.log(err.message));
};
