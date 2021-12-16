import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'apisauce';
import querystring from 'querystring';
import {authorize as authorizeOAuth} from 'react-native-app-auth';
import {API_CONFIGS} from './Constants';

const authInstance = create(API_CONFIGS);

const onFetchToken = response => {
    AsyncStorage.setItem('token', JSON.stringify(response.data));
    return response;
};

export const getToken = (config, authorizationResponse) => {
    return authInstance
        .post(
            '/api/token',
            querystring.stringify({
                client_id: config.clientId,
                grant_type: 'authorization_code',
                code: authorizationResponse.authorizationCode,
                redirect_uri: config.redirectUrl,
                code_verifier: authorizationResponse.codeVerifier,
            }),
        )
        .then(onFetchToken);
};

export const refreshToken = (refresh_token, client_id) => {
    return authInstance
        .post(
            '/api/token',
            querystring.stringify({
                grant_type: 'refresh_token',
                refresh_token,
                client_id,
            }),
        )
        .then(onFetchToken);
};

export const authorize = config => {
    return authorizeOAuth(config).then(authResponse =>
        getToken(config, authResponse),
    );
};
