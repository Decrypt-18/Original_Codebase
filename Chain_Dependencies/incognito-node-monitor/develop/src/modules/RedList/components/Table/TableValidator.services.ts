import httpValidator from 'src/services/httpValidator';

export const getRedList = async (page: number) => {
    return httpValidator.get(`redlist?page=${page}`);
};
