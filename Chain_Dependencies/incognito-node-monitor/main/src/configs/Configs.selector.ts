import { createSelector } from 'reselect';
import { IRootState } from 'src/redux/interface';
import { IConfigsReducer } from 'src/configs';

export const configsSelector = createSelector(
    (state: IRootState) => state.configs,
    (configs: IConfigsReducer) => configs,
);
