import { IConfigsReducer } from 'src/configs';
import { IThemeReducer } from 'src/theme';
import { ITableReducer } from 'src/modules/NodeMonitor/components/Table/Table.interface';
import { IMonitorDetailReducer } from 'src/modules/NodeMonitor/components/MonitorDetail/MonitorDetail.interface';
import { ITableValidatorReducer } from 'src/modules/RedList/components/Table/TableValidator.interface';

export interface IAction {
    type: string;
    payload: any;
}

export interface IRootState {
    configs: IConfigsReducer;
    theme: IThemeReducer;
    table: ITableReducer; // Node monitor
    monitorDetail: IMonitorDetailReducer; // Monitor detail
    tableValidator: ITableValidatorReducer;
}
