import { combineReducers } from 'redux';
import featurePrice from '../FeaturePrice/reducer';
import news from '../News/reducer';
import priceHistory from '../PriceHistory/reducer';

export default combineReducers({
  featurePrice,
  news,
  priceHistory
});
