import { getFeaturePrice } from '../api/bitcoin';

const PREFIX = 'FEATURE_PRICE';
const _ = b => x => `${b}/${x}`;
export const POPULATE = _(PREFIX)('POPULATE');
export const populate = () => dispatch => {
  getFeaturePrice()
    .then(r =>
      dispatch({
        type: POPULATE,
        data: r
      })
    )
    .catch(e => console.log(e));
};
