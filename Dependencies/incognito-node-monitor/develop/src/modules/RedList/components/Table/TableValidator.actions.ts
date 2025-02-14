import { IRootState } from 'src/redux/interface';
import { Dispatch } from 'redux';
import { INodeName, ITableData } from 'src/modules/NodeMonitor/components/Table/Table.interface';
import { NodesListBuilder } from 'src/modules/NodeMonitor/components/Table/Table.builder';
import { getListNodesInfo } from 'src/modules/NodeMonitor/components/Table/Table.services';
import {
    ACTION_UPDATE_TABLE_DATA,
    ACTION_CHANGE_VISIBLE_MODAL,
    ACTION_FETCHING_TABLE_DATA,
} from 'src/modules/RedList/components/Table/TableValidator.actionsName';
import { getRedList } from './TableValidator.services';
import { ROWS_PER_PAGE } from './TableValidator.constants';

export const actionUpdateTableData = (payload: {
    data: ITableData[];
    currentPage?: number;
    limitPage?: number;
    isSearching?: boolean;
}) => ({
    type: ACTION_UPDATE_TABLE_DATA,
    payload,
});

export const actionFetchingTableData = (payload: { fetching: boolean }) => ({
    type: ACTION_FETCHING_TABLE_DATA,
    payload,
});

export const actionUpdateVisibleModal = (payload: { visible?: boolean }) => ({
    type: ACTION_CHANGE_VISIBLE_MODAL,
    payload,
});

export const actionGetRedList = (payload: { page: number }) => async (
    dispatch: Dispatch,
    getState: () => IRootState,
) => {
    try {
        const { fetching } = getState().table;
        if (fetching) return;
        dispatch(actionFetchingTableData({ fetching: true }));
        let { page } = payload;
        page += 1;
        const nodeIndex = (page - 1) * ROWS_PER_PAGE;
        const { data, total } = (await getRedList(page)) as any;
        const mapper: INodeName[] = data.map((publicKey: string, index: number) => ({
            name: `Node ${nodeIndex + index + 1}`,
            publicKey,
        }));
        const listNodes = NodesListBuilder(await getListNodesInfo(data.join(',')), mapper);
        dispatch(actionUpdateTableData({ data: listNodes, currentPage: page - 1, limitPage: total }));
    } catch (e) {
        console.debug('Fetch Red List With Error', e);
    } finally {
        dispatch(actionFetchingTableData({ fetching: false }));
    }
};
