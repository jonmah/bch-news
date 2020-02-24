import { combineReducers } from 'redux';
import news from '../News/reducer';
import priceHistory from '../PriceHistory/reducer';

export default combineReducers({
  news,
  priceHistory
});
