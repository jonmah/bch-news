import { POPULATE } from './actions';
import moment from 'moment';

const initialState = { ids: [], items: {} };

const getId = x => x.id;

const transform = ({ author_name, id, guid, post_date_gmt, post_title }) => ({
  by: author_name,
  key: id,
  link: guid,
  time: moment(post_date_gmt).format('LLL'),
  title: post_title,
  id
});

export default (state = initialState, action) => {
  switch (action.type) {
    case POPULATE:
      const items = action.items
        .filter(i => i.tags.includes('BCH'))
        .map(transform);
      return {
        ...state,
        ids: items.map(getId),
        items: items.reduce((acc, x) => ({ ...acc, [getId(x)]: x }), {})
      };
    default:
      return state;
  }
};
