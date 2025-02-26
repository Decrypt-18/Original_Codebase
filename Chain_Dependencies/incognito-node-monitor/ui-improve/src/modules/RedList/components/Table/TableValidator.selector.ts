import { createSelector } from 'reselect';
import { IRootState } from 'src/redux/interface';
import { ITableValidatorReducer } from './TableValidator.interface';

export const tableValidatorSelector = createSelector(
    (state: IRootState) => state.tableValidator,
    (tableValidator: ITableValidatorReducer) => tableValidator,
);
