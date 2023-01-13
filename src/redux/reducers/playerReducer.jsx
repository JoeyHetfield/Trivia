import { ADD_SETTINGS, SAVE_USER, GO_HOME } from '../actions';

const INITIAL_STATE = {
  name: '',
  email: '',
  score: 0,
};
const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_SETTINGS || GO_HOME: {
    return {
      ...state,
      ...action.payload,
    };
  }
  case SAVE_USER: {
    return {
      ...state,
      name: action.payload[0],
      email: action.payload[1],
    };
  }
  default:
    return state;
  }
};

export default playerReducer;
