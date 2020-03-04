import { POPULATE } from './actions';

const initialState = { price: 0 };

const formatNumber = n => (n / 100).toFixed(2);
const transform = ({ price }) => ({ price: formatNumber(price) });

export default (state = initialState, action) => {
  switch (action.type) {
    case POPULATE:
      return transform(action.data);
    default:
      return state;
  }
};
