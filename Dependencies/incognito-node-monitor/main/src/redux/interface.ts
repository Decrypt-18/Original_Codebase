import { IConfigsReducer } from 'src/configs';
import { IThemeReducer } from 'src/theme';

export interface IAction {
    type: string;
    payload: any;
}

export interface IRootState {
    configs: IConfigsReducer;
    theme: IThemeReducer;
}
