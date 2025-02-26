const APP_SETTINGS = {
    // 1 year in millisecond
    COOKIES: {
        // 1 year
        CLIENT_COOKIE_MAX_AGE: 365 * 24 * 60 * 60 * 1000,
        ADMIN_COOKIE_MAX_AGE: 365 * 24 * 60 * 60 * 1000
    },
    CACHING: {},
};

const EMAIL_CONFIG = {
    EMAIL_SENDER_ADDRESS: process.env.EMAIL_SENDER_ADDRESS,
    EMAIL_SENDER_NAME: process.env.EMAIL_SENDER_NAME || 'Incognito',
};
const DEFAULT_TIMEZONE = 'Asia/Ho_Chi_Minh';

const GRAFANA_METRICS_DICT = {
    'bfttiming': {
        name: 'bfttiming',
        title: 'BFT Timing All Metrics',
        databaseMappingKey: ''
    },
    'bfttiming_produce': {
        name: 'bfttiming_produce',
        title: 'BFT Timing Produce',
        databaseMappingKey: 'ProduceTime'
    },
    'bfttiming_propose': {
        name: 'bfttiming_propose',
        title: 'BFT Timing Propose',
        databaseMappingKey: 'ReceiveProposeBlockTime'
    },
    'bfttiming_majority': {
        name: 'bfttiming_majority',
        title: 'BFT Timing Majority',
        databaseMappingKey: 'ReceiveMajorityVoteTime'
    },
    'bfttiming_last': {
        name: 'bfttiming_last',
        title: 'BFT Timing Last',
        databaseMappingKey: 'ReceiveLastVoteTime'
    },
    'stat': {
        name: 'Block stat',
        title: 'All Block Stat',
        databaseMappingKey: 'blockstat'
    },
    'block_tx': {
        name: 'numTx',
        title: 'Number of TX',
        databaseMappingKey: 'NumTx',
    },
    'block_cross_tx': {
        name: 'numCrossTx',
        title: 'Number of cross TX',
        databaseMappingKey: 'NumCrossTx',
    },
    'block_inst': {
        name: 'numInst',
        title: 'Number of Instruction',
        databaseMappingKey: 'NumInst',
    },
    'block_shard_state': {
        name: 'numShardState',
        title: 'Number of Shard State',
        databaseMappingKey: 'NumShardState',
    },
};

const GRAFANA_METRICS = [
    GRAFANA_METRICS_DICT.bfttiming,
    GRAFANA_METRICS_DICT.bfttiming_produce,
    GRAFANA_METRICS_DICT.bfttiming_propose,
    GRAFANA_METRICS_DICT.bfttiming_majority,
    GRAFANA_METRICS_DICT.bfttiming_last,
    GRAFANA_METRICS_DICT.block_cross_tx,
    GRAFANA_METRICS_DICT.block_inst,
    GRAFANA_METRICS_DICT.block_shard_state,
    GRAFANA_METRICS_DICT.block_tx,
    GRAFANA_METRICS_DICT.stat,

];

const GRAFANA_CONFIG = {
    GRAFANA_METRICS_DICT: GRAFANA_METRICS_DICT,
    GRAFANA_METRICS: GRAFANA_METRICS
}

module.exports = {
    APP_SETTINGS: APP_SETTINGS,
    DEFAULT_TIMEZONE: DEFAULT_TIMEZONE,
    EMAIL_CONFIG,
    GRAFANA_CONFIG,
};
