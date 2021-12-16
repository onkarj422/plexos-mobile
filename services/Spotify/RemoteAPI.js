import {remote} from 'react-native-spotify-remote';
import {AUTH_CONFIG} from './Constants';
import {getTokenFromStorage} from './Utils';

export const connect = async () => {
    const token = await getTokenFromStorage();
    return await remote.connectWithoutAuth(
        token.access_token,
        AUTH_CONFIG.clientId,
        AUTH_CONFIG.redirectUrl,
    );
};

export const disconnect = () => {
    return remote.disconnect();
};

export const isConnectedAsync = () => {
    return remote.isConnectedAsync();
};

export const playUri = uri => {
    return remote.playUri(uri);
};
