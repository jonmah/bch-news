const PREFIX = 'FEATURE_PRICE';
const _ = b => x => `${b}/${x}`;
export const POPULATE = _(PREFIX)('POPULATE');
export const populate = data => ({ type: POPULATE, data });
