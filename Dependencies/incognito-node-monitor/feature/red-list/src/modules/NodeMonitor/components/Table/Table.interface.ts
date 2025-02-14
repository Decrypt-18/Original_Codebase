export interface ITableReducer {
    currentPage: number;
    rowsPerPage: number;
    limitPage: number;
    data: ITableData[];
    fetching: boolean;
    isSearching: boolean;
    search: string;
    visibleModal: boolean;
}

export interface ITableData {
    name?: string;
    publicKey: string;
    status: string;
    committeeChain: string;
    syncState: string;
    voteStats: string;
    role: string;
    ellipsisMpk: string;
    autoStake: boolean;
}

export interface INodeName {
    name: string;
    publicKey: string;
}
