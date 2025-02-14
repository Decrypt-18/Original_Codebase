import http from 'src/services/http';

export const getListNodesInfo = async (publicKeys: string) => {
    return http.post('stat', { mpk: publicKeys });
};

export const getSyncStatInfo = async (publicKey: string) => {
    return http.post('sync', { mpk: publicKey });
};

export const getCommitteeInfo = async (publicKey: string) => {
    return http.post('committee', { mpk: publicKey });
};
