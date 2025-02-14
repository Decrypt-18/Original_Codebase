import { createSelector } from 'reselect';
import { IRootState } from 'src/redux/interface';
import { IThemeReducer } from './Theme.reducer';

export const themeSelector = createSelector(
    (state: IRootState) => state.theme,
    (theme: IThemeReducer) => theme,
);

export const darkModeSelector = createSelector(themeSelector, (theme) => theme.darkMode);
