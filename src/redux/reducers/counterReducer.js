import { INCREMENT_5, DECREMENT_5 } from '../actions';

const initialState = 14;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_5:

      return Math.min(state + 5, 15);

    case DECREMENT_5:

      return Math.max(state - 5, 0);

    default: return state
  }
}

export default counterReducer;