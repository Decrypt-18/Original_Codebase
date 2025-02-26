import { Dispatch } from 'redux';
import { IRootState } from 'src/redux/interface';
import { ITableData } from 'src/modules/NodeMonitor/components/Table/Table.interface';
import {
    ACTION_UPDATE_COMMITTEE_INFO,
    ACTION_UPDATE_MONITOR_DETAIL,
    ACTION_UPDATE_STATUS_FETCHING,
    ACTION_UPDATE_SYNC_STAT,
    ACTION_CLEAR_MONITOR_DETAIL,
} from './MonitorDetail.actionsName';
import { getCommitteeInfo, getListNodesInfo, getSyncStatInfo } from '../Table/Table.services';
import { NodesCommitteeInfoBuilder, NodesInfoBuilder, NodesSyncStatBuilder } from '../Table/Table.builder';
import { ISyncStat } from './MonitorDetail.interface';

export const actionUpdateMonitorDetail = (payload: { node?: ITableData }) => ({
    type: ACTION_UPDATE_MONITOR_DETAIL,
    payload,
});

export const actionClearMonitorDetail = () => ({
    type: ACTION_CLEAR_MONITOR_DETAIL,
});

export const actionUpdateSyncStat = (payload: { syncStat?: ISyncStat }) => ({
    type: ACTION_UPDATE_SYNC_STAT,
    payload,
});

export const actionUpdateStatusFetching = (payload: { fetching: boolean }) => ({
    type: ACTION_UPDATE_STATUS_FETCHING,
    payload,
});

export const actionFetchSyncStat = () => async (dispatch: Dispatch, getState: () => IRootState) => {
    try {
        const { node, fetching } = getState().monitorDetail;
        if (!node) return;
        if (!fetching) {
            dispatch(actionUpdateStatusFetching({ fetching: true }));
        }
        const { publicKey } = node;
        const syncStat = NodesSyncStatBuilder(await getSyncStatInfo(publicKey));
        dispatch(actionUpdateSyncStat({ syncStat }));
    } catch (e) {
        console.debug('Fetch sync stats with error: ', e);
    } finally {
        dispatch(actionUpdateStatusFetching({ fetching: false }));
    }
};

export const actionUpdateCommitteeInfo = (payload: { committeeInfo: any }) => ({
    type: ACTION_UPDATE_COMMITTEE_INFO,
    payload,
});

export const actionFetchCommitteeActivity = () => async (dispatch: Dispatch, getState: () => IRootState) => {
    try {
        const { node } = getState().monitorDetail;
        if (!node) return;
        const { publicKey } = node;
        const committeeInfo = NodesCommitteeInfoBuilder(await getCommitteeInfo(publicKey));
        dispatch(actionUpdateCommitteeInfo({ committeeInfo }));
    } catch (e) {
        console.debug('Fetch sync stats with error: ', e);
    } finally {
        dispatch(actionUpdateStatusFetching({ fetching: false }));
    }
};

export const actionFetchNodeSyncInfo = (publicKey: string) => async (
    dispatch: Dispatch,
    getState: () => IRootState,
) => {
    try {
        const node = NodesInfoBuilder(await getListNodesInfo(publicKey));
        dispatch(actionUpdateMonitorDetail({ node }));
        await actionFetchSyncStat()(dispatch, getState);
        await actionFetchCommitteeActivity()(dispatch, getState);
    } catch (e) {
        console.debug('Fetch node info error: ', e);
    }
};
