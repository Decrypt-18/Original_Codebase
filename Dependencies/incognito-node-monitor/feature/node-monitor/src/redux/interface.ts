import { IConfigsReducer } from 'src/configs';
import { IThemeReducer } from 'src/theme';
import { ITableReducer } from 'src/modules/NodeMonitor/components/Table/Table.interface';
import { IMonitorDetailReducer } from 'src/modules/NodeMonitor/components/MonitorDetail/MonitorDetail.interface';

export interface IAction {
    type: string;
    payload: any;
}

export interface IRootState {
    configs: IConfigsReducer;
    theme: IThemeReducer;
    table: ITableReducer; // Node monitor
    monitorDetail: IMonitorDetailReducer; // Monitor detail
}
