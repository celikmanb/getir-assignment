import { createSelector } from 'reselect'

export const productSelector = createSelector(
    state => state.items,
    items => {
        return items;
    },
);
