import { getPriceHistory } from '../api/bitcoin';

const PREFIX = 'PRICE_HISTORY';
const _ = (b) => (x) => `${b}/${x}`;

export const POPULATE = _(PREFIX)('POPULATE');
export const populate = () => (dispatch) => {
  getPriceHistory()
    .then((data) => dispatch({ type: POPULATE, data }))
    .catch((e) => console.log(e));
};
