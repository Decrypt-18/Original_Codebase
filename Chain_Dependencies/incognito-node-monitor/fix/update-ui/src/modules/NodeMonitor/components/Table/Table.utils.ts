import { isEmpty } from 'lodash';
import { MESSAGE_CONSTANTS } from 'src/constants/App.constants';
import { INodeName, ITableData } from './Table.interface';
import { EMPTY_CELL } from './Table.constants';

export const getURLPathname = () => {
    if (typeof window === 'undefined') {
        return '';
    }
    return window.location.pathname;
};

export const getURLSearchParams = (search?: string) => {
    if (typeof window === 'undefined') {
        return {};
    }
    return new URLSearchParams(search || window.location.search);
};

export const splitLines = (t: string) => {
    return t.split(/\r\n|\r|\n/);
};

export const getParamsNodesInfo = (nodes: INodeName[], currentPage: number, rowPerPage: number) => {
    const startIndex = currentPage * rowPerPage;
    const endIndex = startIndex + rowPerPage;
    let listNodes = nodes || [];
    const totalRows = listNodes.length;
    listNodes = listNodes.slice(startIndex, endIndex);
    const result = listNodes.reduce(
        (prevValue: any, element: any, index) => {
            let { strKeys, mapper } = prevValue;
            const { name, publicKey } = element;
            strKeys += publicKey + (index === listNodes.length - 1 ? '' : ',');
            mapper = mapper.concat([
                {
                    name,
                    publicKey,
                },
            ]);
            return { strKeys, mapper };
        },
        { strKeys: '', mapper: [] },
    );
    return {
        ...result,
        totalRows,
    };
};

export const getMiningPublicKey = () => {
    let mpk = '';
    try {
        const urlParams: any = getURLSearchParams();
        mpk = urlParams.get('mpk');
    } catch (e) {
        console.debug('Cant get mpk');
    }
    return mpk;
};

export const getVoteStat = (votes: any) => (votes || []).join('\n');

export const getNodeRoleStatus = (node: ITableData) => {
    if (!node) return '';
    if (
        isEmpty(node?.role) ||
        node?.role === EMPTY_CELL ||
        node.role === MESSAGE_CONSTANTS.notStake ||
        node.committeeChain === MESSAGE_CONSTANTS.notStake
    )
        return {
            nodeRole: MESSAGE_CONSTANTS.notStake,
            committee: '',
            unStakeStatus: '',
            isCommittee: false,
        };

    const isBeacon = node.committeeChain === MESSAGE_CONSTANTS.beacon.toLowerCase();
    const nodeRole = node?.role;
    const committee = `${isBeacon ? '' : ` ${MESSAGE_CONSTANTS.shard}`} ${node.committeeChain}`;
    const unStakeStatus = !node?.autoStake ? `${MESSAGE_CONSTANTS.unstaking.toLowerCase()}` : '';
    if (node.committeeChain === EMPTY_CELL)
        return {
            nodeRole,
            committee: '',
            unStakeStatus,
            isCommittee: false,
        };
    const isCommittee = nodeRole?.toLowerCase() === MESSAGE_CONSTANTS.committee.toLowerCase();
    return {
        nodeRole,
        colorRole: isCommittee ? '#34C759' : 'text1',
        isCommittee,
        committee,
        unStakeStatus,
    };
};
