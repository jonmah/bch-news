import { POPULATE } from './actions';
import moment from 'moment';

export default (state = [], action) => {
  switch (action.type) {
    case POPULATE:
      return action.data.map(([name, value]) => ({
        name: moment(name).format('MMM-DD'),
        value: (value/100).toFixed(2)
      }));
    default:
      return state;
  }
};
