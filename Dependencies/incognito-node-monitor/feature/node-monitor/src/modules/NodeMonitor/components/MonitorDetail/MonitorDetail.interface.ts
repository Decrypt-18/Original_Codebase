import { ITableData } from 'src/modules/NodeMonitor/components/Table/Table.interface';

export interface IMonitorDetailReducer {
    node?: ITableData;
    syncStat?: ISyncStat;
    fetching: boolean;
    committee?: any;
}

export interface IBeacon {
    isSync: boolean;
    lastInsert: Date;
    blockHeight: number;
    blockTime: Date;
    blockHash: string;
    name: string;
    message: string;
}

export interface IShard {
    isSync: boolean;
    lastInsert: Date;
    blockHeight: number;
    blockTime: Date;
    blockHash: string;
    chainId: string;
    name: string;
    message: string;
    color: string;
}

export interface ISyncStat {
    beacon: IBeacon;
    shards: IShard[];
}

export interface ICommittee {
    epoch: string;
    reward: string;
    time: Date;
    totalPropose: string;
    totalVote: string;
    chainId: string;
}
