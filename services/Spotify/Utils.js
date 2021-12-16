import {AUTH_CONFIG} from './Constants';
import {create} from 'apisauce';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authorize, refreshToken} from './Authentication';

export const webApiInstance = create({
    baseURL: 'https://api.spotify.com',
});

export const getTokenFromStorage = async () => {
    return JSON.parse(await AsyncStorage.getItem('token'));
};

const addAuthHeader = async (requestConfig = {}) => {
    const token = await getTokenFromStorage();
    return {
        ...requestConfig,
        headers: {
            ...requestConfig.headers,
            Authorization: `${token.token_type} ${token.access_token}`,
        },
    };
};

const doAuthorize = () => {
    authorize(AUTH_CONFIG);
};

const doCall = async (requestConfig = {}) =>
    await webApiInstance.any(await addAuthHeader(requestConfig));

const doRefresh = token =>
    refreshToken(token.refresh_token, AUTH_CONFIG.clientId);

const checkAndCall = (resolve, reject, requestConfig) => async response => {
    console.log(requestConfig);
    if (response.ok) {
        resolve(await doCall(requestConfig));
    } else {
        reject(response);
    }
};

export const invokeRequest = (requestConfig = {}) =>
    new Promise(async (resolve, reject) => {
        const token = await getTokenFromStorage();
        console.log(requestConfig);
        if (!token || !token.access_token) {
            doAuthorize().then(checkAndCall(resolve, reject, requestConfig));
        } else {
            doCall(requestConfig).then(response => {
                if (response.status === 401) {
                    doRefresh(token).then(
                        checkAndCall(resolve, reject, requestConfig),
                    );
                } else {
                    resolve(response);
                }
            });
        }
    });
