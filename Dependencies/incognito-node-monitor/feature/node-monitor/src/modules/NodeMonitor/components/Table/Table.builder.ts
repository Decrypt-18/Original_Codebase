import { isEmpty, isArray, capitalize } from 'lodash';
import moment from 'moment';
import { ellipsisCenter } from 'src/utils/ellipsis';
import { INodeName, ITableData } from './Table.interface';
import { ICommittee, ISyncStat } from '../MonitorDetail/MonitorDetail.interface';
import { getVoteStat } from './Table.utils';
import { EMPTY_CELL } from './Table.constants';

const formatNodeInfo = (node: any) => {
    let role = node?.Role;
    let committeeChain = node?.CommitteeChain;
    if (committeeChain === '-1') {
        committeeChain = 'beacon';
    }
    if (isEmpty(node?.Role)) {
        role = 'Not stake';
        committeeChain = EMPTY_CELL;
    }

    return {
        publicKey: node?.MiningPubkey || EMPTY_CELL,
        status: capitalize(node?.Status) || EMPTY_CELL,
        committeeChain,
        syncState: capitalize(node?.SyncState) || EMPTY_CELL,
        voteStats: getVoteStat(node?.VoteStat) || EMPTY_CELL,
        ellipsisMpk: ellipsisCenter({ str: node?.MiningPubkey || '', limit: 20 }) || EMPTY_CELL,
        role: capitalize(role) || EMPTY_CELL,
        autoStake: node?.AutoStake,
    };
};

export const NodesListBuilder = (data: any, dataMapper: INodeName[]): ITableData[] => {
    if (isEmpty(data)) return [];
    return dataMapper.map((mapper: any) => {
        const { name: nodeName, publicKey } = mapper;
        const node = data.find((element: any) => publicKey === element.MiningPubkey) || {};
        if (isEmpty(node)) {
            return {
                name: nodeName || EMPTY_CELL,
                ...formatNodeInfo({ ...node, MiningPubkey: publicKey }),
            };
        }
        return {
            name: nodeName || EMPTY_CELL,
            ...formatNodeInfo({ ...node }),
        };
    });
};

export const NodesInfoBuilder = (data: any): ITableData | undefined => {
    if (isEmpty(data) || !isArray(data)) return;
    const node = data[0];
    return formatNodeInfo(node);
};

const getStatusMessage = (item: any) => {
    let prefix = '';
    let suffix = item.IsSync ? 'syncing' : 'not syncing';
    let color = item.IsSync ? 'green1' : 'text1';
    if (item?.LastInsert) {
        prefix += `${moment(item?.LastInsert).fromNow()} `;
    }
    if (item.IsSync && (!item?.LastInsert || Date.now() - new Date(item?.LastInsert).getTime() > 60000 * 5)) {
        suffix = 'stalling';
        color = 'red1';
    }
    const message = `${prefix}${prefix ? ' (' : ''}${suffix}${prefix ? ')' : ''}`;
    return { message, color };
};

export const NodesSyncStatBuilder = (data: any): ISyncStat | undefined => {
    if (isEmpty(data)) return undefined;
    const { Shard, Beacon } = data;

    const { message: beaconMessage, color: beaconColor } = getStatusMessage(Beacon);

    let result: any;
    result = {
        beacon: {
            name: 'Beacon',
            isSync: Beacon.IsSync,
            lastInsert: Beacon?.LastInsert,
            blockHeight: Beacon?.BlockHeight,
            blockTime: Beacon?.BlockTime,
            blockHash: Beacon?.BlockHash,
            message: beaconMessage,
            color: beaconColor,
        },
    };
    result = {
        ...result,
        shards: Object.keys(Shard).map((key: string) => {
            const item = Shard[key];
            const { message: shardMessage, color: shardStatusColor } = getStatusMessage(item);
            return {
                name: `Shard ${key}`,
                isSync: item?.IsSync,
                lastInsert: item?.LastInsert,
                blockHeight: item?.BlockHeight,
                blockTime: item?.BlockTime,
                blockHash: item?.BlockHash,
                chainId: item?.ChainId,
                message: shardMessage,
                color: shardStatusColor,
            };
        }),
    };
    return result;
};

export const NodesCommitteeInfoBuilder = (data: any): ICommittee[] | undefined => {
    if (isEmpty(data)) return undefined;
    return data.map((item: any) => {
        let voteCount: any = EMPTY_CELL;
        if (item?.TotalPropose) {
            voteCount = Math.round((item?.TotalVote / item?.TotalPropose) * 100);
        }
        return {
            epoch: item?.Epoch || EMPTY_CELL,
            reward: item?.Reward || EMPTY_CELL,
            time: item?.Time || EMPTY_CELL,
            totalPropose: item?.TotalPropose || EMPTY_CELL,
            totalVote: item?.TotalVote || EMPTY_CELL,
            voteCount,
            chainId: item?.ChainID || EMPTY_CELL,
        };
    });
};
