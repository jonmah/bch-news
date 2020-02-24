const PREFIX = 'NEWS';
const _ = b => x => `${b}/${x}`;
export const POPULATE = _(PREFIX)('POPULATE');
export const populate = items => ({ type: POPULATE, items });
