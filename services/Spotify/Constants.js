export const API_CONFIGS = {
    baseURL: 'https://accounts.spotify.com',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
    },
};

export const AUTH_CONFIG = {
    clientId: '99b6839c21e84f30960cd6dd89c34c11',
    redirectUrl: 'com.musicblue.oauth://callback',
    scopes: ['user-library-read', 'app-remote-control'],
    serviceConfiguration: {
        authorizationEndpoint: 'https://accounts.spotify.com/authorize',
        tokenEndpoint: 'https://accounts.spotify.com/oauth/token',
        revocationEndpoint: 'https://accounts.spotify.com/oauth/revoke',
    },
    skipCodeExchange: true,
};
