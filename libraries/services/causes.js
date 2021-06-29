import api from './api';

export const getCausesBySector = (sector_id) => {
    return new Promise((resolve,reject) => {
        api.get(`/causes?sectorId=${sector_id}`).then((response) => {
            resolve(response);
        })
    })
}