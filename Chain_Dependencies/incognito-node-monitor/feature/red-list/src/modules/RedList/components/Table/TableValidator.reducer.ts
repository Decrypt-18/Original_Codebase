import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { ROWS_PER_PAGE } from './TableValidator.constants';
import {
    ACTION_CHANGE_VISIBLE_MODAL,
    ACTION_FETCHING_TABLE_DATA,
    ACTION_UPDATE_TABLE_DATA,
} from './TableValidator.actionsName';
import { ITableValidatorReducer } from './TableValidator.interface';

const initialState: ITableValidatorReducer = {
    currentPage: 0,
    rowsPerPage: ROWS_PER_PAGE,
    limitPage: 0,
    data: [],
    fetching: false,
    visibleModal: false,
};

const tableRedListReducer = (
    state = initialState,
    action: {
        type: string;
        payload: any;
    },
) => {
    switch (action.type) {
        case ACTION_UPDATE_TABLE_DATA: {
            const { payload } = action;
            return {
                ...state,
                ...payload,
            };
        }
        case ACTION_CHANGE_VISIBLE_MODAL: {
            const { visible } = action.payload;
            return {
                ...state,
                visibleModal: visible,
            };
        }
        case ACTION_FETCHING_TABLE_DATA: {
            const { fetching } = action.payload;
            return {
                ...state,
                fetching,
            };
        }
        default:
            return state;
    }
};

const persistConfig = {
    key: 'tableRedList',
    storage,
    whitelist: [''],
    stateReconciler: autoMergeLevel2,
};

export default persistReducer(persistConfig, tableRedListReducer);
