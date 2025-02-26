import { createSelector } from 'reselect';
import { IRootState } from 'src/redux/interface';
import { IMonitorDetailReducer } from './MonitorDetail.interface';

export const monitorDetailSelector = createSelector(
    (state: IRootState) => state.monitorDetail,
    (monitorDetail: IMonitorDetailReducer) => monitorDetail,
);
