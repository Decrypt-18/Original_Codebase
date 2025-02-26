import { createSelector } from 'reselect';
import { IRootState } from 'src/redux/interface';
import { ITableReducer } from './Table.interface';

export const tableSelector = createSelector(
    (state: IRootState) => state.table,
    (table: ITableReducer) => table,
);

export const searchSelector = createSelector(tableSelector, (table) => table.search);
export const listNodeSelector = createSelector(tableSelector, (table) => table.listNode);
