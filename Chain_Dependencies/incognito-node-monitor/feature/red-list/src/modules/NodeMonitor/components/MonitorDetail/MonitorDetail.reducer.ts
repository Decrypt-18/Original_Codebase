import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { IMonitorDetailReducer, ISyncStat } from './MonitorDetail.interface';
import {
    ACTION_CLEAR_MONITOR_DETAIL,
    ACTION_UPDATE_COMMITTEE_INFO,
    ACTION_UPDATE_MONITOR_DETAIL,
    ACTION_UPDATE_STATUS_FETCHING,
    ACTION_UPDATE_SYNC_STAT,
} from './MonitorDetail.actionsName';

const initialState: IMonitorDetailReducer = {
    node: undefined,
    syncStat: undefined,
    fetching: false,
    committee: undefined,
};

const monitorDetailReducer = (
    state = initialState,
    action: {
        type: string;
        payload: any;
    },
) => {
    switch (action.type) {
        case ACTION_UPDATE_MONITOR_DETAIL: {
            const { node } = action.payload;
            return {
                ...state,
                node,
            };
        }
        case ACTION_UPDATE_SYNC_STAT: {
            const { syncStat } = action.payload;
            return {
                ...state,
                syncStat,
            };
        }
        case ACTION_UPDATE_STATUS_FETCHING: {
            const { fetching } = action.payload;
            return {
                ...state,
                fetching,
            };
        }
        case ACTION_UPDATE_COMMITTEE_INFO: {
            const { committeeInfo } = action.payload;
            return {
                ...state,
                committee: committeeInfo,
            };
        }
        case ACTION_CLEAR_MONITOR_DETAIL: {
            return {
                ...state,
                ...initialState,
            };
        }
        default:
            return state;
    }
};

const persistConfig = {
    key: 'monitorDetail',
    storage,
    whitelist: [''],
    stateReconciler: autoMergeLevel2,
};

export default persistReducer(persistConfig, monitorDetailReducer);
