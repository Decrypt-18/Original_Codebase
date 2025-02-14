import { IRootState } from 'src/redux/interface';
import { Dispatch } from 'redux';
import { isEmpty } from 'lodash';
import {
    ACTION_CHANGE_LIMIT_PAGE,
    ACTION_CHANGE_ROWS_PER_PAGE,
    ACTION_UPDATE_TABLE_DATA,
    ACTION_FETCHING_TABLE_DATA,
    ACTION_UPDATE_SEARCH_VALUE,
    ACTION_CHANGE_VISIBLE_MODAL,
} from './Table.actionsName';
import { INodeName, ITableData } from './Table.interface';
import { getParamsNodesInfo } from './Table.utils';
import { getListNodesInfo } from './Table.services';
import { NodesListBuilder } from './Table.builder';

export const actionChangeRowsPerPage = (payload: { rowsPerPage: number }) => ({
    type: ACTION_CHANGE_ROWS_PER_PAGE,
    payload,
});

export const actionChangeLimitPage = (payload: { limitPage: number }) => ({
    type: ACTION_CHANGE_LIMIT_PAGE,
    payload,
});

export const actionFetchingTableData = (payload: { fetching: boolean }) => ({
    type: ACTION_FETCHING_TABLE_DATA,
    payload,
});

export const actionUpdateTableData = (payload: {
    data: ITableData[];
    currentPage?: number;
    limitPage?: number;
    isSearching?: boolean;
    listNode?: INodeName[];
}) => ({
    type: ACTION_UPDATE_TABLE_DATA,
    payload,
});

export const actionUpdateSearchValue = (payload: { search: string }) => ({
    type: ACTION_UPDATE_SEARCH_VALUE,
    payload,
});

export const actionFetchTableData = (page: number, newListNode?: INodeName[]) => async (
    dispatch: Dispatch,
    getState: () => IRootState,
) => {
    try {
        const { rowsPerPage, fetching, listNode } = getState().table;
        if (fetching) return;
        const allNodes = (!isEmpty(newListNode) ? newListNode : listNode) || [];
        const { strKeys, mapper, totalRows } = getParamsNodesInfo(allNodes, page, rowsPerPage);
        dispatch(actionFetchingTableData({ fetching: true }));
        const nodes = NodesListBuilder(await getListNodesInfo(strKeys), mapper);
        dispatch(actionUpdateTableData({ data: nodes, currentPage: page, limitPage: totalRows, listNode: allNodes }));
    } catch (e) {
        console.debug('Fetch table data with error: ', e);
    } finally {
        dispatch(actionFetchingTableData({ fetching: false }));
    }
};

export const actionSubmitSearch = (newListNode: INodeName[]) => (dispatch: Dispatch, getState: () => IRootState) => {
    try {
        actionFetchTableData(0, newListNode)(dispatch, getState);
    } catch (e) {
        console.debug('Clear search error', e);
    }
};

export const actionChangePage = (page: number) => (dispatch: Dispatch, getState: () => IRootState) => {
    try {
        actionFetchTableData(page)(dispatch, getState);
    } catch (e) {
        console.debug('Clear search error', e);
    }
};

export const actionUpdateVisibleModal = (payload: { visible?: boolean }) => ({
    type: ACTION_CHANGE_VISIBLE_MODAL,
    payload,
});

export const actionDeleteNode = (node: INodeName) => async (dispatch: Dispatch, getState: () => IRootState) => {
    const { listNode, data } = getState().table;
    const newListNode = listNode.filter((item) => item.publicKey !== node.publicKey) || [];
    const newData = data.filter((item) => item.publicKey !== node.publicKey) || [];
    dispatch(actionUpdateTableData({ data: newData, listNode: newListNode }));
};
