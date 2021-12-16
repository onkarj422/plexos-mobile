import {invokeRequest} from './Utils';

export const getTracks = () => {
    return invokeRequest({
        method: 'GET',
        url: '/v1/me/tracks',
    });
};
