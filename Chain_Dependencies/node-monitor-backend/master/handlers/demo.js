exports = module.exports = [
    {
        // synced node with unstake validator key
        Status: "Online",
        Role: "",
        CommitteeChain: 0,
        VoteStat: "100",
        SyncState: "LATEST",
        Description: "Node is online, and not in validator pool. Beacon state is latest. Last epoch vote stat is 100%",
    },
    {
        // synced node with staking validator key
        Status: "Online",
        Role: "WAITING",
        CommitteeChain: 0,
        VoteStat: "100",
        SyncState: "LATEST",
        Description: "Node is online, and in validator pool. Beacon state is latest. Last epoch vote stat is 100%",
    },
    {
        // synced node with staking validator key
        Status: "Online",
        Role: "PENDING",
        CommitteeChain: 2,
        VoteStat: "100",
        SyncState: "LATEST",
        Description: "Node is online, and queuing into shard 2 committee. Beacon state is latest. Last epoch vote stat is 100%",
    },
    {
        // synced node with staking validator key
        Status: "Online",
        Role: "COMMITTEE",
        CommitteeChain: 2,
        VoteStat: "100",
        SyncState: "LATEST",
        Description: "Node is online, and in shard 2 committee. Beacon state is latest. Last epoch vote stat is 100%",
    },
    {
        // unsynced node with validator key
        Status: "Online",
        Role: "",
        CommitteeChain: 0,
        VoteStat: "100",
        SyncState: "SYNCING",
        Description: "Node is online, and  not in validator pool. Beacon state is behind and is syncing. Last epoch vote stat is 100%",
    },
    {
        // unsynced node with validator key
        Status: "Online",
        Role: "",
        CommitteeChain: 0,
        VoteStat: "100",
        SyncState: "STALL",
        Description: "Node is online, and  not in validator pool. Beacon state is behind and is stall. Last epoch vote stat is 100%",
    },
    {
        //offline node
        Status: "Offline",
        Role: "COMMITEE",
        CommitteeChain: 1,
        VoteStat: "100",
        SyncState: "NA",
        Description: "Node is offline, and in committee shard 1. Last epoch vote stat is 0%",
    },
];

// {
//     "sync": {
//       "Beacon": {
//         "IsSync": true,
//         "LastInsert": "2021-03-29T04:59:41+0000",
//         "BlockHeight": 23,
//         "BlockTime": "2021-03-29T04:59:40+0000",
//         "BlockHash": "d9d94ad0636c4815d57450c008b5dda128f78ce436f89792505f1f848e72dc2e"
//       },
//       "Shard": {
//         "0": {
//           "IsSync": false,
//           "LastInsert": "",
//           "BlockHeight": 1,
//           "BlockTime": "2019-11-29T00:00:00+0000",
//           "BlockHash": "97640bbbcb2419bd86e291796ab08995e1bb34a8f71383d1def4c1435dbc7aab"
//         },
//         "1": {
//           "IsSync": false,
//           "LastInsert": "",
//           "BlockHeight": 1,
//           "BlockTime": "2019-11-29T00:00:00+0000",
//           "BlockHash": "31c75f71b2ac0b75eda0031eb341df1d2c5eddf372ad436985bcda38c1b7ed0d"
//         },
//         "2": {
//           "IsSync": false,
//           "LastInsert": "",
//           "BlockHeight": 1,
//           "BlockTime": "2019-11-29T00:00:00+0000",
//           "BlockHash": "53f7b09d9ec7815582c09bba4781299af309cf1c26f71f23748c4bd8fb553a78"
//         },
//         "3": {
//           "IsSync": false,
//           "LastInsert": "",
//           "BlockHeight": 1,
//           "BlockTime": "2019-11-29T00:00:00+0000",
//           "BlockHash": "d30d44cd7814ef1e6db3d8e8c7f3ee75092e456fb24afa787a9f12ab4466cb24"
//         },
//         "4": {
//           "IsSync": false,
//           "LastInsert": "",
//           "BlockHeight": 1,
//           "BlockTime": "2019-11-29T00:00:00+0000",
//           "BlockHash": "e1411da0140e30b512740cceab74188c0d447767ef6c5be64004267f6a31a473"
//         },
//         "5": {
//           "IsSync": false,
//           "LastInsert": "",
//           "BlockHeight": 1,
//           "BlockTime": "2019-11-29T00:00:00+0000",
//           "BlockHash": "c5b7ee3d300e97a986d4e9c1d048042978a6fffdabf52ae7fda3fcfa8b737750"
//         },
//         "6": {
//           "IsSync": false,
//           "LastInsert": "",
//           "BlockHeight": 1,
//           "BlockTime": "2019-11-29T00:00:00+0000",
//           "BlockHash": "c50d1b3ed88a384d5593709960e069829db5ed833dfcde1ff3ee99c7d866bf9c"
//         },
//         "7": {
//           "IsSync": false,
//           "LastInsert": "",
//           "BlockHeight": 1,
//           "BlockTime": "2019-11-29T00:00:00+0000",
//           "BlockHash": "c29142f8fd7e57304c183eb56e6988f5ee4df2fb072ead62a663cd3d02f18bb7"
//         }
//       }
//     },
//     "disk": "93.89",
//     "cpu": "9.83",
//     "ram": 140,
//     "role": "",
//     "chainID": -2,
//     "seen": 1616993987877
//   }
