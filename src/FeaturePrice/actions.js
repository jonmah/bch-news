import { getFeaturePrice } from '../api/bitcoin';

const PREFIX = 'FEATURE_PRICE';
const _ = b => x => `${b}/${x}`;
export const POPULATE = _(PREFIX)('POPULATE');
export const populate = () => dispatch => {
  getFeaturePrice()
    .then(data =>
      dispatch({
        type: POPULATE,
        data
      })
    )
    .catch(e => console.log(e));
};
