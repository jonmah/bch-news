import { POPULATE } from './actions';

const initialState = { price: 0 };

export default (state = initialState, action) => {
  switch (action.type) {
    case POPULATE:
      return action.data;
    default:
      return state;
  }
};
