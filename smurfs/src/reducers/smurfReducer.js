import { FETCH_SMURFS } from '../actions/smurfActions';

const initialState = {
  smurfs: []
}
export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS:
      return {
        ...state,
        smurfs: action.payload
      }
      default:
        return state;
  }
};