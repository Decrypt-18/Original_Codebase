export const MockupColumns: any = [
    { accessor: 'name', Header: 'Name' },
    { accessor: 'ellipsisMpk', Header: 'Validator public key' },
    { accessor: 'role', Header: 'Role' },
    { accessor: 'committeeChain', Header: 'Committee shard' },
    { accessor: 'status', Header: 'Status' },
    { accessor: 'syncState', Header: 'Sync State' },
    { accessor: 'voteStats', Header: 'Vote Stats (%)' },
];

export const MockupColumnsCommittee: any = [
    { accessor: 'epoch', Header: 'Epoch' },
    { accessor: 'chainId', Header: 'Chain Id' },
    { accessor: 'reward', Header: 'Reward' },
    { accessor: 'voteCount', Header: 'Vote Count (%)' },
];

export const MockupColumnsBeacon: any = [
    { accessor: 'name', Header: 'Shard' },
    { accessor: 'blockHeight', Header: 'Block Height' },
    { accessor: 'lastInsert', Header: 'Last Insert' },
];
