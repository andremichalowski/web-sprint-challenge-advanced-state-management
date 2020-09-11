import { FETCH_SMURFS, ADD_SMURF } from '../actions/smurfActions';

const initialState = {
  smurfs: []
}
export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS:
      return {
        ...state,
        smurfs: action.payload
      };

    case ADD_SMURF:
      return {
        ...state,
      };

    default:
      return state;
  };
};